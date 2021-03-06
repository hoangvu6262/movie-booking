import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInfoUser } from "../../../store/actions/user.action";
import {
  Container,
  Tooltip,
  IconButton,
  Grid,
  makeStyles,
} from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import EditIcon from "@material-ui/icons/Edit";
import Loading from "../../../components/loading";
import CustomPaper from "../../../components/customPaper";
import UserInfoTable from "./UserInfoTable";
import Notification from "../../../components/notification";
import FormDialog from "../../../components/formDialog";
import AdminHeader from "../../../components/adminHeader";
import AdminUserForm from "../user/AdminUserForm";

const useStyles = makeStyles({
  userInfoContent: {
    width: "90%",
    margin: "0 auto",
    fontWeight: "300",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
    "& p": {
      marginBottom: 0,
    },
  },
  userInfoAccount: {
    margin: "30px auto",
    width: 160,
  },
  userInfoAccountIcon: {
    fontSize: 160,
    textAlign: "center",
    color: "#999",
  },
  userInfoAccountContent: {
    fontWeight: "400",
    textAlign: "center",
    // fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  },
  userInfoProfile: {
    margin: "20px auto",
    padding: "5px 15px",
  },
  userInfoProfileLabel: {
    fontSize: 15,
    fontWeight: "400",
    paddingBottom: "4px",
  },
  userInfoProfileValue: {
    paddingBottom: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #999",
    "&:hover": {
      borderBottom: "1px solid #9c27b0",
    },
  },
  movieInfoAcions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    "& .MuiSvgIcon-root": {
      width: 14,
      height: 14,
      color: "#fff",
    },
    "& .MuiIconButton-root": {
      marginLeft: 20,
      backgroundColor: "rgb(156, 39, 176)",
      width: 30,
      height: 30,
      boxShadow:
        "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%)",
    },
  },
});

export default function UserInfo() {
  const classes = useStyles();

  const { taiKhoan } = useParams();

  const dispatch = useDispatch();

  const { infoUser, notify } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(getInfoUser(taiKhoan));
  }, []);

  console.log("infoUser", infoUser);

  const [openDialog, setOpenDialog] = useState({
    isAddUser: false,
    title: "",
    user: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    open: false,
  });

  const profifes = [
    {
      id: 1,
      name: "H??? T??n:",
      value: infoUser.hoTen,
      pIcon: FaceRoundedIcon,
    },
    { id: 2, name: "Email:", value: infoUser.email, pIcon: EmailIcon },
    {
      id: 3,
      name: "S??? ??i???n tho???i:",
      value: infoUser.soDT,
      pIcon: PhoneIphoneIcon,
    },
  ];

  const handleCloseNotification = () => {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: false,
    });
  };

  const handleClickEdit = (user) => {
    setOpenDialog({
      isAddUser: false,
      title: "Thay ?????i th??ng tin t??i kho???n",
      user: {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        email: user.email,
        soDt: user.soDT,
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: user.hoTen,
      },
      open: true,
    });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Container maxWidth="lg">
          <AdminHeader title="Profile">
            <Grid item md={5} xs={12} className={classes.movieInfoAcions}>
              <Tooltip title="Edit User" arrow>
                <IconButton onClick={() => handleClickEdit(infoUser)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </AdminHeader>
          <CustomPaper
            title="Th??ng tin ng?????i d??ng"
            IconPaper={SupervisorAccountIcon}
            color="#ff9800"
          >
            <Grid container className={classes.userInfoContent}>
              <Grid item md={6} xs={12}>
                <div className={classes.userInfoAccount}>
                  <AccountCircleRoundedIcon
                    className={classes.userInfoAccountIcon}
                  />
                  <p className={classes.userInfoAccountContent}>
                    T??i kho???n: {infoUser.taiKhoan}
                  </p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                {profifes.map((profifes) => {
                  return (
                    <div className={classes.userInfoProfile} key={profifes.id}>
                      <p className={classes.userInfoProfileLabel}>
                        {profifes.name}
                      </p>
                      <div className={classes.userInfoProfileValue}>
                        <p>{profifes.value}</p>
                        <profifes.pIcon />
                      </div>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </CustomPaper>
          <CustomPaper
            title="Th??ng tin ?????t v??"
            IconPaper={StorageRoundedIcon}
            color="#ff9800"
          >
            <UserInfoTable thongTinDatVe={infoUser.thongTinDatVe} />
          </CustomPaper>
          <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog}>
            <AdminUserForm
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
            />
          </FormDialog>
          <Notification
            notifyAlert={notify}
            onClose={handleCloseNotification}
          ></Notification>
        </Container>
      </>
    );
  }
}
