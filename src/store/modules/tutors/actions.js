export default {
  addTutorAction(context, data) {
    const tutorData = {
      id: context.rootGetters.userID,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // commit the data to store
    context.commit("addTutor", tutorData);
  },
};
