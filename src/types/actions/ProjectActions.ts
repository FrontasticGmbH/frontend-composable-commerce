import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { SDKResponse } from "@commercetools/frontend-sdk";

type GetProjectSettingsAction = () => Promise<SDKResponse<ProjectSettings>>;

export { GetProjectSettingsAction };
