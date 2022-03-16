import ReactSSML from "react-ssml-dom";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // use react-ssml-dom instead of react-dom-server
  const markup = ReactSSML.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  // set response headers to ssml+xml instead of html
  responseHeaders.set("Content-Type", "application/ssml+xml");

  // remove doctype with xml declaration
  return new Response('<?xml version="1.0"?>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
