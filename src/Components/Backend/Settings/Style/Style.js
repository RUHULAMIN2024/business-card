import { __ } from "@wordpress/i18n";

import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";

import {
  Label,
  Background,
  ColorControl,
  BtnGroup,
  ColorsControl,
  SeparatorControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import {
  BorderControl,
  ShadowControl,
  SpaceControl,
} from "../../../../../../bpl-tools/Components/Deprecated";

import { aligns } from "../../../../utils/options";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, isPremium, setIsProModalOpen }) => {
  const {
    width,
    theme,
    background,
    padding,
    border,
    shadow,
    headerAlign,
    headerMargin,
    nameTypo,
    nameColor,
    titleTypo,
    titleColor,
    isHeaderSep,
    headerSep,
    contactIconColors,
    contactTextTypo,
    contactTextColor,
    businessCardStyles,
  } = attributes;
  const { tagline, company, sidebarBg, socialIconColor } = businessCardStyles;
  return (
    <>
      <PanelBody className="bPlPanelBody" title={__("Card", "business-card")}>
        <Background
          label={__("Background:", "business-card")}
          value={background}
          onChange={(val) => setAttributes({ background: val })}
          defaults={{ color: "#0000" }}
        />
        {theme === "theme3" && (
          <Background
            label={__("Sidebar Background:", "business-card")}
            value={sidebarBg}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "sidebarBg"
                ),
              })
            }
            defaults={{ color: "#0000" }}
          />
        )}

        <SpaceControl
          className="mt15"
          label={__("Padding:", "business-card")}
          value={padding}
          onChange={(val) => setAttributes({ padding: val })}
          defaults={{ vertical: "30px", horizontal: "25px" }}
        />

        <BorderControl
          label={__("Border:", "business-card")}
          value={border}
          onChange={(val) => setAttributes({ border: val })}
        />

        <ShadowControl
          label={__("Shadow:", "business-card")}
          value={shadow}
          onChange={(val) => setAttributes({ shadow: val })}
          defaults={{ blur: "10px", color: "#4527a480" }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Header", "business-card")}
        initialOpen={false}
      >
        <PanelRow>
          <Label className="">{__("Align:", "business-card")}</Label>
          <BtnGroup
            value={headerAlign}
            onChange={(val) => setAttributes({ headerAlign: val })}
            options={aligns}
            isIcon={true}
          />
        </PanelRow>

        <SpaceControl
          className="mt15"
          label={__("Margin:", "business-card")}
          value={headerMargin}
          onChange={(val) => setAttributes({ headerMargin: val })}
          defaults={{ side: 4, bottom: "30px" }}
        />

        <Typography
          className="mt15"
          label={__("Name Typography:", "business-card")}
          value={nameTypo}
          onChange={(val) => setAttributes({ nameTypo: val })}
          defaults={{
            fontSize: { desktop: 30, tablet: 26, mobile: 22 },
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        />

        <ColorControl
          label={__("Name Color:", "business-card")}
          value={nameColor}
          onChange={(val) => setAttributes({ nameColor: val })}
          defaultColor="#4527a4"
        />

        <Typography
          className="mt15"
          label={__("Title Typography:", "business-card")}
          value={titleTypo}
          onChange={(val) => setAttributes({ titleTypo: val })}
          defaults={{ fontSize: { desktop: 18, tablet: 17, mobile: 16 } }}
        />

        <ColorControl
          label={__("Title Color:", "business-card")}
          value={titleColor}
          onChange={(val) => setAttributes({ titleColor: val })}
          defaultColor="#828282"
        />
        {theme === "theme3" && (
          <>
            <Typography
              className="mt15"
              label={__("Tagline Typography:", "business-card")}
              value={tagline.typo}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "tagline",
                    "typo"
                  ),
                })
              }
            />

            <ColorControl
              label={__("Tagline Color:", "business-card")}
              value={tagline.color}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "tagline",
                    "color"
                  ),
                })
              }
            />
            <Typography
              className="mt15"
              label={__("Company Typography:", "business-card")}
              value={company.typo}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "company",
                    "typo"
                  ),
                })
              }
            />

            <ColorControl
              label={__("Company Color:", "business-card")}
              value={company.color}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "company",
                    "color"
                  ),
                })
              }
            />
          </>
        )}

        {(theme === "default" ||
          theme === "theme1" ||
          theme === "theme2" ||
          theme === "theme4") && (
          <>
            <ToggleControl
              className="mt15"
              label={__("Show Separator", "business-card")}
              checked={isHeaderSep}
              onChange={(val) => setAttributes({ isHeaderSep: val })}
            />
            {isHeaderSep && (
              <SeparatorControl
                className="mt15"
                value={headerSep}
                onChange={(val) => setAttributes({ headerSep: val })}
                defaults={{
                  width: "20%",
                  height: "2px",
                  style: "solid",
                  color: "#828282",
                }}
              />
            )}
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Contact", "business-card")}
        initialOpen={false}
      >
        {theme === "default" || theme === "theme1" || theme === "theme2" ? (
          <ColorsControl
            label={__("Icon Colors", "business-card")}
            value={contactIconColors}
            onChange={(val) => setAttributes({ contactIconColors: val })}
            defaults={{ color: "#fff", bg: "#4527a4" }}
          />
        ) : (
          <ColorControl
            label={__("Icon Color", "business-card")}
            value={contactIconColors?.color}
            onChange={(v) =>
              setAttributes({
                contactIconColors: updateData(contactIconColors, v, "color"),
              })
            }
            defaultColor="#fff"
          />
        )}

        <Typography
          label={__("Text Typography:", "business-card")}
          value={contactTextTypo}
          onChange={(val) => setAttributes({ contactTextTypo: val })}
          defaults={{
            fontSize: { desktop: 15, tablet: 15, mobile: 15 },
            fontWeight: 500,
          }}
        />

        <ColorControl
          label={__("Text Color:", "business-card")}
          value={contactTextColor}
          onChange={(val) => setAttributes({ contactTextColor: val })}
          defaultColor="#828282"
        />
      </PanelBody>
      {theme === "theme3" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Social Icons", "business-card")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "business-card")}
            value={socialIconColor}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "socialIconColor"
                ),
              })
            }
            defaultColor="#fff"
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
