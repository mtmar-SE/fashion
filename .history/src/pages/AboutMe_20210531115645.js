import React from "react";
import "../accessories/styles/pages.css";
import Me from "../accessories/img/kureyon.jpeg";

const AboutMe = () => {
  return (
    <>
      <section className="aboutme">
        <div className="inner">
          <h1 className="sub-title">AboutMe</h1>
          <div className="picture-me">
            <img className="content-img" href={Me} alt="" />
          </div>
          <div className="about-me">
            <h2 className="main-article">Name</h2>
            <p className="main-article">motoki hirasawa/平沢 基</p>
            <h2 className="main-article">Story</h2>
            <p className="main-article">
              私は現在大学3年生です。コロナ禍で就職困難、またAIの発達による職業淘汰で自分は本当に職につけるのだろうか。周りの人と同じ生き方をしていたら、将来はAIに職業を取られる身になると考え、プログラミングを始めました。
              大学2年生の頃にプログラミングに興味を持ち始め、code
              villageというフロントエンド専門のスクールに通いました。そこでHTML、CSS、JavaScript、Reactを学び、簡易的なWebアプリケーション（ホームページ、チャットアプリ、Todoアプリ）を作成しました。スクール卒業後は更なる技術力の発展の為、Udemyを活用し10個ほどのWebアプリケーションを開発しました。
              現時点ではtypescriptを学ぶために、りあクト！シリーズを勉強しています。
            </p>
            <h2 className="main-article">Personarity</h2>
            <p className="main-article">
              私の父は転勤族で、それに伴い今まで岩手、長野、北海道、宮城、静岡の6県を渡り歩いてきました。そこで私は、新天地での友達作りや、新たな環境に溶け込む力が備わったと思っています。
            </p>
            <p className="main-article">
              苦労することは山ほどありましたが、どのような状況でも屈しないメンタルを手に入れる事ができたのと、様々な経験を通してより客観的に物事を捉えられるようになったと自負しています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
