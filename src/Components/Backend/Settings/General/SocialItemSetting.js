import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { IconControl } from "../../../../../../bpl-tools/Components";

const SocialItemSetting = ({ attributes, setAttributes, index }) => {
  const { socials } = attributes;
  const { icon, link } = socials[index];

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
        className="mt20"
        label={__("Link", "business-card")}
        value={link}
        onChange={(v) =>
          setAttributes({
            socials: updateData(socials, v, index, "link"),
          })
        }
      />
    </>
  );
};

export default SocialItemSetting;
