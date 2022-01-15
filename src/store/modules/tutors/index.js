import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      tutors: [
        {
          id: "181",
          firstName: "Thomas",
          lastName: "Modife",
          areas: ["desktop appreciation", "mathematics", "further mathematics"],
          description:
            "Hi! I am Thomas, a Mathematics major and I am the best bet for your ward(s)' needs in  the area of Mathematics and Further or Advanced Mathematics. I can also teach Desktop Appreciation, be it MS-Word, MS-Excel, MS-PowerPoint and MS-Access",
          hourlyRate: 30,
        },
        {
          id: "032",
          firstName: "Mary",
          lastName: "Nchamdi",
          areas: ["computer studies", "french"],
          description:
            "Hello there! You can bet on my service for your child's needs on everything computer related. I am a Comp Sci. major and also hold a diploma in Children Education and I am going to get your child achieve excellence in computer studies at school. I can also teach French.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: mutations,
  getters,
  actions,
};
