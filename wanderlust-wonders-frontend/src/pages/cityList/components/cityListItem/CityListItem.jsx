import { CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../cityListItem/CityListItem.css";
import StyledCustomCard from "../card/StyledCustomCard";
import StyledCustomCardMedia from "../cardMedia/StyledCustomCardMedia";
import StyledCustomTypography from "../typography/StyledCustomTypography";

const CityListItem = ({ city }) => {
  return (
    <Link className="city-link" to={`/city-details/${city.id}`}>
      <StyledCustomCard>
        <StyledCustomCardMedia image={city.images[0]} />
        <CardContent>
          <StyledCustomTypography fontSize={20} fontWeight={700}>
            {city.name + ", "}
          </StyledCustomTypography>

          <StyledCustomTypography fontSize={14} fontWeight={500}>
            {city.country}
          </StyledCustomTypography>

          <StyledCustomTypography fontSize={14} fontWeight={500}>
            {city.state}
          </StyledCustomTypography>
        </CardContent>
      </StyledCustomCard>
    </Link>
  );
};

export default CityListItem;
