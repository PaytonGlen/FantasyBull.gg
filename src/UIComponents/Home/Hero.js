import react from "react";
import AppStoreIcon from "../UXImages/AppStoreIcon.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to FantasyBull</h1>
      <p style={{ fontSize: "4vw" }}>
        We are the ultimate fantasy platform dedicated exclusively to eSports!
      </p>
      <p style={{ fontSize: "3vw" }}>
        Win real cash by betting on your favorite players in all your favorite
        eSports games!
      </p>
      <div className="store-buttons">
        {/* Replace these placeholders with actual store logos */}
        <img src={AppStoreIcon} alt="App Store" className="store-icon" />{" "}
        {/* App Store */}
        <img src="#" alt="Google Play" className="store-icon" />{" "}
        {/* Google Play */}
      </div>
    </section>
  );
};

export default Hero;
