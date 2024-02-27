import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div>
        <p>CATEGORIES</p>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div>
        <p>CONTACT</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div>
        <select className={styles.selectCountry} name="" id="">
          <option value="United State">United State</option>
        </select>
      </div>
    </footer>
  )
}

export default Footer
