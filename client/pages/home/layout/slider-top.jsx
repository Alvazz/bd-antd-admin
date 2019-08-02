import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './slider-top.module.less';
import { Row, Col, Icon, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
// import './slider-animations.css';
// import './styles.css';


const cx = classNames.bind(styles);


function SliderTop({ siderFolded, onFade, data }) {
  return (
    <div className={cx('p30')}>
      top
    </div>
  );
}

export default SliderTop;
