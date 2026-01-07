import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

function PokemonList({pokemonData}) {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
      {pokemonData.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonList;
