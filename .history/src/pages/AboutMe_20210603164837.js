import React from "react";
import "../accessories/styles/pages.css";
import Me from "../accessories/img/MyIcon.jpg";

const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <div className="inner">
          <h1 className="sub-title">AboutMe</h1>
          <div className="wrapme">
            <div className="picture-me">
              <img className="img-me" src={Me} alt="" />
            </div>
            <div className="detail-me">
              <h3 className="title-me">Name</h3>
              <p className="desc-me">motoki hirasawa/平沢 基</p>
              <h3 className="title-me">Pastime</h3>
              <p className="desc-me">
                スマブラ/温泉/旅行/料理/スポーツ/アニメ鑑賞
              </p>
              <h3 className="title-me">Story</h3>
              <p className="desc-me">
                私は現在大学3年生です。コロナ禍で就職困難、またAIの発達による職業淘汰で自分は本当に職につけるのだろうか。周りの人と同じ生き方をしていたら、将来はAIに職業を取られる身になると考え、プログラミングを始めました。
                <br></br>大学2年生の頃にプログラミングに興味を持ち始め、code
                villageというフロントエンド専門のスクールに通いました。<br></br>
                そこでHTML、CSS、JavaScript、Reactを学び、簡易的なWebアプリケーション（ホームページ、チャットアプリ、Todoアプリ、Chatbot※当サイトにございます）を作成しました。スクール卒業後は更なる技術力の発展の為、Udemyを活用し10個ほどのWebアプリケーションを開発しました。
                <br></br>
                現時点ではtypescriptを学ぶために、りあクト！シリーズを読破。現時点ではtypescriptを用いたWeb開発を検討中です！！
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
