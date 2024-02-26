import { useState } from "react";
import styles from "./navbar.module.css"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu , setMenu] = useState(false)

  const toggleOpen = () => {
    setMenu(true)
  }

  const toggleClose = () => {
    setMenu(false)
  }

  return (
    <nav className={styles.navbar}>
      <GiHamburgerMenu onClick={toggleOpen} className={styles.hamburger} />
      <div className={styles.search}>
        <CiSearch className={styles.searchIcon} />
        <input type="text" />
      </div>

      <div onClick={toggleClose} className={menu ? styles.navListWrapper : styles.closeListWrapper}><IoCloseSharp onClick={toggleClose} className={styles.closeIcon} /></div>

      <ul className={menu ? styles.navList : styles.closeList}>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's deals</li>
      </ul>

    </nav>
  )
}

export default Navbar
