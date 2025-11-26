import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  SelectControl,
  TextControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import {
  Label,
  HelpPanel,
  ItemsPanel,
} from "../../../../../../bpl-tools/Components";

import {
  pxUnit,
  perUnit,
  emUnit,
} from "../../../../../../bpl-tools/utils/options";

import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import ContactItemSettings from "./ContactItemSettings";
import SocialItemSetting from "./SocialItemSetting";
const General = ({
  attributes,
  setAttributes,
  device,
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
            "portfolio-block"
          )}
        />
      </PanelBody>
      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Basic Info", "business-card")}
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
        <TextControl
          label="Tagline"
          value={businessCard?.tagline}
          onChange={(v) =>
            setAttributes({
              businessCard: updateData(businessCard, v, "tagline"),
            })
          }
        />
        <TextControl
          label="Company"
          value={businessCard?.company}
          onChange={(v) =>
            setAttributes({
              businessCard: updateData(businessCard, v, "company"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Contacts", "business-card")}
      >
        <ItemsPanel
          {...contactItemProps}
          newItem={{
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

      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Socials", "business-card")}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="socials"
          activeIndex={socialActiveIndex}
          setActiveIndex={socialActiveIndex}
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

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "business-card")}
        initialOpen={false}
      >
        <UnitControl
          label={__("Width:", "business-card")}
          labelPosition="left"
          value={width}
          onChange={(val) => setAttributes({ width: val })}
          units={[pxUnit(), perUnit(), emUnit()]}
        />
        <small>{__("Keep width 0, to auto width.", "business-card")}</small>
      </PanelBody>
    </>
  );
};

export default General;
