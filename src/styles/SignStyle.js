import styled from "styled-components";

export const LockIconWrapper = styled.div`
  background: #b3b1f3;
  padding: 8px;
  border-radius: 50%;
  width: fit-content;
`;

export const LockIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SingInput = styled.input`
  width: 100%;
  padding: 8px;
  width: 100%;

  border-radius: 5px;
  border: 2px dashed
    ${(props) =>
      props.validation === "valid"
        ? "green"
        : props.validation === "invalid"
        ? "red"
        : "gray"};

  &:focus {
    outline: 0;
  }
`;

export const SignCheckbox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #4f4d93;
`;

export const SignCheckboxLabel = styled.label`
  font-size: 14px;
  max-width: 250px;
`;

export const Copyright = styled.span`
  font-size: 12px;
`;
