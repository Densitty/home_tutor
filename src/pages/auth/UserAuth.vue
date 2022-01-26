<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <base-dialog :show="isLoading" fixed title="Please wait...">
      <div class="spinner-body">
        <base-spinner></base-spinner>
      </div>
    </base-dialog>

    <base-card>
      <form action="" @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>

        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>

        <p v-if="!formIsValid">
          Please enter a valid email and password (password should be at least 6
          characters long
        </p>

        <base-button class="auth-btn">{{ submitButtonCaption }}</base-button>
        <base-button
          mode="flat"
          type="button"
          class="auth-btn"
          @click="switchMode"
        >
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "SignUp";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Not yet registered? Please Signup";
      } else {
        return "Already Registered? Please Login";
      }
    },
  },
  methods: {
    async submitForm() {
      // first validate form
      this.validateForm();
      this.isLoading = true;

      const payloadData = {
        email: this.email,
        password: this.password,
      };

      try {
        // then send http request
        if (this.mode == "login") {
          await this.$store.dispatch("loginAction", payloadData);
        } else {
          await this.$store.dispatch("signupAction", payloadData);
        }
        // reidrect to homepage or to register as coach page if logged in
        const redirectUrl = `/${this.$route.query.redirect || ""}`;
        this.$router.replace(redirectUrl);
      } catch (err) {
        console.log(err.message);
        this.error =
          err.message ||
          "Failed to authenticate. Check your sign-up details and register again.";
      }

      this.isLoading = false;
    },
    validateForm() {
      this.ValidityState();

      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },
    ValidityState() {
      this.formIsValid = true;
    },
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  padding: 0.8rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.auth-btn {
  border-radius: 0.5rem;
}
</style>
