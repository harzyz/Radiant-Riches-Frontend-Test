import styles from "./mainsection.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import ListItem from "../list-item/listItem";
import RelatedDeals from "../related-deals/relatedDeals";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import SearchContext from "../../context/searchContext";

const Mainsection = () => {
  const { filteredItems, noItemsFound } = useContext(SearchContext)

  return (
    <section className={styles.wrapper}>
      <h1>Best Website builders in the US</h1>
      <div className={styles.bar}>
        <div className={styles.latest}>
          <CiCircleCheck />
          <p>Last Updated - February 22, 2020</p>
          <CiCircleInfo />
          <p>Advertising Disclosure</p>
        </div>

        <div className={styles.customSelect}>
          <p>Top Relevant</p>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className={styles.group}>
        <div>Tools</div>
        <div>AWS Builder</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>BlueHosting</div>
      </div>

      <div className={styles.breadcrumbs}>
        Home
        <MdKeyboardArrowRight />
        Hosting for all
        <MdKeyboardArrowRight />
        Hosting
        <MdKeyboardArrowRight />
        Hosting6
        <MdKeyboardArrowRight />
        Hosting5
        <MdKeyboardArrowRight />
      </div>

      {noItemsFound ? <h1 style={{color: '#000456'}}>No Items Found</h1> : 
        <div className={styles.listGroup}>
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              productName={item.productName}
              best={item.best}
              tag={item.id}
              title={item.title1}
              content1={item.content1}
              content2={item.content2}
              comment={item.comment}
              ratings={item.rating}
            />
          ))}
        </div>
      }
      <RelatedDeals />
    </section>
  );
};

export default Mainsection;
