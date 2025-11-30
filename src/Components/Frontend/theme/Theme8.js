import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme8 = ({ attributes }) => {
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
      {/* Gradient Top Bar */}
      <div
        className="top-gradient"
        style={{
          background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        }}
      ></div>

      <div className="bcb-card-content">
        {/* Name Box */}
        <div className="header">
          {name && (
            <h3
              className="name"
              dangerouslySetInnerHTML={{ __html: escapeHTML(name) }}
              style={{ color: textColor }}
            />
          )}

          {title && (
            <p
              className="title"
              dangerouslySetInnerHTML={{ __html: escapeHTML(title) }}
              style={{ color: primaryColor }}
            />
          )}
        </div>

        {/* Contacts Section */}
        <div className="contacts">
          {contacts?.length > 0 &&
            contacts.map((contact, index) => {
              const { icon, text } = contact;

              return (
                <div
                  key={index}
                  className="contact"
                  style={{ color: textColor }}
                >
                  {icon?.class && (
                    <i
                      className={`icon ${icon.class}`}
                      style={{ color: primaryColor }}
                    ></i>
                  )}

                  {text && (
                    <p
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: escapeHTML(text),
                      }}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Theme8;
