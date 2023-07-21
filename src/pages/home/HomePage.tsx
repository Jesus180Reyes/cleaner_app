import {  CardItem, FloatingActionButton, Footer, Navbar, RowCard } from "../../components/shared"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderComponent } from "../../components/home";
 
export const HomePage = () => {
  return (
    <>
    <Navbar/>
    <SliderComponent/>
    <h1 style={{"textAlign": "center"}}>Our Services!</h1>
    <RowCard 
    title="Domestic Hygiene Solutions." 
    subtitle="We are a company specialized in keeping your home clean and healthy. Our highly trained team uses advanced methods and specialized products to ensure effective removal of dirt, germs and allergens, providing you with a safe and comfortable environment. Discover cleaning excellence and experience the difference our services can make in your home!"
    isReversed={true}
    imgUrl="https://st3.depositphotos.com/2249091/35520/i/1600/depositphotos_355203122-stock-photo-efficient-renovation-crew-painting-white.jpg"
    />
    <RowCard 
    title="Painted for Homes." 
    subtitle="We are professional painting company dedicated to beautify and transform homes into spaces of elegance and harmony. With an artistic and scientific approach, our expert painters apply advanced techniques and high-quality materials to achieve impeccable and long-lasting finishes.
    We pride ourselves on offering a professional and reliable service, respecting the agreed deadlines and providing personalized attention to each client. Our mission is to exceed expectations and turn every home into a canvas of beauty and comfort."
    imgUrl="https://st3.depositphotos.com/2249091/18141/i/1600/depositphotos_181411628-stock-photo-men-preparing-interior-to-renovation.jpg"
    isReversed={false}
    />
    
    <h1 style={{"textAlign": "center"}}>quality guarantees</h1>
    <CardItem/>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
