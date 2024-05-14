import { Stack, Typography } from "@mui/material";
import React from "react";

interface IExperience {
  range: string;
  role: string;
  description: string;
}
const ExperienceText = ({ range, role, description }: IExperience) => {
  return (
    <div>
      <Stack padding={2}>
        <Typography fontStyle="italic" fontSize="1.8rem">
          {range}
        </Typography>
        <Typography fontWeight="bold" fontSize="1.2rem">
          {role}
        </Typography>
        <Typography fontSize="12px" width="50%">
          Leading a tier-1 team within Amazon Ads responsible for logging all ad
          events for Amazon.com and its owned and operated properties,
          world-wide and in real-time for budgeting, billing, reporting and
          analytics use-cases.
        </Typography>
      </Stack>
    </div>
  );
};

export default ExperienceText;
