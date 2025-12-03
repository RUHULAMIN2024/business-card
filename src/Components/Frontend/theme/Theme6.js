import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme6 = ({ attributes }) => {
  const { name, title, contacts, theme = "", businessCard } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      {/* Left Color Panel */}
      <div className="card-sidebar">
        <div className="sidebar-content">
          <div className="bg-circles">
            <span className="circle-1"></span>
            <span className="circle-2"></span>
          </div>

          <div className="initial">{(name || "Y")[0].toUpperCase()}</div>
        </div>
      </div>

      {/* Main Content */}
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
                  {/* {icon?.class && <i className={`icon ${icon.class}`}></i>} */}
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

export default Theme6;
