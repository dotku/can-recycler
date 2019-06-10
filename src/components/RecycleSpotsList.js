import React from "react";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

export default function RecycleSpotsList() {
  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell>Number of Cans</TableCell>
              <TableCell>Number of Scavenger</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>Sunset</TableCell>
            <TableCell>500</TableCell>
            <TableCell>0</TableCell>
          </TableBody>
        </Table>
      </Paper>
      <div>** Sample only</div>
    </div>
  );
}
