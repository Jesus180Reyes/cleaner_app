
export const SocialMediaComponent = () => {
  return (
    <div className="social-media-container">
      <h3>Social Networks</h3>
      <p>Follow us on our social networks</p>

        <div className="icons">
        <i onClick={() => window.location.href = `${location.href = "https://api.whatsapp.com/send/?phone=50487742908&text&type=phone_number&app_absent=0"}`} className="fa-brands fa-whatsapp"></i>
        <i onClick={() => window.location.href = `${location.href = "https://www.facebook.com/"}`}className="fa-brands fa-facebook"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-tiktok"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-instagram"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-twitter"></i>
        </div>
      </div>
  )
}
