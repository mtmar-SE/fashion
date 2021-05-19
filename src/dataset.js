const fashionData = {
  init: {
    answers: [
      { content: "男性", nextId: "mens_fashion" },
      { content: "女性", nextId: "ladies_fashion" },
      { content: "相談にのってほしい", nextId: "contact" },
    ],
    question:
      "あなたにオススメのブランドを紹介します！^^ 性別を教えてください😸",
  },

  mens_fashion: {
    answers: [
      { content: "韓国系ファッション", nextId: "korea" },
      { content: "ストリートファッション", nextId: "street" },
      { content: "古着系ファッション", nextId: "used" },
      { content: "系統が決まっていない😿", nextId: "unselect" },
      { content: "一つ前の質問に戻る", nextId: "init" },
    ],
    question: "あなたの好きな系統を教えてください！",
  },
  korea: {
    answers: [
      {
        content: "オススメのファッションYoutubeを見る",
        nextId: "https://youtu.be/-bas_pPXKbg",
      },
      { content: "一つ前の質問に戻る", nextId: "mens_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "韓国系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ ADER ERROR, OY, BALENCIAGA, Dior, BEEP, thisisneverthat, NERDY, vivastudio, 23.65, ASCLO",
  },
  street: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "mens_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "ストリート系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ STUSSY, NIKE, paragraph, THE NORTH FACE, FEAR OF GOD, Calvin Klein",
  },
  used: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "mens_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "古着系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ Champion, NIKE, Levi's, MONO-MART, TOMMY HILFIGER, Ralph Lauren, Kutir",
  },
  unselect: {
    answers: [
      { content: "かわいい感じ♡", nextId: "cute" },
      { content: "かっこいい感じ🆒", nextId: "cool" },
      { content: "ゆるふわみたいな感じ🎈", nextId: "cottoncandy" },
      { content: "ヤリラフィー", nextId: "violence" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "あなたに似合う系統を見つけましょう!!😻 どんな感じになりたいか選んでね！",
  },
  cute: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "unselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "かわいい感じになりたいあなたにオススメするブランドはこちらです！ Champion, kutir, KANGOL, Perushu, LILL, WHO`S WHO gallery",
  },
  cool: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "unselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "かっこいい感じになりたいあなたにオススメするブランドはこちらです！ ADER ERROR, WYM LIDNM, HARE, ZARA, Sense of place, RAGEBLUE, EMMA CLOTHES, Casper John",
  },
  cottoncandy: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "unselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "ゆるふわみたいな感じになりたいあなたにオススメするブランドはこちらです! Perushu, kutir, Adoon plain, WHO`S WHO gallery, PairPair, Re:, ",
  },
  violence: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "unselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "まさかのヤリラフィー！？を目指しているそこのあなた！！　あなたにオススメするファッションはこちらです！ Nike, adidas, Gucci, ルイ・ヴィトン, OFF WHITE, H&M ",
  },
  ladies_fashion: {
    answers: [
      { content: "カジュアル系", nextId: "casual" },
      { content: "綺麗系", nextId: "beauty" },
      { content: "フェミニン系", nextId: "feminine" },
      { content: "シンプル系", nextId: "simple" },
      { content: "系統が決まっていない😿", nextId: "notselect" },
    ],
    question: "あなたの好きな系統を教えてください！",
  },
  casual: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "ladies_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "カジュアル系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！　LOWRYS　FARM, GRL(グレイル), KBF, niko and..., Retro Girl",
  },
  simple: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "ladies_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "シンプル系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ AMERUCAN HOLIC, MHL, APC, Mouggan, ALLAGE",
  },
  feminine: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "ladies_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "フェミニン系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ Lily Brown, COCO DEAL, SNIDEL, titty&Co, dazzlin",
  },
  beauty: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "ladies_fashion" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "綺麗系がお好きなのですね！そんなあなたにオススメするブランドはこちらです！ YVES SAINT LAURENT, STUDIOUS, AURALEE, COMOLI, ANUSED",
  },

  notselect: {
    answers: [
      { content: "かわいい感じ♡", nextId: "socute" },
      { content: "きれいなかっこいい感じ🆒", nextId: "socool" },
      { content: "ゆるふわみたいな感じ🎈", nextId: "socottoncandy" },
      { content: "しゃしん映えする感じ📷", nextId: "camera" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "あなたに似合う系統を見つけましょう!!😻 どんな感じになりたいか選んでね！",
  },
  socute: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "notselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "かわいい感じになりたいあなたにオススメするブランドはこちらです！　LOWRYS　FARM, GRL(グレイル), KBF, niko and..., Retro Girl",
  },
  socool: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "notselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "かっこいい感じになりたいあなたにオススメするブランドはこちらです!　 YVES SAINT LAURENT, STUDIOUS, AURALEE, COMOLI, ANUSED",
  },
  socottoncandy: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "notselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "ゆるふわみたいな感じになりたいあなたにオススメするブランドはこちらです！　Lily Brown, COCO DEAL, SNIDEL, titty&Co, dazzlin",
  },
  camera: {
    answers: [
      { content: "一つ前の質問に戻る", nextId: "notselect" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "写真映えする様な感じになりたいあなたにオススメするブランドはこちらです！　LOWRYS FARM,GRL, Retro　Girl,Lily　Brown, titiy&Co,AURALEE",
  },
};
export default fashionData;
