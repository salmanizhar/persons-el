import { NextResponse } from "next/server";

const clean = (value: FormDataEntryValue | null) =>
  String(value || "")
    .trim()
    .slice(0, 2000);

const wantsJson = (request: Request) =>
  request.headers.get("accept")?.includes("application/json") ?? false;

const redirectToForm = (request: Request, status: "success" | "error") => {
  const url = new URL(request.headers.get("referer") || "/", request.url);
  url.searchParams.set("offert", status);
  url.hash = "offert";
  return NextResponse.redirect(url, 303);
};

export async function POST(request: Request) {
  const form = await request.formData();
  const payload = {
    name: clean(form.get("name")),
    phone: clean(form.get("phone")),
    email: clean(form.get("email")),
    postal: clean(form.get("postal")),
    service: clean(form.get("service")),
    message: clean(form.get("message")),
    consent: form.get("consent") === "on",
  };

  if (
    !payload.name ||
    !payload.phone ||
    !payload.email.includes("@") ||
    !payload.message ||
    !payload.consent
  ) {
    return wantsJson(request)
      ? Response.json(
          { error: "Kontrollera de obligatoriska fälten." },
          { status: 400 },
        )
      : redirectToForm(request, "error");
  }

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (!webhook) {
    console.info("Quote request received (webhook not configured)", {
      ...payload,
      message: "[redacted]",
    });
    return wantsJson(request)
      ? Response.json({ ok: true, configured: false })
      : redirectToForm(request, "success");
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return wantsJson(request)
      ? Response.json(
          { error: "Förfrågan kunde inte levereras." },
          { status: 502 },
        )
      : redirectToForm(request, "error");
  }

  return wantsJson(request)
    ? Response.json({ ok: true })
    : redirectToForm(request, "success");
}
