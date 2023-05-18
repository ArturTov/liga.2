import styled from "@emotion/styled";
import { Button as Btn } from "@mui/material";

export const Button = styled(Btn)(({ props, theme }) => {
  return {
    width: props.width,
  };
});
