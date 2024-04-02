import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { createTheme, ThemeProvider } from "@mui/material"
// import { purple } from "@mui/material/colors"
import Layout from "./components/Layout"

const theme = createTheme({
  // palette: {
  //   secondary: {
  //     main: "#ddd",
  //   },
  //   primary: purple,
  // },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Notes />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
