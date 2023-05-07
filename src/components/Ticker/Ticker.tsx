import { useTicker } from "../../hooks/useTicker";
import styles from "./Ticker.module.css"
import Buyer from "../Buyer/Buyer";
import InstrumentSelect from "../Instrument/InstrumentSelect";
import Seller from "../Seller/Seller";

const Ticker = () => {
  const {isTickerOpened} = useTicker();
  
  return(
    <div className={styles.ticker} hidden={!isTickerOpened}>
      <form action="">
        <InstrumentSelect></InstrumentSelect>
        <div className={styles.trader_container}>
          <Seller></Seller>
          <Buyer></Buyer>
        </div>
        
      </form>
    </div>
  )
};

export default Ticker;