import React from "react";
import "./Switch.css";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

function Switch({ onHandleSwitchClick, editMode }) {
  const handleSwitchClick = () => {
    onHandleSwitchClick();
  };

  return (
    <div onClick={handleSwitchClick} className="Switch">
      {!editMode ? (
        <PostAddOutlinedIcon sx={{ color: grey[50] }} />
      ) : (
        <CloseIcon sx={{ color: grey[50] }} />
      )}
    </div>
  );
}

export default Switch;
