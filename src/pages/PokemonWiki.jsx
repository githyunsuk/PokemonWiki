import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";

const typeTranslations = {
  grass: "풀",
  poison: "독",
  fire: "불꽃",
  water: "물",
  bug: "벌레",
  normal: "노멀",
  flying: "비행",
  electric: "전기",
  ground: "땅",
  fairy: "페어리",
  fighting: "격투",
  psychic: "에스퍼",
  rock: "바위",
  steel: "강철",
  ice: "얼음",
  ghost: "고스트",
  dragon: "드래곤",
  dark: "악",
};

const typeColor = {
  grass: "#66A945",
  poison: "#735198",
  fire: "#E56C3E",
  water: "#5185C5",
  bug: "#9FA244",
  normal: "#949495",
  flying: "#A2C3E7",
  electric: "#FBB917",
  ground: "#9C7743",
  fairy: "#DAB4D4",
  fighting: "#E09C40",
  psychic: "#DD6B7B",
  rock: "#BFB889",
  steel: "#69A9C7",
  ice: "#6DC8EB",
  ghost: "#684870",
  dragon: "#535CA8",
  dark: "#4C4948",
}

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
                details.data.sprites.other["official-artwork"].front_default, // 더 고화질 이미지
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
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
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

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {pokemonData.map((pokemon) => (
          <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{ p: 0, backgroundColor: "#f5f5f5", objectFit: "contain" }}
                height="200"
                image={pokemon.image}
                alt={pokemon.name}
              />
              <CardContent
                sx={{ flexGrow: 1, textAlign: "center", pb: "16px !important" }}
              >
                <Typography variant="caption" color="text.secondary">
                  No.{String(pokemon.id).padStart(4, "0")}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {pokemon.name}
                </Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}
                >
                  {pokemon.types.map((type) => {
                    const englishType = type.type.name;
                    const koreanType = typeTranslations[englishType];
                    const color = typeColor[englishType];

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
                        backgroundColor:color,

                          border: "none",
                          height: "24px", 
                          "& .MuiChip-label": {
                            px: 0,
                          },
                        }}
                      />
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonWiki;
