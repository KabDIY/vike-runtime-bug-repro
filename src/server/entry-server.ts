import { Hono } from "hono";
import { apply } from "vike-cloudflare/hono";
import { serve } from "vike-cloudflare/hono/serve";

function startServer() {
	const port = process.env.PORT || 3000;

	const app = new Hono();

	apply(app);

	return serve(app, { port: +port });
}

export default startServer();
