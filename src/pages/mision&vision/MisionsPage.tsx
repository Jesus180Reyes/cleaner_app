import { Banner, FloatingActionButton, Footer, Navbar, RowCard } from "../../components/shared"
import { CustomRowCard } from "../../components/shared/cards/CustomRowCard"

export const MisionsPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 
        title={"Mision Y Vision"}
        subtitle={"Estas son las misiones y visiones"}
        btnTitle={"Contactanos"} 
        imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR96T-vGGABw-IWjbxSwk9Xf5GBz4YfMrISg&usqp=CAU"}/>
        <RowCard title={"Mission"} subtitle={"Provide high quality home cleaning and painting services, providing comprehensive solutions that transform our clients' spaces into clean, healthy and aesthetically attractive environments. We are committed to exceeding the expectations of our clients, offering a reliable, efficient and personalized service that contributes to their well-being and comfort."} imgUrl="https://economia3.com/wp-content/uploads/2022/11/Mision2-1024x661-1.jpg"/>
        <RowCard title={"Vision"} subtitle={"To be the leading company in home painting and cleaning services, recognized for our excellence in quality, professionalism and customer service. We seek to be a benchmark in the sector, expanding our presence and building solid and lasting relationships with our customers, employees and business partners."} imgUrl="https://previews.123rf.com/images/stuartphoto/stuartphoto1609/stuartphoto160901326/62324975-visi%C3%B3n-misi%C3%B3n-objetivo-flecha-que-indica-representaci%C3%B3n-3d.jpg"></RowCard>
        <CustomRowCard>
       <div className="title">
        <h1><center>values</center></h1>
        <p><h1><strong>Integrity:</strong></h1></p>
        <p><h3>We act with honesty, ethics and transparency in all our interactions with customers, employees and suppliers.</h3></p>
          
        <p><h1><strong>Responsibility:</strong></h1></p>
        <p><h3>We assume responsibility for our actions and results.</h3></p>

        <p><h1><strong>Reliability:</strong></h1></p>
        <p><h3>We generate trust in our clients by providing a reliable, safe and quality service.</h3></p>

        <p><h1><strong>Commitment:</strong></h1></p>
        <p><h3>We are committed to the satisfaction of our customers, dedicating our time, effort and experience to achieve the best results.</h3></p>
          
        
       </div>

       </CustomRowCard>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
