import axios from "axios";

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    withCredentials: true,
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
