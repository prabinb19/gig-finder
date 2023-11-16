import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import {
  Mail as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { APP_TITLE } from "../config/conf";

export default function Home() {
  return (
    <Box textAlign="center" mt={10}>
      {/* Gradient Stripe */}
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #00bcd4, #4caf50)",
          height: "150px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      />

      {/* Page Title */}
      <Typography variant="h2" style={{ marginBottom: "40px" }}>
        {APP_TITLE}
      </Typography>

      {/* Welcome Message */}
      <Typography variant="h4" style={{ margin: "200px 0" }}>
        Trending Gigs Near You
      </Typography>

      {/* Additional content (e.g., social media icons) */}
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <GitHubIcon />
        </Grid>
        <Grid item>
          <LinkedInIcon />
        </Grid>
      </Grid>

      {/* Navigation Link */}
      <Box style={{ marginTop: 20 }}>
        {/* Replace '/dashboard' with the actual path to your dashboard page */}
        <Link href="/login">Go to Login</Link>
      </Box>
    </Box>
  );
}
