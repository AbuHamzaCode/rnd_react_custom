import React, { useState } from "react";
import { Avatar, Button, Grid } from "@mui/material";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import "./activities.scss";
import ActivityTypeModal from "./ActivityTypeModal";

const Activities = (props) => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <Grid container className="activities_main">
      <Button
        onClick={() => setOpenModal(true)}
        startIcon={
          <DataSaverOnIcon sx={{ maxHeight: "100%", maxWidth: "100%" }} />
        }
        className="activities_main_creation"
      >
        Add Activities
      </Button>

      <ActivityTypeModal
        setOpenModal={setOpenModal}
        isOpenModal={isOpenModal}
      />
    </Grid>
  );
};

export default Activities;
