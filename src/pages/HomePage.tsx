import { Banner, CardItem } from "../components/shared/"

export const HomePage = () => {
  return (
    <>
      <Banner title="Residential Commercial & Strata Cleaning" 
       subtitle="Contact Us Now" 
       btnTitle="Residential"
      />
    <h1 style={{"textAlign": "center"}}>Nuestros Servicios</h1>
    <CardItem/>
    <div className="title-middle-container">
      <h1>Welcome to Kirei cleaning services in vancouver</h1>
      <div className="line-title"><div className="line">_____</div></div>
      <p>Kirei Cleaning Services is a leading provider of cleaning services with an outstanding reputation for quality and integrity throughout lower mainland Vancouver area. For over 10 years, we provide high-quality residential home cleaning, commercial cleaning and strata cleaning.</p>
    </div>
    <footer>
      <div className="footer-container">
        <p>© 2022 Kirei.ca | All Rights Reserved Designed by Linkgud.com</p>
      </div>
    </footer>
    </>
  )
}
