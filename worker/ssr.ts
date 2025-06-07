export { handleSsr };

import { renderPage } from "vike/server";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function handleSsr(url: any) {
	const pageContextInit = {
		urlOriginal: url,
	};
	const pageContext = await renderPage(pageContextInit);
	const { httpResponse } = pageContext;
	return new Response(httpResponse.body, {
		headers: httpResponse.headers,
		status: httpResponse.statusCode,
	});
}
