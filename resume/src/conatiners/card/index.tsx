import React from "react";
import profile_picture from "../../profile_picture.png";
import styled, { keyframes } from "styled-components";
import { Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkSummary from "../card/WorkSummary";
const fadeDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
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
  width: 100%;
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
  linkedinURL: string;
  selfDescription: string;
  experience: string;
}
const Card = ({
  fullName,
  linkedinURL,
  selfDescription,
  experience,
}: ICard) => {
  const moveToLinkedIn = () => {
    window.open(linkedinURL);
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
          <WorkSummary
            fullName={fullName}
            selfDescription={selfDescription}
            experience={experience}
          />
          <Stack alignItems="center" marginTop={1}>
            <IconButton onClick={moveToLinkedIn}>
              <LinkedInIcon htmlColor="white" sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Stack>
        </Text>
      </ImageWithTextWrapper>
    </Stack>
  );
};

export default Card;
