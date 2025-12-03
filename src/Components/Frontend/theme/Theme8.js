import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const Theme8 = ({ attributes }) => {
  const { name, title, contacts, theme = "" } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
      {/* Gradient Top Bar */}
      <div className="top-bg"></div>

      <div className="bcb-card-content">
        {/* Name Box */}
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
        </div>

        {/* Contacts Section */}
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
