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
      />
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
