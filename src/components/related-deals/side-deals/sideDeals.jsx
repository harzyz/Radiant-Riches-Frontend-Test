import styles from "./sideDeals.module.scss";
import desktop from "../../../assets/images/download 1.png";
import Modal from "../../modal/modal";
import ViewButton from "../../view-button/viewButton";
import { useState } from "react";

const SideDeals = ({
  discount,
  product,
  desc,
  priceNew,
  priceOld,
  priceOff,
}) => {
  const [view, setView] = useState(false);

  const onClose = () => {
    setView(false);
  };
  return (
    <div className={styles.dealsItem}>
      <div>
        <img src={desktop} alt="" />
      </div>
      <div className={styles.discount}>
        <span>{discount}</span>
        <span>Limited time</span>
      </div>
      <h5>{product}</h5>
      <p>{desc}</p>
      <div className={styles.prices}>
        <p>{priceNew}</p>
        <p>{priceOld}</p>
        <p>{priceOff}</p>
      </div>
      <ViewButton onTap={() => setView(true)} label={"View Deal"} />

      <Modal isOpen={view} onClose={onClose}>
        <div className={styles.dealsItem}>
          <div>
            <img src={desktop} alt="" />
          </div>
          <div className={styles.discount}>
            <span>{discount}</span>
            <span>Limited time</span>
          </div>
          <h5>{product}</h5>
          <p>{desc}</p>
          <div className={styles.prices}>
            <p>{priceNew}</p>
            <p>{priceOld}</p>
            <p>{priceOff}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideDeals;
