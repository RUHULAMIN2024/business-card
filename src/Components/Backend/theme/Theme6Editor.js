import { prefix } from "../../../utils/data";
import { RichText } from "@wordpress/block-editor";

const Theme6Editor = ({
  attributes,
  setAttributes,
  updateContact,
  activeIndex,
  setActiveIndex,
}) => {
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

          <div className="left-letter">{(name || "Y")[0].toUpperCase()}</div>
        </div>
      </div>

      {/* Main Content */}
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
    </div>
  );
};

export default Theme6Editor;
