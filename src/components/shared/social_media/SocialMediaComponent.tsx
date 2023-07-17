
export const SocialMediaComponent = () => {
  return (
    <div className="social-media-container">
      <h3>Redes Sociales</h3>
      <p>Siguenos en nuestras redes sociales</p>

        <div className="icons">
        <i onClick={() => window.location.href = ``} className="fa-brands fa-whatsapp"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-facebook"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-tiktok"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-instagram"></i>
        <i onClick={() => window.location.href = `${location.href = ""}`}className="fa-brands fa-twitter"></i>
        </div>
      </div>
  )
}
