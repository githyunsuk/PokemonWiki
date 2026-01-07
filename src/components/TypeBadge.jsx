import { Chip } from "@mui/material";
import { pokemonTypes } from "../constants/pokemon";

function TypeBadge({type}) {
  const englishType = type.type.name;
  const koreanType = pokemonTypes[englishType].label;
  const color = pokemonTypes[englishType].color;

  return (
    <Chip
      key={englishType}
      label={koreanType}
      size="small"
      sx={{
        width: "60px",
        borderRadius: "4px",
        fontSize: "0.75rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: color,

        border: "none",
        height: "24px",
        "& .MuiChip-label": {
          px: 0,
        },
      }}
    />
  );
}

export default TypeBadge;