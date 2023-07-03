import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"

export const LocationPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
    title={"Nuestra Ubicacion"}
    subtitle={"ubicacion del sitio"}
    btnTitle={"Encuentranos"} 
    imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLpEPm2SQIkyyLZaa_AkY5XAhpBd61X754g&usqp=CAU"}/>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
