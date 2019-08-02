import {
  handleActions,
} from 'redux-actions';
import actions from '../actions';

const initialState = {
  weather: {
    city: '深圳',
    temperature: '30',
    name: '晴',
  },
  sales: [],
  numbers: [],
  recentSales: [],
  comments: [],
  completed: [],
  browser: [],
  cpu: {},
  loading: false,

};

export default handleActions({
  '@@init': state => ({
    state,
    ...initialState,
  }),
  // [actions.home.noBorder]: state => ({
  //   ...state,
  //   noBorder: !state.noBorder,
  // }),
  [actions.dashboard.fetchSuccess]: (state, {
    payload: {
      dashboard,
    },
  }) => ({
    ...state,
    ...dashboard,
  }),

  [actions.common.noBorder]: (state, {
    payload: {
      noBorder,
    },
  }) => ({
    ...state,
    noBorder,
  }),

  [actions.common.toggleTheme]: (state, {
    payload: {
      theme,
    },
  }) => ({
    ...state,
    theme,
  }),
},
initialState
);
