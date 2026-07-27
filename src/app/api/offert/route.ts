const clean = (value: FormDataEntryValue | null) => String(value || "").trim().slice(0, 2000);

export async function POST(request: Request) {
  const form = await request.formData();
  const payload = { name: clean(form.get("name")), phone: clean(form.get("phone")), email: clean(form.get("email")), postal: clean(form.get("postal")), service: clean(form.get("service")), message: clean(form.get("message")), consent: form.get("consent") === "on" };
  if (!payload.name || !payload.phone || !payload.email.includes("@") || !payload.message || !payload.consent) return Response.json({error:"Kontrollera de obligatoriska fälten."},{status:400});
  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (!webhook) { console.info("Quote request received (webhook not configured)", { ...payload, message: "[redacted]" }); return Response.json({ok:true,configured:false}); }
  const response = await fetch(webhook,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});
  if(!response.ok) return Response.json({error:"Förfrågan kunde inte levereras."},{status:502});
  return Response.json({ok:true});
}
