const Config = {
  BUILD_ENV: process.env.BUILD_ENV || "staging",
  GOOGLE_ANALYTICS_ID:
    process.env.BUILD_ENV === "production"
      ? process.env.GOOGLE_ANALYTICS_PRODUCTION_ID
      : process.env.GOOGLE_ANALYTICS_STAGING_ID,
};

export default Config;
