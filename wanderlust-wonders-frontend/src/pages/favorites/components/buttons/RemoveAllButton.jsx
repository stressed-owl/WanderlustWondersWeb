import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const RemoveAllButton = styled(Button)(() => ({
  display: "flex",
  alignSelf: "flex-end",
  fontFamily: "Open Sans",
  textTransform: "none",
  color: "#000",
  backgroundColor: "#EDBFC6",
  ":hover": {
    backgroundColor: "#E9AFB9",
  },
}));

export default RemoveAllButton;