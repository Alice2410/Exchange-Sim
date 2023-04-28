import { useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket"
import OrderRecord from "../OrderRecord/OrderRecord";
import styles from "./Table.module.css"


const Table = () => {
  const tableHeaders = ['Id', 'Creation time', 'Change time', 'Status', 'Side', 'Price', 'Amount', 'Instrument']
  const {tableData} = useWebSocket();
  useEffect(() => {
    console.log('table data', tableData);
    
  }, [tableData])
  return(
    <div>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            {tableHeaders.map((header, index) => {
              return(
                <td key={index} className={styles.table_cell}>{header}</td>
              )
            })}
          </tr>
        </thead>
        <tbody>
        {tableData.map((item, index) => {
          return(
            <OrderRecord index={index} item={item}></OrderRecord>
          )
        })}
        </tbody>
        
      </table>
    </div>
  ) 
}

export default Table;