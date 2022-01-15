export default {
  tutors(state) {
    return state.tutors;
  },
  tutorsPresent(state) {
    return state.tutors && state.tutors.length > 1;
  },
};
