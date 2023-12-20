import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class CustomEmailValidator implements ValidatorConstraintInterface {
    validate(email: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
