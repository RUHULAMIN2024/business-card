import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme5 = ({ attributes }) => {
  const { name, title, contacts, theme = "", businessCard } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      <div className="bcb-card-content">
        <div className="header">
          {businessCard?.company && (
            <p
              className="company"
              dangerouslySetInnerHTML={{
                __html: escapeHTML(businessCard.company),
              }}
            />
          )}

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

export default Theme5;
