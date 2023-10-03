import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/system";
import a from "../src/images/illustration-hero.svg";
import b from "../src/images/icon-music.svg";
import background from "../src/images/bg-desktop.svg";

function App() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: `url(${background}) no-repeat`,
          backgroundColor: "hsl(225, 100%, 94%)",
        }}
      >
        <Card
          sx={{
            maxWidth: 420,
            borderRadius: "20px",
            boxShadow: "hsl(245, 75%, 90%) 0px 7px 29px 0px",
            border: "none",
          }}
        >
          <CardMedia sx={{ height: 200 }} image={a} alt="icon" />
          <CardContent sx={{ p: "2rem" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ p: ".9rem", paddingBottom: ".3rem", fontFamily: "unset" }}
              color="hsl(223, 47%, 23%)"
              fontWeight="900"
              fontSize={26}
            >
              Order Summary
            </Typography>
            <Typography
              variant="body2"
              color=" hsl(224, 23%, 55%)"
              paddingBottom={1}
              fontSize={16}
              sx={{ fontFamily: "unset" }}
            >
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </Typography>
            <Box
              sx={{
                backgroundColor: "hsl(225, 100%, 98.7%)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: "1.4rem",
                borderRadius: "10px",
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <img src={b} alt="icon" />
              <Stack>
                <Typography
                  color="hsl(223, 47%, 23%)"
                  fontWeight={900}
                  sx={{ marginRight: "2rem", fontFamily: "unset" }}
                >
                  Annual Plan
                </Typography>
                <Typography
                  color="hsl(224, 23%, 55%)"
                  sx={{ marginRight: "3rem", fontFamily: "unset" }}
                >
                  $59.9/year
                </Typography>
              </Stack>
              <Button
                sx={{
                  color: "hsl(245, 75%, 52%)",
                  textDecoration: "underline",
                  textTransform: "capitalize",
                  fontFamily: "unset",
                  fontWeight: "700",
                  "&:hover": {
                    color: "hsl(245, 75%, 67%)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Change
              </Button>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                width: "80%",
                backgroundColor: "hsl(245, 75%, 52%)",
                color: "hsl(225, 100%, 94%)",
                padding: ".6rem",
                borderRadius: "10px",
                margin: "auto",
                textTransform: "unset",
                fontFamily: "unset",

                fontWeight: "900",
                boxShadow: "hsl(245, 75%, 80%) 0px 8px 24px",
                "&:hover": {
                  backgroundColor: "hsl(245, 75%, 67%)",
                },
              }}
            >
              Proceed to Payment
            </Button>
          </CardActions>
          <Typography
            variant="p"
            component="p"
            paddingBottom={5}
            paddingTop={2}
            color="hsl(224, 23%, 55%)"
            fontWeight={900}
            fontSize="14px"
          >
            <Typography
              varient="p"
              component="span"
              style={{ cursor: "pointer" }}
              fontFamily="unset"
              fontWeight={900}
              fontSize="14px"
              sx={{
                "&:hover": {
                  color: "hsl(223, 47%, 23%)",
                },
              }}
            >
              {" "}
              Cancel Order
            </Typography>
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default App;
