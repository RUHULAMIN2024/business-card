import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Theme from "./Components/Common/theme/theme";
import { downloadVCard, generateVCard } from "./utils/vcard";

document.addEventListener("DOMContentLoaded", () => {
  const businessCardEls = document.querySelectorAll(".wp-block-business-card");
  businessCardEls.forEach((businessCardEl) => {
    const attributes = JSON.parse(businessCardEl.dataset.attributes);

    createRoot(businessCardEl).render(
      <>
        <Style attributes={attributes} id={businessCardEl.id} />
        <Theme isEditor={false} attributes={attributes} />{" "}
        {attributes?.businessCard?.isDownloadBtn && (
          <div>
            <button
              className="bcb-download-btn"
              onClick={() => {
                const vcardText = generateVCard(attributes);
                downloadVCard(vcardText, `${attributes.name || "vcard"}.vcf`);
              }}
            >
              Download vCard
            </button>
          </div>
        )}
      </>
    );

    businessCardEl?.removeAttribute("data-attributes");
  });
});
