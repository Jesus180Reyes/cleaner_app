
export const Navbar = () => {
  return (
    <div className="address-container">
      <div className="address-row">
      <a href="/"><img src="src/assets/1212.png" alt="logo" width={100} height={100}/></a>
        <a href="/">Home</a>
        <a href="/sobreNosotros">About us</a>
        <a href="/misionyvision">Mission y Vision</a>
        <a href="/ubicacion">Location</a>
        <a href="/blog">Blog</a>
        <a href="/contactanos"><button  className="btn">Contact Us !</button></a>
      </div>
    </div>
  )
}
