import { Box, CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

function PokemonWiki() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = Array.from({ length: 151 }, (_, i) => {
          const id = i + 1;
          return (async () => {
            const [details, species] = await Promise.all([
              axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
              axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
            ]);

            const koreanName = species.data.names.find(
              (n) => n.language.name === "ko"
            ).name;

            return {
              id: details.data.id,
              name: koreanName,
              image:
                details.data.sprites.other["official-artwork"].front_default,
              types: details.data.types,
            };
          })();
        });

        const results = await Promise.all(promises);
        setPokemonData(results);
      } catch (error) {
        console.error("데이터 로딩 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column" 
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        gap={2} 
      >
        <CircularProgress />
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            letterSpacing: "0.05rem", 
          }}
        >
          불러오는 중...
        </Typography>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        포켓몬 도감
      </Typography>

      <PokemonList pokemonData={pokemonData} />
    </Container>
  );
}

export default PokemonWiki;
