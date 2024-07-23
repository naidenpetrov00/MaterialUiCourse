import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyStyledAccordion = styled(Accordion)(({ theme }) => ({
  fontFamily: "Roboto",
  maxWidth: { sm: "80vw", lg: "90vw" },
  [theme.breakpoints.down("sm")]: { maxWidth: "80vw" },
  [theme.breakpoints.down("lg")]: { maxWidth: "90vw" },
  bgcolor: "primary.main",
  "&:hover": { bgcolor: "primary.dark" },
}));

function App() {
  return (
    <>
      <MyStyledAccordion>
        <AccordionSummary>What is MUI</AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "secondary.main" }}>
          MUI is React UI Library
        </AccordionDetails>
      </MyStyledAccordion>
      <Accordion
        sx={{
          fontFamily: "Verdana",
          bgcolor: "primary.main",
          maxWidth: { sm: "80vw", lg: "90vw" },
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        <AccordionSummary>What is MUI</AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "secondary.main" }}>
          MUI is React UI Library
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default App;
