import React from "react";
import StepperBooking from "../../../components/stepper";
import ChooseSeat from "./chooseSeats/ChooseSeats";
import ChoosePayment from "./choosePayment/ChoosePayment";
import Payment from "./payment/Payment";
import "./style.scss";
import { useSelector } from "react-redux";

export default function Booking() {
  const steps = [
    {
      name: "Chọn ghế ngồi",
      Component: ChooseSeat,
    },
    {
      name: "chọn phương thức thanh toán",
      Component: ChoosePayment,
    },
    {
      name: "Kiểm tra và thanh toán",
      Component: Payment,
    },
  ];

  const { listChair, movieInfo } = useSelector((state) => state.booking);
  const danhSachVe = listChair.filter((chair) => {
    return chair.dangChon;
  });

  const dsVe = [];
  danhSachVe.map((item) => {
    dsVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
  });
  console.log("listDangChon", dsVe);
  return (
    <div className="booking-page">
      {/* <div>
        <p>{movieInfo.tenPhim}</p>
      </div> */}
      <StepperBooking
        stepper={steps}
        next={dsVe}
        maLichChieu={movieInfo.maLichChieu}
      />
    </div>
  );
}
