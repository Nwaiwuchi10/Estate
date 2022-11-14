import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiOilySpiral } from "react-icons/gi";
import "./Nav.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="app-bar-div"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-around",

        //   overflow: "0.1",
        // }}
        sx={{
          bgcolor: "transparent",
          // bgcolor: "#900C3F",
          overflow: "0.1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            alignItem: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            THE BRYANSTON
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            <GiOilySpiral />
          </div>
          {/* <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          ></Typography> */}

          <div
            style={{ cursor: "pointer" }}
            // aria-label="open drawer"
            // edge="end"
            onClick={handleDrawerOpen}
            // sx={{ ...(open && { display: "none" }) }}
          >
            <HiBars3BottomRight
              style={{
                fontSize: "40px",
                color: "white",
              }}
            />
          </div>
        </div>
      </AppBar>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </Main> */}
      <Drawer
        sx={{
          width: "100%",

          // width: drawerWidth,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            bgcolor: "#900C3F",
            // background: " #900C3F",
            // width: drawerWidth,
          },
        }}
        // variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <FaTimes style={{ fontSize: "50px", color: "whitesmoke" }} />
            ) : (
              <FaTimes style={{ fontSize: "50px", color: "whitesmoke" }} />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <div className="lister">
          <hr />
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              THE BRYANSTON
            </Link>{" "}
          </div>
          <hr />
          <div>AMENITIES</div>
          <hr />
          <div>
            {" "}
            <Link
              to="/neighbour"
              style={{ textDecoration: "none", color: "white" }}
            >
              NEIGHBOUR
            </Link>
          </div>
          <hr />
          <div>THE TEAM</div>
          <hr />
          <div>MY RESIDENCE</div>
          <hr />
        </div>

        <div className="next-div">sales@thebryanston.co.uk</div>
        <div className="next-div">+44(0)20 7535 3949</div>

        <div className="next-display-div">
          <div>Cookie Policy</div>
          <div>Disclaimer</div>
          <div>Privacy Policy</div>
        </div>
        {/* <Divider /> */}
        <List></List>
      </Drawer>
    </Box>
  );
}
