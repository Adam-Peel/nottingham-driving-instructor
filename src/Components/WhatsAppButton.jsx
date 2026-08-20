import { Box, styled, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WHATSAPP_NUMBER } from "../data/contact";

const FloatingLink = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: theme.spacing(3),
  bottom: theme.spacing(3),
  zIndex: 1200,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "#25D366",
  color: "#fff",
  padding: "0.65rem 1.1rem",
  borderRadius: "999px",
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(37, 211, 102, 0.4)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1EBE57",
  },
  [theme.breakpoints.down("sm")]: {
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    padding: "0.65rem",
    "& .whatsapp-btn-label": {
      display: "none",
    },
  },
}));

const WhatsAppButton = () => {
  return (
    <FloatingLink
      component="a"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Nick on WhatsApp (placeholder number)"
    >
      <WhatsAppIcon />
      <Typography
        className="whatsapp-btn-label"
        variant="body2"
        sx={{ fontWeight: "700", fontSize: "14px" }}
      >
        WhatsApp Me
      </Typography>
    </FloatingLink>
  );
};

export default WhatsAppButton;
