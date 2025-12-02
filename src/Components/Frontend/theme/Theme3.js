import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme3 = ({ attributes }) => {
  const {
    name,
    title,
    contacts,
    secondaryColor,
    theme = "",
    businessCard,
    socials,
  } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="bcb-card-content">
        {/* Header */}
        <div className="header">
          {/* Name */}
          {name && (
            <h3
              className="name"
              dangerouslySetInnerHTML={{ __html: escapeHTML(name) }}
            />
          )}

          {/* Job Title */}
          {title && (
            <p
              className="title"
              dangerouslySetInnerHTML={{ __html: escapeHTML(title) }}
            />
          )}

          {/* Tagline */}
          {businessCard?.tagline && (
            <p
              className="tagline"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.tagline),
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
                  {icon?.class && <i className={`icon ${icon.class}`}></i>}

                  <p
                    className="text"
                    dangerouslySetInnerHTML={{ __html: escapeHTML(text) }}
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* Sidebar */}
      <div className="card-sidebar" style={{ backgroundColor: secondaryColor }}>
        <div className="sidebar-content">
          {/* Company */}
          {businessCard?.company && (
            <p
              className="company"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.company),
              }}
            />
          )}

          {/* Social Icons */}
          <div className="social-icons">
            {socials?.length > 0 &&
              socials.map((social, index) => {
                const { icon, link, openInNewTab } = social;

                return (
                  <div key={index} className="social-icon">
                    {icon?.class && (
                      <a
                        href={escapeHTML(link)}
                        target={openInNewTab ? "_blank" : ""}
                        rel="noopener noreferrer"
                      >
                        <i className={`icon ${icon.class}`}></i>
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme3;
