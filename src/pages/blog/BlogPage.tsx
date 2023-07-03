import { Banner,  FloatingActionButton,  Footer,  Navbar, RowCard } from "../../components/shared"

export const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
    title={"Blog"}
    subtitle={"Blog del sitio"}
    btnTitle={"Contactanos"} 
    imgUrl={"https://juanitoelpintor.com/wp-content/uploads/2021/05/adult-painter-man-isolated-blue-wall_1368-171336.jpg"}/>

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
