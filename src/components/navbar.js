import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../image/logo.png";
import { Link as LinkRouter } from "react-router-dom";
import Avatar1 from "../image/avatar1.png";
import {connect} from "react-redux"
import userActions from '../redux/actions/userActions'


const pages = ["Home", "Cities", "Blog"];
const settings = [
  <LinkRouter to={"/signup"}>Sign Up</LinkRouter>,
  <LinkRouter to={"/signin"}>Sign In</LinkRouter>,
  "Logout",
];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // function SignOut(){
  //   console.log(props.user.email)
  //   props.signOutUser(props.user.email)

  // }

  return (
    <AppBar className="custom-appbar" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
            <img src={logo} alt="logo" height={100} width={100} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <LinkRouter to={"cities"}>
                  <button className="buttonWave">Cities</button>
                </LinkRouter>
                <LinkRouter to={"home"}>
                  <button className="buttonWave">Home</button>
                </LinkRouter>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRouter to={"cities"}>
              <button className="buttonWave">Cities</button>
            </LinkRouter>
            <LinkRouter to={"home"}>
              <button className="buttonWave">Home</button>
            </LinkRouter>
          </Box>

          <Box className="avatar1" sx={{ flexGrow: 0 }}>
            <Tooltip className="avatar1" title="Open settings">
            
            {
              
                  props.user ? (
                    <div>
                      

                      <IconButton className="usuario-btn" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar className="usuario-btn" src={props.user.photoURL} alt="usuario" />
                      </IconButton>
                    </div>
                  ) : (
                    <IconButton className="usuario-btn" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar className="usuario-btn" src={Avatar1} alt="usuario" />
                    </IconButton>

                  )
                }
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};




const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  signOutUser: userActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);