import React from "react";
import styled from "styled-components";
import { Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkSummary from "../card/WorkSummary";
import profile_picture from "../../profile_picture.png";
import { fadeDown } from "../../components/Animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageWithTextWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Text = styled.span`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: max-content;
  height: 50%;
  font-size: 1rem;
  padding: 2rem;
  border-radius: 10px;
  align-content: center;
  background: rgb(0, 0, 0, 0.5);
  animation: ${fadeDown} 5s;
`;
interface ICard {
  fullName: string;
  socialLinks: { name: string; url: string }[];
  role: string;
}
// @ts-ignore
const myIcon: IconProp = ["kit", "fa-brands fa-python"];
const Card = ({ fullName, socialLinks, role }: ICard) => {
  const handleSocialSite = (website: string) => {
    const url = socialLinks.find((link) => link.name === website)?.url;
    window.open(url);
  };
  return (
    <Stack
      alignItems="center"
      style={{ backgroundColor: "#CCC" }}
      marginBottom={2}
    >
      <ImageWithTextWrapper>
        <img src={profile_picture} alt={fullName} />
        <Text>
          <WorkSummary fullName={fullName} role={role} />
          <Stack
            alignItems="center"
            marginTop={1}
            direction="row"
            justifyContent="center"
          >
            <IconButton onClick={() => handleSocialSite("linkedin")}>
              <FontAwesomeIcon icon={myIcon} />
              <LinkedInIcon htmlColor="white" sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton onClick={() => handleSocialSite("github")}>
              <GitHubIcon htmlColor="white" sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Stack>
        </Text>
      </ImageWithTextWrapper>
    </Stack>
  );
};

export default Card;
