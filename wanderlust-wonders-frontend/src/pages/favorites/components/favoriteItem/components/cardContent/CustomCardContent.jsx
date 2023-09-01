import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
}));

export default CustomCardContent;
