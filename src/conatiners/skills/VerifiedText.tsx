import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Typography, Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface IVerifiedText {
  content: { title: string; icon?: IconDefinition; svg?: any }[];
}
const VerifiedText = ({ content }: IVerifiedText) => {
  return (
    <>
      {content.map((item) => (
        <Grid item xs={6} md={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {item.icon ? (
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                style={{ marginRight: "1rem" }}
              />
            ) : item.svg ? (
              item.svg
            ) : (
              <VerifiedIcon style={{ marginRight: "1rem" }} />
            )}

            <Typography fontWeight="bold">{item.title}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default VerifiedText;
