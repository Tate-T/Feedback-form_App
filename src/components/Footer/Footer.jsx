import React from 'react';
import { ReactComponent as Smile } from '../../images/smiles/3.svg';
import { ReactComponent as In } from '../../images/socials/in.svg';
import { ReactComponent as Facebook } from '../../images/socials/facebook.svg';
import { ReactComponent as Twitter } from '../../images/socials/tw.svg';
import { ReactComponent as Addition } from '../../images/socials/q.svg';
import { ReactComponent as SmileReverse } from '../../images/smiles/4.svg';
import { ReactComponent as SmileOrangee } from '../../images/smiles/5.svg';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        marginTop: '100px',
        display: 'flex',
        height: '200px',
        background: '#FAFAFA',
        border: '1px solid #D8D8D8',
        overflow: 'hidden',
      }}
    >
      <Smile
        width="300px"
        height="300px"
        style={{
          position: 'absolute',
          top: '-20%',
        }}
      />
      <div
        style={{
          marginRight: '50px',
          marginTop: '60px',
          marginLeft: '340px',
        }}
      >
        <a href="https://www.linkedin.com/" className={s.link}>
          <In
            style={{
              marginLeft: '25px',
            }}
          />
        </a>
        <a href="https://www.facebook.com/" className={s.link}>
          <Facebook
            style={{
              marginLeft: '25px',
            }}
          />
        </a>
        <a href="https://www.twitter.com/" className={s.link}>
          <Twitter
            style={{
              marginLeft: '25px',
            }}
          />
        </a>
        <a href="https://www.google.com/" className={s.link}>
          <Addition
            style={{
              marginLeft: '25px',
            }}
          />
        </a>
      </div>
      <SmileReverse
        width="78.46px"
        height="97px"
        style={{
          marginRight: '128px',
          marginLeft: 'auto',
        }}
      />
      <SmileOrangee
        width="88.32px"
        height="85.84px"
        style={{
          position: 'absolute',
          left: '94%',
          top: '20%',
        }}
      />
    </div>
  );
};

export default Footer;
