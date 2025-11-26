import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";

import { IconControl } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const ContactItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
}) => {
  const items = attributes[arrKey];
  const { icon = {}, text } = items[index];

  const updateContact = (val, ...props) => {
    setAttributes({ [arrKey]: updateData(items, val, index, ...props) });

    setActiveIndex && setActiveIndex(index);
  };

  return (
    <>
      <IconControl
        value={icon}
        onChange={(val) => updateContact(val, "icon")}
        defaults={{ class: "fas fa-globe" }}
        isSize={false}
        isColor={false}
      />

      <TextControl
        className="mt15"
        label={__("Text", "business-card")}
        value={text}
        onChange={(val) => updateContact(val, "text")}
      />
    </>
  );
};
export default ContactItemSettings;
