import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { IconControl } from "../../../../../../bpl-tools/Components";
import { ToggleControl } from "@wordpress/components";

const SocialItemSetting = ({ attributes, setAttributes, index }) => {
  const { socials } = attributes;
  const { icon, link, openInNewTab } = socials[index];

  return (
    <>
      <IconControl
        value={icon}
        onChange={(v) =>
          setAttributes({
            socials: updateData(socials, v, index, "icon"),
          })
        }
        defaults={{ class: "fas fa-globe" }}
        isSize={false}
        isColor={false}
      />

      <TextControl
        className="mt15"
        label={__("Link", "business-card")}
        value={link}
        onChange={(v) =>
          setAttributes({
            socials: updateData(socials, v, index, "link"),
          })
        }
      />
      <ToggleControl
        className="mt15"
        label="Open links in new tab"
        checked={openInNewTab}
        onChange={(v) =>
          setAttributes({
            socials: updateData(socials, v, index, "openInNewTab"),
          })
        }
      />
    </>
  );
};

export default SocialItemSetting;
