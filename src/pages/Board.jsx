import { Box, Button, Container, Typography } from "@mui/material";
import BoardTable from "../components/BoardTable";
import boardData from "../data/boardData";
import { BOARD_COLUMNS } from "../constants/boardConfig";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

function Board() {
  const navigate = useNavigate();
  const posts = boardData;
  const columns = BOARD_COLUMNS;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        자유 게시판
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <SearchBar />
      </Box>

      <BoardTable posts={posts} columns={columns} />

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button onClick={() => navigate("/board/new")} variant="contained">
          새 글 작성
        </Button>
      </Box>
    </Container>
  );
}

export default Board;
