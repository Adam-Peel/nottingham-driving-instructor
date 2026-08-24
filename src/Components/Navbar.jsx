import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StarIcon from "@mui/icons-material/Star";
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

const NAV_LINKS = [
  { label: "Home", href: "#top", icon: HomeIcon },
  { label: "Lessons", href: "#lessons", icon: DirectionsCarIcon },
  { label: "Pricing", href: "#pricing", icon: LocalOfferIcon },
  { label: "Reviews", href: "#reviews", icon: StarIcon },
  { label: "About", href: "#about", icon: InfoIcon },
  { label: "FAQ", href: "#faq", icon: HelpOutlineIcon },
  { label: "Contact", href: "#contact", icon: CallIcon },
];

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
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <ListItem key={link.label} disablePadding>
              <ListItemButton component="a" href={link.href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#b0aa9f",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
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
    textDecoration: "none",
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
          <LogoMark component="a" href="#top">
            <LPlate>L</LPlate>
            <Typography sx={{ fontWeight: "800", fontSize: "18px", color: "#d6d2cd" }}>
              Nick Goodchild ADI
            </Typography>
          </LogoMark>
        </Box>

        <NavbarLinksBox>
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink key={label} component="a" href={href} variant="body2">
              {label}
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
          href="#contact"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
