import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {  Grid,  Table, TableHead, TableRow, TableCell, TableContainer, TableBody,  ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import * as actions from "../../../actions/product";
import TableForm from "views/TableList/Member/MemberForm";


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



const MemberList = ({ ...props }) => {
    const classes = useStyles();
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
              <h4 className={classes.cardTitleWhite}>Nhân Viên</h4>
            </CardHeader>
            <CardBody>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TableForm {...{ currentId, setCurrentId }} />
                </Grid>

                <Grid item md={12}>
                  <TableContainer>
                    <Table>
                      <TableHead className={classes.root}>
                        <TableRow>
                            <TableCell>Mã Nhân Viên</TableCell>
                          <TableCell>Tên Nhân Viên</TableCell>
                          <TableCell>Ngày Sinh</TableCell>
                          <TableCell>Điện Thoại</TableCell>
                          <TableCell>Địa Chỉ</TableCell>
                          <TableCell>Chức Vụ</TableCell>
                          
                        </TableRow>
                      </TableHead>
                      
                      <TableBody>
                        {props.productList.map((record, index) => {
                          return (
                            <TableRow key={record.MaMonAn} hover>
                              <TableCell>{record.img_food} </TableCell>
                              <TableCell>{record.TenMon}</TableCell>
                              <TableCell>{record.price} </TableCell>
                              <TableCell>{record.infomation} </TableCell>
                             
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

export default connect(mapStateToProps, mapActionToProps)(MemberList);