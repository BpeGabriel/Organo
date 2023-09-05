import bannerpng from "../../assets/banner.png";
import "./banner.css";
function Banner() {
  return (
    <header className="banner">
      <img src={bannerpng} alt="banner principal da página" />;
    </header>
  );
}
export default Banner;
