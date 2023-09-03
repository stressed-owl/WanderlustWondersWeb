import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  borderRadius: "6px",
  borderStyle: "none",
  fontFamily: "Open Sans",
  fontWeight: "400",
  fontSize: "16px",
  padding: "16px",
  backgroundColor: "#EDBFC6",
  gap: "5px",
  textAlign: "center",
  transition: ".35s",
  color: "#000",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "#E9AFB9",
    transition: ".35s",
  },
}));

export default CustomButton;
