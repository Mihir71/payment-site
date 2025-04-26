import { Model } from 'mongoose';
import { PaginationDto, SortOrder } from '../dto/pagination.dto';

export class BaseService<T> {
  constructor(private readonly model: Model<T>) {}

  async findAll(paginationDto: PaginationDto) {
    const {
      page = 1,
      limit = 10,
      sort,
      order = SortOrder.DESC,
    } = paginationDto;
    const skip = (page - 1) * limit;

    const query = this.model.find();

    if (sort) {
      const sortOptions: Record<string, 1 | -1> = {};
      sortOptions[sort] = order === SortOrder.ASC ? 1 : -1;
      query.sort(sortOptions);
    }

    const [items, total] = await Promise.all([
      query.skip(skip).limit(limit).exec(),
      this.model.countDocuments().exec(),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
