import React, { useState } from "react";
import Nominee from "./Nominee";

export default function NomineeList({
  nominees,
  onNomineeSelected,
  categoryId,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {nominees.map((nominee) => (
        <Nominee
          nominee={nominee}
          key={nominee.id}
          onNomineeSelected={onNomineeSelected}
        />
      ))}
    </div>
  );
}
