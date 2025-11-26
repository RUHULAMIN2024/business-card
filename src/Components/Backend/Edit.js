import { useState } from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import { updateData } from "../../../../bpl-tools/utils/functions";
import { withSelect } from "@wordpress/data";
import ClipBoard from "../../shortcode/clipBoard";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { prefix } from "../../utils/data";
import Theme from "../Common/theme/theme";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId } =
    props;

  const [activeIndex, setActiveIndex] = useState(0);
  const [socialActiveIndex, setSocialActiveIndex] = useState(0);
  const isPremium = Boolean(bcbIsPremium);

  const { name, title, contacts, theme, isHeaderSep } = attributes;

  const id = `${prefix}-${clientId}`;

  const updateContact = (index, val, ...props) => {
    setAttributes({ contacts: updateData(contacts, val, index, ...props) });

    setActiveIndex(index);
  };

  return (
    <>
      <Settings
        clientId={clientId}
        device={device}
        isPremium={isPremium}
        attributes={attributes}
        setAttributes={setAttributes}
        socialActiveIndex={socialActiveIndex}
        setSocialActiveIndex={setSocialActiveIndex}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        updateContact={updateContact}
      />

      <div {...useBlockProps()} id={id}>
        <Style device={device} attributes={attributes} id={id} />
        {postType == "bcb" && <ClipBoard shortcode={`[bcb id=${postId}]`} />}

        <Theme
          device={device}
          isPremium={isPremium}
          isEditor={true}
          attributes={attributes}
          id={id}
          socialActiveIndex={socialActiveIndex}
          setSocialActiveIndex={setSocialActiveIndex}
          setAttributes={setAttributes}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* <div className={`${prefix} ${theme}`}>
          <div className="header">
            <RichText
              className="name"
              tagName="h3"
              value={name}
              onChange={(val) => setAttributes({ name: val })}
              placeholder={__("Person Name", "business-card")}
              inlineToolbar
            />

            <RichText
              className="title"
              tagName="p"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder={__("Person Name", "business-card")}
              inlineToolbar
            />

            {isHeaderSep && <span className="separator"></span>}
          </div>

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
                      placeholder={__("Text", "icon-list")}
                      inlineToolbar
                    />
                  </div>
                );
              })}
          </div>
        </div> */}
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } =
    select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);
