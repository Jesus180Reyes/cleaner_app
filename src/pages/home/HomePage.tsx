import {  CardItem, FloatingActionButton, Footer, Navbar, RowCard } from "../../components/shared"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderComponent } from "../../components/home";
 
export const HomePage = () => {
  return (
    <>
    <Navbar/>
    <SliderComponent/>
    <h1 style={{"textAlign": "center"}}>Nuestros Servicios</h1>
    <RowCard 
    title="Aute do irure minim quis commodo enim sit veniam velit id in occaecat." 
    subtitle="Labore minim irure minim aliquip duis deserunt."
    isReversed={true}
    imgUrl="https://st3.depositphotos.com/2249091/35520/i/1600/depositphotos_355203122-stock-photo-efficient-renovation-crew-painting-white.jpg"
    />
    <RowCard 
    title="Aute do irure minim quis commodo enim sit veniam velit id in occaecat." 
    subtitle="Labore minim irure minim aliquip duis deserunt."
    imgUrl="https://st3.depositphotos.com/2249091/18141/i/1600/depositphotos_181411628-stock-photo-men-preparing-interior-to-renovation.jpg"
    isReversed={false}
    />
    
    <h1 style={{"textAlign": "center"}}>Nuestros Servicios</h1>
    <CardItem/>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
