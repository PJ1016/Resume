import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Typography, Box, Grid } from "@mui/material";
interface IVerifiedText {
  content: string[];
}
const VerifiedText = ({ content }: IVerifiedText) => {
  return (
    <>
      {content.map((item) => (
        <Grid item xs={6} md={6}>
          <Box sx={{ display: "flex", gap: "4px" }}>
            <VerifiedIcon />
            <Typography fontWeight="bold">{item}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default VerifiedText;
