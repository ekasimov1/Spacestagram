import React from "react";
import { Typography, Grid } from "@mui/material";


function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <Grid item lg={12} container justifyContent="center" alignItems="flex-end">
      <Typography variant="subtitle1" gutterBottom component="div" fontSize="1rem" sx={{ color: "text.secondary" }}>Developed by Eugene Kasimov. Copyright {currentYear}</Typography>
   </Grid>);
}

export default Footer;