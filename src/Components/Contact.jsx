import { useState } from "react";
import { Box, Button, Container, styled, TextField, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "../data/contact";

const EMPTY_FORM = { name: "", email: "", phone: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: no backend/email service wired up yet — this just confirms
    // client-side. Hook up something like EmailJS, Formspree or a small
    // API route before this goes live.
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    maxWidth: 560,
    margin: "0 auto",
    marginTop: theme.spacing(5),
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#F5FAFE" }} id="contact">
      <Container sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}>
          Get in touch
        </Typography>
        <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Send a message and Nick will get back to you, or reach him
          directly:
        </Typography>
        <Typography sx={{ color: "#17275F", fontSize: "16px", fontWeight: "600", mt: 1 }}>
          {PHONE_DISPLAY} · {EMAIL}
        </Typography>

        <Box
          component="a"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            mt: 3,
            color: "#1EBE57",
            fontWeight: "700",
            fontSize: "14px",
            textDecoration: "none",
            "&:hover": { color: "#25D366" },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 20 }} />
          Message on WhatsApp
        </Box>

        <FormBox component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            required
            value={form.name}
            onChange={handleChange("name")}
          />
          <TextField
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
          />
          <TextField
            label="Phone (optional)"
            value={form.phone}
            onChange={handleChange("phone")}
          />
          <TextField
            label="Message"
            required
            multiline
            minRows={4}
            value={form.message}
            onChange={handleChange("message")}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#17275F",
              color: "#fff",
              fontWeight: "700",
              textTransform: "none",
              borderRadius: "7px",
              padding: "0.65rem 1.5rem",
              "&:hover": { backgroundColor: "#0E1A47" },
            }}
          >
            Send Message
          </Button>

          {submitted && (
            <Typography sx={{ color: "#17275F", fontWeight: "600", fontSize: "14px" }}>
              Thanks! This is a demo form — messages aren't sent anywhere
              yet, so follow up by phone or WhatsApp for now.
            </Typography>
          )}
        </FormBox>
      </Container>
    </Box>
  );
};

export default Contact;
