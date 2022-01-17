<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">First Name</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Bio Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="description"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" min="5" v-model.number="rate" />
    </div>

    <div class="form-control">
      <h3>Areas of Specialization</h3>
      <div>
        <input
          type="checkbox"
          name=""
          id="mathematics"
          value="mathematics"
          v-model="areas"
        />
        <label for="mathematics">Mathematics</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="english"
          value="english"
          v-model="areas"
        />
        <label for="english">English Language</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="french"
          value="french"
          v-model="areas"
        />
        <label for="french">French</label>
      </div>
    </div>

    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: "",
      lastName: "",
      rate: null,
      description: "",
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scope>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 1.5rem;
}

input[type="text"],
input[type="number"] {
  height: 2rem;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
