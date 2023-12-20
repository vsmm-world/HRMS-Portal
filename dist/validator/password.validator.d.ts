import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class PasswordValidator implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
