import Slider from "react-slick"
import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"

export const LocationPage = () => {

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
    title={"Our Gallery"}
    subtitle={""}
    btnTitle={""} 
    imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Anime_Girl.png/1280px-Anime_Girl.png"}/>
    
    <Banner 
    title={"Our Gallery"}
    subtitle={""}
    btnTitle={""} 
    imgUrl={"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/16/16633380346741.jpg"}/>
    <Banner 
    title={"Our Gallery"}
    subtitle={""}
    btnTitle={""} 
    imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8FJnVzdJy1N5TatPX8PzxfK6PCBJfoThtg&usqp=CAU"}/>
    </Slider>
    <Navbar/>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
