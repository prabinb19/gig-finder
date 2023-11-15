import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Mail as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
// import { Link } from "@mui/material";
import Link from "next/link";
import { APP_TITLE } from "../config/conf";


//This is our Landing Page
export default function Home() {

  return (
    <Box >
        {/* Page Title */}
        <Typography variant="h2" >
          {APP_TITLE}
        </Typography>

      <Typography variant="h2">Landing Page </Typography>

    </Box>
  );
}
