import { Instrument } from "../Enums";

export function getInstrumentName(instrumentIndex: number): string {
  const getInstrumentName = Instrument[instrumentIndex];
  const currencies = getInstrumentName.split('_').map((currency) => currency.toUpperCase());

  return currencies.join('/');
}

