
// import validator from 'validator';
var validator = require("validator");

import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);
import DOMPurify from "dompurify";

export function sanitizeTextInput(value: string): string {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
}

export function isValidText(value: string, min = 2, max = 100): boolean {
  const clean = sanitizeTextInput(value);
  return clean === value && clean.length >= min && clean.length <= max;
}

function nameToIsoCode(name: string): CountryCode | undefined {
  const iso = countries.getAlpha2Code(name, "en");
  return iso?.toUpperCase() as CountryCode | undefined;
}

export function validateInput(
  key: string,
  value: string,
  showPopup: (msg: string) => void,
  errorMessage?: string,
  ignorePassword?: boolean,
  countryName?: string
): boolean {
  const trimmed = value.trim();

  if (!trimmed) {
    showPopup(errorMessage ?? `Enter your ${key.toLowerCase()}`);
    return false;
  }

  if (key === "Username" && trimmed.length < 3) {
    showPopup("Username too short");
    return false;
  }

  if (key === "Email" && !validator.isEmail(trimmed)) {
    showPopup("Please enter a valid email address");
    return false;
  }

  if (key.toLowerCase().includes("phone")) {
    if (!countryName) {
      showPopup("Please select a country for phone number validation");
      return false;
    }

    const isoCode = nameToIsoCode(countryName);
    if (!isoCode) {
      showPopup("Unsupported country name");
      return false;
    }

    const phone = trimmed.startsWith("+") ? trimmed : `+${trimmed}`;
    const phoneNumber = parsePhoneNumberFromString(phone, isoCode);

    if (!phoneNumber || !phoneNumber.isValid()) {
      showPopup("Please enter a valid phone number");
      return false;
    }

    const length = phoneNumber.nationalNumber.length;
    if (length < 7 || length > 15) {
      showPopup("Phone number length is invalid");
      return false;
    }
  }

  if (key.includes("Password") && !ignorePassword) {
    if (trimmed.length < 6) {
      showPopup("Password too short");
      return false;
    }

    if (!/\d/.test(trimmed)) {
      showPopup("Password should contain a number");
      return false;
    }
  }

  return true;
}
export function validateInputLength(
  key: string,
  minLength: number,
  showPopup: Function,
  errorMessage?: string
): boolean {
  let box = document.getElementById(key) as HTMLInputElement;
  let value = box.value.trim();
  box.blur();
  if (value.length < minLength) {
    showPopup(errorMessage ?? `${key} is too short`);
    box.focus();
    return false;
  }
  return true;
}

export function getInputValue(key: string): string {
  let box = document.getElementById(key) as HTMLInputElement;
  let value = box.value.trim();
  return value;
}

export function getInputLength(key: string): number {
  let box = document.getElementById(key) as HTMLInputElement;
  let value = box.value.trim();
  return value.length;
}

export function getInput(key: string): any {
  let box = document.getElementById(key) as HTMLInputElement;
  return box;
}
