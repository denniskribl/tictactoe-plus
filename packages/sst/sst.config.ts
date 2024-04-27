import { SSTConfig } from "sst";
import App from "./stacks/App";

export default {
  config(_input) {
    return {
      name: "tictactoe-plus",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(App);
  }
} satisfies SSTConfig;
