import styles from "./Seller.module.css";

const Seller = () => {
  return(
    <div className={styles.seller}>
      <input className={styles.seller_cost} type="number" required/>
      <button className={styles.seller_button}>sell</button>
    </div>
  )
}

export default Seller;