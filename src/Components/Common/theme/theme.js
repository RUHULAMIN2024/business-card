import BusinessCardEditor from "../../Backend/theme/BusinessCardEditor";
import Theme3Editor from "../../Backend/theme/Theme3Editor";
import BusinessCard from "../../Frontend/theme/BusinessCard";
import Theme3 from "../../Frontend/theme/Theme3";

const Theme = ({
  isEditor,
  attributes,
  setAttributes,
  socialActiveIndex,
  setSocialActiveIndex,
  id,
  activeIndex,
  setActiveIndex,
  updateContact,
  device,
  isPremium,
}) => {
  const { theme } = attributes;

  const themeComponents = {
    theme1: { editor: BusinessCardEditor, view: BusinessCard },
    theme2: { editor: BusinessCardEditor, view: BusinessCard },
    theme3: { editor: Theme3Editor, view: Theme3 },
  };

  const Component = isEditor
    ? themeComponents[theme]?.editor || BusinessCardEditor
    : themeComponents[theme]?.view || BusinessCard;

  return (
    <Component
      attributes={attributes}
      setAttributes={setAttributes}
      id={id}
      socialActiveIndex={socialActiveIndex}
      setSocialActiveIndex={setSocialActiveIndex}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      updateContact={updateContact}
      device={device}
      isPremium={isPremium}
    />
  );
};

export default Theme;
