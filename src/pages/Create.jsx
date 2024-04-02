import { useState } from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

const styles = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
}

const Create = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState("todos")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === "") {
      setTitleError(true)
    }

    if (details === "") {
      setDetailsError(true)
    }

    if (title && details) {
      fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"))
    }
  }

  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={styles}
          label="Note Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          sx={styles}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl sx={styles}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Create
