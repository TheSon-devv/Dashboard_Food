import React, { useRef, useState, useEffect } from "react";
import useForm from "./useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../actions/monAn";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
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

const TableForm = ({ classes, ...props }) => {

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
        <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="tensp"
                        variant="outlined"
                        label="Phone"
                        type="text"
                        value={values.tensp}
                        onChange={handleInputChange}
                        {...(errors.tensp && { error: true, helperText: errors.tensp })}
                    />

                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.smMargin}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

const mapStateToProps = state => ({
    productList: state.product.list
})

const mapActionToProps = {
    createProduct: actions.create,
    updateProduct: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(TableForm));