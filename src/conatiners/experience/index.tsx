import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import cna from "../../CNA.jpg";
import CompanyWithExp from "./companyWithExp";
const Experience = () => {
  return (
    <Box padding={2} sx={{ backgroundColor: "white" }}>
      <Stack alignItems="center" justifyContent="center">
        <Typography fontSize="1.5rem" marginTop={3}>
          2+ Years React Experience for different clients
        </Typography>
        <CompanyWithExp
          companyDescription="Amazon Ads is one of the fastest growing organizations within Amazon and the third largest digital advertising business in the world."
          src="https://www.allstate.com/dist/content-client-react-app/static/media/logo-large.cca8060d.svg"
          range="2021-Present"
          role="Software Development Manager"
          description="Leading a tier-1 team within Amazon Ads responsible for logging all ad events for Amazon.com and its owned and operated properties, world-wide and in real-time for budgeting, billing, reporting and analytics use-cases."
        />
        <CompanyWithExp
          companyDescription="Amazon Ads is one of the fastest growing organizations within Amazon and the third largest digital advertising business in the world."
          src={cna}
          imageWidth="6rem"
          range="2021-Present"
          role="Software Development Manager"
          description="Leading a tier-1 team within Amazon Ads responsible for logging all ad events for Amazon.com and its owned and operated properties, world-wide and in real-time for budgeting, billing, reporting and analytics use-cases."
        />
        <CompanyWithExp
          companyDescription="Amazon Ads is one of the fastest growing organizations within Amazon and the third largest digital advertising business in the world."
          src="https://www.allstate.com/dist/content-client-react-app/static/media/logo-large.cca8060d.svg"
          range="2021-Present"
          role="Software Development Manager"
          description="Leading a tier-1 team within Amazon Ads responsible for logging all ad events for Amazon.com and its owned and operated properties, world-wide and in real-time for budgeting, billing, reporting and analytics use-cases."
        />
      </Stack>
    </Box>
  );
};

export default Experience;
