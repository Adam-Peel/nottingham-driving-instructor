import { Box, styled, Typography } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import SignpostIcon from "@mui/icons-material/Signpost";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const INTRO_STEP = {
  icon: PhoneInTalkIcon,
  title: "Get in Touch",
  tag: "Free chat about your goals",
  points: [
    "Quick chat about your experience so far and what you want from lessons",
    "Agree a regular day, time and pick-up point",
    "Manual, dual-control car — the same one you'd take your test in",
    "No pressure — a single taster lesson is fine if you're not ready to commit",
  ],
};

const STEPS = [
  {
    icon: DirectionsCarFilledIcon,
    title: "Beginner Lessons",
    tag: "Master the basics",
    points: [
      "Cockpit checks and getting comfortable with the controls",
      "Clutch control — moving off and stopping smoothly",
      "Changing up and down through the gears",
      "Steering, road positioning and observation",
      "Turning at junctions, left and right",
    ],
  },
  {
    icon: SignpostIcon,
    title: "Building Confidence",
    tag: "Roundabouts & dual carriageways",
    points: [
      "Roundabouts, from mini to multi-lane",
      "Dual carriageways and higher-speed roads",
      "Meeting traffic and lane discipline",
      "Reversing manoeuvres — bay parking, parallel park, pulling up on the right",
      "Reading hazards and anticipating other road users",
    ],
  },
  {
    icon: QuizIcon,
    title: "Mock Tests",
    tag: "Practice real test routes",
    points: [
      "Full mock test run on a real DVSA test route",
      "Independent driving — following directions or a sat nav",
      "\"Show me, tell me\" vehicle safety questions",
      "Honest feedback on faults to iron out before test day",
      "Building a calm, consistent test-day routine",
    ],
  },
  {
    icon: EmojiEventsIcon,
    title: "Pass & Beyond",
    tag: "Pass Plus & motorway lessons",
    points: [
      "What to expect on the day, from arrival to result",
      "Pass Plus course for newly qualified drivers",
      "Confidence-building drives after the test",
      "Top-up lessons any time you want a refresher",
    ],
  },
];

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: theme.spacing(3),
    width: "90%",
    maxWidth: "1200px",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  }));

  const StepCard = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    borderRadius: "10px",
    border: "1px solid #24354e",
    backgroundColor: "#181a1b",
  }));

  const IntroBanner = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(4),
    width: "90%",
    maxWidth: "1200px",
    marginTop: theme.spacing(5),
    padding: "24px 32px",
    borderRadius: "10px",
    border: "1px solid #24354e",
    backgroundColor: "#181a1b",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
    },
  }));

  const IntroHeading = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    flex: "0 0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  const IntroPoints = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    columnGap: theme.spacing(4),
    rowGap: theme.spacing(1.5),
    flex: 1,
    alignSelf: "center",
  }));

  const PointRow = styled(Box)(() => ({
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginTop: "10px",
  }));

  return (
    <Box
      id="lessons"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#00022e",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#d6d2cd", my: 3 }}
      >
        How it works
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#a7a094",
            textAlign: "center",
          }}
        >
          Your journey from first lesson to first solo drive, step by step
        </Typography>
      </CustomBox>

      <IntroBanner>
        <IntroHeading>
          <PhoneInTalkIcon sx={{ fontSize: 36, color: "#1e9cff" }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#c0bab2" }}>
              {INTRO_STEP.title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "#1e9cff", mt: 0.5 }}>
              {INTRO_STEP.tag}
            </Typography>
          </Box>
        </IntroHeading>

        <IntroPoints>
          {INTRO_STEP.points.map((point) => (
            <PointRow key={point} sx={{ mt: 0, flex: "1 1 260px" }}>
              <CheckCircleIcon sx={{ fontSize: 16, color: "#6c7a8f", mt: "3px", flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "#a7a094", fontSize: "14.5px", lineHeight: "22px" }}>
                {point}
              </Typography>
            </PointRow>
          ))}
        </IntroPoints>
      </IntroBanner>

      <GuidesGrid>
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <StepCard key={step.title}>
              <Icon sx={{ fontSize: 36, color: "#1e9cff" }} />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#c0bab2",
                  mt: 1.5,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "14px", color: "#1e9cff", mt: 0.5 }}
              >
                {step.tag}
              </Typography>

              <Box sx={{ mt: 1 }}>
                {step.points.map((point) => (
                  <PointRow key={point}>
                    <CheckCircleIcon sx={{ fontSize: 16, color: "#6c7a8f", mt: "3px", flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "#a7a094", fontSize: "14.5px", lineHeight: "22px" }}>
                      {point}
                    </Typography>
                  </PointRow>
                ))}
              </Box>
            </StepCard>
          );
        })}
      </GuidesGrid>
    </Box>
  );
};

export default Guide;
