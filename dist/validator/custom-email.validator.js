"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEmailValidator = void 0;
const class_validator_1 = require("class-validator");
let CustomEmailValidator = class CustomEmailValidator {
    validate(email, args) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]/;
        return emailRegex.test(email);
    }
    defaultMessage(args) {
        return 'Invalid email format (e.g., test12@gmail.com)';
    }
};
exports.CustomEmailValidator = CustomEmailValidator;
exports.CustomEmailValidator = CustomEmailValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'customEmail', async: false })
], CustomEmailValidator);
//# sourceMappingURL=custom-email.validator.js.map