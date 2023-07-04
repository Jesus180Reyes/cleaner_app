import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"
import { CustomRowCard } from "../../components/shared/cards/CustomRowCard"

export const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
        title={"Sobre nosostros"}
        subtitle={"Subtitulo De Sobre nosotros"}
        btnTitle={"Descubrenos"} 
        imgUrl="https://jornada.com.bo/wp-content/uploads/2020/10/Casacolor-empresa-lider-en-pintura-anuncia-alianza-con-marca-internacional.jpeg"/>
       <CustomRowCard>
       <div className="title">
        <h1>introduction about our company.</h1>
        <p><h3>We are a company in full development seeking to enter a market and be competitive by having the best services and with the most affordable prices on the market.</h3></p>
       </div>

       </CustomRowCard>
    <Footer/>
    <FloatingActionButton/>
    </>
  )
}
