import { CardContent, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StyledCustomCard from "../card/StyledCustomCard";
import StyledCustomCardMedia from "../cardMedia/StyledCustomCardMedia";
import "../cityListItem/CityListItem.css";
import StyledCustomTypography from "../typography/StyledCustomTypography";
import { useSelector } from "react-redux";

const CityListItem = ({ city }) => {
  const loading = useSelector((state) => state.cities.loading);
  return (
    <Link className="city-link" to={`/city-details/${city.id}`}>
      <StyledCustomCard>
        {loading ? (
          <Skeleton variant="rectangular" width={270} height={250} />
        ) : (
          <StyledCustomCardMedia image={city.images[0]} />
        )}
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
