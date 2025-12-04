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
        <div className="header">
          {name && (
            <h3
              className="name"
              dangerouslySetInnerHTML={{ __html: escapeHTML(name) }}
            />
          )}

          {title && (
            <p
              className="title"
              dangerouslySetInnerHTML={{ __html: escapeHTML(title) }}
            />
          )}

          {businessCard?.tagline && (
            <p
              className="tagline"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.tagline),
              }}
            />
          )}
        </div>

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

                  <p
                    className="text"
                    dangerouslySetInnerHTML={{ __html: escapeHTML(text) }}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="card-sidebar" style={{ backgroundColor: secondaryColor }}>
        <div className="sidebar-content">
          {businessCard?.company && (
            <p
              className="company"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.company),
              }}
            />
          )}

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
                        <span
                          className="icon"
                          dangerouslySetInnerHTML={{ __html: icon }}
                        />
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
