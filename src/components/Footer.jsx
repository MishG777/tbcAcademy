import styles from "../styles/Footer.module.css";
import footerLogoTbc from "../assets/footerLogo.webp";

const FB =
  "https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce6ec7c11b174c0581e20f42bb865ce3.png";

const YTB =
  "https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/71ac09a5a92848cc943bf2ca2a09a6d0.png";

const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.innerFooter}>
        <div className={styles.tbc}>
          <img src={footerLogoTbc} alt="footer tbc logo" />
          <span>
            <a href="https://fsymbols.com/copyright/" target="_blank">
              © 2023&nbsp;
            </a>
            ყველა უფლება დაცულია
          </span>

          <span>წესები და პირობები</span>
        </div>
        <div className={styles.contacts}>
          <div>
            <img alt="Facebook" fetchpriority="high" src={FB} />
            <img alt="YouTube" fetchpriority="high" src={YTB} />
          </div>
          <div>
            <button>მოგვწერეთ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
