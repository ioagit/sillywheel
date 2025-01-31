import defaultConfig from "./configs/default";
import companyConfig from "./configs/company";
import schoolConfig from "./configs/school";

const configs = {
  default: defaultConfig,
  company: companyConfig,
  school: schoolConfig,
};

// Get configuration from environment variable or build argument
const configName = process.env.REACT_APP_CONFIG || "default";

if (!configs[configName]) {
  console.warn(`Config "${configName}" not found, using default config`);
}

const siteConfig = configs[configName] || configs.default;

export default siteConfig;
