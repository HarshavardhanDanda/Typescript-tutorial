import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "../../atoms/typography/Typography";

const useStyles = makeStyles({
  styleButton: {
    width: "296px",
    height: "44px",
    backgroundColor: "rgba(44, 224, 128, 1)",
    borderRadius: 0,
    border: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 194, 99, 1)",
    },
  },
});

interface Props {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const Buttons = (props: Props) => {
  const classes = useStyles();
  return (
    <Button
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      size={props.size}
      className={classes.styleButton}
      href={props.href}
      style={props.style}
      onClick={props.onClick}
    >
      <Typography>{props.children}</Typography>
      
    </Button>
  );
};

export default Buttons;