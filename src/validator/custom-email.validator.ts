import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customEmail', async: false })
export class CustomEmailValidator implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]/;
    return emailRegex.test(email);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid email format (e.g., test12@gmail.com)';
  }
}
