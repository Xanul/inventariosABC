import { AppBar, Toolbar, Typography } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CalculateIcon fontSize="large" />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Inventarios ABC
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
