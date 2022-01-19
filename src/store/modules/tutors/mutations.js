export default {
  addTutor(state, payload) {
    state.tutors.push(payload);
  },
  setTutors(state, payload) {
    // console.log(payload);
    state.tutors = payload;
  },
};
