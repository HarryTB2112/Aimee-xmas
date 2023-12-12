import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

export default function AnniversaryPage() {
  return (
    <div
      className="anniversaryPage"
      style={{
        display: "flex",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        gap: "5%",
      }}
    >
      <Confetti recycle={false} />
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "black",
        }}
      >
        Happy Anniversary!!!
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "black",
        }}
      >
        You are the loveliest person I have ever met and you are always there
        for your loved ones.
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "black",
        }}
      >
        You have a heart of gold and a diamond smile.
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "black",
        }}
      >
        I can't wait to make more memories with you and do life together!
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "black",
        }}
      >
        Love from Harry xxx
      </Typography>
      <div
        className="buttons"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <Link to="/">
          <Button
            sx={{
              my: 0.5,
              px: 4,
              width: "9rem",
              fontSize: "1rem",
              color: "whitesmoke",
              borderRadius: 1,
              backgroundColor: "#D4AF37",
              "&&:hover": {
                backgroundColor: "#E5AA70",
              },
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
