import { ProjectSettings } from "@commercetools/frontend-domain-types/src/ProjectSettings";
import { SDK, Event } from "@commercetools-frontend/sdk";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";

export type ProjectActions = {
    getSettings: GetProjectSettingsAction
}

export const getProjectActions = (sdk: SDK): ProjectActions => {
    return {
        getSettings: async () => {
            const settings = await sdk.callAction<ProjectSettings>("project/getProjectSettings", {});
            sdk.triggerHandlers(new Event({
                eventName: "projectSettingsReturned",
                data: {
                    settings
                }
            }));
            return settings;
        }
    }
};
