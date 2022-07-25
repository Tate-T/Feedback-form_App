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
    <div>
      <Smile width="214px" height="208px" />
      <In />
      <Facebook />
      <Twitter />
      <Addition />
      <SmileReverse width="78.46px" height="97px" />
      <SmileOrangee width="88.32px" height="85.84px" />
    </div>
  );
};

export default Footer;
