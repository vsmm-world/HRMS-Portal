import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customWebsiteFormat', async: false })
export class CustomWebsiteFormatValidator
  implements ValidatorConstraintInterface {
  validate(website: string, args: ValidationArguments) {
    const websiteRegex =
      /^(http:\/\/|https:\/\/|www\.|ftp:\/\/)[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(\/\S*)?$/;
    return websiteRegex.test(website);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid website format (e.g., www.test.in)';
  }
}
