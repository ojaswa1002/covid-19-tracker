import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, isRed, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox && ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        {/* Cases */}
        <h3 className={`infoBox_cases && ${!isRed && "infoBox_cases--green"} `}>
          {cases}
        </h3>
        {/* Total */}
        <Typography className="infoBox_total" color="textPrimary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
