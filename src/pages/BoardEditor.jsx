import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BoardEditor() {
  const navigate = useNavigate();

  // 입력 필드 통합 관리 상태
  const [formData, setFormData] = useState({
    writer: "",
    title: "",
    content: "",
  });

  // 입력값 변경 통합 핸들러
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //게시글 저장 처리
  function handleSubmit() {
    
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        새 글 작성
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <TextField
          name="title"
          value={formData.title}
          onChange={handleChange}
          size="small"
          label="제목"
        ></TextField>
        <TextField
          name="writer"
          value={formData.writer}
          onChange={handleChange}
          size="small"
          label="작성자"
        ></TextField>
      </Box>

      <Box sx={{ mt: 2 }}>
        <TextField
          name="content"
          value={formData.content}
          onChange={handleChange}
          fullWidth
          multiline
          rows={10}
        ></TextField>
      </Box>

      <Box sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "flex-end" }}>
        <Button
          onClick={() => navigate("/board")}
          variant="contained"
          color="error"
        >
          취소
        </Button>
        <Button variant="contained">작성</Button>
      </Box>
    </Container>
  );
}

export default BoardEditor;
