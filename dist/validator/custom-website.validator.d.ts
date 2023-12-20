import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class CustomWebsiteFormatValidator implements ValidatorConstraintInterface {
    validate(website: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
