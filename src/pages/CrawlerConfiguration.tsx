import React from "react";
import SlideNav from "../components/SlideNav";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Textarea from "@mui/joy/Textarea";
import CircularProgress from "@mui/material/CircularProgress";

export default function CrawlerConfiguration() {
  const [url, setUrl] = React.useState("");
  const [isWebCrwaler, setIsWebCrawler] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [reponse, setResponse] = React.useState(null);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SlideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Crawler Configuration</h1>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              disabled={isWebCrwaler}
              onClick={() => setIsWebCrawler(!isWebCrwaler)}
            >
              Website Crawler
            </Button>
            <Button
              variant="contained"
              color="success"
              disabled={!isWebCrwaler}
              onClick={() => setIsWebCrawler(!isWebCrwaler)}
            >
              Facebook Crawler
            </Button>
          </Stack>
          <br />
          <Box maxWidth={1000}>
            <Textarea
              minRows={6}
              placeholder="Input URL here"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Box>
          <br />
          <Button variant="contained" color="success">
            Crawler
          </Button>
          <br />
          <br />
          <br />
          {reponse && (
            <Box
              maxWidth={300}
              sx={{
                border: "1px solid grey",
                padding: 2,
                borderRadius: "16px",
              }}
            >
              - Total records:
              <br />- Date:
              <br />- File CSV:
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
