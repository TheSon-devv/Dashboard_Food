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
    tensp: '',
}

const CustomerForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('tensp' in fieldValues)
            temp.tensp = fieldValues.tensp ? "" : "This field is requied"
        
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
                  name="tensp"
                  variant="outlined"
                  label="Tên khách hàng"
                  type="text"
                  value={values.TenMon}
                  onChange={handleInputChange}
                  {...(errors.tensp && {
                    error: true,
                    helperText: errors.tensp,
                  })}
                />
                <TextField
                  name="price"
                  variant="outlined"
                  label="Email"
                  type="text"
                  value={values.email}
                  onChange={handleInputChange}
                  {...(errors.tensp && {
                    error: true,
                    helperText: errors.tensp,
                  })}
                />
              </div>
              <div>
                <TextField
                  name="tensp"
                  variant="outlined"
                  label="Điện Thoại"
                  type="text"
                  value={values.phoneKH}
                  onChange={handleInputChange}
                  {...(errors.tensp && {
                    error: true,
                    helperText: errors.tensp,
                  })}
                />
                <TextField
                  name="khuvuc"
                  variant="outlined"
                  label="Khu Vực"
                  type="text"
                  value={values.TenKV}
                  onChange={handleInputChange}
                  {...(errors.tensp && {
                    error: true,
                    helperText: errors.tensp,
                  })}
                />
              </div>

              <>
                <Button variant="contained" color="default" size="medium" type="submit">
                  ADD
                </Button>
              </>
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

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CustomerForm));