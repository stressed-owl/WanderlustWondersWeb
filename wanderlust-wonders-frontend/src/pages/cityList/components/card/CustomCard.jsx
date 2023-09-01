import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(() => ({
  width: 270,
  height: 400,
  borderRadius: "16px",
  ":hover": {
    transition: ".33s",
    backgroundColor: "#E9AFB9",
  },
}));

export default CustomCard;
