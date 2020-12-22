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
        <Card>
          <form
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
          >
            <div>
              <TextField
                  name="trangthai"
                  variant="outlined"
                  label="Trạng Thái"
                  type="text"
                  value={values.TrangThai}
                  onChange={handleInputChange}
                  {...(errors.trangthai && {
                    error: true,
                    helperText: errors.trangthai,
                  })}
                />
              <TextField
                name="tenkh"
                variant="outlined"
                label="Tên khách hàng"
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
                label="Điện thoại"
                type="text"
                value={values.phoneKH}
                onChange={handleInputChange}
                {...(errors.phone && {
                  error: true,
                  helperText: errors.phone,
                })}
              />
            
              <TextField
                name="datetime"
                type="datetime-local"
                variant="outlined"
                style={{width:"204px"}}
                value={values.timecheck}
                onChange={handleInputChange}
                {...(errors.datetime && {
                  error: true,
                  helperText: errors.datetime,
                })}
              />
              <TextField
                name="soluongban"
                variant="outlined"
                label="Số Lượng Bàn"
                type="text"
                value={values.SoLuongBan}
                onChange={handleInputChange}
                {...(errors.soluongban && {
                  error: true,
                  helperText: errors.soluongban,
                })}
                />
                <TextField
                name="soluongnguoi"
                variant="outlined"
                label="Số Lượng Người"
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
              <Button variant="contained" color="default" type="submit">
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