import React from 'react'
import classNames from 'classnames/bind';
import styles from './Sliders.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
                  {data.map((d, index) => (
                      <div key={index} className={cx('cartBox')}>
                          <div key={index} className={cx('card')}>
                              <div className={cx('image-holder')}>
                                  <img src={d.img} alt="" className={cx('image')} />
                              </div>
                              <div className={cx('info')}>
                                  <p className={cx('name')}>{d.name}</p>
                                  <p>{d.review}</p>
                                  <a href={d.addr_link}><button className={cx('read-btn')}>Read more</button></a>
                              </div>
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
    img: "https://hcmiu.edu.vn/wp-content/uploads/2017/08/logo-vector-IU-01.png",
    review: "Ho Chi Minh City International University, or VNU-HCM International University, "+
              "is the first and the only public research university in Vietnam that offers programs taught entirely in English.",
    link_addr: "https://hcmiu.edu.vn"
  },
  {
    name: "RMIT University",
    img: "/images/logo_units/logo-rmit.png",
    review: "The Royal Melbourne Institute of Technology Vietnam is the Vietnamese branch of the Australian university Royal Melbourne Institute of Technology.",
    link_addr: "www.rmit.edu.vn/vi/sem/ug/buoc-ra-the-gioi-tu-vietnam-voi-tam-bang-cu-nhan-quoc-te-rmit"
  },
  {
    name: "University of Economy Law",
    img: "/images/logo_units/logo-uel.jpg",
    review: "The University of Economics and Law, or VNU-HCM University of Economics and Law," + 
              "It is a member institution of university of Vietnam National University, Ho Chi Minh City.",
    link_addr: "https://uel.edu.vn"
  },
  {
    name: "University of Science",
    img: "/images/logo_units/logo-us.jpg",
    review: "University of Sciences), or VNU-HCM University of Science, has offered various scientific degrees" + 
              " across Southern Vietnam since its establishment as the Indochina College of Science in 1941.",
    link_addr: "https://hcmus.edu.vn"
  },
  {
    name: "University of Information Technology",
    img: "/images/logo_units/logo-uit.jfif",
    review: "The University of Information Technology, or VNU-HCM University of Information Technology, "+
              "is a public university located in Ho Chi Minh City, Vietnam, " +
              "a member of Vietnam National University, Ho Chi Minh City. ",
    link_addr: "https://tuyensinh.uit.edu.vn/tuyen-sinh-uit"
  },
  {
    name: "Foreign Trade University",
    img: "/images/logo_units/logo-ftu.jpg",
    review: "Foreign Trade University is a public university established in 1960, located in Hanoi, Vietnam, "+
      "with satellite campuses in Ho Chi Minh City and Quảng Ninh.",
    link_addr: "https://www.ftu.edu.vn/tuyensinh/sau-đại-học"
  }
]