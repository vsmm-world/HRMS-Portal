// src/common/validators/date-format.validator.ts
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsDateFormatConstraint implements ValidatorConstraintInterface {
  validate(value: string, _args: ValidationArguments) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(value);
  }
}

export function IsDateFormat(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateFormatConstraint,
    });
  };
}
