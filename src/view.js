import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Theme from "./Components/Common/theme/theme";
import { downloadVCard, generateVCard } from "./utils/vcard";

document.addEventListener("DOMContentLoaded", () => {
  const businessCardEls = document.querySelectorAll(".wp-block-business-card");
  businessCardEls.forEach((businessCardEl) => {
    const attributes = JSON.parse(businessCardEl.dataset.attributes);

    const isPremium = Boolean(businessCardEl.dataset.bcbispremium);

    const proThemes = ["theme4", "theme5", "theme6", "theme7", "theme8"];
    const activeTheme = attributes?.theme;

    const showOverlay = !isPremium && proThemes.includes(activeTheme);

    const siteLocation = `/wp-admin/edit.php?post_type=bcb&page=bcb-dashboard#/pricing`;

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
        {showOverlay && (
          <div className="pro-overlay">
            <div className="overlay-inner">
              <h3>🔒 Premium Theme</h3>
              <p>You need a Pro license to activate this theme.</p>
              <a
                href={siteLocation}
                rel="noreferrer"
                target="_blank"
                className="upgrade-btn"
              >
                Get Pro License
              </a>
            </div>
          </div>
        )}
      </>
    );

    businessCardEl?.removeAttribute("data-attributes");
  });
});
