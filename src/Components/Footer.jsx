import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { EMAIL, FACEBOOK_URL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "../data/contact";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(() => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  const ColumnHeading = styled(Typography)(() => ({
    fontSize: "20px",
    color: "#1C1C1D",
    fontWeight: "700",
    marginBottom: "16px",
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <ColumnHeading>Lessons</ColumnHeading>

          <FooterLink>Beginner Lessons</FooterLink>
          <br />
          <FooterLink>Pass Plus</FooterLink>
          <br />
          <FooterLink>Intensive Courses</FooterLink>
          <br />
          <FooterLink>Refresher Lessons</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Resources</ColumnHeading>

          <FooterLink>Theory Test Tips</FooterLink>
          <br />
          <FooterLink>Highway Code</FooterLink>
          <br />
          <FooterLink>Mock Test Booking</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Company</ColumnHeading>

          <FooterLink>About</FooterLink>
          <br />
          <FooterLink>Reviews</FooterLink>
          <br />
          <FooterLink>Areas Covered</FooterLink>
          <br />
          <FooterLink>Contact</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Get in touch</ColumnHeading>

          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "500", mb: 1 }}>
            {PHONE_DISPLAY}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#7A7A7E", fontWeight: "500", mb: 2 }}>
            {EMAIL}
          </Typography>

          <IconBox>
            <Box
              component="a"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              sx={{ display: "flex", color: "#7A7A7E", "&:hover": { color: "#1877F2" } }}
            >
              <FacebookIcon sx={{ cursor: "pointer" }} />
            </Box>
            <InstagramIcon sx={{ cursor: "pointer", color: "#7A7A7E" }} />
            <Box
              component="a"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              sx={{ display: "flex", color: "#7A7A7E", "&:hover": { color: "#25D366" } }}
            >
              <WhatsAppIcon sx={{ cursor: "pointer" }} />
            </Box>
          </IconBox>
        </Box>
      </CustomContainer>

      <Typography
        sx={{
          textAlign: "center",
          color: "#9AA6BC",
          fontSize: "13px",
          mt: 8,
        }}
      >
        © 2026 DriveWell Nottingham. All rights reserved. — placeholder
        business name.
      </Typography>
    </Box>
  );
};

export default Footer;
