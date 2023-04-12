import React from "react";
import { Avatar, Button, Grid } from "@mui/material";
import "./main_content.scss";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Activities from "./activities/Activities";

const ActivityTypeCreation = (props) => {
  return (
    <Grid container className="main">
      {/* top nav bar  */}
      <Grid className="main_top_bar">
        <Grid>
          <Avatar />
          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <span>Username</span>
            <span>Role name</span>
          </Grid>
        </Grid>
      </Grid>
      {/* left nav bar */}
      <Grid className="main_left_bar">
        <Button
          onClick={() => {}}
          startIcon={<HomeIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />}
        >
          <span>Home</span>
          <ChevronRightIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
        </Button>
        <Button
          onClick={() => {}}
          startIcon={
            <LeaderboardIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
          }
        >
          <span>Leads</span>
          <ChevronRightIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
        </Button>
        <Button
          onClick={() => {}}
          startIcon={
            <ChecklistIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
          }
        >
          <span>Activities</span>
          <ChevronRightIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
        </Button>
      </Grid>

      <Grid className="main_content">
        <Activities />
      </Grid>
    </Grid>
  );
};

export default ActivityTypeCreation;
