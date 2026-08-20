import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CallIcon from "@mui/icons-material/Call";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "../data/contact";

const NAV_LINKS = ["Home", "Lessons", "Pricing", "Test Prep", "About", "FAQ", "Contact"];

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {NAV_LINKS.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <DirectionsCarIcon />}
                {index === 2 && <LocalOfferIcon />}
                {index === 3 && <QuizIcon />}
                {index === 4 && <InfoIcon />}
                {index === 5 && <HelpOutlineIcon />}
                {index === 6 && <CallIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#b0aa9f",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#9dbee7",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const LogoMark = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const LPlate = styled(Box)(() => ({
    width: 36,
    height: 36,
    borderRadius: "6px",
    border: "2px solid #2b49b1",
    backgroundColor: "#181a1b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "18px",
    color: "#df3c42",
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <LogoMark>
            <LPlate>L</LPlate>
            <Typography sx={{ fontWeight: "800", fontSize: "18px", color: "#d6d2cd" }}>
              DriveWell Nottingham
            </Typography>
          </LogoMark>
        </Box>

        <NavbarLinksBox>
          {NAV_LINKS.map((text) => (
            <NavLink key={text} variant="body2">
              {text}
            </NavLink>
          ))}
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Box
          component="a"
          href={`tel:${PHONE_TEL}`}
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
          }}
        >
          <CallIcon sx={{ fontSize: 18, color: "#9dbee7" }} />
          <NavLink variant="body2">{PHONE_DISPLAY}</NavLink>
        </Box>
        <CustomButton
          backgroundColor="#121f4c"
          color="#e8e6e3"
          buttonText="Book a Lesson"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
