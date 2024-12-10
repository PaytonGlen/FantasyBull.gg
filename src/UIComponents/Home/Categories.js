import react from "react";
import FantasyDraftIcon from "../UXImages/EliteDraftnew.svg";
import eFantasy from "../UXImages/eFantasy.svg";
import ePlaybook from "../UXImages/ePlaybook.svg";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="category-card">
        {/* Placeholder for the first category image */}
        <img src={`${ePlaybook}`} alt="Category 1" />
        <h3>ePlaybook</h3>
        <p>Bet on your favorite players and start winning money!</p>
        <button>Play Now</button>
      </div>
      <div className="category-card">
        {/* Placeholder for the second category image */}
        <img src={`${FantasyDraftIcon}`} alt="Category 2" />
        <h3>Elite Draft</h3>
        <p>Create your own Fantasy team and face other teams!</p>
        <button>Play Now</button>
      </div>
      <div className="category-card">
        {/* Placeholder for the third category image */}
        <img src={`${eFantasy}`} alt="Category 3" />
        <h3>My eFantasy</h3>
        <p>Create your own fantasy league for your game!</p>
        <button>Create Now</button>
      </div>
    </section>
  );
};

export default Categories;
