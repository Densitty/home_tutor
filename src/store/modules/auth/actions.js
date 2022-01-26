let timer;

export default {
  async signupAction(context, payload) {
    context.dispatch("authAction", {
      ...payload,
      mode: "signup",
    });
  },
  async loginAction(context, payload) {
    context.dispatch("authAction", {
      ...payload,
      mode: "login",
    });
  },
  logoutAction(context) {
    // remove the authenticated user detail in local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpires");

    // clear the time the token will expire when the logout btn is clicked
    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
      // tokenExpiration: null,
    });
  },
  async authAction(context, payload) {
    const mode = payload.mode;
    let url =
      mode === "signup"
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";

    const response = await fetch(
      `${url}?key=AIzaSyAmBiTLkPMVe77BGMP9Q2k1V4eonqC7sxQ`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || "Failed to authenticate.");
      throw error;
    }

    // console.log(responseData);

    // add the time the token will expire
    // const expiresIn = parseInt(responseData.expiresIn) * 1000;
    const expiresIn = 5000;
    const expirationTime = new Date().getTime() + expiresIn;
    // store authenticated user data in local storage
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpires", expirationTime);

    // auto-logout when token expires
    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      // tokenExpiration: responseData.expiresIn,
    });
  },
  autoLoginAction(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpirationTime = localStorage.getItem("tokenExpires");

    const expiresIn = +tokenExpirationTime - new Date().getTime();

    // if expiresIn is a -ve number, don't log the user in
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  autoLogout(context) {
    context.dispatch("logoutAction");
    context.commit("setAutoLogout");
  },
};
