import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Typography } from "@mui/material";
import NomineesList from "./NomineeList";
import ResultsModal from "./ResultsModal";

export default function BallotList() {
  const [categories, setCategories] = useState([]);
  const [selectedNominees, setSelectedNominees] = useState({});
  console.log(selectedNominees);

  useEffect(() => {
    axios
      .get("/api/getBallotData")
      .then((response) => setCategories(response.data.items));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Paper
          elevation={3}
          key={category.id}
          sx={{
            mb: 2,
          }}
        >
          <div style={{ border: "1px solid black" }}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ ml: 2, mt: 1 }}
            >
              {category.title}
            </Typography>
          </div>

          <NomineesList
            nominees={category.items}
            onNomineeSelected={(nominee) =>
              setSelectedNominees((allSelectedNominees) => ({
                ...allSelectedNominees,
                [category.title]: nominee,
              }))
            }
            selectedNominee={selectedNominees[category.title]}
          />
        </Paper>
      ))}
      <ResultsModal nomineeSelectedResults={selectedNominees} />
    </div>
  );
}
