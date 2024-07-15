import React from 'react'
import classNames from 'classnames/bind';
import styles from './Sliders.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './index.css'
const cx = classNames.bind(styles);

function SliderBar(){

    const settings = {
        dots: true,
        Infinity: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className={cx('swiper-container')}>
            <div className={cx('card-holder')}>
                <Slider {...settings}>
                    {data.map((d) =>(
                    <div className={cx('card')}>
                        <div className={cx('image')}>
                        <img src={d.img} alt=""/>
                        </div>

                        <div className={cx('info')}>
                        <p className={cx('name')}>{d.name}</p>
                        <p>{d.review}</p>
                        <button className={cx('read-btn')}>Read more</button>
                        </div>

                        <div>
                        
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;


const data = [
  {
    name: "International University - VNU",
    img: "/images/logo_units/logo-iu.png",
    review: "abc abc abc"
  },
  {
    name: "RMIT University",
    img: "/images/logo_units/logo-rmit.png",
    review: "abc abc abc"
  },
  // {
  //   name: "University of Economy Law",
  //   img: "/images/logo_units/logo-uel.jpg",
  //   review: "abc xzc xcz"
  // },
  {
    name: "University of Science",
    img: "/images/logo_units/logo-rmit.png",
    review: "abc abc abc"
  },
  {
    name: "University of Information Technology",
    img: "/images/logo_units/logo-uit.jfif",
    review: "The University of Information Technology, or VNU-HCM University of Information Technology, "+
      "is a public university located in Ho Chi Minh City, Vietnam, " +
      "a member of Vietnam National University, Ho Chi Minh City. "
  },
  {
    name: "Foreign Trade University",
    img: "/images/logo_units/logo-ftu.jpg",
    review: "Foreign Trade University is a public university established in 1960, located in Hanoi, Vietnam, "+
      "with satellite campuses in Ho Chi Minh City and Quảng Ninh."
  }
]