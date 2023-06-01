import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.accenturefitness.app",
  appName: "Fitness",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
