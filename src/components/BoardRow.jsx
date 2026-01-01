import { TableCell, TableRow } from "@mui/material";

function BoardRow({ post, columns }) {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column.id} align="center">
          {post[column.field]}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default BoardRow;
