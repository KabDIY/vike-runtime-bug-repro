// api/ssr.js

import { renderPage } from 'vike/server';

export default async function handler(req, res) {
  const pageContextInit = { 
    urlOriginal: req.url,
    userAgent: req.headers['user-agent']
  };
  
  try {
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    
    if (!httpResponse) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('404 - Page not found');
      return;
    }
    
    res.statusCode = httpResponse.statusCode;
    Object.entries(httpResponse.headers || {}).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    if (httpResponse.pipe) {
      httpResponse.pipe(res);
    } else {
      res.end(httpResponse.body);
    }
  } catch (error) {
    console.error('VIKE SSR ERROR:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>500 - Internal Server Error</h1><pre>${error.stack}</pre>`);
  }
}
