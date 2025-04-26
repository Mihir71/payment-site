"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const pagination_dto_1 = require("../dto/pagination.dto");
class BaseService {
    model;
    constructor(model) {
        this.model = model;
    }
    async findAll(paginationDto) {
        const { page = 1, limit = 10, sort, order = pagination_dto_1.SortOrder.DESC, } = paginationDto;
        const skip = (page - 1) * limit;
        const query = this.model.find();
        if (sort) {
            const sortOptions = {};
            sortOptions[sort] = order === pagination_dto_1.SortOrder.ASC ? 1 : -1;
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
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map