type Enumeration = {[key: string]: string | number};

export function getEnumNumericValues (enumeration: Enumeration): number[] {
  const enumValues = Object.values(enumeration);
  const numericValues = enumValues.filter(key => typeof key === 'number').map((key) => Number(key));

  return numericValues;
}