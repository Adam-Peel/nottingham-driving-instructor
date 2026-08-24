import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  EMAIL,
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
} from "../data/contact";

const HIGHWAY_CODE_URL = "https://www.gov.uk/guidance/the-highway-code";
const THEORY_TEST_URL = "https://www.gov.uk/theory-test";

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

  const FooterLink = styled("a")(() => ({
    display: "inline-block",
    fontSize: "16px",
    color: "#9a9184",
    fontWeight: "300",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#e8e6e3",
    },
  }));

  const ColumnHeading = styled(Typography)(() => ({
    fontSize: "20px",
    color: "#d6d2cd",
    fontWeight: "700",
    marginBottom: "16px",
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <ColumnHeading>Lessons</ColumnHeading>

          <FooterLink href="#lessons">Beginner Lessons</FooterLink>
          <br />
          <FooterLink href="#lessons">Pass Plus</FooterLink>
          <br />
          <FooterLink href="#pricing">Intensive Courses</FooterLink>
          <br />
          <FooterLink href="#pricing">Refresher Lessons</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Resources</ColumnHeading>

          <FooterLink href={THEORY_TEST_URL} target="_blank" rel="noopener noreferrer">
            Theory Test Tips
          </FooterLink>
          <br />
          <FooterLink href={HIGHWAY_CODE_URL} target="_blank" rel="noopener noreferrer">
            Highway Code
          </FooterLink>
          <br />
          <FooterLink href="#pricing">Mock Test Booking</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Company</ColumnHeading>

          <FooterLink href="#about">About</FooterLink>
          <br />
          <FooterLink href="#reviews">Reviews</FooterLink>
          <br />
          <FooterLink href="#faq">Areas Covered</FooterLink>
          <br />
          <FooterLink href="#contact">Contact</FooterLink>
        </Box>

        <Box>
          <ColumnHeading>Get in touch</ColumnHeading>

          <Typography
            component="a"
            href={`tel:${PHONE_TEL}`}
            sx={{
              display: "block",
              fontSize: "16px",
              color: "#9a9184",
              fontWeight: "500",
              mb: 1,
              textDecoration: "none",
              "&:hover": { color: "#e8e6e3" },
            }}
          >
            {PHONE_DISPLAY}
          </Typography>
          <Typography
            component="a"
            href={`mailto:${EMAIL}`}
            sx={{
              display: "block",
              fontSize: "16px",
              color: "#9a9184",
              fontWeight: "500",
              mb: 2,
              textDecoration: "none",
              "&:hover": { color: "#e8e6e3" },
            }}
          >
            {EMAIL}
          </Typography>

          <IconBox>
            <Box
              component="a"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              sx={{ display: "flex", color: "#9a9184", "&:hover": { color: "#2d96f3" } }}
            >
              <FacebookIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Box
              component="a"
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find us on Google"
              sx={{ display: "flex", color: "#9a9184", "&:hover": { color: "#e8e6e3" } }}
            >
              <GoogleIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Box
              component="a"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              sx={{ display: "flex", color: "#9a9184", "&:hover": { color: "#40dd7b" } }}
            >
              <WhatsAppIcon sx={{ cursor: "pointer" }} />
            </Box>
          </IconBox>
        </Box>
      </CustomContainer>

      <Typography
        sx={{
          textAlign: "center",
          color: "#b3aca2",
          fontSize: "13px",
          mt: 8,
        }}
      >
        © 2026 Nick Goodchild ADI. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
