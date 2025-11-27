import { produce } from "immer";

export const themeSwitch = (theme = "", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      // THEME 1
      case "theme1":
        draft["background"] = {
          color: "#0000",
        };
        draft["border"] = {};
        draft["shadow"] = {
          blur: "10px",
          color: "#4527a480",
        };
        draft["width"] = "650px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "80px",
          horizontal: "30px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "20%" };

        draft["nameTypo"] = {
          fontSize: {
            desktop: 30,
            tablet: 26,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "uppercase",
        };
        draft["nameColor"] = "#4527a4";

        draft["titleTypo"] = {
          fontSize: {
            desktop: 18,
            tablet: 17,
            mobile: 16,
          },
          fontWeight: 500,
        };
        draft["contactIconColors"] = {
          color: "#fff",
          bg: "#4527a4",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 15,
            tablet: 15,
            mobile: 15,
          },
        };
        draft["contactTextColor"] = "#828282";

        break;

      // THEME 2
      case "theme2":
        draft["background"] = {
          color: "#0000",
        };
        draft["border"] = {};
        draft["shadow"] = {
          blur: "10px",
          color: "#4527a480",
        };
        draft["width"] = "650px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "80px",
          horizontal: "30px",
        };
        draft["headerAlign"] = "end";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = true;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 30,
            tablet: 26,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "uppercase",
        };
        draft["nameColor"] = "#4527a4";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 18,
            tablet: 17,
            mobile: 16,
          },
          fontWeight: 500,
        };
        draft["titleColor"] = "#828282";
        draft["contactIconColors"] = {
          color: "#fff",
          bg: "#4527a4",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 15,
            tablet: 15,
            mobile: 15,
          },
        };
        draft["contactTextColor"] = "#828282";

        break;
      // THEME 3
      case "theme3":
        draft["background"] = {
          color: "#3b82f6",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "#fff";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "#fff";
        draft["contactIconColors"] = {
          color: "#fff",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "#fff";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "#fff",
        };

        break;
      // THEME 4
      case "theme4":
        draft["background"] = {
          color: "#f9fafb",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = true;
        draft["headerSep"] = {
          style: "solid",
          color: "#3b82f6",
          width: "64px",
          height: "4px",
        };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 14,
            tablet: 14,
            mobile: 14,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "#4b5563";
        draft["contactIconColors"] = {
          color: "",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "#3b82f6",
        };

        break;

      // THEME 5
      case "theme5":
        draft["background"] = {
          color: "#3b82f6",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "#fff";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "#fff";
        draft["contactIconColors"] = {
          color: "#fff",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "#fff";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "#fff",
        };

        break;
      // THEME 6
      case "theme6":
        draft["background"] = {
          color: "#fff",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "";
        draft["contactIconColors"] = {
          color: "",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "",
        };

        break;
      // THEME 7
      case "theme7":
        draft["background"] = {
          color: "#fff",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "";
        draft["contactIconColors"] = {
          color: "",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "",
        };

        break;
      // THEME 8
      case "theme8":
        draft["background"] = {
          color: "#fff",
        };
        draft["border"] = {
          radius: "16px",
        };
        draft["shadow"] = {
          blur: "25px",
          color: "#00000033",
          hOffset: "0px",
          isInset: false,
          spreed: "",
          vOffset: "10px",
        };
        draft["width"] = "400px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "0px",
          horizontal: "0px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "0px" };
        draft["isHeaderSep"] = false;
        draft["headerSep"] = { ...draft.headerSep, width: "50%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 22,
            tablet: 22,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "",
        };
        draft["nameColor"] = "";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 13,
            tablet: 13,
            mobile: 13,
          },
          fontWeight: 400,
        };
        draft["titleColor"] = "";
        draft["contactIconColors"] = {
          color: "",
          bg: "",
        };
        draft["contactTextTypo"] = {
          fontSize: {
            desktop: 11,
            tablet: 11,
            mobile: 11,
          },
        };
        draft["contactTextColor"] = "";
        draft["businessCardStyles"]["company"] = {
          typo: {
            fontSize: {
              desktop: 12,
              tablet: 12,
              mobile: 12,
            },
            fontWeight: 600,
          },
          color: "",
        };

        break;

      // DEFAULT
      default:
        draft["background"] = {
          color: "#0000",
        };
        draft["border"] = {};
        draft["shadow"] = {
          blur: "10px",
          color: "#4527a480",
        };
        draft["width"] = "600px";
        draft["padding"] = {
          ...draft.padding,
          vertical: "30px",
          horizontal: "25px",
        };
        draft["headerAlign"] = "start";
        draft["headerMargin"] = { ...draft.headerMargin, bottom: "30px" };
        draft["isHeaderSep"] = true;
        draft["headerSep"] = { ...draft.headerSep, width: "20%" };
        draft["nameTypo"] = {
          fontSize: {
            desktop: 30,
            tablet: 26,
            mobile: 22,
          },
          fontWeight: 700,
          textTransform: "uppercase",
        };
        draft["nameColor"] = "#4527a4";
        draft["titleTypo"] = {
          fontSize: {
            desktop: 18,
            tablet: 17,
            mobile: 16,
          },
          fontWeight: 500,
        };
        draft["titleColor"] = "#828282";
        draft["contactIconColors"] = {
          color: "#fff",
          bg: "#4527a4",
        };

        draft["contactTextColor"] = "#828282";

        break;
    }
  });
