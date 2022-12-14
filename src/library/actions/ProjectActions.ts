import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { Event } from "@commercetools/frontend-sdk";
import { SDK } from "@commercetools/frontend-sdk/lib/library/SDK";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";

export type ProjectActions = {
    getSettings: GetProjectSettingsAction
}

export const getProjectActions = (sdk: SDK): ProjectActions => {
    return {
        getSettings: async () => {
            const response = await sdk.callAction<ProjectSettings>({
                actionName: "project/getProjectSettings"
            });

            if (!response.isError) {
                sdk.trigger(new Event({
                    eventName: "projectSettingsFetched",
                    data: {
                        projectSettings: response.data
                    }
                }));
            }
            return response;
        }
    };
}
