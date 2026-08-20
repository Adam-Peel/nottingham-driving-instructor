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

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }} id="pricing">
      <Container>
        <PackagesTextBox>
          <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}>
            Lesson Packages
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Standard rate is £45 per hour — pay-as-you-go lessons also
            available, or pick a package below.
          </Typography>
        </PackagesTextBox>

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
