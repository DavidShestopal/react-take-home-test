import React from "react";
import {
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function Nominee({
  nominee,
  onNomineeSelected,
  selectedNominee,
}) {
  return (
    <Stack
      spacing={2}
      sx={{
        flex: 1,
      }}
      key={nominee.id}
    >
      <Card
        sx={{
          width: 345,
          mt: 2,
          mb: 2,
          ml: 2,
          opacity: selectedNominee?.id === nominee.id ? 0.2 : 1.0,
        }}
      >
        <CardMedia
          component="img"
          height="340"
          image={nominee.photoUrL}
          alt="nominee photos"
          sx={{
            display: "flex",
            justifyContent: "center",
            mr: 1,
            borderRadius: 10,
            objectFit: "contain",
            marginTop: 1,
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {nominee.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            variant="contained"
            sx={{ mb: 1, width: "90%" }}
            onClick={() => onNomineeSelected(nominee)}
          >
            Vote
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
