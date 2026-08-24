import { Box, Chip, Container, styled, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GoogleIcon from "@mui/icons-material/Google";
import { FACEBOOK_URL, GOOGLE_BUSINESS_URL } from "../data/contact";

const BADGES = [
  { label: "DVSA Approved Instructor (ADI)", icon: <VerifiedIcon /> },
  { label: "Fully Insured Dual-Control Car", icon: <ShieldIcon /> },
  { label: "DBS Checked", icon: <FactCheckIcon /> },
  { label: "Pass Plus Registered", icon: <WorkspacePremiumIcon /> },
];

const Credentials = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box id="reviews" sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography sx={{ fontWeight: "800", fontSize: "18px", color: "#d6d2cd" }}>
            Nick Goodchild ADI
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#9a9184",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            See what people say about Nick:
          </Typography>
        </CustomBox>

        <Box>
          <Box sx={{ display: "flex", gap: "4px" }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} sx={{ color: "#ffc71e" }} />
            ))}
          </Box>
          <Box
            component="a"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "block",
              color: "#9a9184",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
              textDecoration: "none",
              "&:hover": { color: "#e8e6e3" },
            }}
          >
            Read Nick's reviews on Facebook (5 so far)
          </Box>
          <Box
            component="a"
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#9a9184",
              fontSize: "14px",
              fontWeight: "600",
              mt: 1,
              textDecoration: "none",
              "&:hover": { color: "#e8e6e3" },
            }}
          >
            <GoogleIcon sx={{ fontSize: 16 }} />
            Find Nick on Google
          </Box>
        </Box>
      </CustomContainer>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {BADGES.map((badge) => (
          <Chip
            key={badge.label}
            icon={badge.icon}
            label={badge.label}
            sx={{
              backgroundColor: "#1b1d1e",
              color: "#9dbee7",
              fontWeight: "600",
              fontSize: "14px",
              padding: "18px 8px",
              "& .MuiChip-icon": { color: "#9dbee7" },
            }}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Credentials;
