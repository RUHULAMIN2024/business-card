import { __ } from "@wordpress/i18n";
import {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { AboutProModal } from "../../../../../bpl-tools/ProControls";

import { TabPanel } from "@wordpress/components";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { BBlocksAds } from "../../../../../bpl-tools/Components";

import { generalStyleTabs, previewOptions } from "../../../utils/options";
import { useState } from "react";
import General from "./General/General";
import Style from "./Style/Style";
import BlockPreview from "../../../utils/BlockPreveiw/BlockPreview ";

import { tabController } from "../../../../../bpl-tools/utils/functions";
import { themeSwitch } from "../../../utils/functions";

const Settings = ({
  attributes,
  setAttributes,
  socialActiveIndex,
  setSocialActiveIndex,
  activeIndex,
  setActiveIndex,
  device,
  clientId,
  isPremium,
  siteUrl,
}) => {
  const { theme, alignment, headerAlign } = attributes;

  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=bcb&page=bcb-dashboard#/pricing`;

  return (
    <>
      <InspectorControls>
        <div className="bPlInspectorInfo">
          <BBlocksAds />
        </div>

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={() => tabController()}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  {...{
                    attributes,
                    setAttributes,
                    device,
                    activeIndex,
                    setActiveIndex,
                    socialActiveIndex,
                    setSocialActiveIndex,
                    clientId,
                    isPremium,
                    setIsProModalOpen,
                  }}
                />
              )}

              {"style" === tab.name && (
                <Style
                  {...{
                    attributes,
                    setAttributes,
                    device,
                    activeIndex,
                    setActiveIndex,

                    clientId,
                    isPremium,
                    setIsProModalOpen,
                  }}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Business Card Alignment")}
          alignmentControls={[
            {
              title: __("Business Card in left", "business-card"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Business Card in center", "business-card"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Business Card in right", "business-card"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />

        <AlignmentToolbar
          value={headerAlign}
          onChange={(val) => setAttributes({ headerAlign: val })}
          describedBy={__("Header Text Align")}
        />
        <BlockPreview
          options={previewOptions}
          isPremium={isPremium}
          value={theme}
          onChange={(val) => {
            setAttributes(themeSwitch(val, attributes));
          }}
        />
      </BlockControls>
      <AboutProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link={siteLocation}
      >
        <div
          style={{ fontFamily: "inherit", color: "#333", lineHeight: "1.6" }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            {__("Premium Feature", "portfolio-block")}
          </h3>

          <p
            style={{
              fontSize: "14px",
              marginBottom: "12px",
            }}
          >
            {__(
              "This feature is available only in the Pro version. Upgrade now to unlock enhanced customization and advanced design options.",
              "portfolio-block"
            )}
          </p>

          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li style={{ marginBottom: "6px" }}>
              <strong>{__("Fully Customizable:", "portfolio-block")}</strong>{" "}
              {__(
                "All the options you need to arrange your portfolio just the way you like.",
                "portfolio-block"
              )}
            </li>
          </ul>
        </div>
      </AboutProModal>
    </>
  );
};
export default compose(
  withSelect((select) => {
    return {
      siteUrl: select("core").getSite()?.url,
    };
  })
)(Settings);
