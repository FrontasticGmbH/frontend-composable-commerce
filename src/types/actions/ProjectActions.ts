import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";
import { SDKResponse, ServerOptions } from "@commercetools/frontend-sdk";

type GetProjectSettingsAction = (options?: {
	serverOptions?: ServerOptions;
}) => Promise<SDKResponse<ProjectSettings>>;

export { GetProjectSettingsAction };
