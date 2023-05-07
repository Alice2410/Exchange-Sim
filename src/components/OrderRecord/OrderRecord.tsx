import { OrderSide, OrderStatus } from "../../Enums";
import { getInstrumentName } from "../../helpers/getInstrumentName";
import { Offer } from "../../Models/ServerMessages";
import styles from "./OrderRecord.module.css";

interface OrderRecordProps {
  index: number;
  offer: Offer;
}


const OrderRecord = (props: OrderRecordProps) => {
  let {index, offer} = props;

  return(
    <tr className={styles.table_row} key={index}>
      <td className={styles.table_cell}>{++index}</td>
      <td className={styles.table_cell}>{offer.lastUpdate}</td>
      <td className={styles.table_cell}>{offer.lastUpdate}</td>
      <td className={styles.table_cell}>{OrderStatus[offer.status]}</td>
      <td className={styles.table_cell}>{OrderSide[offer.side]}</td>
      <td className={styles.table_cell}>{offer.price}</td>
      <td className={styles.table_cell}>{offer.amount}</td>
      <td className={styles.table_cell}>{getInstrumentName(offer.instrument)}</td>
    </tr>
  )
}

export default OrderRecord;