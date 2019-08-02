import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';


import style from './index.module.less';

import { Menu, Divider, Row, Col, Icon, Breadcrumb } from 'antd';



const cx = classNames.bind(style);


class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      siderFolded: false,
      noBorder: true,
      openKeys: ['sub1'],
    };
  }

  handleFad = () => {
    this.setState({
      siderFolded: !this.state.siderFolded,
    });
  };

  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];


  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  linkTo = (item) => {
    console.log('item is ------>', item);
    // this.setState({
    //   siderFolded: !this.state.siderFolded,
    // });
  };

  render() {
    const { children } = this.props;
    const { siderFolded, noBorder } = this.state;

    const { router } = this.context;
    // const { location } = router.history;
    console.log('/home/layout router is ', router);

    return (
      <div className={cx('layout', { fold: siderFolded })} id="outerContainer">


        <div className={cx('main')} id="page-wrap">

          <div className={cx('container')} >
            <div className={cx('content')} >{children}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Layout;
