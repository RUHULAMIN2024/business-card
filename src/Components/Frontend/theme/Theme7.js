import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme7 = ({ attributes }) => {
  const { name, title, contacts, theme = "", businessCard } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      {/* Background Circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>

      <div className="bcb-card-content">
        {/* Header Section */}
        <div className="header">
          {/* Name */}
          {name && (
            <h3
              className="name"
              dangerouslySetInnerHTML={{ __html: escapeHTML(name) }}
            />
          )}

          {/* Title */}
          {title && (
            <p
              className="title"
              dangerouslySetInnerHTML={{ __html: escapeHTML(title) }}
            />
          )}

          {/* Company */}
          {businessCard?.company && (
            <p
              className="company"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.company),
              }}
            />
          )}
        </div>

        {/* Contacts */}
        <div className="contacts">
          {contacts?.length > 0 &&
            contacts.map((contact, index) => {
              const { icon, text } = contact;

              return (
                <div key={index} className="contact">
                  {icon?.svg ? (
                    <span
                      className="icon"
                      dangerouslySetInnerHTML={{ __html: icon?.svg }}
                    />
                  ) : (
                    <i className={`icon ${icon?.class}`}></i>
                  )}

                  {text && (
                    <p
                      className="text"
                      dangerouslySetInnerHTML={{ __html: escapeHTML(text) }}
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

export default Theme7;
