import logo from '/assets/logo.png'
import styles from './Header.module.css'

const HeaderLogo = () => (
    <img src={logo} alt="logo" className={styles.headerLogo} />
);

export default HeaderLogo;
