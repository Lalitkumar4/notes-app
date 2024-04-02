import { Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material"
import { format } from "date-fns"

const drawerWidth = 240

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar */}
      <AppBar
        elevation={0}
        sx={{
          background: "#eee",
          color: "#333",
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), "do MMMM y")}
          </Typography>
          <Typography>John Doe</Typography>
          <Avatar sx={{ marginLeft: "16px" }} src="/avatar.webp" />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={{ p: "10px" }}>
            Notes
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: location.pathname === item.path && "#f4f4f4",
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          width: "100%",
          padding: "20px",
        }}
      >
        <Box sx={{ height: "80px" }}></Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
