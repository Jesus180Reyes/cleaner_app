import { Banner, FloatingActionButton, Footer, Navbar, RowCard } from "../../components/shared"
import { CustomRowCard } from "../../components/shared/cards/CustomRowCard"

export const MisionsPage = () => {
  return (
    <>
    <Navbar/>
    <Banner 

        title={"Mision And Vision"}
        subtitle={"¡Forging a path based on ethical and moral values, united by passion and commitment towards a better future."}
        imgUrl={"https://cdn.escala.com/wp-content/uploads/2021/11/Mision-vision-y-valores-20-ejemplos-de-empresas-exitosas-02.png"}/>
        <RowCard title={"Mission"} subtitle={"Provide high quality home cleaning and painting services, providing comprehensive solutions that transform our clients' spaces into clean, healthy and aesthetically attractive environments. We are committed to exceeding the expectations of our clients, offering a reliable, efficient and personalized service that contributes to their well-being and comfort."} imgUrl={"src/assets/2.png"}/>
        <RowCard isReversed={true} title={"Vision"} subtitle={"To be the leading company in home painting and cleaning services, recognized for our excellence in quality, professionalism and customer service. We seek to be a benchmark in the sector, expanding our presence and building solid and lasting relationships with our customers, employees and business partners."} imgUrl={"src/assets/1.png"} />
          
        <CustomRowCard>
       <div className="title">
        <h1><center>Values</center></h1>
        <h1>Integrity:</h1>
        <p>We act with honesty, ethics and transparency in all our interactions with customers, employees and suppliers.</p>
          
        <h1><strong>Responsibility:</strong></h1>
        <p>We assume responsibility for our actions and results.</p>

        <h1>Reliability:</h1>
        <p>We generate trust in our clients by providing a reliable, safe and quality service.</p>

        <h1>Commitment:</h1>
        <p>We are committed to the satisfaction of our customers, dedicating our time, effort and experience to achieve the best results.</p>
          
        
       </div>

       </CustomRowCard>
    <Footer/>
    <FloatingActionButton/>

    </>
  )
}
