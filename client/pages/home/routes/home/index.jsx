import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Row } from 'antd';
import Page from 'client/components/page';
// import color from 'client/utils/color';
import HeroSlider from './components/hero-slider';

import actions from '../../actions';
// import styles from './index.module.less';

// const bodyStyle = {
//   bodyStyle: {
//     height: 432,
//     background: '#fff',
//   },
// };

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      noBorder: undefined,
    };
  }

  componentDidMount() {
    // this.props.dispatch(actions.home.fetch());
    console.log('sdfsf');
    this.setState({
      noBorder: true,
    });
    // this.props.dispatch(actions.common.noBorder());
    // this.props.dispatch(actions.common.noBorder(true));
    this.props.dispatch(actions.common.noBorder(true));
  }


  render() {
    // console.log('home index get the store data', this.props.noBorder);

    const { noBorder } = this.state;

    return (
      <React.Fragment>
        <Page loading={false}>

          <HeroSlider noBorder={noBorder} />
        </Page>
      </React.Fragment>
    );
  }
}

// Home.propTypes = {
//   home: PropTypes.object,
// };

export default connect(state => state.home)(Home);
