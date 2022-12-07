import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { sdk } from "@commercetools/frontend-sdk";

type GetProjectSettingsAction = () => ReturnType<typeof sdk.callAction<ProjectSettings>>;

export { GetProjectSettingsAction };
