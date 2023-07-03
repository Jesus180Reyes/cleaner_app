import { Banner, FloatingActionButton, Footer } from "../../components/shared"

export const ContactPage = () => {
  return (
    <>
    <Banner 
    title={"Contactanos"} 
    subtitle={"Podras comunicarte con nosotros y un asesor se pondra en contacto contigo"} 
    btnTitle={"Contactanos"}/>
    <h1 style={{textAlign: "center"}}>Contactanos</h1>
    <div className="contact-container">
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.611166037451!2d-87.18006402577284!3d13.31221260732087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703ce471cc7225%3A0x4f642346d3a54ad6!2sUnimall!5e0!3m2!1ses-419!2shn!4v1688418137410!5m2!1ses-419!2shn" width="600" height="450"   loading="lazy"></iframe>
      </div>
      <div className="form-container">
        <h2>Drop up a message</h2>
        <form >
          <input type="text" placeholder="Tu nombre completo" />
          <input type="email" placeholder="Tu Correo electronico" />
          <input type="number" placeholder="Tu Numero de telefono" />
          <p>Fecha de reservacion</p>
          <input type="date"  placeholder="Fecha de reservacion"/>
          <button className="btn btn-cotizar">Cotizar</button>
        </form>
      </div>
    </div>
    <Footer/>
    <FloatingActionButton/>
    </>
  )
}
