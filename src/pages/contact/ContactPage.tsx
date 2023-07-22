/* eslint-disable @typescript-eslint/no-explicit-any */
import { Banner, Footer, Navbar } from "../../components/shared"
import { SocialMediaComponent } from "../../components/shared/social_media/SocialMediaComponent"
import { useContactForm } from "../../hooks/useContactForm"

export const ContactPage = () => {
 const {
  nameInput,
  emailInput,
  numberInput,
  dateInput,
  onSubmit,
  setDateInput,
  setEmailInput,
  setNameInput,
  setNumberInput
} = useContactForm();
  
  return (
    <>
    <Navbar/>
    <Banner 
    title={"Contact Us."}
    subtitle={"You can contact us and an advisor will contact you!."}
    imgUrl={"https://www.callcentermexico.com.mx/hubfs/Stock%20images/Smiling%20casual%20young%20man%20with%20headset%20using%20computer%20in%20a%20bright%20office.jpeg"} />
   
    <h1 style={{textAlign: "center"}}>Contact Us.</h1>
    <div className="contact-container">
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.7365674496195!2d-96.71999812530522!3d32.79924358285151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea22561ca8b4f%3A0x6b2536f5dc9ccb68!2s7685%20Ferguson%20Rd%2C%20Dallas%2C%20TX%2075228%2C%20EE.%20UU.!5e0!3m2!1ses!2shn!4v1689897991386!5m2!1ses!2shn" width="550" height="400"   loading="lazy"></iframe>
      </div>
      <div className="form-container">
        <h2>Drop up a message</h2>
        <form  onSubmit={onSubmit}>
          <input type="text" placeholder="Your full name:"  value={nameInput}  onChange={(e:any)=> setNameInput(e.target.value)}/>
          <input type="email" placeholder="Your e-mail:" value={emailInput}  onChange={(e:any)=> setEmailInput(e.target.value)}/>
          <input type="number" placeholder="Your phone number:" value={numberInput}  onChange={(e:any)=> setNumberInput(e.target.value) }/>
          <p>Reservation Date:</p>
          <input type="date"  placeholder="reservation date:" value={dateInput} onChange={(e:any)=>  setDateInput(e.target.value)}/>
          <button onClick={onSubmit} className="btn btn-cotizar">quote</button>

          
        </form>
      </div>
      
    </div>
    <SocialMediaComponent/>
    <Footer/>
    </>
  )
}
