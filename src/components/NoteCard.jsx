/* eslint-disable react/prop-types */
import { DeleteOutline } from "@mui/icons-material"
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material"
import { blue, green, pink, yellow } from "@mui/material/colors"

const NoteCard = ({ note, handleDelete }) => {
  const avStyles = {
    backgroundColor: () => {
      if (note.category === "work") {
        return yellow[700]
      }
      if (note.category === "money") {
        return green[500]
      }
      if (note.category === "todos") {
        return pink[500]
      }
      return blue[500]
    },
  }

  return (
    <div>
      <Card
        sx={{
          borderRadius: "20px",
          backgroundColor: "#eee",
          ":hover": {
            scale: "1.04",
          },
          transition: "all 0.2s ease-in-out",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={avStyles}>{note.category[0].toUpperCase()}</Avatar>
          }
          action={
            <IconButton
              sx={{ color: "#E99D9D" }}
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
