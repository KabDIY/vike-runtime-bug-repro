import { handleSsr } from "./ssr";
import { handleStaticAssets } from "./static-assets";

addEventListener(
	"fetch",
	(
		/** @type {{ respondWith: (arg0: Response | Promise<void | Response>) => void; }} */ event,
	) => {
		try {
			event.respondWith(
				// @ts-ignore
				handleFetchEvent(event).catch((err) => {
					console.error(err.stack);
				}),
			);
		} catch (err) {
			// @ts-ignore
			console.error(err.stack);
			event.respondWith(new Response("Internal Error", { status: 500 }));
		}
	},
);

/**
 * @param {{ request: any; waitUntil?: (promise: Promise<unknown>) => void; }} event
 */
async function handleFetchEvent(event) {
	if (!isAssetUrl(event.request.url)) {
		const response = await handleSsr(event.request.url);
		if (response !== null) return response;
	}
	// @ts-ignore
	const response = await handleStaticAssets(event);
	return response;
}

/**
 * @param {string | URL} url
 */
function isAssetUrl(url) {
	const { pathname } = new URL(url);
	return pathname.startsWith("/assets/");
}
