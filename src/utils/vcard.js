export function generateVCard(attributes) {
  const { name = "", title = "", contacts, socials, businessCard } = attributes;
  const company = businessCard.company || "";

  let address = "";
  let phone = "";
  let email = "";
  let website = "";

  if (contacts && Array.isArray(contacts)) {
    contacts.forEach((c) => {
      if (c.type === "address") address = c.text;
      if (c.type === "phone") phone = c.text;
      if (c.type === "email") email = c.text;

      if (c.type === "website") website = c.text;
    });
  }

  return `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
ORG:${company}

ADR:${address}
TEL;TYPE=Mobile:${phone}
EMAIL:${email}
URL:${website}
END:VCARD
`.trim();
}

export function downloadVCard(vcardText, fileName = "vcard.vcf") {
  const blob = new Blob([vcardText], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
  a.remove();
}
