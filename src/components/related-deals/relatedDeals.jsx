import styles from './relatedDeals.module.css'
import desktop from '../../assets/images/download 1.png'
import ViewButton from '../view-button/viewButton'
import { RelatedDealsData } from './relatedDealsData'

const RelatedDeals = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Related deals you might like for</h1>
      <div className={styles.deals}>
        {RelatedDealsData.map((item) => (
          <div key={item.id} className={styles.dealsItem}>
            <div>
              <img src={desktop} alt="" />
            </div>
            <div className={styles.discount}>
              <span>{item.discount}</span>
              <span>Limited time</span>
            </div>
            <h5>{item.product}</h5>
            <p>{item.desc}</p>
            <div className={styles.prices}>
              <p>{item.priceNew}</p>
              <p>{item.priceOld}</p>
              <p>{item.priceOff}</p>
            </div>
            <ViewButton label={'View Deal'} />
          </div>
        ))}
      </div>

      <div className={styles.signUpContainer}>
        <h2>Sign up and get exclusive special deals</h2>

        <div>
          <input type="text" />
          <button className={styles.signUpBtn}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default RelatedDeals
