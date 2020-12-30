import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { Grid, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import * as actions from "../../../actions/monAn";
import FoodForm from "views/TableList/Food/FoodForm";


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);



const FoodsList = ({ ...props }) => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllMonAn()
    }, [])

    const onDelete = maMonAn => {
        if (window.confirm('Are you sure to delete record?')) {
            props.deleteMonAn(maMonAn, () => { window.alert('Delete succesful') })
        }
    }
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Món Ăn</h4>
                    </CardHeader>
                    <CardBody>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <FoodForm {...{ currentId, setCurrentId }} />
                            </Grid>

                            <Grid item md={12}>
                                <TableContainer>
                                    <Table>
                                        <TableHead className={classes.root}>
                                            <TableRow>
                                                <TableCell>Mã món ăn</TableCell>
                                                <TableCell>Tên món ăn</TableCell>
                                                <TableCell>Giá bán</TableCell>
                                                <TableCell>Tên loại</TableCell>
                                                <TableCell>Tên nhà hàng</TableCell>
                                                <TableCell>Ảnh</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {props.monAnList.map((record, index) => {
                                                return (
                                                    <TableRow key={record.maMonAn} hover>
                                                        <TableCell>{record.maMonAn} </TableCell>
                                                        <TableCell>{record.tenMon}</TableCell>
                                                        <TableCell>{record.price} VND</TableCell>
                                                        <TableCell>{record.tenLoai} </TableCell>
                                                        <TableCell>{record.tenNhaHang} </TableCell>
                                                        <TableCell>{record.img_food} </TableCell>

                                                        <TableCell>
                                                            <ButtonGroup variant="text">
                                                                <Button>
                                                                    <EditIcon color="primary"
                                                                        onClick={() => setCurrentId(record.maMonAn)}
                                                                    />
                                                                </Button>
                                                                <Button>
                                                                    <DeleteIcon
                                                                        color="secondary"
                                                                        onClick={() => onDelete(record.maMonAn)}
                                                                    />
                                                                </Button>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>

                        </Grid>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

const mapStateToProps = state => ({
    monAnList: state.monAn.list
})

const mapActionToProps = {
    fetchAllMonAn: actions.fetchAllMonAn,
    deleteMonAn: actions.DeleteMonAn
}

export default connect(mapStateToProps, mapActionToProps)(FoodsList);

// import React from "react";
// import ReactDOM from "react-dom";
// import ImageUploading from "react-images-uploading";


//  export default function App() {
//   const [images, setImages] = React.useState([]);
//   const maxNumber = 69;
//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <button
//               style={isDragging ? { color: "red" } : null}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click or Drop here
//             </button>
//             &nbsp;
//             <button onClick={onImageRemoveAll}>Remove all images</button>
//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image.data_url} alt="" width="100" />
//                 <div className="image-item__btn-wrapper">
//                   <button onClick={() => onImageUpdate(index)}>Update</button>
//                   <button onClick={() => onImageRemove(index)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }

