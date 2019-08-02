import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Icon, Menu } from 'antd';
// import pathToRegexp from 'path-to-regexp';

// import BurgerMenu from 'react-burger-menu';

class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

export default MenuWrap;

// const { SubMenu } = Menu;

// export const config = [
//   {
//     name: 'Home',
//     icon: 'laptop',
//     route: '/home',
//   },
// ];

// const Menus = ({ className, theme, siderFolded, location }) => {
//   let selected = 'Home';
//   const mapItems = items =>
//     items.map((item) => {
//       if (
//         item &&
//         item.route &&
//         pathToRegexp(item.route).exec(location.pathname)
//       ) {
//         selected = item.name;
//       }
//       if (item && item.items) {
//         return (
//           <SubMenu
//             key={item.name}
//             title={
//               <span>
//                 <Icon type={item.icon} />
//                 <span>{item.name}</span>
//               </span>
//             }
//           >
//             {mapItems(item.items)}
//           </SubMenu>
//         );
//       }
//       return (
//         <Menu.Item key={item.name}>
//           <Link to={item.route}>
//             <Icon type={item.icon} />
//             <span>{item.name}</span>
//           </Link>
//         </Menu.Item>
//       );
//     });

//   const menus = mapItems(config);
//   return (
//     <Menu
//       className={className}
//       defaultSelectedKeys={[selected]}
//       defaultOpenKeys={['Charts']}
//       mode="inline"
//       theme={theme}
//       inlineCollapsed={siderFolded}
//     >
//       {menus}
//     </Menu>
//   );
// };

// Menus.propTypes = {
//   theme: PropTypes.string,
//   className: PropTypes.string,
//   siderFolded: PropTypes.bool,
// };

// export default Menus;
