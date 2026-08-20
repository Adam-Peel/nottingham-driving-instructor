import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#121f4c",
    minHeight: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 3, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
      textAlign: "center",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "#e8e6e3", fontWeight: "700" }}
          >
            Ready to get on the road?
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#c8c3bc", fontWeight: "500", my: 3 }}
          >
            Book your first lesson today and take the first step towards
            passing your test.
          </Typography>

          <CustomButton
            backgroundColor="#181a1b"
            color="#9dbee7"
            buttonText="Get In Touch"
            getStartedBtn={true}
          />
        </Box>

        <DirectionsCarFilledIcon
          sx={{ fontSize: { xs: 140, md: 200 }, color: "#8da8cb" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
