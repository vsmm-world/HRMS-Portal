"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPhoneValidator = void 0;
const class_validator_1 = require("class-validator");
let CustomPhoneValidator = class CustomPhoneValidator {
    validate(phone, args) {
        const phoneRegex = /^\d{3}\d{3}\d{4}$/;
        return phoneRegex.test(phone);
    }
    defaultMessage(args) {
        return 'Invalid phone number format (e.g., 1234567890)';
    }
};
exports.CustomPhoneValidator = CustomPhoneValidator;
exports.CustomPhoneValidator = CustomPhoneValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'customPhone', async: false })
], CustomPhoneValidator);
//# sourceMappingURL=custom-phone.validator.js.map