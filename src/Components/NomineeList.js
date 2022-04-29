import React from "react";
import Nominee from "./Nominee";

export default function NomineeList({
  nominees,
  onNomineeSelected,
  selectedNominee,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {nominees.map((nominee) => (
        <Nominee
          nominee={nominee}
          key={nominee.id}
          onNomineeSelected={onNomineeSelected}
          selectedNominee={selectedNominee}
        />
      ))}
    </div>
  );
}
