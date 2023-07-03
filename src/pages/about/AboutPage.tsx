import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"

export const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
    title={"Sobre nosostros"} 
    subtitle={"Subtitulo De Sobre nosotros"} 
    btnTitle={"Descubrenos"}/>
    <Footer/>
    <FloatingActionButton/>
    </>
  )
}
