import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import * as actions from "../../../actions/datBan";
import OrderForm from "views/TableList/Order/OrderForm";


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



const OrderList = ({ ...props }) => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllDatBan()
    }, [])

    const onDelete = maBan => {
        if (window.confirm('Are you sure to delete record?')) {
            props.deleteDatBan(maBan, () => { window.alert('Delete succesful') })
        }
    }
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Đặt Bàn</h4>
                    </CardHeader>
                    <CardBody>
                        <Grid container spacing={2}>
                           
                            <Grid item md={12}>
                                <TableContainer>
                                    <Table>
                                        <TableHead className={classes.root}>
                                            <TableRow>
                                                <TableCell>Mã Bàn</TableCell>
                                                <TableCell>Tên Khách Hàng</TableCell>
                                                <TableCell>Điện Thoại</TableCell>
                                                <TableCell>Ngày Giờ Đặt</TableCell>
                                                <TableCell>Số Lượng Bàn</TableCell>
                                                <TableCell>Số Lượng Người</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {props.listDB.map((record, index) => {
                                                return (
                                                    <TableRow key={record.maBan} hover>
                                                        <TableCell>{record.maBan}</TableCell>
                                                        <TableCell>{record.tenKH}</TableCell>
                                                        <TableCell>{record.phoneKH} </TableCell>
                                                        <TableCell>{record.timeCheck}</TableCell>
                                                        <TableCell>{record.soLuongBan}</TableCell>
                                                        <TableCell>{record.soLuongNguoi}</TableCell>
                                                        <TableCell>
                                                            <ButtonGroup variant="text">
                                                            
                                                                <Button>
                                                                    <DeleteIcon
                                                                        color="secondary"
                                                                        onClick={() => onDelete(record.maBan)}
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
    listDB: state.datBan.datBanList
})

const mapActionToProps = {
    fetchAllDatBan: actions.fetchAllDatBan,
    deleteDatBan: actions.DeleteDatBan
}

export default connect(mapStateToProps, mapActionToProps)(OrderList);