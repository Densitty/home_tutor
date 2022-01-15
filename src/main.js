import { createApp } from "vue";

import store from "./store/index";

import router from "./router";
import App from "./App.vue";

import BaseCard from "./components/interface/BaseCard.vue";
import BaseButton from "./components/interface/BaseButton.vue";
import BaseBadge from "./components/interface/BaseBadge.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");
