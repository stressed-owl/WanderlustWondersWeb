import {
  CardActions,
  IconButton,
  Tooltip
} from "@mui/material";
import React from "react";
import deleteIcon from "../../../../assets/icons/delete.svg";
import "./FavoriteItem.css";
import StyledCustomCard from "./components/card/StyledCustomCard";
import StyledCustomCardContent from "./components/cardContent/StyledCustomCardContent";
import StyledCustomTypography from "./components/typography/StyledCustomTypography";

const FavoriteItem = ({ favorite, onClick }) => {
  return (
    <StyledCustomCard>
      <StyledCustomCardContent>
        <StyledCustomTypography fontSize={20} fontWeight={700}>{favorite.city}</StyledCustomTypography>
        <StyledCustomTypography fontSize={14} fontWeight={500}>{favorite.country}</StyledCustomTypography>
        <StyledCustomTypography fontSize={14} fontWeight={500}>{favorite.state}</StyledCustomTypography>
      </StyledCustomCardContent>
      <CardActions>
        <Tooltip title="Remove">
          <IconButton onClick={onClick}>
            <img src={deleteIcon} alt="delete icon" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </StyledCustomCard>
  );
};

export default FavoriteItem;
