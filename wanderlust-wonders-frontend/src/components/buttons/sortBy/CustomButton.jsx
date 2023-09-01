import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: 0.5,
  fontFamily: "Open Sans",
  fontWeight: 400,
  textTransform: "none",
  backgroundColor: "#EDBFC6",
  color: "#000",
  ":hover": {
    backgroundColor: "#E9AFB9",
    transition: ".35",
  },
}));

export default CustomButton;
