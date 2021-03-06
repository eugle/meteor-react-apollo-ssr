import React from "react";
import App from "../imports/both/App";
import { onPageLoad } from "meteor/server-render";
import apolloClient from "../imports/both/apolloClient";
import { hydrate } from "react-dom";

onPageLoad((sink) =>
  hydrate(<App client={apolloClient} />, document.getElementById("app"))
);
