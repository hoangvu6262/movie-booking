import React, { useEffect } from "react";
import StepperBooking from "../../../components/stepper";
import ChooseSeat from "./chooseSeats/ChooseSeats";
import ChoosePayment from "./choosePayment/ChoosePayment";
import Payment from "./payment/Payment";
import "./style.scss";
import { useSelector } from "react-redux";

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

export default function Booking() {
  const { listChair, movieInfo } = useSelector((state) => state.booking);

  const danhSachVe = listChair.filter((chair) => {
    return chair.dangChon;
  });

  const dsVe = [];
  danhSachVe.map((item) => {
    dsVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
  });
  // console.log("listDangChon", dsVe);

  // danh sách ghế ngồi đang chọn sẽ dc lưu vào sessionStorage
  // sessionStorage.setItem("listDangChon", JSON.stringify(dsVe));

  return (
    <div className="booking-page">
      <StepperBooking
        stepper={steps}
        next={dsVe}
        maLichChieu={movieInfo.maLichChieu}
      />
    </div>
  );
}
