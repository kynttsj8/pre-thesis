import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <h3>Postgraduate Opportunities</h3>
            <p>Email: ITITIU20240@hcmiu.edu.vn</p>
            <p>Address: International University, VNU HCM
                City,<br />VietNam</p>
            <p>Tel: 090 9718665</p>
          </div>

          <div className={styles.column}>
            <ul className={styles.list}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/contact" >About Us</Link></li>
                <li><Link to="/account" >Portfolio</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/product" >Programs</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.socialIcons}>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
            </ul>
          </div>
          
          
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Kyros. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;