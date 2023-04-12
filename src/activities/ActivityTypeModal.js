import {
  Dialog,
  Grid,
  DialogContent,
  Slide,
  IconButton,
  DialogTitle,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./activity_modal.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import ActivitiesTypeModalItem from "./ActivitiesTypeModalItem";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ActivityTypeModal = (props) => {
  const { isOpenModal, setOpenModal } = props;
  const [step, setStep] = useState(1);
  const [buttonClick, setButtonClick] = useState(false);
  const [activityTitle, setActivityTitle] = useState("");
  const [textFieldHandler, setTextFieldHandler] = useState("");
  const [autocompleteHandler, setAutocompleteHandler] = useState([]);
  const [dragData, setDragData] = useState();

  const handleSave = (value) => {
    setButtonClick(!buttonClick);
    if (value === 2) {
      setTimeout(() => setStep(value), 1000);
    }
  };
  useLayoutEffect(() => {
    if (step === 2) {
      setButtonClick(false);
    }
  }, [step]);

  const handleDrag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  };
  const handleAllowDrop = (event) => {
    event.preventDefault();
  };
  const ModalData = (
    <Grid container spacing={1} direction="column" className="activity_modal">
      {step === 1 ? (
        <Grid item md={12} xs={12} className="activity_modal_title">
          <label>Activity Title</label>
          <TextField
            value={activityTitle}
            onChange={(event) => setActivityTitle(event.target.value)}
          />
        </Grid>
      ) : (
        <Grid container direction="row" className="activity_modal_rnd">
          <Grid item md={4} sm={12} xs={12} className="activity_modal_rnd_left">
            {/* Text */}
            <div
              id="ddzone1-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="text">
                <span>Text</span>
                <TextField
                  value={textFieldHandler}
                  size="small"
                  type="text"
                  disabled
                  onChange={(event) => setTextFieldHandler(event.target.value)}
                />
              </div>
            </div>

            {/* Number */}
            <div
              id="ddzone2-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="number">
                <span>Number</span>
                <TextField
                  value={textFieldHandler}
                  size="small"
                  type="number"
                  disabled
                  onChange={(event) => setTextFieldHandler(event.target.value)}
                />
              </div>
            </div>
            {/* Date */}
            <div
              id="ddzone3-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="date">
                <span>Date</span>
                <TextField
                  size="small"
                  value={textFieldHandler}
                  type="date"
                  disabled
                  onChange={(event) => setTextFieldHandler(event.target.value)}
                />
              </div>
            </div>
            {/* Time */}
            <div
              id="ddzone4-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="time">
                <span>Time</span>
                <TextField
                  value={textFieldHandler}
                  size="small"
                  type="time"
                  disabled
                  onChange={(event) => setTextFieldHandler(event.target.value)}
                />
              </div>
            </div>
            {/* Select */}
            <div
              id="ddzone5-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="select">
                <span>Select</span>
                <Autocomplete
                  size="small"
                  value={autocompleteHandler}
                  disabled
                  onChange={(event, newValue) => {
                    setAutocompleteHandler(newValue);
                  }}
                  options={[{ name: "John" }, { name: "Michel" }]}
                  getOptionLabel={(option) => option.name ?? ""}
                  renderInput={(params) => <TextField {...params} disabled />}
                />
              </div>
            </div>
            {/* File */}
            <div
              id="ddzone6-start"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              <div draggable="true" onDragStart={handleDrag} id="file">
                <span>File</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CloudDownloadIcon
                    sx={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                  <span>Please select some file</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={8}
            sm={12}
            xs={12}
            container
            className="activity_modal_rnd_right"
          >
            <div
              id="ddzone1-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
            <div
              id="ddzone2-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
            <div
              id="ddzone3-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
            <div
              id="ddzone4-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
            <div
              id="ddzone5-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
            <div
              id="ddzone6-end"
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            ></div>
          </Grid>
        </Grid>
      )}

      <Grid item md={12} xs={12}>
        <LoadingButton
          loading={buttonClick}
          variant="contained"
          onClick={() => handleSave(2)}
        >
          Continue
        </LoadingButton>
      </Grid>
    </Grid>
  );

  return (
    <Dialog
      open={isOpenModal}
      TransitionComponent={Transition}
      fullWidth
      maxWidth={step === 1 ? "md" : "xl"}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <span>Create Activity</span>
        <IconButton
          onClick={() => [
            setOpenModal(false),
            setButtonClick(false),
            setStep(1),
          ]}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#000",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{ModalData}</DialogContent>
    </Dialog>
  );
};

export default ActivityTypeModal;
