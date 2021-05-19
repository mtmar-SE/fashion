import React from "react";
import "../accessories/styles/pages.css";

const AboutMe = () => {
  return (
    <>
      <div className="me">
        <h1 style={"color: pink"}>AboutMe</h1>
        <div className="picture-me">
          <div>写真を載せるところです</div>
        </div>
        <div className="about-me">
          <h2 className="secondary-article">Name</h2>
          <p className="secondary-article">motoki hirasawa/平沢 基</p>
          <h2 className="secondary-article">Story</h2>
          <p className="secondary-article">
            私は現在大学２年生です。プログラミングを始めたきっかけは将来の不安からです。コロナ禍で就職困難、またAIの発達による職業淘汰で自分は本当に職につけるのだろうか。周りの人と同じ生き方をしていたら、将来はAIに職業を取られる身になると思っており、
          </p>
          <h2 className="secondary-article">Personarity</h2>
          <p className="secondary-article">
            私の父は転勤族で、それに伴い今まで岩手、長野、北海道、宮城、静岡の6県を渡り歩いてきました。そこで私は、新天地での友達作りや、新たな環境に溶け込む力が備わったと思っています。
          </p>
          <p className="secondary-article">
            苦労することは山ほどありましたが、どのような状況でも屈しないメンタルを手に入れる事ができたのと、様々な経験を通してより客観的に物事を捉えられるようになったと自負しています。
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
