export default {
  requests(state, getters, rootState, rootGetters) {
    // fetch the id of the coach currently logged in
    const tutorID = rootGetters.userID;

    // loop through the  (local) state to find the request which has the id of the logged in tutor as the tutorID
    return state.requests.filter((request) => {
      return request.tutorId === tutorID;
    });
  },
  hasRequests(state, getters) {
    // console.log(state);
    // return state.requests && state.requests.length > 0;

    // get the request message that has the tutorId property value as that of the userId and not all the request messages in state
    // console.log(getters.requests);
    return getters.requests && getters.requests.length > 0;
  },
  /* isTutor(state, getters, rootState, rootGetters) {
    // get all tutors from the  tutors module
    const tutors = getters.tutors;
    // get the default state userId from store through rootGetter
    const userId = rootGetters.userID;

    // find the id of the tutors that match the userId in rootGetters
    return tutors.find((tutor) => tutor.id === userId);
  }, */
};
