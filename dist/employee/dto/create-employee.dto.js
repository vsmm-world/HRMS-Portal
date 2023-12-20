"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const custom_email_validator_1 = require("../../validator/custom-email.validator");
const custom_phone_validator_1 = require("../../validator/custom-phone.validator");
const date_format_validator_1 = require("../../validator/date-format.validator");
class CreateEmployeeDto {
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(custom_email_validator_1.CustomEmailValidator, {
        message: 'Email format is not valid (e.g., test@gmail.com)',
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, date_format_validator_1.IsDateFormat)({
        message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
    }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(custom_phone_validator_1.CustomPhoneValidator, {
        message: 'Phone number format is not valid (e.g., 1234567890)',
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "phone_nmber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, date_format_validator_1.IsDateFormat)({
        message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
    }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "hire_date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "job_title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "salary", void 0);
//# sourceMappingURL=create-employee.dto.js.map