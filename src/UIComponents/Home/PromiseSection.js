import react from "react";
import MoneyStack from "../../images/Images for Website/MoneyStack.svg";
import MoneyBag from "../../images/Images for Website/SecuredMoneyBag.svg";

const PromiseComponent = () => {
  return (
    <section className="promise-section">
      <div className="promise-icons">
        {/*. Enter your security icon here   */}
        <img src={MoneyStack} alt="Security" />
        <p>Safe. Secured. Protected. We promise.</p>
      </div>
      <div className="promise-icon">
        {/*. Enter your cash icon here  */}
        <img src={MoneyBag} alt="Secured Earnings" />
        <p>We promise to deliver on all earnings!</p>
      </div>
    </section>
  );
};

export default PromiseComponent;
