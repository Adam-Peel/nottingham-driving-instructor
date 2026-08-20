import { Box, Chip, styled, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ImagePlaceholder from "./ImagePlaceholder";

const PackageCard = ({ title, price, hours, transmission, includes, popular }) => {
  const CardBox = styled(Box)(({ theme }) => ({
    borderRadius: "10px",
    overflow: "hidden",
    maxWidth: 350,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: popular ? "0 8px 24px rgba(23, 39, 95, 0.15)" : "none",
    border: popular ? "2px solid #17275F" : "2px solid transparent",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      maxWidth: 400,
    },
  }));

  const InfoRow = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }));

  return (
    <CardBox>
      {popular && (
        <Chip
          label="Most Popular"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "#17275F",
            color: "#fff",
            fontWeight: "700",
          }}
        />
      )}

      <ImagePlaceholder label="Photo: pupil driving lesson" minHeight={180} sx={{ borderRadius: 0, border: "none" }} />

      <Box sx={{ padding: "1.25rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700", fontSize: "20px", color: "#000339" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "800", fontSize: "28px", color: "#17275F", my: 1 }}>
          £{price}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", mt: 2 }}>
          <InfoRow>
            <AccessTimeIcon sx={{ fontSize: 18, color: "#7D8589" }} />
            <Typography variant="body2" sx={{ color: "#5A6473" }}>
              {hours} hours of tuition
            </Typography>
          </InfoRow>
          <InfoRow>
            <SettingsIcon sx={{ fontSize: 18, color: "#7D8589" }} />
            <Typography variant="body2" sx={{ color: "#5A6473" }}>
              {transmission}
            </Typography>
          </InfoRow>
          <InfoRow>
            <CheckCircleIcon sx={{ fontSize: 18, color: "#7D8589" }} />
            <Typography variant="body2" sx={{ color: "#5A6473" }}>
              {includes}
            </Typography>
          </InfoRow>
        </Box>
      </Box>
    </CardBox>
  );
};

export default PackageCard;
