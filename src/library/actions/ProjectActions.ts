import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { SDK, Event, FetchError, ActionError } from "@commercetools/frontend-sdk";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";

export type ProjectActions = {
    getSettings: GetProjectSettingsAction
}

export const getProjectActions = (sdk: SDK): ProjectActions => {
    return {
        getSettings: async () => {
            const response = await sdk.callAction<ProjectSettings>("project/getProjectSettings", {});
            if (!response.isError) {
                sdk.trigger(new Event({
                    eventName: "projectSettingsReturned",
                    data: {
                        projectSettings: response.data
                    }
                }));
            }
            else {
                sdk.trigger(new Event({
                    eventName: "actionError",
                    data: {
                        error: new ActionError(
                            "Composable commerce get project settings error",
                            response.error
                        )
                    }
                }));
            }
            return response;
        }
    };
}
