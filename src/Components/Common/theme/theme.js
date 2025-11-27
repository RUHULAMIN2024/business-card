import BusinessCardEditor from "../../Backend/theme/BusinessCardEditor";
import Theme3Editor from "../../Backend/theme/Theme3Editor";
import Theme4Editor from "../../Backend/theme/Theme4Editor";
import Theme5Editor from "../../Backend/theme/Theme5Editor";
import Theme6Editor from "../../Backend/theme/Theme6Editor";
import Theme7Editor from "../../Backend/theme/Theme7Editor";
import Theme8Editor from "../../Backend/theme/Theme8Editor";
import BusinessCard from "../../Frontend/theme/BusinessCard";
import Theme3 from "../../Frontend/theme/Theme3";
import Theme4 from "../../Frontend/theme/Theme4";
import Theme5 from "../../Frontend/theme/Theme5";
import Theme6 from "../../Frontend/theme/Theme6";
import Theme7 from "../../Frontend/theme/Theme7";
import Theme8 from "../../Frontend/theme/Theme8";

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
    theme4: { editor: Theme4Editor, view: Theme4 },
    theme5: { editor: Theme5Editor, view: Theme5 },
    theme6: { editor: Theme6Editor, view: Theme6 },
    theme7: { editor: Theme7Editor, view: Theme7 },
    theme8: { editor: Theme8Editor, view: Theme8 },
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
