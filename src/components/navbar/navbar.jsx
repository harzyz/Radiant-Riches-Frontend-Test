import { useContext, useState } from "react";
import styles from "./navbar.module.scss"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5"; 
import SearchContext from "../../context/searchContext";

const Navbar = () => {
  const [menu , setMenu] = useState(false)
  const { item, handlesearch } = useContext(SearchContext)

  const toggleOpen = () => {
    setMenu(true)
  }

  const toggleClose = () => {
    setMenu(false)
  }

  return (
    <nav>
      <div className={styles.navbar}>
        <GiHamburgerMenu onClick={toggleOpen} className={styles.hamburger} />
        <div className={styles.search}>
          <CiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." value={item} onChange={handlesearch} />
        </div>

        <div onClick={toggleClose} className={menu ? styles.navListWrapper : styles.closeListWrapper}><IoCloseSharp onClick={toggleClose} className={styles.closeIcon} /></div>

        <ul className={menu ? styles.navList : styles.closeList}>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
