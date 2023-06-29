import { Banner, CardItem, Footer, Navbar } from "../components/shared/"

export const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
      title="Residential Commercial & Strata Cleaning" 
      subtitle="Contact Us Now" 
      btnTitle="Residential"
      />
    <h1 style={{"textAlign": "center"}}>Nuestros Servicios</h1>
    <CardItem/>
    <Footer/>
    </>
  )
}
