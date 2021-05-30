import React from "react";
import Block from "../accessories/img/block.png";
import Video from "../accessories/img/VideoSearch.png";
import Fashion from "../accessories/img/fashion.jpg";

const MyContents = (img) => {
  const PickImg = window.open("img/" + img, "pickimg", "width=70%, height=70%");

  return (
    <section className="mycontent">
      <div className="inner">
        <h2 className="sub-title">MyContents</h2>
        <div className="inner-box2">
          <div className="content-item">
            <div className="content-img">
              <img src={Block} alt="" />
            </div>
            <div className="content-txt">
              <h4 className="content-desc">date: 2020 8/18</h4>
              <h4 className="content-desc">production: ブロック崩し</h4>
              <p className="content-detail">
                私がプログラミングを始めて初めて作った制作物になります。
                Youtubeを参考にし、模写して制作しました。
                jsを用いて動的なWebサイトを作る事ができました。
              </p>
            </div>
          </div>
          <div className="content-item">
            <div className="content-img">
              <img src={Video} alt="" />
            </div>
            <div className="content-txt">
              <h4 className="content-desc">date: 2020 10/18</h4>
              <h4 className="content-desc">production: Youtube Demo</h4>
              <p className="content-detail">
                Youtubeの様に検索すると動画が出てくる仕組みになってます。
                PC版Youtubeを装い、右側に関連動画の表示・動画下に動画の概要
                もちろんレスポンシブ対応し再生することも可能です◎
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
              <p className="content-detail">
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
