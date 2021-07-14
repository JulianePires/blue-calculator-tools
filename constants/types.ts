export type activePaths = "Calculator" | "IMC" | "TermConversor" | "About";

/* IMC CALCULATOR */

export type weightCategories =
  | "underweight"
  | "normal"
  | "overwieght"
  | "obesityone"
  | "obesitytwo"
  | "morbidobesity";

export const labels = {
  underweight: "Underweight",
  normal: "Normal Weight",
  overweight: "Overweight",
  obesityone: "Obesity I",
  obesitytwo: "Obesity II",
  morbidobesity: "Morbid Obesity",
};

/* TERM CONVERSOR */

export type temperatureUnity = "celcius" | "kelvin" | "fahrenheit";

export const initials = {
  celcius: "C",
  kelvin: "K",
  fahrenheit: "F",
};
