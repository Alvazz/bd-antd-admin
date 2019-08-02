// import '@babel/polyfill';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Menu, Icon, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import PageProgress from './PageProgress';
import style from './nav.module.less';


const cx = classNames.bind(style);

const Nav = ({ siderFolded, noBorder, onFade, location }) => (
  <div className={noBorder ? cx('header-nobb') : cx('header')}>
    aaa
  </div>
);


export default connect(state => state.common)(Nav);
