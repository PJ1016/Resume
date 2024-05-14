import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import CompanyInfo from "./companyInfo";
import ExperienceText from "./experienceText";
interface ICompanyWithExp {
  companyDescription: string;
  src: string;
  range: string;
  role: string;
  description: string;
  imageWidth?: string;
}
const CompanyWithExp = ({
  companyDescription,
  src,
  range,
  role,
  description,
  imageWidth,
}: ICompanyWithExp) => {
  return (
    <Box alignItems="center" justifyContent="center" paddingX={6}>
      <Stack direction="row" justifyContent="space-between" padding={2}>
        <CompanyInfo
          companyDescription={companyDescription}
          src={src}
          imageWidth={imageWidth}
        />
        <ExperienceText range={range} role={role} description={description} />
      </Stack>
      <Divider sx={{ marginX: "1rem" }} />
    </Box>
  );
};

export default CompanyWithExp;
