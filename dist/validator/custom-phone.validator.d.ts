import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class CustomPhoneValidator implements ValidatorConstraintInterface {
    validate(phone: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
