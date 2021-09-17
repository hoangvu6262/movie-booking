import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInfoUser } from "../../../store/actions/user.action";
import { Grid, makeStyles } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import Loading from "../../../components/loading";
import CustomPaper from "../../../components/customPaper";
import UserInfoTable from "./UserInfoTable";

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
});

export default function UserInfo() {
  const classes = useStyles();

  const { taiKhoan } = useParams();

  const dispatch = useDispatch();

  const { infoUser } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(getInfoUser(taiKhoan));
  }, []);

  console.log(infoUser);

  const profifes = [
    {
      id: 1,
      name: "Họ Tên:",
      value: infoUser.hoTen,
      pIcon: FaceRoundedIcon,
    },
    { id: 2, name: "Email:", value: infoUser.email, pIcon: EmailIcon },
    {
      id: 3,
      name: "Số điện thoại:",
      value: infoUser.soDT,
      pIcon: PhoneIphoneIcon,
    },
  ];

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <CustomPaper
          title="Thông tin người dùng"
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
                  Tài khoản: {infoUser.taiKhoan}
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
          title="Thông tin đặt vé"
          IconPaper={StorageRoundedIcon}
          color="#ff9800"
        >
          <UserInfoTable thongTinDatVe={infoUser.thongTinDatVe} />
        </CustomPaper>
      </>
    );
  }
}
