export { config };

import type { Config } from "vike/types";
import { LayoutDefault } from "../layouts/LayoutDefault";
import { HeadDefault } from "../layouts/HeadDefault";
import vikeReact from "vike-react/config";
import vikeCloudflare from "vike-cloudflare/config";

// Default configs (can be overridden by pages)
const config = {
	extends: [vikeReact, vikeCloudflare],
	Head: HeadDefault,
	Layout: LayoutDefault,
	hydrationCanBeAborted: true,
	passToClient: ["title", "description"],
} satisfies Config;
