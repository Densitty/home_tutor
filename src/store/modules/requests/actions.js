export default {
  async messageTutorAction(context, payload) {
    // console.log(payload);
    const newRequestData = {
      // tutorId: payload.tutorId,
      email: payload.email,
      message: payload.message,
    };

    // console.log(payload);

    const response = await fetch(
      `https://home-tutors-c608e-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.tutorId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequestData),
      }
    );

    // console.log(response);

    const responseData = await response.json();
    /* 
      responseData is structured in firebase as
      responseData -> tutorId -> [response.name] -> {email, message, tutorId}
    */

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    // extract the id on the responseData to the newRquestData object
    newRequestData.id = responseData.name;
    // get tutorId from the payload but do not send to server
    newRequestData.tutorId = payload.tutorId;
    /*  */

    new // commit the payload data to request store
    /* context.commit(mutation, payload) */
    context.commit("addRequest", newRequestData);
  },
  async fetchRequestsAction(context) {
    // console.log(context);
    const tutorId = context.rootGetters.userID;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://home-tutors-c608e-default-rtdb.europe-west1.firebasedatabase.app/requests/${tutorId}.json?auth=${token}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        response.message || "Failed to fetch request. Please try again."
      );
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key /* every request data in an obj pty of a key  */,
        tutorId: tutorId,
        requesterEmail: responseData[key].email,
        message: responseData[key].message,
      };

      requests.push(request);
    }

    /* commit the mutation - mutations deal with state directly */
    context.commit("getRequests", requests);
  },
};
