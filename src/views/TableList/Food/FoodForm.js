import React, { useRef, useState, useEffect } from "react";
import useForm from "../useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import { connect } from "react-redux";
import * as actions from "../../../actions/monAn";

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
    maMonAn: '',
    tenMon: '',
    price: 0,
    infomation: '',
    maLoai: '',
    maNhaHang: '',
    img_food: null
}

const FoodForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('maMonAn' in fieldValues)
            temp.maMonAn = fieldValues.maMonAn ? "" : "This field is requied"
        if ('tenMon' in fieldValues)
            temp.tenMon = fieldValues.tenMon ? "" : "This field is requied"
        if ('price' in fieldValues)
            temp.price = fieldValues.price ? 0 : "This field is requied"
        if ('maLoai' in fieldValues)
            temp.maLoai = fieldValues.maLoai ? "" : "This field is requied"
        if ('maNhaHang' in fieldValues)
            temp.maNhaHang = fieldValues.maNhaHang ? "" : "This field is requied"

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
                props.createMonAn(values, () => { window.alert('Da them') })
            else
                props.updateMonAn(props.currentId, values, () => { window.alert('updated') })
        }
        console.log(values)
    }

    useEffect(() => {
        if (props.currentId != 0)
            setValues({
                ...props.monAnList.find(x => x.maMonAn == props.currentId)
            })
    }, [props.currentId])
    return (
        <Grid container>

            <Card style={{ textAlign: "center" }}>
                <form
                    noValidate
                    autoComplete="off"
                    className={classes.root}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <TextField
                            name="maMonAn"
                            variant="outlined"
                            label="Mã Món Ăn"
                            type="text"
                            value={values.maMonAn}
                            onChange={handleInputChange}
                            
                            {...(errors.maMonAn && {
                                error: true,
                                helperText: errors.maMonAn,
                            })}
                        />

                        <TextField
                            name="tenMon"
                            variant="outlined"
                            label="Tên Món"
                            type="text"
                            value={values.tenMon}
                            onChange={handleInputChange}
                            {...(errors.tenMon && {
                                error: true,
                                helperText: errors.tenMon,
                            })}
                        />

                        <TextField
                            name="price"
                            variant="outlined"
                            label="Giá"
                            type="number"
                            value={values.price}
                            onChange={handleInputChange}
                            {...(errors.price && {
                                error: true,
                                helperText: errors.price,
                            })}
                        />
                        <TextField
                            name="infomation"
                            variant="outlined"
                            label="Infomation"
                            type="text"
                            value={values.infomation}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            name="maLoai"
                            variant="outlined"
                            label="Mã Loại"
                            type="text"
                            value={values.maLoai}
                            onChange={handleInputChange}
                            {...(errors.maLoai && {
                                error: true,
                                helperText: errors.maLoai,
                            })}
                        />

                        <TextField
                            name="maNhaHang"
                            variant="outlined"
                            label="Mã Nhà Hàng"
                            type="text"
                            value={values.maNhaHang}
                            onChange={handleInputChange}
                            {...(errors.maNhaHang && {
                                error: true,
                                helperText: errors.maNhaHang,
                            })}
                        />
                        {/* <TextField
                            name="img_food"
                            variant="outlined"
                            label="ảnh"
                            type="text"
                            value={values.img_food}
                            onChange={handleInputChange}
                            {...(errors.img_food && {
                                error: true,
                                helperText: errors.img_food,
                            })}
                        /> */}
                    </div>
                    <>
                        <Button variant="contained" color="primary" type="submit" >
                            ADD
                        </Button>
                        <Button variant="contained" color="primary">
                            Reset
                        </Button>
                    </>
                </form>
            </Card>
        </Grid>
    );
}

const mapStateToProps = state => ({
    monAnList: state.monAn.list
})

const mapActionToProps = {
    createMonAn: actions.createMonAn,
    updateMonAn: actions.updateMonAn
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(FoodForm));