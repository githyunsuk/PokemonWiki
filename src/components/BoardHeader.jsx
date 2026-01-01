import { TableCell, TableHead, TableRow } from "@mui/material";

function BoardHeader({ columns }) {
  return (
    <TableHead sx={{ backgroundColor: "#333"}}>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            sx={{ color: "white", fontWeight: "bold" }}
            key={column.id}
            align="center"
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default BoardHeader;
