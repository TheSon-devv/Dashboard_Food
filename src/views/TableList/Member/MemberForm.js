import React, { useRef, useState, useEffect } from "react";
import useForm from "../useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import { connect } from "react-redux";
import * as actions from "../../../actions/nhanVien";

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
    maNV: '',
    tenNV: '',
    dateStart: '',
    dienThoai: '',
    diaChi: '',
    chucVu: '',
}

const MemberForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('maNV' in fieldValues)
            temp.maNV = fieldValues.maNV ? "" : "This field is requied"
        if ("tenNV" in fieldValues)
            temp.tenNV = fieldValues.tenNV ? "" : "This field is requied";

        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values, setValues, handleInputChange, errors, setErrors,resetForm
    } = useForm(initialValues, validate,props.setCurrentId);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            if (props.currentId == 0)
                props.createNhanVien(values, window.alert('Da them'))
            else
                props.updateNhanVien(props.currentId, values, window.alert('updated'))
        }
        console.log(values)
    }

    useEffect(() => {
        if (props.currentId != 0)
            setValues({
                ...props.listNV.find(x => x.maNV == props.currentId)
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
                            name="maNV"
                            variant="outlined"
                            label="Mã Nhân Viên"
                            type="text"
                            value={values.maNV}
                            onChange={handleInputChange}
                            {...(errors.maNV && {
                                error: true,
                                helperText: errors.maNV,
                            })}
                        />
                        <TextField
                            name="tenNV"
                            variant="outlined"
                            label="Tên Nhân Viên"
                            type="text"
                            value={values.tenNV}
                            onChange={handleInputChange}
                            {...(errors.tenNV && {
                                error: true,
                                helperText: errors.tenNV,
                            })}
                        />


                        <TextField
                            name="dateStart"
                            variant="outlined"

                            type="datetime-local"
                            value={values.dateStart}
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <TextField
                            name="dienThoai"
                            variant="outlined"
                            label="Điện Thoại"
                            type="text"
                            value={values.dienThoai}
                            onChange={handleInputChange}
                            
                        />
                        <TextField
                            name="diaChi"
                            variant="outlined"
                            label="Địa Chỉ"
                            type="text"
                            value={values.diaChi}
                            onChange={handleInputChange}
                       
                        />
                        <TextField
                            name="chucVu"
                            variant="outlined"
                            label="Chức Vụ"
                            type="text"
                            value={values.chucVu}
                            onChange={handleInputChange}
                        
                        />
                    </div>

                    <div>
                        <Button variant="contained" color="primary" type="submit">
                            ADD
                        </Button>
                        <Button variant="contained" color="primary" onClick={resetForm}>
                            Reset
                        </Button>
                    </div>
                </form>
            </Card>
        </Grid>
    );
}

const mapStateToProps = state => ({
    listNV: state.nhanVien.nhanVienList
})

const mapActionToProps = {
    createNhanVien: actions.createNhanVien,
    updateNhanVien: actions.updateNhanVien
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(MemberForm));