/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(8);
const users_module_1 = __webpack_require__(21);
const orders_module_1 = __webpack_require__(24);
const order_status_module_1 = __webpack_require__(27);
const webhook_log_module_1 = __webpack_require__(30);
const payments_module_1 = __webpack_require__(34);
const transactions_module_1 = __webpack_require__(42);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (cfg) => ({
                    uri: cfg.get('MONGODB_URI'),
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            order_status_module_1.OrderStatusModule,
            webhook_log_module_1.WebhookLogModule,
            payments_module_1.PaymentsModule,
            transactions_module_1.TransactionsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(7);
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(9);
const passport_1 = __webpack_require__(10);
const config_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(11);
const auth_controller_1 = __webpack_require__(16);
const users_module_1 = __webpack_require__(21);
const jwt_strategy_1 = __webpack_require__(22);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (cfg) => ({
                    secret: cfg.get('JWT_SECRET'),
                    signOptions: { expiresIn: cfg.get('JWT_EXPIRY') },
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [passport_1.PassportModule, jwt_1.JwtModule],
    })
], AuthModule);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(9);
const users_service_1 = __webpack_require__(12);
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(dto) {
        return this.usersService.createUser(dto);
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        const valid = await user.comparePassword(password);
        if (!valid)
            return null;
        const { password: _, ...safeUser } = user.toObject();
        return safeUser;
    }
    async login(dto) {
        const user = await this.validateUser(dto.email, dto.password);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const payload = { sub: user._id, email: user.email };
        return { access_token: this.jwtService.sign(payload) };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
const users_schema_1 = __webpack_require__(14);
let UsersService = class UsersService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(dto) {
        const exists = await this.userModel.findOne({ email: dto.email }).exec();
        if (exists)
            throw new common_1.ConflictException('Email already in use');
        const user = new this.userModel(dto);
        const saved = await user.save();
        const { password, ...rest } = saved.toObject();
        return rest;
    }
    async findByEmail(email) {
        const user = await this.userModel
            .findOne({ email })
            .select('+password')
            .exec();
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async findById(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const { password, ...rest } = user.toObject();
        return rest;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(5);
const bcrypt = __webpack_require__(15);
let User = class User {
    email;
    password;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ type: String, unique: true, required: true, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
exports.UserSchema.methods.comparePassword = async function (candidate) {
    return bcrypt.compare(candidate, this.password);
};


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(11);
const create_user_dto_1 = __webpack_require__(17);
const login_dto_1 = __webpack_require__(19);
const jwt_auth_guard_1 = __webpack_require__(20);
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(dto) {
        return this.authService.register(dto);
    }
    async login(dto) {
        return this.authService.login(dto);
    }
    profile(req) {
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "profile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(18);
class CreateUserDto {
    email;
    password;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be at least 6 characters long' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(18);
class LoginDto {
    email;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(10);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const users_schema_1 = __webpack_require__(14);
const users_service_1 = __webpack_require__(12);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.User.name, schema: users_schema_1.UserSchema }]),
        ],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(3);
const passport_1 = __webpack_require__(10);
const passport_jwt_1 = __webpack_require__(23);
const config_1 = __webpack_require__(4);
const users_service_1 = __webpack_require__(12);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    cfg;
    users;
    constructor(cfg, users) {
        const secret = cfg.get('JWT_SECRET');
        if (!secret) {
            throw new Error('Missing JWT_SECRET in config');
        }
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret,
            ignoreExpiration: false,
        });
        this.cfg = cfg;
        this.users = users;
    }
    async validate(payload) {
        await this.users.findById(payload.sub);
        return { userId: payload.sub, email: payload.email };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const orders_schema_1 = __webpack_require__(25);
const orders_service_1 = __webpack_require__(26);
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: orders_schema_1.Order.name, schema: orders_schema_1.OrderSchema },
            ]),
        ],
        providers: [
            orders_service_1.OrdersService,
        ],
        exports: [
            orders_service_1.OrdersService,
        ],
    })
], OrdersModule);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
let StudentInfo = class StudentInfo {
    name;
    id;
    email;
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StudentInfo.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StudentInfo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StudentInfo.prototype, "email", void 0);
StudentInfo = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], StudentInfo);
const StudentInfoSchema = mongoose_1.SchemaFactory.createForClass(StudentInfo);
let Order = class Order {
    school_id;
    trustee_id;
    student_info;
    gateway_name;
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    }),
    __metadata("design:type", Object)
], Order.prototype, "school_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Trustee',
        required: true
    }),
    __metadata("design:type", Object)
], Order.prototype, "trustee_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: StudentInfoSchema,
        required: true
    }),
    __metadata("design:type", StudentInfo)
], Order.prototype, "student_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "gateway_name", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
const orders_schema_1 = __webpack_require__(25);
let OrdersService = class OrdersService {
    orderModel;
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(dto) {
        const created = new this.orderModel(dto);
        return created.save();
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(orders_schema_1.Order.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], OrdersService);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatusModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const order_status_schema_1 = __webpack_require__(28);
const order_status_service_1 = __webpack_require__(29);
let OrderStatusModule = class OrderStatusModule {
};
exports.OrderStatusModule = OrderStatusModule;
exports.OrderStatusModule = OrderStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: order_status_schema_1.OrderStatus.name, schema: order_status_schema_1.OrderStatusSchema },
            ]),
        ],
        providers: [order_status_service_1.OrderStatusService],
        exports: [order_status_service_1.OrderStatusService],
    })
], OrderStatusModule);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatusSchema = exports.OrderStatus = void 0;
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
let OrderStatus = class OrderStatus {
    collect_id;
    order_amount;
    transaction_amount;
    payment_mode;
    payment_details;
    bank_reference;
    payment_message;
    status;
    error_message;
    payment_time;
};
exports.OrderStatus = OrderStatus;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Order', required: true }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], OrderStatus.prototype, "collect_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], OrderStatus.prototype, "order_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], OrderStatus.prototype, "transaction_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], OrderStatus.prototype, "payment_mode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], OrderStatus.prototype, "payment_details", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], OrderStatus.prototype, "bank_reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], OrderStatus.prototype, "payment_message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], OrderStatus.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], OrderStatus.prototype, "error_message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], OrderStatus.prototype, "payment_time", void 0);
exports.OrderStatus = OrderStatus = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OrderStatus);
exports.OrderStatusSchema = mongoose_1.SchemaFactory.createForClass(OrderStatus);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatusService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
const order_status_schema_1 = __webpack_require__(28);
let OrderStatusService = class OrderStatusService {
    statusModel;
    constructor(statusModel) {
        this.statusModel = statusModel;
    }
    async upsertStatus(info) {
        return this.statusModel
            .findOneAndUpdate({ collect_id: info.order_id }, {
            collect_id: info.order_id,
            order_amount: info.order_amount,
            transaction_amount: info.transaction_amount,
            payment_mode: info.payment_mode,
            payment_details: info.payment_details,
            bank_reference: info.bank_reference,
            payment_message: info.payment_message,
            status: info.status,
            payment_time: info.payment_time,
            error_message: info.error_message,
        }, { upsert: true, new: true })
            .exec();
    }
    async getAllTransactions() {
        return this.statusModel.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: 'collect_id',
                    foreignField: '_id',
                    as: 'order'
                }
            },
            { $unwind: '$order' },
            {
                $project: {
                    _id: 0,
                    collect_id: '$collect_id',
                    school_id: '$order.school_id',
                    gateway: '$order.gateway_name',
                    order_amount: '$order_amount',
                    transaction_amount: '$transaction_amount',
                    status: '$status',
                    custom_order_id: { $toString: '$order._id' }
                }
            }
        ]).exec();
    }
};
exports.OrderStatusService = OrderStatusService;
exports.OrderStatusService = OrderStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], OrderStatusService);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookLogModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const webhook_log_controller_1 = __webpack_require__(31);
const webhook_log_service_1 = __webpack_require__(32);
const webhook_log_schema_1 = __webpack_require__(33);
const order_status_schema_1 = __webpack_require__(28);
let WebhookLogModule = class WebhookLogModule {
};
exports.WebhookLogModule = WebhookLogModule;
exports.WebhookLogModule = WebhookLogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: webhook_log_schema_1.WebhookLog.name, schema: webhook_log_schema_1.WebhookLogSchema },
                { name: order_status_schema_1.OrderStatus.name, schema: order_status_schema_1.OrderStatusSchema },
            ]),
        ],
        controllers: [webhook_log_controller_1.WebhookLogController],
        providers: [webhook_log_service_1.WebhookLogService],
        exports: [webhook_log_service_1.WebhookLogService],
    })
], WebhookLogModule);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WebhookLogController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookLogController = void 0;
const common_1 = __webpack_require__(3);
const webhook_log_service_1 = __webpack_require__(32);
let WebhookLogController = WebhookLogController_1 = class WebhookLogController {
    webhookLogService;
    logger = new common_1.Logger(WebhookLogController_1.name);
    constructor(webhookLogService) {
        this.webhookLogService = webhookLogService;
    }
    async handleWebhook(payload) {
        this.logger.log('Received webhook payload:', payload);
        try {
            const result = await this.webhookLogService.processWebhook(payload);
            return { success: true, data: result };
        }
        catch (error) {
            this.logger.error('Error processing webhook:', error);
            throw error;
        }
    }
    async getWebhookLogs() {
        return this.webhookLogService.getWebhookLogs();
    }
    async getWebhookLog(id) {
        return this.webhookLogService.getWebhookLogById(id);
    }
};
exports.WebhookLogController = WebhookLogController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "handleWebhook", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "getWebhookLogs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "getWebhookLog", null);
exports.WebhookLogController = WebhookLogController = WebhookLogController_1 = __decorate([
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [typeof (_a = typeof webhook_log_service_1.WebhookLogService !== "undefined" && webhook_log_service_1.WebhookLogService) === "function" ? _a : Object])
], WebhookLogController);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WebhookLogService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookLogService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
const webhook_log_schema_1 = __webpack_require__(33);
const order_status_schema_1 = __webpack_require__(28);
let WebhookLogService = WebhookLogService_1 = class WebhookLogService {
    webhookLogModel;
    orderStatusModel;
    logger = new common_1.Logger(WebhookLogService_1.name);
    constructor(webhookLogModel, orderStatusModel) {
        this.webhookLogModel = webhookLogModel;
        this.orderStatusModel = orderStatusModel;
    }
    async processWebhook(payload) {
        this.logger.log('Processing webhook payload:', payload);
        if (!payload.order_info) {
            throw new common_1.HttpException('Invalid webhook payload', common_1.HttpStatus.BAD_REQUEST);
        }
        const orderInfo = payload.order_info;
        const webhookLog = new this.webhookLogModel({
            collect_request_id: orderInfo.order_id,
            status: orderInfo.status,
            payment_mode: orderInfo.payment_mode,
            payment_details: orderInfo.payemnt_details,
            payment_message: orderInfo.Payment_message,
            payment_time: new Date(orderInfo.payment_time),
            error_message: orderInfo.error_message,
            gateway: orderInfo.gateway,
            bank_reference: orderInfo.bank_reference,
            order_amount: orderInfo.order_amount,
            transaction_amount: orderInfo.transaction_amount,
        });
        const savedLog = await webhookLog.save();
        this.logger.log('Saved webhook log:', savedLog);
        const updatedOrderStatus = await this.orderStatusModel.findOneAndUpdate({ collect_id: orderInfo.order_id }, {
            $set: {
                collect_id: orderInfo.order_id,
                status: orderInfo.status,
                payment_mode: orderInfo.payment_mode,
                payment_details: orderInfo.payemnt_details,
                payment_message: orderInfo.Payment_message,
                payment_time: new Date(orderInfo.payment_time),
                error_message: orderInfo.error_message,
                bank_reference: orderInfo.bank_reference,
                order_amount: orderInfo.order_amount,
                transaction_amount: orderInfo.transaction_amount,
            },
        }, { new: true, upsert: true });
        this.logger.log('Updated order status:', updatedOrderStatus);
        return { webhookLog: savedLog, orderStatus: updatedOrderStatus };
    }
    async getWebhookLogs() {
        return this.webhookLogModel.find().sort({ created_at: -1 });
    }
    async getWebhookLogById(id) {
        return this.webhookLogModel.findById(id);
    }
};
exports.WebhookLogService = WebhookLogService;
exports.WebhookLogService = WebhookLogService = WebhookLogService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(webhook_log_schema_1.WebhookLog.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], WebhookLogService);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebhookLogSchema = exports.WebhookLog = void 0;
const mongoose_1 = __webpack_require__(5);
let WebhookLog = class WebhookLog {
    collect_request_id;
    status;
    payment_mode;
    payment_details;
    payment_message;
    payment_time;
    error_message;
    gateway;
    bank_reference;
    order_amount;
    transaction_amount;
    created_at;
    updated_at;
};
exports.WebhookLog = WebhookLog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WebhookLog.prototype, "collect_request_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WebhookLog.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_mode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_details", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], WebhookLog.prototype, "payment_time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "error_message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "gateway", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "bank_reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WebhookLog.prototype, "order_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WebhookLog.prototype, "transaction_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], WebhookLog.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], WebhookLog.prototype, "updated_at", void 0);
exports.WebhookLog = WebhookLog = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WebhookLog);
exports.WebhookLogSchema = mongoose_1.SchemaFactory.createForClass(WebhookLog);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const axios_1 = __webpack_require__(35);
const mongoose_1 = __webpack_require__(5);
const payments_controller_1 = __webpack_require__(36);
const payments_service_1 = __webpack_require__(37);
const order_status_schema_1 = __webpack_require__(28);
let PaymentsModule = class PaymentsModule {
};
exports.PaymentsModule = PaymentsModule;
exports.PaymentsModule = PaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([
                { name: order_status_schema_1.OrderStatus.name, schema: order_status_schema_1.OrderStatusSchema },
            ]),
        ],
        controllers: [payments_controller_1.PaymentsController],
        providers: [payments_service_1.PaymentsService],
        exports: [payments_service_1.PaymentsService],
    })
], PaymentsModule);


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsController = void 0;
const common_1 = __webpack_require__(3);
const payments_service_1 = __webpack_require__(37);
const create_collect_dto_1 = __webpack_require__(40);
const jwt_auth_guard_1 = __webpack_require__(20);
const express_1 = __webpack_require__(41);
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    async createPayment(createDto, res) {
        try {
            const result = await this.paymentsService.createCollectRequest(createDto);
            return res.redirect(result.Collect_request_url);
        }
        catch (error) {
            console.error('Error in createPayment controller:', error.message);
            throw new common_1.HttpException(error.response?.data?.message ||
                error.message ||
                'Failed to create payment request', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
    async checkStatus(collectRequestId) {
        try {
            return await this.paymentsService.checkPaymentStatus(collectRequestId);
        }
        catch (error) {
            console.error('Error in checkStatus controller:', error.message);
            throw new common_1.HttpException(error.response?.data?.message ||
                error.message ||
                'Failed to check payment status', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('create-payment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_collect_dto_1.CreateCollectDto !== "undefined" && create_collect_dto_1.CreateCollectDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createPayment", null);
__decorate([
    (0, common_1.Get)('collect-request/:collect_request_id'),
    __param(0, (0, common_1.Param)('collect_request_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "checkStatus", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof payments_service_1.PaymentsService !== "undefined" && payments_service_1.PaymentsService) === "function" ? _a : Object])
], PaymentsController);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsService = void 0;
const common_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(35);
const config_1 = __webpack_require__(4);
const jwt = __webpack_require__(38);
const rxjs_1 = __webpack_require__(39);
let PaymentsService = class PaymentsService {
    httpService;
    config;
    apiUrl;
    apiKey;
    schoolId;
    pgKey;
    constructor(httpService, config) {
        this.httpService = httpService;
        this.config = config;
        const apiUrl = this.config.get('PG_API_URL');
        const apiKey = this.config.get('PAYMENT_API_KEY');
        const schoolId = this.config.get('SCHOOL_ID');
        const pgKey = this.config.get('PG_KEY');
        if (!apiUrl || !apiKey || !schoolId || !pgKey) {
            throw new common_1.InternalServerErrorException('Missing required payment gateway configuration in .env');
        }
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.schoolId = schoolId;
        this.pgKey = pgKey;
    }
    async createCollectRequest(dto) {
        try {
            const signPayload = {
                school_id: dto.school_id,
                amount: dto.amount,
                callback_url: dto.callback_url,
            };
            const sign = jwt.sign(signPayload, this.pgKey);
            const body = {
                school_id: dto.school_id,
                amount: dto.amount,
                callback_url: dto.callback_url,
                sign,
            };
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            };
            console.log('Making request to payment gateway with:', {
                url: `${this.apiUrl}/create-collect-request`,
                body,
                headers: { ...headers, Authorization: 'Bearer [REDACTED]' },
            });
            const response$ = this.httpService.post(`${this.apiUrl}/create-collect-request`, body, { headers });
            const { data } = await (0, rxjs_1.lastValueFrom)(response$);
            console.log('Payment gateway response:', data);
            const paymentUrl = data.Collect_request_url || data.collect_request_url;
            if (!paymentUrl) {
                throw new common_1.HttpException('Invalid response from payment gateway: missing payment URL', common_1.HttpStatus.BAD_GATEWAY);
            }
            return {
                collect_request_id: data.collect_request_id,
                Collect_request_url: paymentUrl,
                sign: data.sign,
            };
        }
        catch (error) {
            console.error('Error creating payment request:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.message || 'Failed to create payment request', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
    async checkPaymentStatus(collectRequestId) {
        try {
            const signPayload = {
                school_id: this.schoolId,
                collect_request_id: collectRequestId,
            };
            const sign = jwt.sign(signPayload, this.pgKey);
            const url = `${this.apiUrl}/collect-request/${collectRequestId}`;
            const fullUrl = `${url}?school_id=${this.schoolId}&sign=${encodeURIComponent(sign)}`;
            const headers = {
                Authorization: `Bearer ${this.apiKey}`,
            };
            const response$ = this.httpService.get(fullUrl, { headers });
            const { data } = await (0, rxjs_1.lastValueFrom)(response$);
            return data;
        }
        catch (error) {
            console.error('Error checking payment status:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.message || 'Failed to check payment status', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], PaymentsService);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCollectDto = void 0;
const class_validator_1 = __webpack_require__(18);
class CreateCollectDto {
    school_id;
    amount;
    callback_url;
}
exports.CreateCollectDto = CreateCollectDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCollectDto.prototype, "school_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCollectDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateCollectDto.prototype, "callback_url", void 0);


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const transactions_controller_1 = __webpack_require__(43);
const transactions_service_1 = __webpack_require__(44);
const orders_schema_1 = __webpack_require__(25);
const order_status_schema_1 = __webpack_require__(28);
let TransactionsModule = class TransactionsModule {
};
exports.TransactionsModule = TransactionsModule;
exports.TransactionsModule = TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: orders_schema_1.Order.name, schema: orders_schema_1.OrderSchema },
                { name: order_status_schema_1.OrderStatus.name, schema: order_status_schema_1.OrderStatusSchema },
            ]),
        ],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService],
    })
], TransactionsModule);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsController = void 0;
const common_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(20);
const transactions_service_1 = __webpack_require__(44);
const transaction_filter_dto_1 = __webpack_require__(48);
let TransactionsController = class TransactionsController {
    txService;
    constructor(txService) {
        this.txService = txService;
    }
    async findAll(filters) {
        return this.txService.getAllTransactions(filters);
    }
    async findBySchool(schoolId, filters) {
        return this.txService.getTransactionsBySchool(schoolId, filters);
    }
    async findStatus(id) {
        return this.txService.getTransactionStatus(id);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Get)('transactions'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof transaction_filter_dto_1.TransactionFilterDto !== "undefined" && transaction_filter_dto_1.TransactionFilterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('transactions/school/:schoolId'),
    __param(0, (0, common_1.Param)('schoolId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof transaction_filter_dto_1.TransactionFilterDto !== "undefined" && transaction_filter_dto_1.TransactionFilterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findBySchool", null);
__decorate([
    (0, common_1.Get)('transaction-status/:custom_order_id'),
    __param(0, (0, common_1.Param)('custom_order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findStatus", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof transactions_service_1.TransactionsService !== "undefined" && transactions_service_1.TransactionsService) === "function" ? _a : Object])
], TransactionsController);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(13);
const base_service_1 = __webpack_require__(45);
const orders_schema_1 = __webpack_require__(25);
const order_status_schema_1 = __webpack_require__(28);
let TransactionsService = class TransactionsService extends base_service_1.BaseService {
    orderModel;
    statusModel;
    constructor(orderModel, statusModel) {
        super(orderModel);
        this.orderModel = orderModel;
        this.statusModel = statusModel;
    }
    async getAllTransactions(filters) {
        const { page = 1, limit = 10, sort, order = 'desc', status } = filters;
        const pipeline = [
            {
                $lookup: {
                    from: 'orderstatuses',
                    localField: '_id',
                    foreignField: 'collect_id',
                    as: 'status',
                },
            },
            { $unwind: '$status' },
            {
                $project: {
                    _id: 0,
                    collect_id: '$_id',
                    school_id: 1,
                    gateway: '$gateway_name',
                    order_amount: '$status.order_amount',
                    transaction_amount: '$status.transaction_amount',
                    status: '$status.status',
                    custom_order_id: { $toString: '$_id' },
                },
            },
        ];
        if (status?.length) {
            pipeline.splice(2, 0, {
                $match: { 'status.status': { $in: status } },
            });
        }
        if (sort) {
            const sortField = sort === 'payment_time' ? 'createdAt' : sort;
            pipeline.push({
                $sort: { [sortField]: order === 'asc' ? 1 : -1 },
            });
        }
        const [items, total] = await Promise.all([
            this.orderModel
                .aggregate(pipeline)
                .skip((page - 1) * limit)
                .limit(limit)
                .exec(),
            this.orderModel.aggregate([...pipeline, { $count: 'total' }]).exec(),
        ]);
        return {
            items,
            meta: {
                total: total[0]?.total || 0,
                page,
                limit,
                totalPages: Math.ceil((total[0]?.total || 0) / limit),
            },
        };
    }
    async getTransactionsBySchool(schoolId, filters) {
        const { page = 1, limit = 10, sort = 'payment_time', order = 'desc', status, dateFrom, dateTo, } = filters;
        const matchConditions = [];
        if (mongoose_2.Types.ObjectId.isValid(schoolId)) {
            matchConditions.push({
                $or: [
                    { school_id: new mongoose_2.Types.ObjectId(schoolId) },
                    { school_id: schoolId },
                ],
            });
        }
        else {
            matchConditions.push({ school_id: schoolId });
        }
        if (dateFrom || dateTo) {
            const dateMatch = { createdAt: {} };
            if (dateFrom)
                dateMatch.createdAt.$gte = new Date(dateFrom);
            if (dateTo)
                dateMatch.createdAt.$lte = new Date(dateTo);
            matchConditions.push(dateMatch);
        }
        const pipeline = [];
        if (matchConditions.length > 0) {
            pipeline.push({ $match: { $and: matchConditions } });
        }
        pipeline.push({
            $lookup: {
                from: 'orderstatuses',
                localField: '_id',
                foreignField: 'collect_id',
                as: 'status',
            },
        }, { $unwind: { path: '$status', preserveNullAndEmptyArrays: true } });
        if (status?.length) {
            pipeline.push({ $match: { 'status.status': { $in: status } } });
        }
        pipeline.push({
            $project: {
                _id: 0,
                collect_id: '$_id',
                school_id: 1,
                gateway: '$gateway_name',
                order_amount: { $ifNull: ['$status.order_amount', 0] },
                transaction_amount: { $ifNull: ['$status.transaction_amount', 0] },
                status: { $ifNull: ['$status.status', 'unknown'] },
                custom_order_id: { $toString: '$_id' },
                createdAt: 1,
            },
        });
        pipeline.push({
            $sort: {
                [sort === 'payment_time' ? 'createdAt' : sort]: order === 'asc' ? 1 : -1,
            },
        });
        const countRes = await this.orderModel
            .aggregate([...pipeline, { $count: 'total' }])
            .exec();
        const total = countRes[0]?.total || 0;
        const items = await this.orderModel
            .aggregate([
            ...pipeline,
            { $skip: (page - 1) * limit },
            { $limit: limit },
        ])
            .exec();
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
    async getTransactionStatus(customOrderId) {
        if (!mongoose_2.Types.ObjectId.isValid(customOrderId)) {
            throw new common_1.NotFoundException(`Invalid order ID ${customOrderId}`);
        }
        const oid = new mongoose_2.Types.ObjectId(customOrderId);
        const statusDoc = await this.statusModel
            .findOne({ collect_id: oid })
            .select('status transaction_amount order_amount collect_id')
            .lean()
            .exec();
        if (!statusDoc) {
            throw new common_1.NotFoundException(`Transaction ${customOrderId} not found`);
        }
        return {
            collect_id: statusDoc.collect_id.toString(),
            status: statusDoc.status,
            transaction_amount: statusDoc.transaction_amount,
            order_amount: statusDoc.order_amount,
        };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(orders_schema_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], TransactionsService);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseService = void 0;
const pagination_dto_1 = __webpack_require__(46);
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


/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = exports.SortOrder = void 0;
const class_validator_1 = __webpack_require__(18);
const class_transformer_1 = __webpack_require__(47);
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
class PaginationDto {
    page = 1;
    limit = 10;
    sort;
    order = SortOrder.DESC;
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SortOrder),
    __metadata("design:type", String)
], PaginationDto.prototype, "order", void 0);


/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionFilterDto = exports.TransactionStatus = void 0;
const class_transformer_1 = __webpack_require__(47);
const class_validator_1 = __webpack_require__(18);
const pagination_dto_1 = __webpack_require__(46);
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["SUCCESS"] = "success";
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["FAILED"] = "failed";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
class TransactionFilterDto extends pagination_dto_1.PaginationDto {
    status;
    school;
    dateFrom;
    dateTo;
}
exports.TransactionFilterDto = TransactionFilterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return [];
        if (Array.isArray(value))
            return value;
        if (typeof value === 'string')
            return [value];
        return [];
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(TransactionStatus, { each: true }),
    __metadata("design:type", Array)
], TransactionFilterDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value)
            return [];
        if (Array.isArray(value))
            return value;
        if (typeof value === 'string')
            return [value];
        return [];
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], TransactionFilterDto.prototype, "school", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TransactionFilterDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TransactionFilterDto.prototype, "dateTo", void 0);


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(3);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errors = null;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            message =
                typeof exceptionResponse === 'string'
                    ? exceptionResponse
                    : exceptionResponse['message'] || message;
            errors =
                typeof exceptionResponse === 'object'
                    ? exceptionResponse['errors']
                    : null;
        }
        response.status(status).json({
            statusCode: status,
            message,
            errors,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const http_exception_filter_1 = __webpack_require__(49);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: configService.get('CORS_ORIGIN'),
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix('api');
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Application is running on port ${port}`);
}
bootstrap();

})();

/******/ })()
;