import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

import { prefix } from "../../../utils/data";
const BusinessCardEditor = ({
  attributes,
  activeIndex,
  setActiveIndex,
  updateContact,
  setAttributes,
}) => {
  const { name, title, contacts, theme, isHeaderSep } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="header">
        <RichText
          className="name"
          tagName="h3"
          value={name}
          onChange={(val) => setAttributes({ name: val })}
          placeholder={__("Person Name", "business-card")}
          inlineToolbar
        />

        <RichText
          className="title"
          tagName="p"
          value={title}
          onChange={(val) => setAttributes({ title: val })}
          placeholder={__("Person Name", "business-card")}
          inlineToolbar
        />

        {isHeaderSep && <span className="separator"></span>}
      </div>

      <div className="contacts">
        {contacts?.length &&
          contacts.map((contact, index) => {
            const { icon, text } = contact;

            return (
              <div
                key={index}
                className={`contact ${
                  index === activeIndex ? "bPlNowEditing" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {icon?.svg ? (
                  <span
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: icon?.svg }}
                  />
                ) : (
                  <i className={`icon ${icon?.class}`}></i>
                )}

                <RichText
                  className="text"
                  tagName="p"
                  value={text}
                  onChange={(val) => updateContact(index, val, "text")}
                  placeholder={__("Text", "icon-list")}
                  inlineToolbar
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BusinessCardEditor;
