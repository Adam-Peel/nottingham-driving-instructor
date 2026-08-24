import { Box, Container, Typography } from "@mui/material";
import { FACEBOOK_URL } from "../data/contact";

// Meta's Page Plugin — no API key or access token needed for a public page.
// Renders as a plain iframe, so it just works without any script loading or
// lifecycle handling on our end. See developers.facebook.com/docs/plugins/page-plugin/
//
// small_header/hide_cover trim the page-identity chrome so more of the fixed
// height actually shows post content, and scrolling is left enabled (below)
// since post length varies — without it, anything past the fixed height is
// simply invisible rather than scrollable.
const PLUGIN_SRC = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_URL
)}&tabs=timeline&width=500&height=750&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&colorscheme=dark`;

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
          {/*
            Plain native iframe, not MUI's Box component="iframe": MUI's Box
            treats `width`/`height` as style shorthand props and swallows
            them rather than forwarding real HTML attributes, so the actual
            DOM iframe silently fell back to the browser's ~150px default
            height regardless of what was passed in. A bare <iframe> avoids
            that entirely.
          */}
          <iframe
            src={PLUGIN_SRC}
            title="Nick Goodchild ADI on Facebook"
            width="100%"
            height="750"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{ border: "none", overflow: "hidden", borderRadius: "10px", display: "block" }}
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
