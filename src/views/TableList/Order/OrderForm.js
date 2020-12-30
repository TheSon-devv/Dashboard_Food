import React, { useRef, useState, useEffect } from "react";
import useForm from "../useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import Card from "components/Card/Card.js";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import * as actions from "../../../actions/datBan";

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
  maMonAn: "",
  soLuongBan: "",
  soLuongNguoi: "",
  timeCheck: "",
  maKH: "",
};

const OrderForm = ({ classes, ...props }) => {
  const validate = (fieldValues = values) => {
    let temp = {};
    // if ('tenkh' in fieldValues)
    //     temp.tenkh = fieldValues.tenkh ? "" : "Vui lòng điền tên khách hàng"
    // if ("phone" in fieldValues)
    //     temp.phone = fieldValues.phone ? "" : "This field is requied";
    // if ("soluongban" in fieldValues)
    //     temp.soluongban = fieldValues.soluongban ? "" : "This field is requied";
    // if ("soluongnguoi" in fieldValues)
    //     temp.soluongnguoi = fieldValues.soluongnguoi ? "" : "This field is requied";
    // if ("datetime" in fieldValues)
    //     temp.datetime = fieldValues.datetime ? "" : "This field is requied";
    // if ("trangthai" in fieldValues)
    //     temp.trangthai = fieldValues.trangthai ? "" : "This field is requied";

    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    initialValues,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (props.currentId == 0)
        props.createDatBan(values, () => {
          window.alert("Da them");
        });
      else
        props.updateDatBan(props.currentId, values, () => {
          window.alert("updated");
        });
    }
    console.log(values);
  };

  useEffect(() => {
    if (props.currentId != 0)
      setValues({
        ...props.listDB.find((x) => x.maBan == props.currentId),
      });
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
          {/* <div>
                        <RadioGroup aria-label="gender" name="gender1" value={values.tt} onChange={handleInputChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    </div> */}
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
            {/* <TextField
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
                        /> */}
            <TextField
              name="soLuongBan"
              variant="outlined"
              label="Số Lượng Bàn"
              type="text"
              value={values.soLuongBan}
              onChange={handleInputChange}
              {...(errors.soLuongBan && {
                error: true,
                helperText: errors.soLuongBan,
              })}
            />
          </div>
          <div>
            <TextField
              name="soluongNguoi"
              variant="outlined"
              label="Số Lượng Người"
              type="text"
              value={values.soluongNguoi}
              onChange={handleInputChange}
              {...(errors.soluongNguoi && {
                error: true,
                helperText: errors.soluongNguoi,
              })}
            />
            <TextField
              name="timeCheck"
              type="datetime-local"
              variant="outlined"
              style={{ width: "209px" }}
              value={values.timeCheck}
              onChange={handleInputChange}
              {...(errors.timeCheck && {
                error: true,
                helperText: errors.timeCheck,
              })}
            />
            <TextField
              name="maKH"
              type="text"
              variant="outlined"
              label="Mã Khách Hàng"
              value={values.maKH}
              onChange={handleInputChange}
              {...(errors.maKH && {
                error: true,
                helperText: errors.maKH,
              })}
            />
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">
              ADD
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "15px" }}
              color="primary"
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
  listDB: state.datBan.datBanList,
});

const mapActionToProps = {
  createDatBan: actions.createDatBan,
  updateDatBan: actions.DeleteDatBan,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(OrderForm));
