"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWebsiteFormatValidator = void 0;
const class_validator_1 = require("class-validator");
let CustomWebsiteFormatValidator = class CustomWebsiteFormatValidator {
    validate(website, args) {
        const websiteRegex = /^(http:\/\/|https:\/\/|www\.|ftp:\/\/)[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(\/\S*)?$/;
        return websiteRegex.test(website);
    }
    defaultMessage(args) {
        return 'Invalid website format (e.g., www.test.in)';
    }
};
exports.CustomWebsiteFormatValidator = CustomWebsiteFormatValidator;
exports.CustomWebsiteFormatValidator = CustomWebsiteFormatValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'customWebsiteFormat', async: false })
], CustomWebsiteFormatValidator);
//# sourceMappingURL=custom-website.validator.js.map