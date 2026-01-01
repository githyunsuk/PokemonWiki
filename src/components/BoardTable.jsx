import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BoardRow from "./BoardRow";
import BoardHeader from "./BoardHeader";

function BoardTable({ posts, columns }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <BoardHeader columns={columns} />
        <TableBody>
          {posts.map((post) => (
            <BoardRow key={post.id} post={post} columns={columns} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BoardTable;
