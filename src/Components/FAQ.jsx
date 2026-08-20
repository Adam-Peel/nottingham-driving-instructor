import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OTHER_AREAS_COVERED, PICKUP_AREAS } from "../data/contact";

const FAQS = [
  {
    question: "How much do lessons cost?",
    answer:
      "Lessons are £45 per hour, pay-as-you-go. Discounted multi-hour packages are also available — see the Lesson Packages section above.",
  },
  {
    question: "Do you teach manual or automatic?",
    answer: "Manual only, in a fully insured dual-control car.",
  },
  {
    question: "Which areas do you cover for pick-ups?",
    answer: `Core pick-up areas are ${PICKUP_AREAS.join(", ")}. Lessons also run further out in ${OTHER_AREAS_COVERED.join(", ")} — get in touch if you're not sure whether your area's covered.`,
  },
  {
    question: "How long is a lesson?",
    answer:
      "Standard lessons are 1 hour, but 1.5 and 2-hour lessons are available too, which can work better once you're covering more ground.",
  },
  {
    question: "Do you offer intensive courses?",
    answer:
      "Yes — the Intensive Course package bundles 20 hours of tuition with test day booking support for learners working towards a test date.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Please give at least 48 hours' notice to cancel or rebook a lesson, otherwise the lesson may still be charged.",
  },
  {
    question: "Is the test taken in the lesson car?",
    answer:
      "Yes, your test is taken in the same fully insured, dual-control manual car you learn in.",
  },
  {
    question: "How do I book my first lesson?",
    answer:
      "Use the contact form below, message on WhatsApp, or call directly — whichever's easiest for you.",
  },
];

const FAQ = () => {
  return (
    <Box sx={{ py: 10 }} id="faq">
      <Container sx={{ maxWidth: "760px !important" }}>
        <Typography
          sx={{
            color: "#000339",
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Frequently asked questions
        </Typography>
        <Typography
          sx={{ color: "#5A6473", fontSize: "16px", mt: 1, textAlign: "center" }}
        >
          Everything learners usually ask before booking their first lesson.
        </Typography>

        <Box sx={{ mt: 5 }}>
          {FAQS.map((faq) => (
            <Accordion
              key={faq.question}
              disableGutters
              sx={{
                mb: 1.5,
                borderRadius: "10px !important",
                overflow: "hidden",
                boxShadow: "none",
                border: "1px solid #E3E9F2",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#17275F" }} />}
                sx={{
                  backgroundColor: "#F5FAFE",
                  "& .MuiAccordionSummary-content": { my: 1.5 },
                }}
              >
                <Typography sx={{ fontWeight: "700", fontSize: "16px", color: "#000339" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "#fff", py: 2 }}>
                <Typography sx={{ color: "#5A6473", fontSize: "15px", lineHeight: "24px" }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
