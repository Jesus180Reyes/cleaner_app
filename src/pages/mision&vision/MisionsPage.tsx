import { Banner, FloatingActionButton, Footer, Navbar } from "../../components/shared"

export const MisionsPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
        title={"Mision Y Vision"}
        subtitle={"Estas son las misiones y visiones"}
        btnTitle={"Contactanos"} 
        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR96T-vGGABw-IWjbxSwk9Xf5GBz4YfMrISg&usqp=CAU"}/>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
