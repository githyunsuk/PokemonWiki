import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        width: 300,
        height: 30,
        border: "1px solid #eee",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="검색어를 입력하세요..." />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
