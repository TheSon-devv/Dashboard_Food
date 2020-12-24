import React, { useRef, useState, useEffect } from "react";
import useForm from "../useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import { connect } from "react-redux";
import * as actions from "../../../actions/khachHang";
import { useToasts } from "react-toast-notifications";

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
    maKH: '',
    tenKH: '',
    email: '',
    password: '',
    phoneKH: '',
    maKV: ''
}

const CustomerForm = ({ classes, ...props }) => {

    //toast
    const { addToast } = useToasts()
    //toast


    //validate
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('maKH' in fieldValues)
            temp.maKH = fieldValues.maKH ? "" : "This field is requied"
        if ('tenKH' in fieldValues)
            temp.tenKH = fieldValues.tenKH ? "" : "This field is requied"
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is requied"
        if ('phoneKH' in fieldValues)
            temp.phoneKH = fieldValues.phoneKH ? "" : "This field is requied"
        if ('maKV' in fieldValues)
            temp.maKV = fieldValues.maKV ? "" : "This field is requied"
        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x == "")
    }
    //validate
    const {
        values, setValues, handleInputChange, errors, setErrors, resetForm
    } = useForm(initialValues, validate, props.setCurrentId);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const onSuccess = () => {
                addToast("Thêm thành công !", { appearance: 'success' })

            }
            if (props.currentId === 0)
                props.createKH(values, 
                    addToast("Thêm thành công !", { appearance: 'success' })

                )
            else
                props.updateKH(props.currentId, values, onSuccess)
        }
        console.log(values);
        // resetForm()
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.listKH.find(x => x.maKH == props.currentId)
            })
            setErrors({})
        }

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
                            name="maKH"
                            variant="outlined"
                            label="Mã khách hàng"
                            type="text"
                            value={values.maKH}
                            onChange={handleInputChange}
                            {...(errors.maKH && {
                                error: true,
                                helperText: errors.maKH,
                            })}
                        />
                        <TextField
                            name="tenKH"
                            variant="outlined"
                            label="Tên khách hàng"
                            type="text"
                            value={values.tenKH}
                            onChange={handleInputChange}
                            {...(errors.tenKH && {
                                error: true,
                                helperText: errors.tenKH,
                            })}
                        />
                        <TextField
                            name="email"
                            variant="outlined"
                            label="Email"
                            type="text"
                            value={values.email}
                            onChange={handleInputChange}
                            {...(errors.email && {
                                error: true,
                                helperText: errors.email,
                            })}
                        />
                        <TextField
                            name="password"
                            variant="outlined"
                            label="Password"
                            type="text"
                            value={values.password}
                            onChange={handleInputChange}
                            {...(errors.password && {
                                error: true,
                                helperText: errors.password,
                            })}
                        />
                    </div>
                    <div>
                        <TextField
                            name="phoneKH"
                            variant="outlined"
                            label="Điện Thoại"
                            type="text"
                            value={values.phoneKH}
                            onChange={handleInputChange}
                            {...(errors.phoneKH && {
                                error: true,
                                helperText: errors.phoneKH,
                            })}
                        />
                        <TextField
                            name="maKV"
                            variant="outlined"
                            label="Khu Vực"
                            type="text"
                            value={values.maKV}
                            onChange={handleInputChange}
                            {...(errors.maKV && {
                                error: true,
                                helperText: errors.maKV,
                            })}
                        />
                    </div>

                    <>
                        <Button variant="contained" color="primary" size="medium" type="submit">
                            ADD
                        </Button>
                        <Button variant="contained" color="default" size="medium" onClick={resetForm}>
                            Reset
                        </Button>
                    </>
                </form>
            </Card>
        </Grid>
    );
}

const mapStateToProps = state => ({
    listKH: state.khachHang.khachHanglist
})

const mapActionToProps = {
    createKH: actions.createKhachHang,
    updateKH: actions.updateKhachHang
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CustomerForm));