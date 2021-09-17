import React from "react";
import AdminHeader from "../../../components/adminHeader";
import CinemasTable from "./CinemasTable";
import CustomPaper from "../../../components/customPaper";
import StorageIcon from "@material-ui/icons/Storage";

export default function CinemaSystems() {
  return (
    <>
      <AdminHeader title="Quản lý hệ thống Rạp"></AdminHeader>
      <CustomPaper title="Cinemas Table" IconPaper={StorageIcon}>
        <CinemasTable />
      </CustomPaper>
    </>
  );
}
