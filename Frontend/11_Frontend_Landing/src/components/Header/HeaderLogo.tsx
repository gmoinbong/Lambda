import logo from '/assets/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const HeaderLogo = () => (
    <Link to="/">
        <img src={logo} alt="logo" className={styles.headerLogo} />
    </Link>
);

export default HeaderLogo;
