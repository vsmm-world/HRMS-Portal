import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    // Implement your password validation logic here
    // For example, you can check for minimum length, uppercase, lowercase, and special characters
    const isValid =
      text.length >= 8 &&
      /[a-z]/.test(text) &&
      /[A-Z]/.test(text) &&
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(text);

    return isValid;
  }

  defaultMessage(args: ValidationArguments) {
    return `Password is not strong enough`;
  }
}
