import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../accessories/styles/pages.css";
import Link from "@material-ui/core/Link";
import MyIcon from "../accessories/img/MyIcon.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "450px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: "0 2px 5px rgba(0,0,0,0.26)",
  },
  myName: {
    textAlign: "center",
    fontSize: "40px",
    color: "#07202e",
    fontFamily: "Alegreya Sans SC, sans-serif",
    letterSpacing: "7px",
    margin: "16px 5px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="main-container">
      <div className={classes.root}>
        <Avatar alt="Motoki Hirasawa" src={MyIcon} className={classes.large} />
      </div>
      <h1 className={classes.myName}>Motoki Hirasawa</h1>
      <div className="link-icon">
        <Link
          className="myicon"
          href="https://github.com/mtmar-SE"
          target="_blank"
        >
          <GitHubIcon
            style={{ fontSize: 30, color: "#6C8EA4", marginRight: 20 }}
          />
        </Link>

        <Link href="https://www.instagram.com/moto__34" target="_blank">
          <InstagramIcon
            className="myicon"
            style={{ fontSize: 30, color: "#6C8EA4" }}
          />
        </Link>
      </div>
      <h4 className="main-article">- Greeting -</h4>
      <p className="main-article">
        　Welcome to my website
        <br />
        <br />
        　このポートフォリオはReactとMaterial-uiを主に使い作成しました。
        <br />
        websiteに来てくれた方にオススメなブランドを紹介すると共に
        <br />
        みんなと最新の流行、トレンドカラー、オシャレな写真を共有していければいいなと思っています！！
      </p>
    </div>
  );
};

export default Header;
