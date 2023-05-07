import { useCurrencyAmount } from "../../hooks/useCurrencyAmount";
import { Instrument } from "../../Enums";
import styles from "./Instrument.module.css";
import { getInstrumentName } from "../../helpers/getInstrumentName";
import { getEnumNumericValues } from "../../helpers/getEnumNumericValues";

const InstrumentSelect = () => {
  const currencyAmount = useCurrencyAmount();

  return(
    <div className={styles.instrument}>
      <select className={styles.instrument_select}>
        {getEnumNumericValues(Instrument).map((numericValue) => {
          return <option>{getInstrumentName(numericValue)}</option>
        })}
      </select>
      <input className={styles.amount} type="text" value={currencyAmount.value} onChange={currencyAmount.processAmountChange}/>
    </div>
  )
}

export default InstrumentSelect;