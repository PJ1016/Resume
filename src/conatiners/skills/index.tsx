import React from "react";
import { Paper, Stack, Typography, Grid } from "@mui/material";
import VerifiedText from "../skills/VerifiedText";
import { Animation } from "../../components/Animation";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface ISkills {
  skillSet: {
    title: string;
    skills: { title: string; icon?: IconDefinition; svg?: any }[];
  }[];
}
const Skills = ({ skillSet }: ISkills) => {
  return (
    <Animation>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        padding={3}
        justifyContent="space-around"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "100%",
            backgroundColor: "whitesmoke",
            color: "#333333",
          },
          backgroundColor: "cornflowerblue",
        }}
      >
        {skillSet.map((item) => (
          <Paper elevation={13}>
            <Typography
              align="center"
              fontWeight="bold"
              marginY={2}
              fontSize="1.5rem"
            >
              {item.title}
            </Typography>
            <Grid container spacing={2} padding={2}>
              <VerifiedText content={item.skills} />
            </Grid>
          </Paper>
        ))}
      </Stack>
    </Animation>
  );
};

export default Skills;
