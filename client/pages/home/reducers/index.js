import {
  combineReducers,
} from 'redux';

import common from './common';
import home from './home';
import login from './login';

export default combineReducers({
  common,
  home,
  login,
});
