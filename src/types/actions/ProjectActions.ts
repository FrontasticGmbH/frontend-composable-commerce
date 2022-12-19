import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { SDKResponse } from "@commercetools/frontend-sdk/lib/library/types";

type GetProjectSettingsAction = () => Promise<SDKResponse<ProjectSettings>>;

export { GetProjectSettingsAction };
