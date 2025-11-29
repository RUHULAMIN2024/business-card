import { prefix } from "../../../utils/data";
import { RichText } from "@wordpress/block-editor";

const Theme3Editor = ({
  attributes,
  setSocialActiveIndex,
  socialActiveIndex,
  activeIndex,
  setActiveIndex,
  updateContact,
  setAttributes,
}) => {
  const {
    name,
    title,
    contacts,
    secondaryColor,
    theme = "",
    isHeaderSep,
    businessCard,
    socials,
  } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="bcb-card-content">
        {/* Header Section */}
        <div className="header">
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

          {businessCard.tagline && (
            <RichText
              className="tagline"
              tagName="p"
              value={businessCard.tagline}
              onChange={(val) =>
                setAttributes({
                  businessCard: { ...businessCard, tagline: val },
                })
              }
              placeholder="Tagline"
              inlineToolbar
            />
          )}
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
                  {icon?.class && <i className={`icon ${icon?.class}`}></i>}

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

      {/* Sidebar */}
      <div className="card-sidebar" style={{ backgroundColor: secondaryColor }}>
        <div className="sidebar-content">
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

          <div className="social-icons">
            {socials?.length &&
              socials.map((social, index) => {
                const { icon, link } = social;

                return (
                  <div
                    key={index}
                    className={`social-icon ${
                      index === socialActiveIndex ? "bPlNowEditing" : ""
                    }`}
                    onClick={() => setSocialActiveIndex(index)}
                  >
                    {icon?.class && <i className={`icon ${icon.class}`}></i>}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme3Editor;
