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
import * as actionsDatBan from "../../../actions/datBan";
import * as actionsHDDB from "../../../actions/hoaDon";
import * as actionsKhachHang from "../../../actions/khachHang";
import HDDBForm from "views/TableList/Order/HDDBForm";


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
        props.fetchAllDatBan();
        props.fetchAllHDDB();
        props.fetchAllKhachHang();
    }, [])

    const onDeleteHoaDon = maHDDB => {
        if (window.confirm('Bạn có muốn xóa hóa đơn đặt bàn ?')) {
            props.deleteHDDB(maHDDB, window.alert('Xóa thành công !') )
        }
    }
    const onDeleteDatBan = maBan => {
        if (window.confirm('Bạn có muốn xóa bàn đã đặt của khách hàng ?')) {
            props.deleteDatBan(maBan, window.alert('Xóa thành công !') )
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
                                                        <TableCell>{record.tenKhachHang}</TableCell>
                                                        <TableCell>{record.phoneKhachHang} </TableCell>
                                                        <TableCell>{record.timeCheck}</TableCell>
                                                        <TableCell>{record.soLuongBan}</TableCell>
                                                        <TableCell>{record.soLuongNguoi}</TableCell>
                                                        <TableCell>
                                                            <ButtonGroup variant="text">

                                                                <Button>
                                                                    <DeleteIcon
                                                                        color="secondary"
                                                                        onClick={() => onDeleteDatBan(record.maBan)}
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

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Hóa Đơn Đặt Bàn</h4>
                    </CardHeader>
                    <CardBody>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <HDDBForm {...{ currentId, setCurrentId }} />
                            </Grid>
                            <Grid item md={12}>
                            <TableContainer>
                                    <Table>
                                        <TableHead className={classes.root}>
                                            <TableRow>
                                                <TableCell>Mã hóa đơn </TableCell>
                                                <TableCell>Tổng tiền</TableCell>
                                                <TableCell>Bàn</TableCell>
                                                <TableCell>Ngày giờ đặt</TableCell>
                                                <TableCell>Tên khách hàng</TableCell>
                                                <TableCell>Trạng thái</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.listHDDB.map((e, index) => {
                                                return (
                                                    <TableRow key={e.maHDDB} hover>
                                                        <TableCell>{e.maHDDB}</TableCell>
                                                        <TableCell>{e.priceHDDB} VND</TableCell>
                                                        <TableCell>{e.maBan}</TableCell>
                                                        <TableCell>{e.timeCheck} </TableCell>
                                                        <TableCell>{e.tenKH} </TableCell>
                                                        <TableCell>{e.trangThai} </TableCell>
                                                        <TableCell>
                                                            <ButtonGroup variant="text">
                                                                <Button>
                                                                    <EditIcon 
                                                                        color="primary" 
                                                                        onClick={() => setCurrentId(e.maHDDB)}
                                                                    />
                                                                </Button>
                                                                <Button>
                                                                    <DeleteIcon
                                                                        color="secondary"
                                                                        onClick={() => onDeleteHoaDon(e.maHDDB)}
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
    listDB: state.datBan.datBanList,
    listHDDB:state.hoaDon.HDDBList
})

const mapActionToProps = {
    fetchAllDatBan: actionsDatBan.fetchAllDatBan,
    fetchAllKhachHang:actionsKhachHang.fetchAllKhachHang,
    fetchAllHDDB:actionsHDDB.fetchAllHDDB,
    deleteHDDB: actionsHDDB.DeleteHDDB,
    deleteDatBan:actionsDatBan.DeleteDatBan
}

export default connect(mapStateToProps, mapActionToProps)(OrderList);