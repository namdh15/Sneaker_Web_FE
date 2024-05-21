import * as React from 'react';
import * as Api from "../../services/order"

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { BreadcrumbsCustom, EmptyComponent } from '../../components';


const listRoutesBreadCrumb = [
  {
    href: '/admin',
    icon: <DashboardIcon sx={{ fontSize: 20 }} />,
    label: 'Dashboard'
  },
  {
    href: '/admin/transactions',
    icon: <ListAltIcon sx={{ fontSize: 20 }} />,
    label: 'Transactions List'
  },
]

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row);
  const userTransaction = row.user

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.customer}
        </TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell>{new Date(row.created_at).toDateString()}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div">
                User
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Avatar</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Username</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={userTransaction.email}>
                    <TableCell component="th" scope="row">
                      <img src={userTransaction.avatar} alt={userTransaction.email} style={{ height: '100px', width: '160px' }} />
                    </TableCell>
                    <TableCell>{userTransaction.email}</TableCell>
                    <TableCell>{userTransaction.fullname}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const EnhancedTable = (props) => {
  const { listTransactions } = props

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell sx={{ fontWeight: 'bold' }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listTransactions.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const DashboardListTransaction = () => {
  const [allTransactions, setAllTransactions] = React.useState([]);

  React.useEffect(() => {
    const getOrders = async () => {
      const response = await Api.getTransaction();
      console.log(response);
      setAllTransactions(response?.data);
    };
    getOrders();
  }, []);

  const ShowTransaction = () => {
    return (
      <div className="py-1">
        <div className="d-flex justify-content-center my-4">
          <div className="col">
            <div className="card mb-4">
              <div className="card-body">
                <EnhancedTable listTransactions={allTransactions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="px-5 my-1 py-3">
      <BreadcrumbsCustom routeItems={listRoutesBreadCrumb} />
      {allTransactions.length > 0 ?
        <ShowTransaction /> :
        <EmptyComponent
          message1={'Your Cart is Empty'}
          message2={'Find more products in Product list'}
        />
      }
    </div>
  );
};

export default DashboardListTransaction;
