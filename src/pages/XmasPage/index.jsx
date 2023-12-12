import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useState } from "react";

export default function XmasPage() {
  const [item, setItem] = useState("🎁");
  const [confetti, setConfetti] = useState(false);

  const openPresent = () => {
    const presents = [
      "😺",
      "🐶",
      "🎊",
      "🎈",
      "🎉",
      "✨",
      "🎇",
      "🎆",
      "🐇",
      "🦆",
      "🍂",
      "🎂",
    ];
    setItem(presents[Math.floor(Math.random() * Math.floor(presents.length))]);
    setConfetti(true);
  };

  return (
    <div
      className="xmasPage"
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
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "black",
        }}
      >
        Merry Christmas!
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "black",
        }}
      >
        Have a very merry Christmas my beautiful and have the best time in
        Lagos!
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
      <Typography
        variant="h5"
        component="h5"
        sx={{
          color: "black",
        }}
      >
        (Don't forget to open your present!)
      </Typography>
      <Confetti run={confetti} recycle={false} />
      <button className="presentButton" onClick={openPresent}>
        {item}
      </button>
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
