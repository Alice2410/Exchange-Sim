import { useTicker } from "../../hooks/useTicker";
import styles from "./Ticker.module.css"
import Buyer from "../Buyer/Buyer";
import Instrument from "../Instrument/Instrument";
import Seller from "../Seller/Seller";

const Ticker = () => {
  const {isTickerOpened} = useTicker();
  
  return(
    <div className={styles.ticker} hidden={!isTickerOpened}>
      <form action="">
        <Instrument></Instrument>
        <div className={styles.trader_container}>
          <Seller></Seller>
          <Buyer></Buyer>
        </div>
        
      </form>
    </div>
  )
};

export default Ticker;