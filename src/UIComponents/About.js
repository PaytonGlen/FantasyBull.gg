import React from "react";
import MoneyStack from "../images/Images for Website/MoneyStack.svg";
import MoneyBag from "../images/Images for Website/SecuredMoneyBag.svg";

const About = () => {
  return (
    <div className="Icon-section">
      <div className="Icon">
        <img src={MoneyBag} alt="MoneyBag" />
        <h3>Secure</h3>
        <p>Your money is safe with us.</p>
      </div>
      <div className="Icon">
        <img src={MoneyStack} alt="MoneyStack" />
        <h3>Win Big</h3>
        <p>Win up to 200x your entry fee!</p>
      </div>
    </div>
  );
};

export default About;
