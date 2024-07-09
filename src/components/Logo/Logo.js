import React from 'react';
import s from './style.module.css';

const Logo = ({ img, title, subtitle }) => {
  return (
    <div>
      <div className={s.logo_container}>
        <img src={img} alt='logo' className={s.img}/>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Logo;
