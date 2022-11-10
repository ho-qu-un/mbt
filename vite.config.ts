import react from "@vitejs/plugin-react";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react()],
};

export default config;
