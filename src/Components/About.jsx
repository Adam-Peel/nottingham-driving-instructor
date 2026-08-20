import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const STATS = [
  { value: "500+", label: "Lessons taught" },
  { value: "95%", label: "First-time pass rate" },
  { value: "10+", label: "Years' experience" },
];

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }} id="about">
      <Container>
        <CustomBox>
          <ImgContainer>
            <Box
              component="img"
              src="/profile.jpg"
              alt="Nick Goodchild standing with his driving school car"
              sx={{
                width: "100%",
                maxWidth: 460,
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              Meet Nick Goodchild
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              Patient, friendly and DVSA approved, Nick has years of
              experience helping learners of all confidence levels pass
              first time in a fully manual, dual-control car. Local
              knowledge of test routes around Colwick and Chilwell test
              centres means every lesson builds towards the real thing —
              not just the basics. Every course is tailored to how you
              learn best, at a pace that never feels rushed.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
          {STATS.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>{stat.value}</LargeText>
              <SmallText>{stat.label}</SmallText>
            </Box>
          ))}
        </TextFlexbox>
        <Typography sx={{ color: "#9AA6BC", fontSize: "13px", textAlign: "center", mt: 3 }}>
          Figures above are placeholders — replace with real numbers.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
