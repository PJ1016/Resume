import { Stack, Typography } from "@mui/material";
import React from "react";
interface IComapnyInfo {
  src: string;
  companyDescription: string;
  imageWidth?: string;
}
const CompanyInfo = ({ src, companyDescription, imageWidth }: IComapnyInfo) => {
  return (
    <Stack alignItems="center" justifyContent="space-around" padding={2}>
      <img
        src={src}
        alt="allstate"
        style={{ width: imageWidth ? imageWidth : "maxContent" }}
        height="auto"
      />
      <Typography
        fontSize="12px"
        textAlign="center"
        color="#6c757d"
        marginTop={2}
        width="50%"
      >
        {companyDescription}
      </Typography>
    </Stack>
  );
};

export default CompanyInfo;
