
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: false,
      headerAlign: 'center',
      align: 'left'
    },
    {
      field: 'assigned_task',
      headerName: 'Assigned Task',
      width: 200,
      type: 'number',
      editable: false,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'inprogress_task',
      headerName: 'Inprogress',
      type: 'number',
      width: 200,
      editable: false,
      headerAlign: 'center',
      align: 'center'
    },
    {
        field: 'done_task',
        headerName: 'Done',
        type: 'number',
        width: 200,
        editable: false,
        headerAlign: 'center',
        align: 'center'
    },
];
  
    const rows = [
        { id: 1, name: 'Sayan Kundu', assigned_task: 12, inprogress_task: 35,done_task: 56 },
        { id: 2, name: 'Subhajit Maji', assigned_task: 21, inprogress_task: 42,done_task: 56 },
        { id: 3, name: 'Aurki Saha', assigned_task: 30, inprogress_task: 45,done_task: 56 },
        { id: 4, name: 'Arpan Maji', assigned_task: 16, inprogress_task: 16,done_task: 56 },
        { id: 5, name: 'Souvick Korner', assigned_task: 58, inprogress_task: 50,done_task: 56 },
        { id: 6, name: 'Somnath Paul', assigned_task: 58, inprogress_task: 15,done_task: 560 },
        { id: 7, name: 'Debanjon', assigned_task: 45, inprogress_task: 44,done_task: 56 },
        { id: 8, name: 'Anushree', assigned_task: 85, inprogress_task: 36,done_task: 56 },
    ];

function Table() {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            hideFooter
        />
    )
}

export default Table