// import { escapeHTML } from '../../../../bpl-tools/utils/functions';
import { escapeHTML } from "../../../../bpl-tools/utils/common";
import {
  getBackgroundCSS,
  getBorderCSS,
  getColorsCSS,
  getSeparatorCSS,
  getShadowCSS,
  getSpaceCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

import { prefix } from "../../utils/data";

const Style = ({ attributes, id }) => {
  const {
    alignment,
    width,
    background,
    padding,
    border,
    shadow,
    headerAlign,
    headerMargin,
    nameTypo,
    nameColor,
    titleTypo,
    titleColor,
    headerSep,
    contactIconColors,
    contactTextTypo,
    contactTextColor,
    businessCardStyles,
  } = attributes;
  const { tagline, company, sidebarBg } = businessCardStyles;

  const mainSl = `#${id}`;
  const businessCardSl = `${mainSl} .${prefix}`;
  const headerSl = `${businessCardSl} .header`;
  const contactsSl = `${businessCardSl} .contacts`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: escapeHTML(`
		${getTypoCSS("", nameTypo)?.googleFontLink}
		${getTypoCSS("", titleTypo)?.googleFontLink}
		${getTypoCSS("", tagline?.typo)?.googleFontLink}
		${getTypoCSS("", contactTextTypo)?.googleFontLink}
		${getTypoCSS(`${headerSl} .name`, nameTypo)?.styles}
		${getTypoCSS(`${headerSl} .title`, titleTypo)?.styles}
		${getTypoCSS(`${headerSl} .tagline`, tagline?.typo)?.styles}
		${getTypoCSS(`${contactsSl} .text`, contactTextTypo)?.styles}

		${mainSl}{
			text-align: ${alignment};
		}
		${businessCardSl}{
			width: ${["0px", "0%", "0em"].includes(width) ? "auto" : width};
			${getBackgroundCSS(background)}
			padding: ${getSpaceCSS(padding)};
			${getBorderCSS(border)}
			box-shadow: ${getShadowCSS(shadow)};
		}
		${headerSl}{
			justify-items: ${headerAlign};
			margin: ${getSpaceCSS(headerMargin)};
		}
		${headerSl} .name{
			color: ${nameColor};
		}
		${headerSl} .title{
			color: ${titleColor};
		}
		${headerSl} .tagline{
			color: ${tagline?.color};
		}
		${headerSl} .separator{
			${getSeparatorCSS(headerSep)}
		}
		${contactsSl} .icon{
			${getColorsCSS(contactIconColors)}
		}
		${contactsSl} .text{
			color: ${contactTextColor};
		}
		`).replace(/\s+/g, " "),
      }}
    />
  );
};
export default Style;
