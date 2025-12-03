import { RichText } from "@wordpress/block-editor";
import { prefix } from "../../../utils/data";

const Theme5Editor = ({
  attributes,
  setAttributes,
  updateContact,
  activeIndex,
  setActiveIndex,
}) => {
  const { name, title, contacts, theme = "", businessCard } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      {/* Background Circles */}
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      <div className="bcb-card-content">
        {/* Header */}
        <div className="header">
          <RichText
            className="company"
            tagName="p"
            value={businessCard?.company}
            onChange={(val) =>
              setAttributes({
                businessCard: { ...businessCard, company: val },
              })
            }
            placeholder="Company"
            inlineToolbar
          />

          <RichText
            className="name"
            tagName="h3"
            value={name}
            onChange={(val) => setAttributes({ name: val })}
            placeholder="Your Name"
            inlineToolbar
          />

          <RichText
            className="title"
            tagName="p"
            value={title}
            onChange={(val) => setAttributes({ title: val })}
            placeholder="Job Title"
            inlineToolbar
          />
        </div>

        {/* Contacts */}
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
                    className="text"
                    tagName="p"
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

export default Theme5Editor;
