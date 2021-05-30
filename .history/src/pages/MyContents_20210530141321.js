import React from "react";
import Block from "../accessories/img/bloock.png";
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
              <img src={Block} alt="" />
            </div>
            <div className="content-txt">
              <h4 className="content-desc">date: 2020 8/18</h4>
              <h4 className="content-desc">production: ブロック崩し</h4>
              <p>
                私がプログラミングを始めて初めて作った制作物になります。
                Youtubeを参考にし、模写して制作しました。
                jsを用いて動的なWebサイトを作る事ができました。
              </p>
            </div>
          </div>
          <div className="content-item">
            <div className="content-img">
              <img src={Kureyon} alt="" />
            </div>
            <div className="content-txt">
              <h4 className="content-desc">date: 2020 11/21</h4>
              <h4 className="content-desc">production: Pig Games</h4>
              <p>
                テキストがはいりますてテキストがはいりますテキストがはいりsマス番おdtk停止宮いひいひひひひひ一っヒッヒッヒひ
              </p>
            </div>
          </div>
          <div className="content-item">
            <div className="content-img">
              <img src={Fashion} alt="" />
            </div>
            <div className="content-txt">
              <h4 className="content-desc">date: 2020 11/21</h4>
              <h4 className="content-desc">production: Pig Games</h4>
              <p>
                テキストがはいりますてテキストがはいりますテキストがはいりsマス番おdtk停止宮いひいひひひひひ一っヒッヒッヒひ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyContents;
