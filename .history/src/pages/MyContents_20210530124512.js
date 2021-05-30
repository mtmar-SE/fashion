import React from "react";
import Ader from "../accessories/img/ader.jpeg";
import Kureyon from "../accessories/img/kureyon.jpeg";
import Fashion from "../accessories/img/fashion.jpg";

const MyContents = () => {
  return (
    <section className="mycontent">
      <div className="inner">
        <h2 className="sub-title">MyContents</h2>
        <div className="inner-box">
          <div className="content-item">
            <div className="content-img">
              <img src={Ader} alt="" />
            </div>
            <div className="content-txt">
              <h4>date: 2020 11/21</h4>
              <h4>production: Pig Games</h4>
              <p>
                テキストがはいりますてテキストがはいりますテキストがはいりsマス番おdtk停止宮いひいひひひひひ一っヒッヒッヒひ
              </p>
            </div>
          </div>
          <div className="content-item">
            <div className="content-img">
              <img src={Kureyon} alt="" />
            </div>
             <div className="content-txt"></div>
            <h4>date: 2020 11/21</h4>
            <h4>production: Pig Games</h4>
            <p>
              テキストがはいりますてテキストがはいりますテキストがはいりsマス番おdtk停止宮いひいひひひひひ一っヒッヒッヒひ
            </p>
            </div>
          </div>
          <div className="content-item">
            <div className="content-img">
              <img src={Fashion} alt="" />
            </div>
            <h4>date: 2020 11/21</h4>
            <h4>production: Pig Games</h4>
            <p>
              テキストがはいりますてテキストがはいりますテキストがはいりsマス番おdtk停止宮いひいひひひひひ一っヒッヒッヒひ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyContents;
