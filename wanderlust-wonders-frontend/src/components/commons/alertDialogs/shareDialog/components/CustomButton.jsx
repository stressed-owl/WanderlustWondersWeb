import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  padding: "10px 16px",
  fontSize: "14px",
  borderRadius: "24px",
  border: "none",
  backgroundColor: "#EDBFC6",
  color: "#000",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "#E9AFB9",
    transition: ".35s",
  },
}));

export default CustomButton;
