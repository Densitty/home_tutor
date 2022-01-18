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
};
