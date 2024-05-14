import { Divider, Typography } from "@mui/material";
import React from "react";
interface IWorkSummary {
  fullName: string;
  selfDescription: string;
  experience: string;
}
const WorkSummary = ({
  fullName,
  selfDescription,
  experience,
}: IWorkSummary) => {
  return (
    <>
      <Typography fontWeight="bold" fontSize="3rem">
        Hello .
      </Typography>
      <Typography flexWrap="wrap" fontWeight="bold">
        I'm {fullName}, {selfDescription}.
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginY: "1rem" }} />
      <Typography>{experience}</Typography>
    </>
  );
};

export default WorkSummary;
