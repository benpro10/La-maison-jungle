import "../styles/Banner.css";
import logo from "../assets/Logo_lmj.png";
function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmjBanner">
      <img src={logo} alt="La maison jungle" className="lmjLogo" />

      <h1 className="lmjTitle">{title}</h1>
    </div>
  );
}

export default Banner;
