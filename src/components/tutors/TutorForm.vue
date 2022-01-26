<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.value"
        @focus="clearValidityError('firstName')"
      />
      <p class="invalid-warning" v-if="!firstName.isValid">
        FirstName should not be empty
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">First Name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.value"
        @focus="clearValidityError('lastName')"
      />
      <p class="invalid-warning" v-if="!firstName.isValid">
        LastName should not be empty
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Bio Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="description.value"
        @focus="clearValidityError('description')"
      ></textarea>
      <p class="invalid-warning" v-if="!description.isValid">
        Please give a brief info about yourself
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        min="5"
        v-model.number="rate.value"
        @focus="clearValidityError('rate')"
      />
      <p class="invalid-warning" v-if="!rate.isValid">
        Please provide your hourly rate (should be higher than 0)
      </p>
    </div>

    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Specialization</h3>
      <div>
        <input
          type="checkbox"
          name=""
          id="mathematics"
          value="mathematics"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="mathematics">Mathematics</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="english"
          value="english"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="english">English Language</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="french"
          value="french"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="french">French</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="physics"
          value="physics"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="physics">Physics</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="chemistry"
          value="chemistry"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="chemistry">Chemistry</label>
      </div>

      <div>
        <input
          type="checkbox"
          name=""
          id="biology"
          value="biology"
          v-model="areas.value"
          @focus="clearValidityError('areas')"
        />
        <label for="biology">Biology</label>
      </div>

      <p v-if="!areas.isValid">
        Please choose one or more areas of specialization
      </p>
    </div>
    <p class="invalid-warning" v-if="!formIsValid">
      Please fill your form correctly and submit again.
    </p>

    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        value: "",
        isValid: true,
      },
      lastName: {
        value: "",
        isValid: true,
      },
      rate: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.firstName.value === "" || this.firstName.value.length < 3) {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }

      if (this.lastName.value === "" || this.lastName.value.length < 3) {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }

      if (this.description.value === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }

      if (!this.rate.value || this.rate.value <= 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }

      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidityError(input) {
      // dynamic properties
      this[input].isValid = true;
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.value,
        last: this.lastName.value,
        desc: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value,
      };

      // console.log(formData);

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

.invalid-warning {
  color: red;
}
</style>
