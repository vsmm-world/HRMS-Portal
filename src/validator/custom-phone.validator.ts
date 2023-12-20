import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customPhone', async: false })
export class CustomPhoneValidator implements ValidatorConstraintInterface {
  validate(phone: string, args: ValidationArguments) {
    const phoneRegex = /^\d{3}\d{3}\d{4}$/;
    return phoneRegex.test(phone);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid phone number format (e.g., 1234567890)';
  }
}
