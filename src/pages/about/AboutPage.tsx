import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"

export const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
        title={"Sobre nosostros"}
        subtitle={"Subtitulo De Sobre nosotros"}
        btnTitle={"Descubrenos"} 
        imgUrl="https://jornada.com.bo/wp-content/uploads/2020/10/Casacolor-empresa-lider-en-pintura-anuncia-alianza-con-marca-internacional.jpeg"/>
    <Footer/>
    <FloatingActionButton/>
    </>
  )
}
