import {
  handleActions,
} from 'redux-actions';
import actions from '../actions';

const initialState = {
  theme: 'light',
  noBorder: true,
};

export default handleActions({
  '@@init': state => ({
    state,
    ...initialState,
  }),
  [actions.common.siderFold]: state => ({
    ...state,
    siderFolded: !state.siderFolded,
  }),

  [actions.common.noBorder]: state => ({
    ...state,
    noBorder: true,
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
