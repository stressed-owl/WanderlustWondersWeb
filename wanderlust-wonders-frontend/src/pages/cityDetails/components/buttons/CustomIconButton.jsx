import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)(() => ({
  backgroundColor: "#EDBFC6",
  ":hover": {
    backgroundColor: "#E9AFB9",
    transition: ".35s",
  },
  position: "absolute",
  left: "50%",
  marginTop: "32px",
}));

export default CustomIconButton;
