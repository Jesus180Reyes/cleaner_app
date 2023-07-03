import { Banner,  FloatingActionButton,  Footer,  Navbar, RowCard } from "../../components/shared"

export const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
    title={"Blog"} 
    subtitle={"Blog del sitio"} 
    btnTitle={"Contactanos"}/>

   <RowCard 
   title={"Quienes Somos"} 
   subtitle={"Nulla officia duis velit et veniam quis fugiat."}
   />
   <RowCard 
   title={"Quienes Somos"} 
   subtitle={"Nulla officia duis velit et veniam quis fugiat."}
   isReversed
   />
   <Footer/>
   <FloatingActionButton/>



    </>
  )
}
