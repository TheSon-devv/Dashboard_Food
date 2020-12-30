import React, { useEffect } from "react";
import useForm from "../useForm";
import {
  Grid,
  TextField,
  withStyles,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Card from "components/Card/Card.js";
import { connect } from "react-redux";
import * as actions from "../../../actions/hoaDon";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  },
  fromGroup: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialValues = {
  maHDDB: "",
  priceHDDB: 0,
  trangThai: "",
  maBan: "",
  maKH: "",
};

const HDDBForm = ({ classes, ...props }) => {
  const validate = (fieldValues = values) => {
    let temp = {};
    if ("maHDDB" in fieldValues)
      temp.maHDDB = fieldValues.maHDDB ? "" : "Vui lòng điền mã hóa đơn";
    if ("priceHDDB" in fieldValues)
      temp.priceHDDB = fieldValues.priceHDDB
        ? ""
        : "Vui lòng điền giá trị hóa đơn";
    if ("maBan" in fieldValues)
      temp.maBan = fieldValues.maBan ? "" : "Vui lòng chọn bàn";
    if ("maKH" in fieldValues)
      temp.maKH = fieldValues.maKH ? "" : "Vui lòng chọn khách hàng";

    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, validate, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (props.currentId == 0)
        props.createHDDB(values, () => {
          window.alert("Da them");
        });
      else
        props.updateHDDB(props.currentId, values, () => {
          window.alert("updated");
        });
      resetForm();
    }
    console.log(values);
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.listHDDB.find((x) => x.maHDDB == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

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
              name="maHDDB"
              variant="outlined"
              label="Mã Hóa Đơn"
              type="text"
              value={values.maHDDB}
              onChange={handleInputChange}
              {...(errors.maHDDB && {
                error: true,
                helperText: errors.maHDDB,
              })}
            />
            <TextField
              name="priceHDDB"
              variant="outlined"
              label="Giá trị hóa đơn"
              type="number"
              value={values.priceHDDB}
              onChange={handleInputChange}
              {...(errors.priceHDDB && {
                error: true,
                helperText: errors.priceHDDB,
              })}
            />
          </div>
          <div>
            <TextField
              name="trangThai"
              id="outlined-select-currency"
              select
              label="Trạng thái"
              value={values.trangThai}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.trangThai && {
                error: true,
                helperText: errors.trangThai,
              })}
            >
              <MenuItem value="Chưa thanh toán">Chưa thanh toán</MenuItem>
              <MenuItem value="Đã thanh toán">Đã thanh toán</MenuItem>
            </TextField>
            {/* <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">tt</InputLabel>
                            <Select
                                name="trangThai"
                                value={values.trangThai}
                                onChange={handleInputChange}
                                label="Trạng Thái"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Đã thanh toán">Đã thanh toán</MenuItem>
                                <MenuItem value="Chưa thanh toán">Chưa thanh toán</MenuItem>

                            </Select>
                        </FormControl> */}
            <TextField
              name="maBan"
              id="outlined-select-currency"
              select
              label="Bàn"
              value={values.maBan}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.maBan && {
                error: true,
                helperText: errors.maBan,
              })}
            >
              {props.listDatBan.map((e) => (
                <MenuItem key={e.maBan} value={e.maBan}>
                  {e.maBan}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="maKH"
              id="outlined-select-currency"
              select
              label="Tên khách hàng"
              value={values.maKH}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.maKH && {
                error: true,
                helperText: errors.maKH,
              })}
            >
              {props.listKH.map((e) => (
                <MenuItem key={e.maKH} value={e.maKH}>
                  {e.tenKH}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">
              ADD
            </Button>
            <Button
              type="reset"
              variant="contained"
              style={{ marginLeft: "15px" }}
              color="primary"
              onClick={resetForm}
            >
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  listHDDB: state.hoaDon.HDDBList,
  listDatBan: state.datBan.datBanList,
  listKH: state.khachHang.khachHanglist,
});

const mapActionToProps = {
  createHDDB: actions.createHDDB,
  updateHDDB: actions.updateHDDB,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(HDDBForm));
