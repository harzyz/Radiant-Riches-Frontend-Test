import styles from "./viewButton.module.scss";

const ViewButton = ({ label, onTap }) => {
  return (
    <button onClick={onTap} className={styles.viewBtn}>
      {label}
    </button>
  );
};

export default ViewButton;
