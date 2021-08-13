import React, { Component } from "react";
import bhd from "../../img/bhd.png";
import cgv from "../../img/cgv.png";
import cinestar from "../../img/cinestar.png";
import galaxy from "../../img/galaxycine.png";
import megags from "../../img/megags.png";
import bt from "../../img/bt.jpg";
import dongdacinema from "../../img/dongdacinema.png";
import touch from "../../img/TOUCH.png";
import cnx from "../../img/cnx.jpg";
import lotte from "../../img/lotte.png";
import starlight from "../../img/STARLIGHT.png";
import dcine from "../../img/dcine.png";
import zalopay from "../../img/zalopay_icon.png";
import payoo from "../../img/payoo.jpg";
import vcb from "../../img/VCB.png";
import agribank from "../../img/AGRIBANK.png";
import ivb from "../../img/IVB.png";
import viettinbank from "../../img/VIETTINBANK.png";
import laban from "../../img/laban.png";
import go from "../../img/123go.png";
import apple from "../../img/apple-logo.png";
import android from "../../img/android-logo.png";
import facebook from "../../img/facebook-logo.png";
import zalo from "../../img/zalo-logo.png";
import zion from "../../img/zion-logo.jpg";
import tb from "../../img/tb.png";
import "./style.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__content">
          <div className="row footer__rowFirst">
            <div className="col-md-4 col-sm-12 footer__left">
              <h6 className="footer__title">TIX</h6>
              <div className="row">
                <div className="col-sm-6 footer__hideOnMobile">
                  <p className="footer__text">FAQ</p>
                  <p className="footer__text">Brand Guidelines</p>
                </div>
                <div className="col-sm-6 col-sm-12 footer__onMobile">
                  <p className="footer__text">Thỏa thuận sử dụng</p>
                  <p className="footer__text">Chính sách bảo mật</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer__middle">
              <h6 className="footer__title">ĐỐI TÁC</h6>
              <div className="row">
                <div className="col-12">
                  <a href="#">
                    <img
                      src={cgv}
                      alt="iconCGV"
                      style={{ background: "white" }}
                    />
                  </a>
                  <a href="#">
                    <img src={bhd} alt="iconBHD" />
                  </a>
                  <a href="#">
                    <img src={galaxy} alt="iconGALAXY" />
                  </a>
                  <a href="#">
                    <img src={cinestar} alt="iconCinestar" />
                  </a>
                  <a href="#">
                    <img src={lotte} alt="iconLOTTE" />
                  </a>
                </div>
                <div className="col-12">
                  <a href="#">
                    <img src={megags} alt="iconMegaGS" />
                  </a>
                  <a href="#">
                    <img src={bt} alt="iconBeta" />
                  </a>
                  <a href="#">
                    <img src={dongdacinema} alt="iconDongdacinema" />
                  </a>
                  <a href="#">
                    <img src={touch} alt="iconTOUCH" />
                  </a>
                  <a href="#">
                    <img src={cnx} alt="iconCNX" />
                  </a>
                </div>
                <div className="col-12">
                  <a href="#">
                    <img src={starlight} alt="iconStarlight" />
                  </a>
                  <a href="#">
                    <img src={dcine} alt="iconDcine" />
                  </a>
                  <a href="#">
                    <img src={zalopay} alt="iconZalo" />
                  </a>
                  <a href="#">
                    <img src={payoo} alt="iconPayoo" />
                  </a>
                  <a href="#">
                    <img src={vcb} alt="iconVCB" />
                  </a>
                </div>
                <div className="col-12">
                  <a href="#">
                    <img src={agribank} alt="iconAGRIBANK" />
                  </a>
                  <a href="#">
                    <img src={viettinbank} alt="iconVIETTINBANK" />
                  </a>
                  <a href="#">
                    <img src={ivb} alt="iconIVB" />
                  </a>
                  <a href="#">
                    <img src={go} alt="icon123go" />
                  </a>
                  <a href="#">
                    <img src={laban} alt="iconLaban" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 footer__right">
              <div className="row">
                <div className="col-md-6 footer__hideOnMobile">
                  <h6 className="footer__title">MOBILE APP</h6>
                  <a href="#">
                    <img src={apple} alt="iconApple" />
                  </a>
                  <a href="#">
                    <img src={android} alt="iconAndroid" />
                  </a>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h6 className="footer__title">SOCIAL</h6>
                  <a href="#">
                    <img src={facebook} alt="iconFace" />
                  </a>
                  <a href="#">
                    <img src={zalo} alt="iconZalo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer__hr" />
          <div className="row footer__rowSecond">
            <div className="col-sm-1 col-sm-12 footer__img">
              <div className="footer__logo">
                <img src={zion} alt="logoZion" />
              </div>
            </div>
            <div className="col-sm-9 col-sm-12">
              <h6>TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>
                Giấy chứng nhận đăn ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
              <p>
                Email:{" "}
                <a href="#" className="footer__email">
                  support@tix.vn
                </a>
              </p>
            </div>
            <div className="col-sm-2 col-sm-12 footer__img">
              <div className="footer__BoCo">
                <img src={tb} alt="logoBoCongThuong" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
