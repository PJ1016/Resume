import React from "react";
import Card from "../card";
import CollegeInfo from "../collegeInfo";
import Experience from "../experience";

const Home = () => {
  return (
    <>
      <Card
        fullName="Praveen jayanth"
        experience="2+ years React Experience"
        linkedinURL="https://www.linkedin.com/in/praveen-jayanth-8b0687199"
        selfDescription="Experienced React developer adept at navigating from '404 Not Found' to '200 OK'"
      />
      <Experience />
      <CollegeInfo
        branch="Computer Science and Engineering"
        college="Rajiv Gandhi University of Knowledge Technologies, Basar"
      />
    </>
  );
};

export default Home;
