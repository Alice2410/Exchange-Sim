import { Instrument, OrderSide, OrderStatus } from "../../Enums";
import { Offer } from "../../Models/ServerMessages";
import styles from "./OrderRecord.module.css";

interface OrderRecordProps {
  index: number;
  item: Offer;
}


const OrderRecord = (props: OrderRecordProps) => {
  let {index, item} = props;
  return(
    <tr className={styles.table_row} key={index}>
      <td className={styles.table_cell}>{++index}</td>
      <td className={styles.table_cell}>{item.lastUpdate}</td>
      <td className={styles.table_cell}>{item.lastUpdate}</td>
      <td className={styles.table_cell}>{OrderStatus[item.status]}</td>
      <td className={styles.table_cell}>{OrderSide[item.side]}</td>
      <td className={styles.table_cell}>{item.price}</td>
      <td className={styles.table_cell}>{item.amount}</td>
      <td className={styles.table_cell}>{Instrument[item.instrument]}</td>
    </tr>
  )
}

export default OrderRecord;