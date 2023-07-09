import Slider from "react-slick"
import { Banner } from "../../shared";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export const SliderComponent = () => {
const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    autoplay:true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    adaptiveWeight: true,
    slidesToScroll: 1,
    fade: true
};
  return (
    <>
    <Slider {...settings}>
    <Banner 
    title="Residential Commercial & Strata Cleaning"
    subtitle="Contact Us Now"
    btnTitle="Residential" 
    imgUrl={"src/assets/banner.jpg"}/>
    <Banner 
    title="Invierte en los mejores de la zona"
    subtitle="Contact Us Now"
    btnTitle="Contactanos" 
    imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9Q5pyLHaSt1_Sg58kjwsu4MYvJXiUqQAy_gntMVHi5lhWr_wZGfFcGY-2NUC9uW47_g&usqp=CAU"}/>
    <Banner 
    title="Reserva desde la comodidad de tu casa"
    subtitle="Contact Us Now"
    btnTitle="Reserva ahora" 
    imgUrl={"https://www.adecco.com.pe/wp-content/uploads/2021/02/servicio-limpieza-oficinas.jpg"}/>


   </Slider>
    </> 
  )
}