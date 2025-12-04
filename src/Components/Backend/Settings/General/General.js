import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import { HelpPanel, ItemsPanel } from "../../../../../../bpl-tools/Components";

import {
  pxUnit,
  perUnit,
  emUnit,
  remUnit,
} from "../../../../../../bpl-tools/utils/options";

import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import ContactItemSettings from "./ContactItemSettings";
import SocialItemSetting from "./SocialItemSetting";
const General = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  socialActiveIndex,
  setSocialActiveIndex,
}) => {
  const { businessCard, name, title, width, theme } = attributes;

  const contactItemProps = {
    attributes,
    setAttributes,
    arrKey: "contacts",
    activeIndex,
    setActiveIndex,
  };

  return (
    <>
      <HelpPanel
        slug="business-card-block"
        docsLink="https://bblockswp.com/docs/business-card-block"
      />
      <PanelBody className="bPlPanelBody">
        <SelectControl
          label={"Themes:"}
          labelPosition="left"
          value={theme}
          options={themeOptions}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
          help={__(
            "Some settings will be change when you will change the Theme.",
            "business-card"
          )}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "business-card")}
        initialOpen={true}
      >
        <UnitControl
          label={__("Width:", "business-card")}
          labelPosition="left"
          value={width}
          onChange={(val) => setAttributes({ width: val })}
          units={[pxUnit(), perUnit(), emUnit(), remUnit()]}
        />
        <small>{__("Keep width 0, to auto width.", "business-card")}</small>
        <UnitControl
          className="mt15"
          label={__("Min-Height:", "business-card")}
          labelPosition="left"
          value={businessCard?.height}
          onChange={(v) =>
            setAttributes({
              businessCard: updateData(businessCard, v, "height"),
            })
          }
          units={[pxUnit(), perUnit(), emUnit(), remUnit()]}
        />
        <small>{__("Keep Height 0, to auto Height.", "business-card")}</small>

        {/* <small>
          {__("Keep width & height 0 to auto size.", "business-card")}
        </small> */}
        <ToggleControl
          className="mt15"
          label={__("Show/Hide Download Button", "business-card")}
          checked={businessCard?.isDownloadBtn}
          onChange={(v) =>
            setAttributes({
              businessCard: updateData(businessCard, v, "isDownloadBtn"),
            })
          }
        />
      </PanelBody>
      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Header", "business-card")}
      >
        <TextControl
          label="Name"
          value={name}
          onChange={(val) =>
            setAttributes({
              name: val,
            })
          }
        />
        <TextControl
          label="Title"
          value={title}
          onChange={(val) =>
            setAttributes({
              title: val,
            })
          }
        />
        {theme === "theme3" && (
          <TextControl
            label="Tagline"
            value={businessCard?.tagline}
            onChange={(v) =>
              setAttributes({
                businessCard: updateData(businessCard, v, "tagline"),
              })
            }
          />
        )}
        {(theme === "theme3" ||
          theme === "theme4" ||
          theme === "theme5" ||
          theme === "theme6" ||
          theme === "theme7") && (
          <TextControl
            label="Company"
            value={businessCard?.company}
            onChange={(v) =>
              setAttributes({
                businessCard: updateData(businessCard, v, "company"),
              })
            }
          />
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Contacts", "business-card")}
        initialOpen={false}
      >
        <ItemsPanel
          {...contactItemProps}
          newItem={{
            type: "",
            icon: {
              class: "fas fa-globe",
            },
            text: "https://example.com",
          }}
          ItemSettings={ContactItemSettings}
          itemLabel="Contact"
          // design="single"
          design="sortable"
        />
      </PanelBody>

      {theme === "theme3" && (
        <PanelBody
          initialOpen={false}
          className="bPlPanelBody"
          title={__("Socials", "business-card")}
        >
          <ItemsPanel
            {...{ attributes, setAttributes }}
            arrKey="socials"
            activeIndex={socialActiveIndex}
            setActiveIndex={setSocialActiveIndex}
            newItem={{
              icon: { class: "fa-solid fa-link" },
              link: "https://example.com",
            }}
            ItemSettings={SocialItemSetting}
            design="sortable"
            // title="name"
            itemLabel="Social"
          />
        </PanelBody>
      )}
    </>
  );
};

export default General;
