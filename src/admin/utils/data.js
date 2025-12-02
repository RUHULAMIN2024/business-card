const slug = "business-card-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Business Card${proSuffix}`,
    displayName: `Business Card Block${proSuffix} - Display Business or Personal Info in Card Format`,
    description:
      "Show off your business card in multiple styles across your pages or posts, making your brand stand out and giving your audience an easy way to remember you.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
    // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
    // isYoutube: true,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/#pricing`,
    },
    freemius: {
      product_id: "21894",
      plan_id: "36556",
      public_key: "pk_36bb83dedb8aa937a82cf66399ff4",
    },
  };
};

export const changelogs = [
  {
    version: "1.0.6",
    list: ["Improve security"],
  },
  {
    version: "1.0.5",
    list: ["Reduce assets load"],
  },
  {
    version: "1.0.4",
    list: ["Add translate feature"],
  },
  {
    version: "1.0.3",
    list: ["Fix Width"],
  },
  {
    version: "1.0.2",
    list: ["Fix HTML Render"],
  },
  {
    version: "1.0.1",
    list: ["Fix CSS issue"],
  },
  {
    version: "1.0.0",
    list: ["Initial Release"],
  },
];

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  layout: "list",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/business-card-all-demos/",
  demos: [
    {
      icon: "",
      title: "Default",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/default-template-2/",
    },
    {
      icon: "",
      title: "Theme 1",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-1/",
    },
    {
      icon: "",
      title: "Theme 2",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-2/",
    },

    {
      icon: "",
      title: "Theme 3",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-3/",
    },
    {
      icon: "",
      title: "Theme 4",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-4/",
    },
    {
      icon: "",
      title: "Theme 5",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-5/",
    },
    {
      icon: "",
      title: "Theme 6",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-6/",
    },
    {
      icon: "",
      title: "Theme 7",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-7/",
    },
    {
      icon: "",
      title: "Theme 8",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-8/",
    },
  ],
};

export const pricingInfo = {
  cycles: [
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: false,
    },
  ],
  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        monthly: "",
        annual: "",
        lifetime: "29",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        monthly: "",
        annual: "",
        lifetime: "69",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        monthly: "",
        annual: "",
        lifetime: "199",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],
  features: [
    "Fully Customizable — all the options you need to arrange your portfolio just the way you like.",
  ],

  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "Best Value",
  },
};
