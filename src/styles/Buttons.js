import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignButton = styled(Link)`
  background: ${(props) => (props.$primary ? "#B3B1F3" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#B3B1F3")};

  text-decoration: none;
  font-size: 20px;
  margin: 16px;
  padding: 5px 20px;
  border: 2px solid #b3b1f3;
  border-radius: 8px;
  transition: all 0.7s;

  &:hover {
    background: ${(props) => (props.$primary ? "white" : "#B3B1F3")};
    color: ${(props) => (props.$primary ? "#B3B1F3" : "white")};
  }
`;

export const SubmitButton = styled.button`
  background: #9593c6;
  color: white;

  width: 100%;
  cursor: pointer;
  border: none;
  font-size: 16px;
  border: 2px solid #9593c6;
  padding: 5px 0;
  border-radius: 8px;
  transition: all 0.7s;

  &:hover {
    background: transparent;
    border: 2px solid #54c57a;
    color: black;
  }
`;

export const HelpLinks = styled(Link)`
  font-size: 12px;
  color: #3ab3f8;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: #1a74a6;
    text-decoration: underline;
  }
`;
