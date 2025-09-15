// --- Minimal Vike-on-Vercel Serverless Function ---
// This file is the entry point for Vercel's serverless function.
// It contains only the bare minimum code needed to reproduce the Vike runtime bug.

// Import the core function from Vike's server-side library.
import { renderPage } from 'vike/server';

// This is the main serverless function handler for Vercel.
// It receives the request and response objects.
export default async function handler(req, res) {
  // Extract the URL from the incoming request.
  const url = req.url;
  
  // Set up the initial context object for Vike's rendering engine.
  const pageContextInit = {
    urlOriginal: url,
  };

  try {
    // This is the function call that is causing the runtime error.
    // By isolating it here, the maintainer can debug this specific call.
    const pageContext = await renderPage(pageContextInit);

    const { httpResponse } = pageContext;

    if (!httpResponse) {
      // If Vike doesn't return a response, the page was not found.
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    // Set the status code and headers from Vike's response.
    const { statusCode, headers } = httpResponse;
    res.statusCode = statusCode;
    headers.forEach(([name, value]) => res.setHeader(name, value));

    // Stream the response body back to the client.
    httpResponse.pipeToWebStream(res);

  } catch (error) {
    // This `console.error` will show the full stack trace in Vercel's logs,
    // which is what the maintainer needs to see.
    console.error('VIKE SSR ERROR:', error);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error during SSR.');
  }
}
