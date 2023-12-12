import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="homepage"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        gap: "10%",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "black",
        }}
      >
        Hello my Love!
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          color: "black",
        }}
      >
        Pick the occasion below.
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
        <Link to="/anniversary">
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
            Anniversary
          </Button>
        </Link>
        <Link to="xmas">
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
            Christmas
          </Button>
        </Link>
      </div>
    </div>
  );
}
