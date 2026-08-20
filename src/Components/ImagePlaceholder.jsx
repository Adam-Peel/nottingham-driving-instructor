import { Box, Typography, styled } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

/**
 * Stand-in for a real photo/logo. Swap any <ImagePlaceholder /> for an
 * <img src={...} /> once real assets exist — the `label` prop documents
 * what should go there.
 */
const Frame = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 200,
  borderRadius: "10px",
  border: "2px dashed #24354e",
  backgroundColor: "#1b1d1e",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(3),
  textAlign: "center",
}));

const ImagePlaceholder = ({ label, minHeight = 200, sx }) => {
  return (
    <Frame sx={{ minHeight, ...sx }}>
      <ImageOutlinedIcon sx={{ fontSize: 36, color: "#b3aca2" }} />
      <Typography
        variant="body2"
        sx={{ color: "#9d9588", fontWeight: "500", fontSize: "13px" }}
      >
        {label || "Image placeholder"}
      </Typography>
    </Frame>
  );
};

export default ImagePlaceholder;
