import { Button, styled } from "@mui/material";

const CustomButton = ({ backgroundColor, color, buttonText, heroBtn, href }) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: heroBtn && theme.spacing(0, "auto", 3, "auto"),
      width: heroBtn && "90%",
    },
  }));

  return (
    <StyledButton {...(href ? { component: "a", href } : {})}>
      {buttonText}
    </StyledButton>
  );
};

export default CustomButton;
