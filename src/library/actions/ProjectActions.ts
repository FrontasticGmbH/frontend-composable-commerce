import { SDK } from "@commercetools/sdk";
import { GetProjectSettingsAction } from "../../types/actions/ProjectActions";

export type ProjectActions = {
    getSettings: GetProjectSettingsAction
}

export const getProjectActions: (sdk: SDK) =>
    ProjectActions = (sdk: SDK) => {
        return {
            getSettings: () => {
                return sdk.callAction("project/getProjectSettings", {});
            }
        }
    };
