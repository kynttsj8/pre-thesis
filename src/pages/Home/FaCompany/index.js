import React from 'react'
import classNames from 'classnames/bind';
import styles from './FaCompany.module.scss'
import SliderBar from './SlidersBar';

const cx = classNames.bind(styles);

function FaCompany(){


  return(
    <div>
      <div className={cx('popular-companies-container')}>
        <div className={cx('title')}>
            <h1> ☀️ Popular
              <span className={cx('co-title')}> Opportunites</span>
            </h1>
          </div>
      </div>
      
      <SliderBar/>
    </div>
    
    
  );
}

export default FaCompany;