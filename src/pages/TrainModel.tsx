import React from "react";
import SlideNav from "../components/SlideNav";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

let model = [
  {
    name: "csv1",
    id: 1,
    date: "123",
    records: 100,
  },
  {
    name: "csv2",
    id: 2,
    date: "123",
    records: 100,
  },
];

export default function TrainModel() {
  React.useEffect(() => {});
  const [checked, setChecked] = React.useState<number[]>([]);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SlideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Train Model</h1>
          <h2>Dataset</h2>
          <FormGroup>
            <Box
              maxWidth={1000}
              sx={{
                border: "1px solid grey",
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 2,
                marginBottom: 2,
                borderRadius: "16px",
              }}
            >
              {model.map((file) => (
                <Stack
                  key={file.id}
                  sx={{
                    border: "1px solid grey",
                    padding: 2,
                    marginBottom: 2,
                    borderRadius: "16px",
                  }}
                  direction="row"
                  alignItems="center" // Align items vertically in the center
                  justifyContent="space-between" // Distribute items evenly in the horizontal direction
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(event) => {
                          if (event.target.checked) {
                            setChecked((prev: number[]) => [...prev, file.id]);
                          } else {
                            setChecked((prev: number[]) =>
                              prev.filter((id) => id !== file.id)
                            );
                          }
                        }}
                      />
                    }
                    label={file.name}
                  />
                  <Typography variant="body1">
                    Records: {file.records} - Date: {file.date}
                  </Typography>
                </Stack>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              sx={{ width: "auto", maxWidth: "180px" }}
              onClick={() => {
                console.log(checked);
              }}
            >
              Re-train model
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </>
  );
}
