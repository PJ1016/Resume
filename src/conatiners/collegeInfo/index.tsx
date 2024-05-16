import { Stack, Typography } from "@mui/material";
import React from "react";
interface ICollegeInfo {
  branch: string;
  college: string;
}
const CollegeInfo = ({ branch, college }: ICollegeInfo) => {
  return (
    <Typography
      fontWeight="bold"
      fontSize="1rem"
      textAlign="center"
      color="white"
    >
      Stay updated with my latest projects
    </Typography>
  );
};

export default CollegeInfo;
