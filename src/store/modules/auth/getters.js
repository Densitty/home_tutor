export default {
  userID(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    /* convert token, a string value, into a boolean */
    return !!state.token;
  },
};
