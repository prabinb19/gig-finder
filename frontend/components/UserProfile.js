import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Image from "next/image";

import Kiran from "../public/images/kiran.jpg";
import Logo from "../public/images/logo.png";
import styles from "../styles/Userprofile.module.css";

const UserProfile = () => {
  const [rating, setRating] = useState(4.3); // State to manage the rating

  // Function to handle rating change
  const changeRating = (newRating) => {
    setRating(newRating);
    // You can also perform other actions here when the rating changes
  };

  const handleContactClick = () => {
    // Logic to handle contact action
    // You can redirect to a contact page, open a modal, or perform any other action here
    console.log("Contact button clicked!");
  };

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userInfo}>
        <Image
          src={Kiran}
          width={150}
          height={150}
          className={styles.roundedImage}
        />

        <div>Price: $10</div>
        <h1>Kiran Silwal</h1>
        <h3>Product Designer</h3>
        <p>Design Tomorrow, Craft Today</p>
        <p>Major: Computer Science</p>
        <h2>Rating: {rating}</h2>

        <StarRatings
          rating={rating}
          starRatedColor="gold" // Change the color of the filled stars
          changeRating={changeRating}
          numberOfStars={5} // Number of stars to display
          starDimension="30px" // Size of the stars
          starSpacing="5px" // Spacing between stars
        />

        <div className={styles}>
          <button className={styles.button10} role="button">
            Contact Me
          </button>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <h2>About My Service</h2>
        <div className={styles.aboutMeContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
          <div className={styles.imagesHere}>
            <Image src={Logo} width={250} height={250} />
            <Image src={Logo} width={250} height={250} />
            <Image src={Logo} width={250} height={250} />
            <Image src={Logo} width={250} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
