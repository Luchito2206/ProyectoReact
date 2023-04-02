// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

// import imgLogo from "../../assets/images/imagesZapa.jpg";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/diwpmquqv/image/upload/v1680453663/samples/ecommerce/shoes.png"
        alt="Este es el logo de la empresa"
        style={{height:"100%"}}
      />
      <ul className={styles.containerNavbarUL}>
        <li className={styles.containerNavbarLI}>Todas</li>
        <li className={styles.containerNavbarLI}>Urbanas</li>
        <li className={styles.containerNavbarLI}>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
