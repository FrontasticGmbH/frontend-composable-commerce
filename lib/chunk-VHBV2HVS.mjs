// src/library/actions/ProjectActions.ts
import { Event } from "@commercetools/frontend-sdk";
var getProjectActions = (sdk) => {
  return {
    getSettings: async (options = {}) => {
      const response = await sdk.callAction({
        actionName: "project/getProjectSettings",
        serverOptions: options.serverOptions
      });
      if (response.isError === false) {
        sdk.trigger(
          new Event({
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

export {
  getProjectActions
};
//# sourceMappingURL=chunk-VHBV2HVS.mjs.map