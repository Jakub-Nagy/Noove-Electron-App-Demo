export const lowerOrUpper = new RegExp("(?=.*?[a-z])(?=.*?[A-Z])");
export const containsNumber = new RegExp("(?=.*?[0-9])");
export const containsSymbol = new RegExp("(?=.*?[#?!@$%^&*-])");
export const minChars = new RegExp(".{8,}");

export const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);