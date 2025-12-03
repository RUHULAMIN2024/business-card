import { RichText } from "@wordpress/block-editor";
import { prefix } from "../../../utils/data";

const Theme8Editor = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  updateContact,
}) => {
  const {
    name,
    title,
    contacts,
    theme = "",
    primaryColor,
    textColor,
  } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      {/* Gradient Top Bar */}
      <div className="top-bg"></div>

      <div className="bcb-card-content">
        {/* Name Box */}
        <div className="header">
          <RichText
            tagName="h3"
            className="name"
            value={name}
            onChange={(val) => setAttributes({ name: val })}
            placeholder="Your Name"
            inlineToolbar
          />

          <RichText
            tagName="p"
            className="title"
            value={title}
            onChange={(val) => setAttributes({ title: val })}
            placeholder="Job Title"
            inlineToolbar
          />
        </div>

        {/* Contacts Section */}
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
                  style={{ color: textColor }}
                >
                  {/* {icon?.class && <i className={`icon ${icon.class}`}></i>} */}
                  {icon?.svg ? (
                    <span
                      className="icon"
                      dangerouslySetInnerHTML={{ __html: icon?.svg }}
                    />
                  ) : (
                    <i className={`icon ${icon?.class}`}></i>
                  )}

                  <RichText
                    tagName="p"
                    className="text"
                    value={text}
                    onChange={(val) => updateContact(index, val, "text")}
                    placeholder="Contact info"
                    inlineToolbar
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Theme8Editor;
