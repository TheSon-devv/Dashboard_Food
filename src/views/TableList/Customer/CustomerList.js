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
import { useToasts } from "react-toast-notifications";

import { connect } from "react-redux";
import * as actions from "../../../actions/khachHang";
import CustomerForm from "./CustomerForm";
import * as actionsKhuVuc from "../../../actions/khuVuc";

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


const CustomerList = ({ ...props }) => {
    const classes = useStyles();
    const { addToast } = useToasts()

    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllKhuVuc();
        props.fetchAllKhachHang();
    }, [])

    const onDelete = maKH => {
        if (window.confirm('Bạn có muốn xóa khách hàng này ?')) {
            props.deleteKhachHang(maKH, addToast("Xóa khách hàng thành công !", { appearance: 'success' }) )
        }
    }
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Khách Hàng</h4>
                    </CardHeader>
                    <CardBody>
                        <Grid container>
                            <Grid item xs={12}>
                                <CustomerForm {...{ currentId, setCurrentId }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table>
                                        <TableHead className={classes.root}>
                                            <TableRow>
                                                <TableCell>Mã khách hàng</TableCell>
                                                <TableCell>Tên khách hàng</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Điện Thoại</TableCell>
                                                <TableCell>Khu Vực</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.listKH.map((record, index) => {
                                                return (
                                                    <TableRow key={record.maKH} hover>
                                                        <TableCell>{record.maKH}</TableCell>
                                                        <TableCell>{record.tenKH}</TableCell>
                                                        <TableCell>{record.email} </TableCell>
                                                        <TableCell>{record.phoneKH} </TableCell>
                                                        <TableCell>{record.tenKV} </TableCell>
                                                        <TableCell>
                                                            <ButtonGroup variant="text">
                                                                <Button>
                                                                    <EditIcon 
                                                                        color="primary" 
                                                                        onClick={() => setCurrentId(record.maKH)}
                                                                    />
                                                                </Button>
                                                                <Button>
                                                                    <DeleteIcon
                                                                        color="secondary"
                                                                        onClick={() => onDelete(record.maKH)}
                                                                    />
                                                                </Button>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                )
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
    listKH: state.khachHang.khachHanglist
})

const mapActionToProps = {
    fetchAllKhachHang: actions.fetchAllKhachHang,
    fetchAllKhuVuc: actionsKhuVuc.fetchAllKhuVuc,
    deleteKhachHang: actions.DeleteKhachHang
}

export default connect(mapStateToProps, mapActionToProps)(CustomerList);