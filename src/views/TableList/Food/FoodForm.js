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
    anh: '',
    tenmon:'',
    gia:'',
    info:'',
}

const TableForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('anh' in fieldValues)
            temp.anh = fieldValues.anh ? "" : "This field is requied"
        if ('tenmon' in fieldValues)
            temp.tenmon = fieldValues.tenmon ? "" : "This field is requied"
        if ('gia' in fieldValues)
            temp.gia = fieldValues.gia ? "" : "This field is requied"
        if ('info' in fieldValues)
            temp.info = fieldValues.info ? "" : "This field is requied"
        
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
                  name="anh"
                  variant="outlined"
                  label="Ảnh"
                  type="text"
                  value={values.img_food}
                  onChange={handleInputChange}
                  {...(errors.anh && {
                    error: true,
                    helperText: errors.anh,
                  })}
                />
                <TextField
                  name="tenmon"
                  variant="outlined"
                  label="Tên Món"
                  type="text"
                  value={values.TenMon}
                  onChange={handleInputChange}
                  {...(errors.tenmon && {
                    error: true,
                    helperText: errors.tenmon,
                  })}
                />
              </div>
              <div>
                <TextField
                  name="price"
                  variant="outlined"
                  label="Giá"
                  type="text"
                  value={values.price}
                  onChange={handleInputChange}
                  {...(errors.price && {
                    error: true,
                    helperText: errors.price,
                  })}
                />
                <TextField
                  name="info"
                  variant="outlined"
                  label="Infomation"
                  type="text"
                  value={values.infomation}
                  onChange={handleInputChange}
                  {...(errors.info && {
                    error: true,
                    helperText: errors.info,
                  })}
                />
              </div>

              <>
                <Button variant="contained" color="primary" type="submit" >
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

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(TableForm));