module.exports = {
  browsers: ["chromium", "webkit"],
  launchOptions: {
    headless: process.env.HEADLESS !== "false",
  },
};
