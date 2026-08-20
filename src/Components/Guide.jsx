import { Box, styled, Typography } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import SignpostIcon from "@mui/icons-material/Signpost";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const STEPS = [
  {
    icon: PhoneInTalkIcon,
    title: "Get in Touch",
    tag: "Free chat about your goals",
  },
  {
    icon: DirectionsCarFilledIcon,
    title: "Beginner Lessons",
    tag: "Master the basics",
  },
  {
    icon: SignpostIcon,
    title: "Building Confidence",
    tag: "Roundabouts & dual carriageways",
  },
  {
    icon: QuizIcon,
    title: "Mock Tests",
    tag: "Practice real test routes",
  },
  {
    icon: EmojiEventsIcon,
    title: "Pass & Beyond",
    tag: "Pass Plus & motorway lessons",
  },
];

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Your journey from first lesson to first solo drive, step by step
        </Typography>
      </CustomBox>

      <GuidesBox>
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <GuideBox key={step.title}>
              <Icon sx={{ fontSize: 40, color: "#0689FF" }} />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#3B3c45",
                  my: 1,
                }}
              >
                {step.title}
              </Typography>
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
                >
                  {step.tag}
                </Typography>
                <ArrowRightAltIcon style={{ color: "#0689FF" }} />
              </Box>
            </GuideBox>
          );
        })}
      </GuidesBox>

      <CustomButton
        backgroundColor="#17275F"
        color="#fff"
        buttonText="See Full Services"
        guideBtn={true}
      />
    </Box>
  );
};

export default Guide;
