import { useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="address-container">
      <div className="address-row">
      <a href="/"><img src="src/assets/1212.png" alt="logo" width={100} height={100}/></a>
        <a href="/">Home.</a>
        <a href="/sobreNosotros">About us.</a>
        <a href="/misionyvision">Mission y Vision.</a>
        <a href="/ubicacion">Gallery.</a>
        
        <button onClick={()=> navigate("/contactanos")} className="btn">Contact Us !</button>
      </div>
    </div>
  )
}
