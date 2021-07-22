// trong fc ko có life circle
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingList,
  postBookingTicket,
} from "../../../store/actions/booking.action";
import { useParams } from "react-router-dom";

export default function Booking() {
  const dispatch = useDispatch();
  const { listChair } = useSelector((state) => state.booking);
  console.log(listChair);
  // lấy maLichChieu từ url xuống
  const { maLichChieu } = useParams();

  // tương đương với componentDidMount
  useEffect(() => {
    //dispatch action call api
    dispatch(getBookingList(maLichChieu));
  }, []);

  const setClassNameChair = (daDat, dangChon) => {
    if (daDat) {
      return "btn-danger  ";
    } else {
      if (dangChon) {
        return "btn-warning ";
      } else {
        return "btn-info ";
      }
    }
  };

  const renderListChair = () => {
    if (listChair) {
      return listChair.map((chair, index) => {
        return (
          <button
            className={
              setClassNameChair(chair.daDat, chair.dangChon) + "btn m-2"
            }
            key={index}
            onClick={() => {
              console.log(chair);
              dispatch({
                type: "DANG_CHON",
                payload: chair,
              });
            }}
          >
            {chair.tenGhe}
          </button>
        );
      });
    }
  };

  return (
    <div>
      <h2>Booking</h2>
      <section className="listChair">{renderListChair()}</section>
      <div className="dat-ve">
        <button
          className="btn btn-success"
          onClick={() => {
            const danhSachVe = listChair.filter((chair) => {
              return chair.dangChon;
            });
            dispatch(postBookingTicket(maLichChieu, danhSachVe));
          }}
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
}
