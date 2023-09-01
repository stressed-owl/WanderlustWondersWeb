import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTypography = styled(Typography)(({ fontSize, fontWeight }) => ({
  fontFamily: "Open Sans",
  fontSize: fontSize,
  fontWeight: fontWeight,
  color: "#000",
}));

export default CustomTypography;
