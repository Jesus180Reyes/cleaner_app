import Slider from "react-slick"
import { Banner } from "../../shared";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const SliderComponent = () => {
const settings = {
    // dots: true,
    infinite: true,
    speed: 5000,
    autoplay:true,
    slidesToShow: 1,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
    adaptiveWeight: true,
    slidesToScroll: 1,
    fade: true
};
  return (
    <>
    <Slider {...settings} className="slider-carousel">
      
    <Banner 
    title="K&P Espinal Janitor."
    subtitle="Revitalize your spaces, shine with us! ✨💫🌟"
  
    imgUrl={"src/assets/banner.jpg"}/>
    <Banner 
    title="Invest in the Best of the Area."
    subtitle="Empower Your Success, Invest in the Best of the Area!."
    imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo9Q5pyLHaSt1_Sg58kjwsu4MYvJXiUqQAy_gntMVHi5lhWr_wZGfFcGY-2NUC9uW47_g&usqp=CAU"}/>
    <Banner 
    title="Book from the comfort of your home."
    subtitle="Transforming Spaces, Creating Smiles."
    
    imgUrl={"https://www.adecco.com.pe/wp-content/uploads/2021/02/servicio-limpieza-oficinas.jpg"}/>


   </Slider>
    </> 
  )
}
