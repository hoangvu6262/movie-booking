// trong fc ko có life circle
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingList,
  postBookingTicket,
} from "../../../../store/actions/booking.action";
import { useParams } from "react-router-dom";
import "./style.scss";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import WeekendIcon from "@material-ui/icons/Weekend";

export default function ChooseSeats() {
  const dispatch = useDispatch();
  const { listChair } = useSelector((state) => state.booking);
  // console.log(listChair);
  // lấy maLichChieu từ url xuống
  const { maLichChieu } = useParams();

  // tương đương với componentDidMount
  useEffect(() => {
    //dispatch action call api
    dispatch(getBookingList(maLichChieu));
  }, []);

  const setClassNameChair = (daDat, dangChon, loaiGhe) => {
    if (daDat) {
      return "btn-danger  ";
    } else {
      if (dangChon) {
        return "btn-warning ";
      } else if (loaiGhe === "Vip") {
        return "btn-vip ";
      } else {
        return "btn-normal ";
      }
    }
  };

  const renderListChair = () => {
    if (listChair) {
      return listChair.map((chair, index) => {
        return (
          <button
            className={
              setClassNameChair(chair.daDat, chair.dangChon, chair.loaiGhe) +
              "btn-chair"
            }
            key={index}
            onClick={() => {
              // console.log(chair);
              dispatch({
                type: "DANG_CHON",
                payload: chair,
              });
            }}
          >
            {chair.loaiGhe === "Vip" ? <WeekendIcon /> : <EventSeatIcon />}
            <p>{chair.tenGhe}</p>
          </button>
        );
      });
    }
  };

  return (
    <div className="choose-seat__container">
      <div className="choose-seat">
        {/* <h2>Booking</h2> */}
        <section className="listChair">{renderListChair()}</section>
        {/* <div className="dat-ve">
          <button
            className="btn btn-success"
            onClick={() => {
              const danhSachVe = listChair.filter((chair) => {
                return chair.dangChon;
              });
              console.log(danhSachVe);
              dispatch(postBookingTicket(maLichChieu, danhSachVe));
            }}
          >
            Đặt vé
          </button>
        </div> */}
      </div>
    </div>
  );
}
