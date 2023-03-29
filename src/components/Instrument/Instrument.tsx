import { useCurrencyAmount } from "../../hooks/useCurrencyAmount";
import styles from "./Instrument.module.css";

const Instrument = () => {
  const currencyAmount = useCurrencyAmount();

  return(
    <div className={styles.instrument}>
      <select className={styles.instrument_select}>
        <option>{'EUR/USD'}</option>
        <option>{'EUR/RUB'}</option>
        <option>{'USD/RUB'}</option>
      </select>
      <input className={styles.amount} type="text" value={currencyAmount.value} onChange={currencyAmount.processAmountChange}/>
    </div>
  )
}

export default Instrument;