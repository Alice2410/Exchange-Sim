import styles from "./Buyer.module.css";

const Buyer = () => {
  return(
    <div className={styles.buyer}>
      <input className={styles.buyer_cost} type="number" required/>
      <button className={styles.buyer_button}>buy</button>
    </div>
  )
}

export default Buyer;