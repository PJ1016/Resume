import { Divider, Typography } from "@mui/material";
import React from "react";
interface IWorkSummary {
  fullName: string;
  role: string;
}
const WorkSummary = ({ fullName, role }: IWorkSummary) => {
  return (
    <>
      <Typography fontWeight="bold" fontSize="3rem">
        Hello I'm
      </Typography>
      <Typography flexWrap="wrap" fontWeight="bold" fontSize="2rem">
        {fullName}
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginY: "1rem" }} />
      <Typography fontWeight="bold" fontSize="1.2rem">
        {role}
      </Typography>
    </>
  );
};

export default WorkSummary;
