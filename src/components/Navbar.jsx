// Importing components and icons from MUI library
import {
  AppBar,
  Avatar,
  Box,
  Badge,
  styled,
  Toolbar,
  InputBase,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

// Importing React and useState hooks
import React, { useState } from "react";

// Importing icons from MUI library
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Defining StyledToolbar component with custom styling
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "blue",
});

// Defining Search component with custom styling
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

// Defining Icons component with custom styling
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// Defining UserBox component with custom styling
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// Defining Navbar component
const Navbar = () => {
  // Initializing state for menu
  const [open, setOpen] = useState(false);

  // Returning AppBar component with children components and props
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {" "}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          Facebook{" "}
        </Typography>
        <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon color="white" />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Aziz Laghari"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Aziz</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
