import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";
import { PICKUP_AREAS } from "../data/contact";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#d7d3ce",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#1f2223", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#9a9184",
                fontWeight: "500",
                mb: 4,
              }}
            >
              Welcome to DriveWell Nottingham
            </Typography>
            <Title variant="h1">
              Learn to drive with confidence, right here in Nottingham.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#a7a094", my: 4 }}
            >
              DVSA approved manual driving lessons for beginners, nervous
              drivers and test-ready learners, at £45 per hour. Pick-ups
              across {PICKUP_AREAS.join(", ")}, at a pace that suits you.
            </Typography>
            <CustomButton
              backgroundColor="#121f4c"
              color="#e8e6e3"
              buttonText="Book Your First Lesson"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}cover.jpg`}
              alt="Nick's driving school car parked on a Nottinghamshire road"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 420,
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
