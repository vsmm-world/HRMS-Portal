import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class CustomZipcodeValidator implements ValidatorConstraintInterface {
    validate(zipcode: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
