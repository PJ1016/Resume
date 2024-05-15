import { Stack, Typography } from "@mui/material";
import React from "react";
interface ICollegeInfo {
  branch: string;
  college: string;
}
const CollegeInfo = ({ branch, college }: ICollegeInfo) => {
  return (
    <Stack
      style={{
        backgroundColor: "#001E60",
      }}
      height="200px"
      width="100%"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src="https://www.rgukt.in/images/Logonew.png"
        alt="rgukt"
        width="30rem"
        style={{ backgroundColor: "white" }}
      />
      <Typography fontWeight="bold" fontSize="2rem" textAlign="center">
        {branch}
      </Typography>
      <Typography fontWeight="bold" fontSize="1rem" textAlign="center">
        {college}
      </Typography>
    </Stack>
  );
};

export default CollegeInfo;
