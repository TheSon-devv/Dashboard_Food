import React, { useRef, useState, useEffect } from "react";
import useForm from "../useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import { connect } from "react-redux";
import * as actions from "../../../actions/product";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 200
        }
    },
    fromGroup: {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialValues = {
    tenkh: '',
    phone:'',
    soluongban:'',
    soluongnguoi:'',
    datetime:'',
    trangthai:'',
}

const OrderForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('tenkh' in fieldValues)
            temp.tenkh = fieldValues.tenkh ? "" : "This field is requied"
        if ("phone" in fieldValues)
          temp.phone = fieldValues.phone ? "" : "This field is requied";
        if ("soluongban" in fieldValues)
          temp.soluongban = fieldValues.soluongban ? "" : "This field is requied";
        if ("soluongnguoi" in fieldValues)
          temp.soluongnguoi = fieldValues.soluongnguoi ? "" : "This field is requied";
        if ("datetime" in fieldValues)
          temp.datetime = fieldValues.datetime ? "" : "This field is requied";
        if ("trangthai" in fieldValues)
          temp.trangthai = fieldValues.trangthai ? "" : "This field is requied";
        
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values, setValues, handleInputChange, errors, setErrors
    } = useForm(initialValues, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            if (props.currentId == 0)
                props.createProduct(values, () => { window.alert('Da them') })
            else
                props.updateProduct(props.currentId, values, () => { window.alert('updated') })
        }
        console.log(values)
    }

    useEffect(() => {
        if (props.currentId != 0)
            setValues({
                ...props.productList.find(x => x.id == props.currentId)
            })
    }, [props.currentId])
    return (
      <Grid container>
        <Card style={{textAlign:"center"}}>
          <form
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
          >
          
            <div>
              <TextField
                name="tenkh"
                variant="outlined"
                label="Mã Nhân Viên"
                type="text"
                value={values.TenKH}
                onChange={handleInputChange}
                {...(errors.tenkh && {
                  error: true,
                  helperText: errors.tenkh,
                })}
              />
              <TextField
                name="phone"
                variant="outlined"
                label="Tên Nhân Viên"
                type="text"
                value={values.phoneKH}
                onChange={handleInputChange}
                {...(errors.phone && {
                  error: true,
                  helperText: errors.phone,
                })}
              />

              
              <TextField
                name="date"
                variant="outlined"
                
                type="date"
                value={values.SoLuongBan}
                onChange={handleInputChange}
                {...(errors.soluongban && {
                  error: true,
                  helperText: errors.soluongban,
                })}
              />
              </div>
              <div>
              <TextField
                name="soluongnguoi"
                variant="outlined"
                label="Điện Thoại"
                type="text"
                value={values.SoLuongNguoi}
                onChange={handleInputChange}
                {...(errors.soluongnguoi && {
                  error: true,
                  helperText: errors.soluongnguoi,
                })}
              />
            <TextField
                name="soluongnguoi"
                variant="outlined"
                label="Địa Chỉ"
                type="text"
                value={values.SoLuongNguoi}
                onChange={handleInputChange}
                {...(errors.soluongnguoi && {
                  error: true,
                  helperText: errors.soluongnguoi,
                })}
              />
              <TextField
                name="soluongnguoi"
                variant="outlined"
                label="Chức Vụ"
                type="text"
                value={values.SoLuongNguoi}
                onChange={handleInputChange}
                {...(errors.soluongnguoi && {
                  error: true,
                  helperText: errors.soluongnguoi,
                })}
              />
              </div>
            
            <div>
              <Button variant="contained" color="primary" type="submit">
                ADD
              </Button>
            </div>
          </form>
        </Card>
      </Grid>
    );
}

const mapStateToProps = state => ({
    productList: state.product.list
})

const mapActionToProps = {
    createProduct: actions.create,
    updateProduct: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(OrderForm));