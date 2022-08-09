module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "sass:math";
          @import "@/scss/abstracts/_variables.scss";
        `
      }
    }
  }
}