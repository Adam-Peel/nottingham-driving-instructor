import { Box, Chip, Container, styled, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShieldIcon from "@mui/icons-material/Shield";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

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
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography sx={{ fontWeight: "800", fontSize: "18px", color: "#000339" }}>
            DriveWell Nottingham
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            See what our pupils say about us:
          </Typography>
        </CustomBox>

        <Box>
          <Box sx={{ display: "flex", gap: "4px" }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} sx={{ color: "#FFC107" }} />
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (150+ Reviews) — placeholder figure
          </Typography>
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
              backgroundColor: "#F5FAFE",
              color: "#17275F",
              fontWeight: "600",
              fontSize: "14px",
              padding: "18px 8px",
              "& .MuiChip-icon": { color: "#17275F" },
            }}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Credentials;
