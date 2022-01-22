export default {
  tutors(state) {
    return state.tutors;
  },
  tutorsPresent(state) {
    return state.tutors && state.tutors.length > 0;
  },
  isTutor(state, getters, rootState, rootGetters) {
    // get all tutors from the  tutors module
    const tutors = getters.tutors;
    // get the default state userId from store through rootGetter
    const userId = rootGetters.userID;

    // find the id of the tutors that match the userId in rootGetters
    return tutors.find((tutor) => tutor.id === userId);
  },
  shouldThereBeFetch(state) {
    // get time of last fetch/call to the server from store
    const timeOfLastFetch = state.lastFetchFromServer;

    // if no fetch was made at all, return true
    if (!timeOfLastFetch) {
      return true;
    }

    // get the current timestamp
    const currentTimestamp = new Date().getTime();

    // check if difference in current time and last time request was made to server is greater than 60 (i.e last fetch more than 1 minute)
    return (currentTimestamp - timeOfLastFetch) / 1000 > 60;
  },
};
