import { __ } from "@wordpress/i18n";
import { SelectControl, TextControl } from "@wordpress/components";

import { IconLibrary } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { contactTypeOptions } from "../../../../utils/options";

const ContactItemSettings = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
}) => {
  const items = attributes[arrKey];
  const { type, icon, text } = items[index];

  const updateContact = (val, ...props) => {
    setAttributes({ [arrKey]: updateData(items, val, index, ...props) });

    setActiveIndex && setActiveIndex(index);
  };

  return (
    <>
      <SelectControl
        label={"Contact Type: "}
        labelPosition="left"
        value={type}
        options={contactTypeOptions}
        onChange={(val) => updateContact(val, "type")}
      />

      <IconLibrary
        value={icon.svg}
        className="mt10"
        label="Contact Icon: "
        onChange={(val) => updateContact({ svg: val }, "icon")}
      />

      <TextControl
        className="mt15"
        label={__("Text:", "business-card")}
        value={text}
        onChange={(val) => updateContact(val, "text")}
      />
    </>
  );
};
export default ContactItemSettings;
