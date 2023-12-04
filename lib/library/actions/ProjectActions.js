"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/library/actions/ProjectActions.ts
var ProjectActions_exports = {};
__export(ProjectActions_exports, {
  getProjectActions: () => getProjectActions
});
module.exports = __toCommonJS(ProjectActions_exports);
var import_frontend_sdk = require("@commercetools/frontend-sdk");
var getProjectActions = (sdk) => {
  return {
    getSettings: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "project/getProjectSettings",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new import_frontend_sdk.Event({
            eventName: "projectSettingsFetched",
            data: {
              projectSettings: response.data
            }
          })
        );
      }
      return response;
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProjectActions
});
//# sourceMappingURL=ProjectActions.js.map