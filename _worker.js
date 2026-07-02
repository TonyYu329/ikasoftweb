export default {
  async fetch(request, env, ctx) {
    return env.STATIC_ASSETS.fetch(request);
  }
};
