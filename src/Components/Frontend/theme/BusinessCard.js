import { prefix } from "../../../utils/data";
import { escapeHTML } from "../../../../../bpl-tools/utils/common";

const BusinessCard = ({ attributes }) => {
  const { name, title, contacts, theme, isHeaderSep } = attributes;

  return (
    <div className={`${prefix} ${theme}`}>
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

        {isHeaderSep && <span className="separator"></span>}
      </div>

      <div className="contacts">
        {contacts?.length &&
          contacts.map((contact, index) => {
            const { icon, text } = contact;

            return (
              <div key={index} className="contact">
                {/* {icon?.class && <i className={`icon ${icon?.class}`}></i>} */}
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
  );
};

export default BusinessCard;
