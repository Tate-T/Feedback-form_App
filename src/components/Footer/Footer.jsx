import React from "react";
import { ReactComponent as Smile } from "../../images/smiles/3.svg";
import { ReactComponent as In } from "../../images/socials/in.svg";
import { ReactComponent as Facebook } from "../../images/socials/facebook.svg";
import { ReactComponent as Twitter } from "../../images/socials/tw.svg";
import { ReactComponent as Addition } from "../../images/socials/q.svg";
import { ReactComponent as SmileReverse } from "../../images/smiles/4.svg";
import { ReactComponent as SmileOrangee } from "../../images/smiles/5.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "200px",
        background: "#FAFAFA",
        border: "1px solid #D8D8D8",
      }}
    >
      <Smile
        width="300px"
        height="300px"
        style={{
          position: "absolute",
          top: "180%",
        }}
      />
      <div
        style={{
          marginRight: "50px",
          marginTop: "79px",
          marginLeft: "340px",
        }}
      >
        <In
          style={{
            marginLeft: "25px",
          }}
        />
        <Facebook
          style={{
            marginLeft: "25px",
          }}
        />
        <Twitter
          style={{
            marginLeft: "25px",
          }}
        />
        <Addition
          style={{
            marginLeft: "25px",
          }}
        />
      </div>
      <SmileReverse
        width="78.46px"
        height="97px"
        style={{
          marginRight: "128px",
          marginLeft: "auto",
        }}
      />
      <SmileOrangee
        width="88.32px"
        height="85.84px"
        style={{
          position: "absolute",
          left: "94%",
          top: "200%",
        }}
      />
    </div>
  );
};

export default Footer;
