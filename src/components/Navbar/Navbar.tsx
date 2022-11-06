import { useEffect, useState, useContext } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../helpers/interfaces";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, auth } from "../../helpers/firebaseConfig";
import { authContext } from "../../helpers/authContext";
const pages = ["Home", "Search"];

// 7. W Avatarze (u mnie linia 120), ustaw atrybut src na stan profilePhoto
const Navbar = () => {
  const loggedIn = useContext(authContext);
  // 1.
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>("/");
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (loggedIn && auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      getDownloadURL(storageRef)
        .then((url) => setProfilePhoto(url))
        .catch((err) => setProfilePhoto(undefined));
    }
  }, [loggedIn]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/search"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Search</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SDA NEWS
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              to={loggedIn ? "/user" : "/login"}
              style={{ textDecoration: "none" }}
            >
              {loggedIn ? (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                </IconButton>
              ) : (
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Log in
                </Button>
              )}
              {/* {loggedIn && (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              )}
              {!loggedIn && (
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Log in
                </Button>
              )} */}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

// // 1 typ renderowania warunkowego (&&)
// // w zaleznosci od warunku wyswietlamy lub nie wyswietlamy elementu A
// {
//   jakasWartosc === jakasInnaWartosc && <p>123</p>;
// }

// // 2 typ renderowania warunkowego
// // w zaleznosci od warunku renderujemy element A lub element B
// {
//   jakasWartosc === jakasInnaWartosc ? <p>123</p> : <label>321</label>;
// }
