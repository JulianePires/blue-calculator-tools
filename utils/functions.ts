import { initials, labels, temperatureUnity } from "../constants/types";

const setDecimalPlaces = (value: number, decimalPlaces: number) => {
  var numberObject = Number(value);
  return numberObject.toFixed(decimalPlaces);
};

/* IMC CALCULATOR */

export function handleChangeIMCClassification(imcValue: number) {
  if (imcValue < 18.5) {
    return labels.underweight;
  } else if (imcValue < 24.9) {
    return labels.normal;
  } else if (imcValue < 29.9) {
    return labels.overweight;
  } else if (imcValue < 34.9) {
    return labels.obesityone;
  } else if (imcValue < 39.9) {
    return labels.obesitytwo;
  } else {
    return labels.morbidobesity;
  }
}

export function handleCalculateIMC(weight: number, height: number) {
  return setDecimalPlaces(weight / Math.pow(height, 2), 2);
}

/* TERM CONVERSOR */

export const fromCelcius = (
  celciusTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "kelvin":
      return setDecimalPlaces(celciusTemperature + 273.15, decimalPlaces);
    case "fahrenheit":
      return setDecimalPlaces(celciusTemperature * 1.8 + 32, decimalPlaces);
    default:
      return setDecimalPlaces(celciusTemperature, decimalPlaces);
  }
};

export const fromFahrenheit = (
  fahrenheitTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "celcius":
      return setDecimalPlaces(
        (fahrenheitTemperature - 32) / 1.8,
        decimalPlaces
      );
    case "kelvin":
      return setDecimalPlaces(
        (fahrenheitTemperature - 32) / 1.8 + 273.15,
        decimalPlaces
      );
    default:
      return setDecimalPlaces(fahrenheitTemperature, decimalPlaces);
  }
};

export const fromKelvin = (
  kelvinTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "celcius":
      return setDecimalPlaces(
        (kelvinTemperature - 273.15) * 1.8 + 32,
        decimalPlaces
      );
    case "fahrenheit":
      return setDecimalPlaces(kelvinTemperature - 273.15, decimalPlaces);
    default:
      return setDecimalPlaces(kelvinTemperature, decimalPlaces);
  }
};

export const changeInitials = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return initials.celcius;
    case "fahrenheit":
      return initials.fahrenheit;
    case "kelvin":
      return initials.kelvin;
  }
};

export const zeroTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return 0;
    case "fahrenheit":
      return 32;
    case "kelvin":
      return 273.15;
  }
};

export const minimalTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return -273.15;
    case "fahrenheit":
      return -459;
    case "kelvin":
      return 0;
  }
};

export const maximalTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return 100;
    case "fahrenheit":
      return 212;
    case "kelvin":
      return 373.15;
  }
};

/* CALCULATOR */

export const sqrt = (value: number) => {
  return Math.sqrt(value);
};

export const pow = (value: number, exponencial: number = 2) => {
  return Math.pow(value, exponencial);
};

export const sum = (valueOne: number, valueTwo: number) => {
  return valueOne + valueTwo;
};

export const sub = (valueOne: number, valueTwo: number) => {
  return valueOne - valueTwo;
};

export const mult = (valueOne: number, valueTwo: number) => {
  return valueOne * valueTwo;
};

export const div = (valueOne: number, valueTwo: number) => {
  return valueOne / valueTwo;
};

export const percent = (value: number) => {
  return value / 100;
};

export const factorial = (value: number) => {
  var result = 1;
  for (var i = 1; i <= value; i++) result *= i;

  return result;
};

export const log = (value: number) => {
  return Math.log(value);
};

export const ln = (value: number) => {
  return Math.log10(value) / Math.LN10;
};

export const sin = (value: number) => {
  return Math.sin(value);
};

export const cos = (value: number) => {
  return Math.cos(value);
};

export const tan = (value: number) => {
  return Math.tan(value);
};

export const floor = (value: number) => {
  return Math.floor(value);
};

export const constants = {
  pi: Math.PI,
  exp: Math.E,
};
