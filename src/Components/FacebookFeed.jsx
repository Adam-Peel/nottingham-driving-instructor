import { Box, Container, Typography } from "@mui/material";
import { FACEBOOK_URL } from "../data/contact";

// Meta's Page Plugin — no API key or access token needed for a public page.
// Renders as a plain iframe, so it just works without any script loading or
// lifecycle handling on our end. See developers.facebook.com/docs/plugins/page-plugin/
const PLUGIN_SRC = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_URL
)}&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&colorscheme=dark`;

const FacebookFeed = () => {
  return (
    <Box sx={{ py: 8 }} id="latest">
      <Container sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#d6d2cd", fontSize: "35px", fontWeight: "bold" }}>
          Latest from Facebook
        </Typography>
        <Typography sx={{ color: "#a7a094", fontSize: "16px", mt: 1, mb: 4 }}>
          Nick posts updates, availability and pupil shout-outs here — no need to check
          two places.
        </Typography>

        <Box sx={{ maxWidth: 500, width: "100%", margin: "0 auto" }}>
          <Box
            component="iframe"
            src={PLUGIN_SRC}
            title="Nick Goodchild ADI on Facebook"
            width="100%"
            height="650"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            sx={{ border: "none", overflow: "hidden", borderRadius: "10px" }}
          />
        </Box>

        <Typography
          component="a"
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-block",
            mt: 2,
            color: "#9dbee7",
            fontSize: "14px",
            fontWeight: "600",
            textDecoration: "none",
            "&:hover": { color: "#e8e6e3" },
          }}
        >
          Not loading? View the page directly on Facebook →
        </Typography>
      </Container>
    </Box>
  );
};

export default FacebookFeed;
