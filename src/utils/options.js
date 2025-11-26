import { __ } from "@wordpress/i18n";

export const themes = [
  { label: __("Default", "business-card"), value: "default" },
  { label: __("Theme 1", "business-card"), value: "theme1" },
  { label: __("Theme 2", "business-card"), value: "theme2" },
];

export const aligns = [
  {
    label: __("Left", "business-card"),
    value: "start",
    icon: "editor-alignleft",
  },
  {
    label: __("Center", "business-card"),
    value: "center",
    icon: "editor-aligncenter",
  },
  {
    label: __("Right", "business-card"),
    value: "end",
    icon: "editor-alignright",
  },
];

export const generalStyleTabs = [
  { name: "general", title: __("General", "business-card") },
  { name: "style", title: __("Style", "business-card") },
];

const isPremium = Boolean(bcbIsPremium);

export const themeOptions = [
  { label: __("Default", "business-card"), value: "default" },
  { label: __("Theme 1", "business-card"), value: "theme1" },
  { label: __("Theme 2", "business-card"), value: "theme2" },
  { label: __("Theme 3", "business-card"), value: "theme3" },
];

export const previewOptions = [
  {
    label: "Default",
    value: "default",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },

  {
    label: "Theme 1",
    value: "theme1",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 2",
    value: "theme2",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 3",
    value: "theme3",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
];
