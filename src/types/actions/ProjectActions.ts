import { ProjectSettings } from "@commercetools/frontend-domain-types/ProjectSettings";

type GetProjectSettingsAction = () => Promise<ProjectSettings | Error>;

export { GetProjectSettingsAction };
