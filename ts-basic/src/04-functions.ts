// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Teacher = {
  name?: string;
  active: boolean;
  classes: stringOrNumberArray;
};

type UserId = string | number;
