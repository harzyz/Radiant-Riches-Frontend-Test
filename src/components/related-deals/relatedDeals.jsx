import styles from './relatedDeals.module.scss'
import { RelatedDealsData } from './relatedDealsData'
import SideDeals from './side-deals/sideDeals'

const RelatedDeals = () => {
  

  return (
    <div className={styles.wrapper}>
      <h1>Related deals you might like for</h1>
      <div className={styles.deals}>
        {RelatedDealsData.map((item) => (
          <div  key={item.id}>
            <SideDeals discount={item.discount} desc={item.desc} priceNew={item.priceNew} priceOld={item.priceOld} priceOff={item.priceOff} />
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
