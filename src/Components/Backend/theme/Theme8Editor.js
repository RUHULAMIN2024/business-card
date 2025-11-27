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
    businessCard,
    primaryColor,
    secondaryColor,
    textColor,
  } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="bcb-card-main theme8">
        {/* Rotated Card Wrapper */}
        <div className="tilt-wrapper">
          <div className="tilt-inner">
            {/* Gradient Top Bar */}
            <div className="top-gradient"></div>

            <div className="content">
              {/* Name Box */}
              <div className="info-box">
                <RichText
                  tagName="h3"
                  className="name"
                  value={name}
                  onChange={(val) => setAttributes({ name: val })}
                  placeholder="Your Name"
                  inlineToolbar
                  style={{ color: textColor }}
                />

                <RichText
                  tagName="p"
                  className="title"
                  value={title}
                  onChange={(val) => setAttributes({ title: val })}
                  placeholder="Job Title"
                  inlineToolbar
                  style={{ color: primaryColor }}
                />

                {/* <RichText
                  tagName="p"
                  className="company"
                  value={businessCard?.company}
                  onChange={(val) =>
                    setAttributes({
                      businessCard: { ...businessCard, company: val },
                    })
                  }
                  placeholder="Company"
                  inlineToolbar
                /> */}
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
                        {icon?.class && (
                          <i
                            className={`icon ${icon.class}`}
                            style={{ color: primaryColor }}
                          ></i>
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
        </div>
      </div>
    </div>
  );
};

export default Theme8Editor;
