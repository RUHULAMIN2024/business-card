import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { IconLibrary } from "../../../../../../bpl-tools/Components";
import { ToggleControl } from "@wordpress/components";

const SocialItemSetting = ({ attributes, setAttributes, index }) => {
  const { socials } = attributes;
  const { icon, link, openInNewTab } = socials[index];

  return (
    <>
      <IconLibrary
        value={icon}
        className="mt10"
        label="Social Icon"
        onChange={(v) =>
          setAttributes({
            socials: updateData(socials, v, index, "icon"),
          })
        }
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
