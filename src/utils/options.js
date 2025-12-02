import { __ } from "@wordpress/i18n";

export const contactTypeOptions = [
  { label: __("Address", "business-card"), value: "address" },
  { label: __("Phone", "business-card"), value: "phone" },
  { label: __("Email", "business-card"), value: "email" },
  { label: __("Website", "business-card"), value: "website" },
  { label: __("Others", "business-card"), value: "others" },
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
  { label: __("Theme 4", "business-card"), value: "theme4" },
  { label: __("Theme 5", "business-card"), value: "theme5" },
  { label: __("Theme 6", "business-card"), value: "theme6" },
  { label: __("Theme 7", "business-card"), value: "theme7" },
  { label: __("Theme 8", "business-card"), value: "theme8" },
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
  {
    label: "Theme 4",
    value: "theme4",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 5",
    value: "theme5",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 6",
    value: "theme6",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 7",
    value: "theme7",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
  {
    label: "Theme 8",
    value: "theme8",
    img: "",
    height: "auto",
    width: "160px",
    isPro: false,
  },
];
