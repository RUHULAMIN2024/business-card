import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import {
  Label,
  Background,
  ColorControl,
  BtnGroup,
  ColorsControl,
  SeparatorControl,
  Typography,
  BoxControl,
} from "../../../../../../bpl-tools/Components";
import {
  BorderControl,
  ShadowControl,
  SpaceControl,
} from "../../../../../../bpl-tools/Components/Deprecated";

import { aligns } from "../../../../utils/options";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import {
  emUnit,
  perUnit,
  pxUnit,
  remUnit,
} from "../../../../../../bpl-tools/utils/options";

const Style = ({ attributes, setAttributes, isPremium, setIsProModalOpen }) => {
  const {
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
    businessCard,
    businessCardStyles,
  } = attributes;
  const {
    header,
    tagline,
    company,
    leftLetter,
    topBg,
    sidebarBg,
    circle1Color,
    circle2Color,
    socialIconColor,
    contactIconSize,
    socialIconSize,
    downloadBtn,
  } = businessCardStyles;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__("Card", "business-card")}>
        <Background
          label={__("Background:", "business-card")}
          value={background}
          onChange={(val) => setAttributes({ background: val })}
          defaults={{ color: "#0000" }}
        />
        {(theme === "theme3" || theme === "theme6") && (
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
            defaults={{ color: "#1e40af" }}
          />
        )}
        {theme === "theme8" && (
          <Background
            label={__("Top Background:", "business-card")}
            value={topBg}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(businessCardStyles, v, "topBg"),
              })
            }
            defaults={{ color: "#3b82f6" }}
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

        {(theme === "theme4" ||
          theme === "theme5" ||
          theme === "theme6" ||
          theme === "theme7") && (
          <>
            <ColorControl
              label={__("Circle1 Color:", "business-card")}
              value={circle1Color}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "circle1Color"
                  ),
                })
              }
            />
            {theme !== "theme4" && (
              <ColorControl
                label={__("Circle2 Color:", "business-card")}
                value={circle2Color}
                onChange={(v) =>
                  setAttributes({
                    businessCardStyles: updateData(
                      businessCardStyles,
                      v,
                      "circle2Color"
                    ),
                  })
                }
              />
            )}
          </>
        )}
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
        {theme === "theme8" && (
          <>
            <SpaceControl
              className="mt15"
              label={__("Padding:", "business-card")}
              value={header?.padding}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "header",
                    "padding"
                  ),
                })
              }
            />
            <Background
              label={__("Background:", "business-card")}
              value={header.background}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "header",
                    "background"
                  ),
                })
              }
              defaults={{ color: "#fff" }}
            />

            <BorderControl
              label={__("Border:", "business-card")}
              value={header?.border}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "header",
                    "border"
                  ),
                })
              }
            />

            <ShadowControl
              label={__("Shadow:", "business-card")}
              value={header?.shadow}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "header",
                    "shadow"
                  ),
                })
              }
            />
          </>
        )}

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
          </>
        )}
        {(theme === "theme3" ||
          theme === "theme4" ||
          theme === "theme5" ||
          theme === "theme6" ||
          theme === "theme7") && (
          <>
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

        {theme === "theme6" && (
          <>
            <Typography
              className="mt15"
              label={__("Left Letter Typography:", "business-card")}
              value={leftLetter.typo}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "leftLetter",
                    "typo"
                  ),
                })
              }
            />

            <ColorControl
              label={__("Left Letter Color:", "business-card")}
              value={leftLetter.color}
              onChange={(v) =>
                setAttributes({
                  businessCardStyles: updateData(
                    businessCardStyles,
                    v,
                    "leftLetter",
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
        <UnitControl
          label={__("Icon Size:", "business-card")}
          labelPosition="left"
          value={contactIconSize}
          onChange={(v) =>
            setAttributes({
              businessCardStyles: updateData(
                businessCardStyles,
                v,
                "contactIconSize"
              ),
            })
          }
          units={[pxUnit(), perUnit(), emUnit(), remUnit()]}
        />
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
          <UnitControl
            label={__("Icon Size:", "business-card")}
            labelPosition="left"
            value={socialIconSize}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "socialIconSize"
                ),
              })
            }
            units={[pxUnit(), perUnit(), emUnit(), remUnit()]}
          />
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
      {businessCard?.isDownloadBtn && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Download Button", "business-card")}
          initialOpen={false}
        >
          <Typography
            label={__("Typography:", "business-card")}
            value={downloadBtn?.typo}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "downloadBtn",
                  "typo"
                ),
              })
            }
            defaults={{
              fontSize: { desktop: 15, tablet: 15, mobile: 15 },
              fontWeight: 500,
            }}
          />
          <ColorsControl
            className={"mt15"}
            label={__("Colors", "business-card")}
            value={downloadBtn?.colors}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "downloadBtn",
                  "colors"
                ),
              })
            }
            defaults={{ color: "#fff", bg: "#4527a4" }}
          />

          <BorderControl
            className={"mt15"}
            label={__("Border & Radius:", "business-card")}
            value={downloadBtn?.border}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "downloadBtn",
                  "border"
                ),
              })
            }
          />
          <BoxControl
            className={"mt15"}
            label={__("Padding:", "business-card")}
            values={downloadBtn?.padding}
            onChange={(v) =>
              setAttributes({
                businessCardStyles: updateData(
                  businessCardStyles,
                  v,
                  "downloadBtn",
                  "padding"
                ),
              })
            }
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
