import React from "react";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Gig Explorer</h1>
        <p>Connect. Offer. Succeed.</p>
        <button>Add My Talent</button>
      </header>

      <div className={styles["filter-section"]}>
        <div className={styles.filter}>
          <h2>Filter</h2>
          <div className="filter-options">
            <div className="location-filter">
              <label>
                <input type="checkbox" /> On-Campus
              </label>
              <label>
                <input type="checkbox" /> Off-Campus
              </label>
            </div>
            <div className="service-filter">
              <label>
                <input type="checkbox" /> Tutoring
              </label>
              <label>
                <input type="checkbox" /> Hair Cutting
              </label>
              <label>
                <input type="checkbox" /> Nail Polishing
              </label>
            </div>
            <div className="price-filter">
              <label>
                <input type="radio" name="price" /> Less than $10
              </label>
              <label>
                <input type="radio" name="price" /> $10 - $30
              </label>
              <label>
                <input type="radio" name="price" /> More than $30
              </label>
            </div>
          </div>
        </div>

        <div className={styles["search-section"]}>
          <input type="text" placeholder="Search..." />
          <button>Find help</button>
        </div>
      </div>

      <div className={styles["gig-list"]}>
        {/* Map over your gigs data and render Gig components */}
        <Gig
          title="Product Designer"
          description="Designing Tomorrow, Crafting Today"
        />
        {/* ... other gigs */}
      </div>
    </div>
  );
};

const Gig = ({ title, description }) => {
  return (
    <div className={styles.gig}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Hire Me</button>
    </div>
  );
};

export default HomePage;
