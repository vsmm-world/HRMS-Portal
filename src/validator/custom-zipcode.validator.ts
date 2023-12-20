import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customZipcodeFormat', async: false })
export class CustomZipcodeValidator implements ValidatorConstraintInterface {
  validate(zipcode: string, args: ValidationArguments) {
    const zipcodeRegex = /^\d{6}$/;
    return zipcodeRegex.test(zipcode);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid ZIP code format (6 digits required)';
  }
}
