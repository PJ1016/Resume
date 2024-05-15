import React from "react";
import { Stack } from "@mui/material";
import Card from "../card";
import CollegeInfo from "../collegeInfo";
import Experience from "../experience";
import Skills from "../skills";
import {
  backEndSkills,
  frontEndSkills,
} from "../../conatiners/skills/skillsData";
const Home = () => {
  return (
    <Stack>
      <Card
        fullName="Praveen jayanth"
        role="Application Devolopment Analyst"
        socialLinks={[
          {
            name: "github",
            url: "https://github.com/PJ1016/Resume",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/praveen-jayanth-8b0687199",
          },
        ]}
      />
      <Skills
        skillSet={[
          {
            title: "Frontend Technologies",
            skills: frontEndSkills,
          },
          {
            title: "Backend Stack and Tools",
            skills: backEndSkills,
          },
        ]}
      />
      <Experience />

      <CollegeInfo
        branch="Computer Science and Engineering"
        college="Rajiv Gandhi University of Knowledge Technologies, Basar"
      />
    </Stack>
  );
};

export default Home;
