<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Request Received</h2>
        </header>

        <div class="spinner-body" v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <ul v-else-if="hasRequests">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :email="request.requesterEmail"
            :message="request.message"
          ></request-item>
        </ul>

        <h3 v-else>No request for you yet.</h3>
      </base-card>
    </section>

    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      {{ error }}
    </base-dialog>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  name: "Requests",
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    RequestItem,
  },
  computed: {
    /* use computed ppty to get data from store */
    receivedRequests() {
      // console.log(this.$store);
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  methods: {
    async fetchRequests() {
      this.isLoading = true;
      try {
        // dispatch the action that fetch the requests from db
        await this.$store.dispatch("requests/fetchRequestsAction");
      } catch (err) {
        this.error = err.message || "Something went wrong.";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.fetchRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
