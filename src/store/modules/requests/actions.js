export default {
  messageTutorAction(context, data) {
    // console.log(data);
    const requestData = {
      id: "83612254",
      tutorId: data.tutorId,
      email: data.email,
      message: data.message,
    };

    // commit the data to request store
    /* context.commit(mutation, data) */
    context.commit("addRequest", requestData);
  },
};
