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
    version: "1.0.0",
    list: ["Initial release"],
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
      url: "https://bblockswp.com/demo/default-template/",
    },
    {
      icon: "",
      title: "Masonry Grid",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-1-masonry-grid/",
    },
    {
      icon: "",
      title: "Card Hover",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-2-card-hover/",
    },

    {
      icon: "",
      title: "Split Screen",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-3-split-screen/",
    },
    {
      icon: "",
      title: "Slider",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-4-slider/",
    },
    {
      icon: "",
      title: "Minimal List",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-5-minimal-list/",
    },
    {
      icon: "",
      title: "Stacked Cards",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/template-6-stacked-cards/",
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
