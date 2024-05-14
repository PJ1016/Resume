import React from "react";
import Card from "../card";
import Experience from "../experience";
import CollegeInfo from "../collegeInfo";

const Meghana = () => {
  return (
    <div>
      <Card
        fullName="Meghana"
        experience="3+ years React Experience"
        linkedinURL="https://www.linkedin.com/in/praveen-jayanth-8b0687199"
        selfDescription="Experienced React developer adept at navigating from '404 Not Found' to '200 OK'"
      />
      <Experience />
      <CollegeInfo
        branch="Masters in Inforamtion Technology"
        college="University of camberalla"
      />
    </div>
  );
};

export default Meghana;
