import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(() => ({
  width: 570,
  height: 150,
  ":hover": {
    backgroundColor: "#E9AFB9",
    transition: ".35s",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default CustomCard;
