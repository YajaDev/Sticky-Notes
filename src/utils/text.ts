// convert dom to plain text
export function htmlToText(html: string) {
  // create dom in memory
  const dom = new DOMParser();

  // put the html(param) to the body of dom
  const doc = dom.parseFromString(html, "text/html");

  return doc.body.textContent || "";
}
