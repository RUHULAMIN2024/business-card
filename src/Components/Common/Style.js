import { escapeHTML } from "../../../../bpl-tools/utils/common";
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getColorsCSS,
  getSeparatorCSS,
  getShadowCSS,
  getSpaceCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

import { prefix } from "../../utils/data";

const Style = ({ attributes, id }) => {
  const {
    theme,

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
    businessCard,
  } = attributes;
  const {
    header,
    tagline,
    company,
    leftLetter,
    topBg,
    sidebarBg,
    circle1Color,
    circle2Color,
    socialIconColor,
    contactIconSize,
    socialIconSize,
    downloadBtn,
  } = businessCardStyles;

  const mainSl = `#${id}`;
  const businessCardSl = `${mainSl} .${prefix}`;
  const headerSl = `${businessCardSl} .header`;
  const contactsSl = `${businessCardSl} .contacts`;
  const sidebarSl = `${businessCardSl} .card-sidebar`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: escapeHTML(`
		${getTypoCSS("", nameTypo)?.googleFontLink}
		${getTypoCSS("", titleTypo)?.googleFontLink}
		${getTypoCSS("", tagline?.typo)?.googleFontLink}
		${getTypoCSS("", company?.typo)?.googleFontLink}
		${getTypoCSS("", leftLetter?.typo)?.googleFontLink}
		${getTypoCSS("", contactTextTypo)?.googleFontLink}
		${getTypoCSS("", contactTextTypo)?.googleFontLink}
		${getTypoCSS("", downloadBtn?.typo)?.googleFontLink}


		${getTypoCSS(`${headerSl} .name`, nameTypo)?.styles}
		${getTypoCSS(`${headerSl} .title`, titleTypo)?.styles}
		${getTypoCSS(`${headerSl} .tagline`, tagline?.typo)?.styles}
		${getTypoCSS(`${businessCardSl} .company`, company?.typo)?.styles}
		${getTypoCSS(`${businessCardSl} .left-letter`, leftLetter?.typo)?.styles}
		${getTypoCSS(`${contactsSl} .text`, contactTextTypo)?.styles}
		${getTypoCSS(`${mainSl} .bcb-download-btn`, downloadBtn?.typo)?.styles}

		${mainSl}{
			text-align: ${alignment};
		}
		${mainSl} .bcb-download-btn{
			${getColorsCSS(downloadBtn?.colors)}
			${getBorderCSS(downloadBtn?.border)}
			padding:${getBoxCSS(downloadBtn?.padding)};
    		cursor: pointer;
			margin-top: 16px;
		}

		${businessCardSl}{
			width: ${["0px", "0%", "0em", "0rem"].includes(width) ? "auto" : width};
			min-height: ${
        ["0px", "0%", "0em", "0rem"].includes(businessCard?.height)
          ? "auto"
          : businessCard?.height
      };
			${getBackgroundCSS(background)}
			padding: ${getSpaceCSS(padding)};
			${getBorderCSS(border)}
			box-shadow: ${getShadowCSS(shadow)};
		}
		${sidebarSl}{
			${getBackgroundCSS(sidebarBg)}
		}

		${businessCardSl} .top-bg{
			${getBackgroundCSS(topBg)}
		}
		${businessCardSl} .circle-1{
			background:${circle1Color}
		}
		${businessCardSl} .circle-2{
			background:${circle2Color}
		}
		${headerSl}{
			justify-items: ${headerAlign};
			margin: ${getSpaceCSS(headerMargin)};
		${
      theme === "theme8"
        ? `${getBackgroundCSS(header?.background)}
			padding: ${getSpaceCSS(header?.padding)};
			${getBorderCSS(header?.border)}
			box-shadow: ${getShadowCSS(header?.shadow)};`
        : ""
    }
          
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
		${businessCardSl} .company{
			color: ${company?.color};
		}
		${businessCardSl} .left-letter{
			color: ${leftLetter?.color};
		}
		${headerSl} .separator{
			${getSeparatorCSS(headerSep)}
		}
		${contactsSl} .icon{
			${getColorsCSS(contactIconColors)}
			font-size:${contactIconSize};
			
		}
		${contactsSl} .icon svg{
			width:${contactIconSize};
			height:${contactIconSize};
			fill:${contactIconColors.color};
			
		}
		${contactsSl} .text{
			color: ${contactTextColor};
		}
		${sidebarSl} .icon svg{
			fill: ${socialIconColor};
			width:${socialIconSize};
			height:${socialIconSize};

		}
		`).replace(/\s+/g, " "),
      }}
    />
  );
};
export default Style;
