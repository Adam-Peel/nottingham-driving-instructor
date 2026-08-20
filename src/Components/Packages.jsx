import { Box, Container, styled, Typography } from "@mui/material";
import PackageCard from "./PackageCard";
import { packages } from "../data/packages";

const Packages = () => {
  const PackagesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing(3),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PackagesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const TasterBanner = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(3),
    marginTop: theme.spacing(6),
    padding: theme.spacing(3, 4),
    borderRadius: "10px",
    border: "1px dashed #2b49b1",
    backgroundColor: "#121f4c",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#1b1d1e", py: 10 }} id="pricing">
      <Container>
        <PackagesTextBox>
          <Typography sx={{ color: "#d6d2cd", fontSize: "35px", fontWeight: "bold" }}>
            Lesson Packages
          </Typography>
          <Typography sx={{ color: "#a7a094", fontSize: "16px", mt: 1 }}>
            Standard rate is £45 per hour — pay-as-you-go lessons also
            available, or pick a package below.
          </Typography>
        </PackagesTextBox>

        <TasterBanner>
          <Box>
            <Typography sx={{ color: "#e8e6e3", fontSize: "20px", fontWeight: "700" }}>
              New to driving? Try a Taster Session
            </Typography>
            <Typography sx={{ color: "#9dbee7", fontSize: "15px", mt: 0.5 }}>
              1 hour, £45 — no obligation to book any further lessons.
            </Typography>
          </Box>
        </TasterBanner>

        <PackagesBox>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </PackagesBox>
      </Container>
    </Box>
  );
};

export default Packages;
