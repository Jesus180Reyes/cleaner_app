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
        <h1>Hola mundo</h1>
        <p>Me llamo luis</p>
        <p>sdsf
          
        </p>
       </div>

       </CustomRowCard>
    <Footer/>
    <FloatingActionButton/>
    </>
  )
}
