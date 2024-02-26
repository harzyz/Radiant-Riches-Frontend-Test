import styles from "./listItem.module.css";
import { IoStar } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import desktop from "../../assets/images/download 1.png";
import { useState } from "react";
import Modal from "../modal/modal";
import ViewButton from "../view-button/viewButton";
import { IoDiamondOutline } from "react-icons/io5";

const ListItem = ({
  ratings,
  comment,
  productName,
  tag,
  title,
  content1,
  content2,
  best,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [view, setView] = useState(false);

  const onTouch = () => {
    setView(true);
  };

  const onClose = () => {
    setView(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>{tag}</div>
      {best && (
        <div className={styles.indicator}>
          <IoDiamondOutline />
          {best}
        </div>
      )}
      <div className={styles.itemImage}>
        <div>
          <img src={desktop} alt="" />
        </div>
        <p>{productName}</p>
      </div>
      <div className={styles.itemContent}>
        <p>
          <b>{title}</b>- {content1}
        </p>
        <b>Main highlights</b>
        {showMore ? "" : <p className={styles.second}>{content2}</p>}
        {showMore && (
          <div>
            <div className={styles.moreContent}>
              <div>
                <span>9.9</span>
                <p>Building responsive</p>
              </div>
              <div>
                <span>8.9</span>
                <p>Cool</p>
              </div>
              <div>
                <span>8.9</span>
                <p>Docs</p>
              </div>
            </div>
            <p>Why we love it</p>
            <ul>
              <li>Documentation</li>
              <li>Easy Use</li>
              <li>Out of box</li>
            </ul>
          </div>
        )}
        <p className={styles.showMore} onClick={() => setShowMore(!showMore)}>
          Show {showMore ? "less" : "more"}{" "}
          <RiArrowDropDownLine className={styles.showMoreIcon} />
        </p>
      </div>
      <div className={styles.itemRatings}>
        <div className={styles.ratingBadge}>
          <h1>{ratings}</h1>
          <p>{comment}</p>
          <div className={styles.starRatings}>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
        {/* <button onClick={()=> setView(true)} className={styles.viewBtn}>View</button> */}
        <ViewButton label={"View"} onTap={onTouch} />
      </div>

      <Modal isOpen={view} onClose={onClose}>
        <div className={styles.modalWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.circle}>{tag}</div>
            {best && (
              <div className={styles.indicator}>
                <IoDiamondOutline />
                {best}
              </div>
            )}
            <div className={styles.itemImage}>
              <div>
                <img src={desktop} alt="" />
              </div>
            </div>
            <div className={styles.itemContent}>
              <p>
                <b>{title}</b>- {content1}
              </p>
              <b>Main highlights</b>
              {showMore ? "" : <p className={styles.second}>{content2}</p>}
              {showMore && (
                <div>
                  <div className={styles.moreContent}>
                    <div>
                      <span>9.9</span>
                      <p>Building responsive</p>
                    </div>
                    <div>
                      <span>8.9</span>
                      <p>Cool</p>
                    </div>
                    <div>
                      <span>8.9</span>
                      <p>Docs</p>
                    </div>
                  </div>
                  <p>Why we love it</p>
                  <ul>
                    <li>Documentation</li>
                    <li>Easy Use</li>
                    <li>Out of box</li>
                  </ul>
                </div>
              )}
              <p onClick={() => setShowMore(!showMore)}>
                Show {showMore ? "less" : "more"} <RiArrowDropDownLine />
              </p>
            </div>
            <div className={styles.itemRatings}>
              <div className={styles.ratingBadge}>
                <h1>9.8</h1>
                <p>Exceptional</p>
                <div className={styles.starRatings}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListItem;
