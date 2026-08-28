import type { Namespace } from "@/lib/i18n";

import { admin } from "./admin";
import { agreement } from "./agreement";
import { auth } from "./auth";
import { billing } from "./billing";
import { brief } from "./brief";
import { common } from "./common";
import { delivery } from "./delivery";
import { documents } from "./documents";
import { journey } from "./journey";
import { landing } from "./landing";
import { onboarding } from "./onboarding";
import { profile } from "./profile";
import { project } from "./project";
import { services } from "./services";
import { support } from "./support";
import { welcome } from "./welcome";

export const dictionaries: Record<string, Namespace> = {
  admin,
  agreement,
  auth,
  billing,
  brief,
  common,
  delivery,
  documents,
  journey,
  landing,
  onboarding,
  profile,
  project,
  services,
  support,
  welcome,
};
