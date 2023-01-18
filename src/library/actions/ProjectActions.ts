import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { Event, SDK } from "@commercetools/frontend-sdk";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";
import { ComposableCommerceEvents } from "../../types/types";

export type ProjectActions = {
    getSettings: GetProjectSettingsAction;
};

export const getProjectActions = (
    sdk: SDK<ComposableCommerceEvents>,
): ProjectActions => {
    return {
        getSettings: async () => {
            const response = await sdk.callAction<ProjectSettings>({
                actionName: "project/getProjectSettings",
            });

            if (!response.isError) {
                sdk.trigger(
                    new Event({
                        eventName: "projectSettingsFetched",
                        data: {
                            projectSettings: response.data,
                        },
                    }),
                );
            }
            return response;
        },
    };
};
