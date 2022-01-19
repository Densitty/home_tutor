export default {
  async addTutorAction(context, data) {
    // get the id of the tutor logged in from state
    const tutorId = context.rootGetters.userID;

    const tutorData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // send request to the db (firebase backend)
    /* using put request against post when registering as a tutor b/c tutorId is gotten from db and stored in state */
    const response = await fetch(
      `https://home-tutors-c608e-default-rtdb.europe-west1.firebasedatabase.app/tutors/${tutorId}/.json`,
      {
        method: "PUT",
        body: JSON.stringify(tutorData),
      }
    );

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      console.log("Error");
    }

    // commit the data to store
    context.commit("addTutor", {
      id: tutorId,
      ...tutorData,
    });
  },
  async loadTutorsAction(context) {
    const response = await fetch(
      `https://home-tutors-c608e-default-rtdb.europe-west1.firebasedatabase.app/tutors.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log("Error");
    }

    const tutors = [];

    for (const key in responseData) {
      const tutor = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      tutors.push(tutor);
    }

    // commit the data to store
    context.commit("setTutors", tutors);
  },
};
