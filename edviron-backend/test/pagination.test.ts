import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../src/common/services/base.service';
import { PaginationDto, SortOrder } from '../src/common/dto/pagination.dto';

class TestModel {
  name: string;
  value: number;
}

describe('Pagination and Sorting', () => {
  let baseService: BaseService<TestModel>;
  let model: Model<TestModel>;

  const mockModel = {
    find: jest.fn().mockReturnThis(),
    sort: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    exec: jest.fn(),
    countDocuments: jest.fn().mockResolvedValue(100),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BaseService,
        {
          provide: getModelToken('TestModel'),
          useValue: mockModel,
        },
      ],
    }).compile();

    baseService = module.get<BaseService<TestModel>>(BaseService);
    model = module.get<Model<TestModel>>(getModelToken('TestModel'));
  });

  it('should apply pagination correctly', async () => {
    const paginationDto: PaginationDto = {
      page: 2,
      limit: 10,
    };

    mockModel.exec.mockResolvedValueOnce([{ name: 'test', value: 1 }]);

    await baseService.findAll(paginationDto);

    expect(mockModel.skip).toHaveBeenCalledWith(10);
    expect(mockModel.limit).toHaveBeenCalledWith(10);
  });

  it('should apply sorting correctly', async () => {
    const paginationDto: PaginationDto = {
      sort: 'name',
      order: SortOrder.ASC,
    };

    mockModel.exec.mockResolvedValueOnce([{ name: 'test', value: 1 }]);

    await baseService.findAll(paginationDto);

    expect(mockModel.sort).toHaveBeenCalledWith({ name: 1 });
  });

  it('should return correct metadata', async () => {
    const paginationDto: PaginationDto = {
      page: 1,
      limit: 10,
    };

    mockModel.exec.mockResolvedValueOnce([{ name: 'test', value: 1 }]);

    const result = await baseService.findAll(paginationDto);

    expect(result.meta).toEqual({
      total: 100,
      page: 1,
      limit: 10,
      totalPages: 10,
    });
  });
});
