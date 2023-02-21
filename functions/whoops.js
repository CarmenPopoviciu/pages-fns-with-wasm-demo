import html from "../app-web/404.html";

export async function onRequest() {
	return new Response(
		html,
    {
      headers: { "Content-Type": "text/html" }
    }
	);
}
