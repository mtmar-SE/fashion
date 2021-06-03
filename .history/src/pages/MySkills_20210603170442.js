import React from "react";
// import html from "../accessories/skills/html.png";
// import css3 from "../accessories/skills/css3.png";
// import sass from "../accessories/skills/sass.png";
// import javascript from "../accessories/skills/js.png";
// import react from "../accessories/skills/react.png";
// import typesctipt from "../accessories/skills/typescript.png";

const MySkills = () => {
  return (
    <section className="myskill">
      <div className="inner">
        <h2 className="sub-title">MySkills</h2>
        <div className="inner-box1">
          <div className="skill-item">
            <h2 className="skill-title">HTML</h2>
            <p className="skill-desc">
              私がWebフロントエンドエンジニアを目指すと決めた際に初めて触れたマークアップ言語です。2020年6月からプログラミングを始め、今現在2021年6月にかけて一年間触れてきました。一年を通して様々なWebアプリケーションを作成してきました。
            </p>
            <h4 className="skill-history">history: 1 year</h4>
          </div>
          <div className="skill-item">
            <h2 className="skill-title">css3</h2>
            <p className="skill-desc">
              Webアプリケーションを作成する際に使用します。レスポンシブ対応はもちろん、デザインに拘りながら制作します。パステルカラーを用いたWebアプリケーションを作るのが好きです。ホームページのHairSalonもCssを拘って作成しました＾＾
            </p>
            <h4 className="skill-history">history: 1 year</h4>
          </div>
          <div className="skill-item">
            <h2 className="skill-title">sass</h2>
            <p className="skill-desc">
              cssを高速で記述するための言語です。今回のポートフォリオには取り入れてないですが、今後作るWebアプリケーションはtypescriptとsassを混ぜて爆速で開発を進めていきたいと考えています。
            </p>
            <h4 className="skill-history">history: 8 month</h4>
          </div>
          <div className="skill-item">
            <h2 className="skill-title">JavaScript</h2>
            <p className="skill-desc">
              ブロック崩しにもありますが、動的なWebアプリケーションを作れた時は感動しました。今までホームページの様な静的なWebアプリケーションしか作れなかったのでWeb制作の楽しさを知れました！
            </p>
            <h4 className="skill-history">history: 8 month</h4>
          </div>
          <div className="skill-item">
            <h2 className="skill-title">React</h2>
            <p className="skill-desc">
              クイズアプリ、Youtubeの検索アプリ、Chatbot、ECサイト、友人のホームページサイト、Firebaseを用いて認証機能付きのアプリケーションやFireStoreを用いて在庫管理をできる様に開発しました。
              このポートフォリオもReactを使用しています。
            </p>
            <h4 className="skill-history">history: 6 month</h4>
          </div>
          <div className="skill-item">
            <h2 className="skill-title">typescript</h2>
            <p className="skill-desc">
              今現在、大岡由佳さん著の『りあクト！』シリーズを３冊読破しました。今まで曖昧であったReactとtypescriptに関する歴史、構造を深く理解する事ができました。これからは主にtypescriptを用いてWebアプリケーションを作っていきたいと考えています。
            </p>
            <h4 className="skill-history">history: 1 month</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
