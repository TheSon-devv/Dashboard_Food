import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Container, Grid, Paper, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from '@material-ui/core/TextField';

import { connect } from "react-redux";
import * as actions from "../../actions/monAn";
import TableForm from "./TableForm";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

const useStyless = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TableList = ({ ...props }) => {
  const classes = useStyles();
  const classess = useStyless();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllProduct()
  }, [])

  const onDelete = id => {
    if (window.confirm('Are you sure to delete record?')) {
      props.deleteProduct(id, () => { window.alert('Delete succesful') })
    }
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Khách Hàng</h4>
          </CardHeader>

          <CardHeader className={classess.root}>
            <div>
              <TextField
                id="standard-textarea"
                label="Tên Khách Hàng"
                multiline
              />
              <TextField
                id="standard-textarea"
                label="Email"
                multiline />
              <TextField
                id="standard-textarea"
                label="Điện Thoại"
                multiline
              />
              <TextField
                id="standard-textarea"
                label="Khu Vực"
                multiline />
            </div>
            <div >
              <Button variant="contained" style={{ marginRight: "10px" }}>Default</Button>
              <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
                Primary
                </Button>
              <Button variant="contained" color="secondary">
                Secondary
                </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Grid container>
              <Grid item xs={8}>
                <TableContainer>
                  <Table>
                    <TableHead className={classes.root}>
                      <TableRow>
                        <TableCell>Tên khách hàng</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Điện Thoại</TableCell>
                        <TableCell>Khu Vực</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.productList.map((record, index) => {
                        return (
                          <TableRow key={record.masp} hover>
                            <TableCell>{record.TenKH}</TableCell>
                            <TableCell>{record.email} </TableCell>
                            <TableCell>{record.phoneKH} </TableCell>
                            {/* <TableCell>{record.soluongton}</TableCell> */}
                            <TableCell>
                              <ButtonGroup variant="text">
                                <Button>
                                  <EditIcon color="primary" />
                                </Button>
                                <Button>
                                  <DeleteIcon
                                    color="secondary"
                                    onClick={() => onDelete(record.id)}
                                  />
                                </Button>
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              {/* <Grid item xs={4}>
                  <TableForm {...{ currentId, setCurrentId }} />
                </Grid> */}
            </Grid>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = state => ({
  productList: state.product.list
})

const mapActionToProps = {
  fetchAllProduct: actions.fetchAll,
  deleteProduct: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(TableList);