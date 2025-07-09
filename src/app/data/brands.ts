export interface Brand {
  name: string;
  logo?: string;
}

export interface SubCategory {
  title: string;
  brands: Brand[];
}

export interface BrandCategory {
  title: string;
  brands: Brand[];
  subCategories?: SubCategory[];
}

export const brandCategories: BrandCategory[] = [
  {
    title: "Sports Nutrition & Supplements",
    brands: [
      { name: "MyProtein", logo: "/brand-logos/MyProtein-logo.png" },
      { name: "Optimum Nutrition", logo: "/brand-logos/Optimum_Nutrition-logo.png" },
      { name: "Grenade", logo: "/brand-logos/Grenade-logo.png" },
      { name: "Applied Nutrition", logo: "/brand-logos/Applied_Nutrition-logo.png" },
      { name: "Per4m", logo: "/brand-logos/Per4m-logo.png" },
      { name: "C4", logo: "/brand-logos/C4-logo.png" },
      { name: "JNX", logo: "/brand-logos/JNX-logo.png" },
      { name: "Science in Sport", logo: "/brand-logos/Science_in_Sport-logo.png" },
    ],
  },
  {
    title: "Health, Vitamins & Wellness",
    brands: [
      { name: "A.Vogel", logo: "/brand-logos/A.Vogel-logo.png" },
      { name: "Symprove", logo: "/brand-logos/Symprove-logo.png" },
      { name: "Swedish Nutra", logo: "/brand-logos/swedish-nutra-logo.png" },
      { name: "Brita", logo: "/brand-logos/Brita-logo.png" },
      { name: "GlucoRx", logo: "/brand-logos/GlucoRx-logo.png" },
    ],
  },
  {
    title: "Food Cupboard & Groceries",
    brands: [],
    subCategories: [
      {
        title: "Pantry Staples & Baking",
        brands: [
          { name: "Doves Farm", logo: "/brand-logos/Doves_Farm-logo.png" },
          { name: "John West", logo: "/brand-logos/John_West-logo.png" },
          { name: "Kraft", logo: "/brand-logos/Kraft-logo.png" },
          { name: "Heinz", logo: "/brand-logos/Heinz-logo.png" },
          { name: "Nestle", logo: "/brand-logos/Nestle-logo.png" },
        ],
      },
      {
        title: "Sauces, Spices & Condiments",
        brands: [
          { name: "Geetas", logo: "/brand-logos/Geetas-logo.png" },
          { name: "Flying Goose", logo: "/brand-logos/Flying_Goose-logo.png" },
          { name: "Tabasco", logo: "/brand-logos/Tabasco-logo.png" },
          { name: "Frank's Hot Sauce", logo: "/brand-logos/Franks_Hot_Sauce-logo.png" },
          { name: "Kewpie", logo: "/brand-logos/Kewpie-logo.png" },
          { name: "Tajin", logo: "/brand-logos/Tajin-logo.png" },
          { name: "Chik-Fil-A Sauce", logo: "/brand-logos/Chik-Fil-A_sauce-logo.png" },
        ],
      },
      {
        title: "Jams & Spreads",
        brands: [
          { name: "Tiptree", logo: "/brand-logos/Tiptree-logo.png" },
          { name: "Fluff", logo: "/brand-logos/Fluff-logo.png" },
        ],
      },
    ],
  },
  {
    title: "Snacks & Confectionery",
    brands: [
      { name: "Cheetos", logo: "/brand-logos/Cheetos-logo.png" },
      { name: "Takis", logo: "/brand-logos/Takis-logo.png" },
      { name: "Samyang", logo: "/brand-logos/Samyang-logo.png" },
      { name: "Nongshim", logo: "/brand-logos/Nongshim-logo.png" },
      { name: "Lindt", logo: "/brand-logos/Lindt-logo.png" },
      { name: "Sweetzone", logo: "/brand-logos/sweetzone-logo.png" },
      { name: "Milky Way", logo: "/brand-logos/Milky_Way-logo.png" },
      { name: "Nerds", logo: "/brand-logos/Nerds-logo.png" },
      { name: "Pepperidge Farm", logo: "/brand-logos/Pepperidge_Farm-logo.png" },
      { name: "Lucky Charms", logo: "/brand-logos/Lucky_Charms-logo.png" },
    ],
  },
  {
    title: "Tea, Coffee & Drinks",
    brands: [
      { name: "Kenco", logo: "/brand-logos/Kenco-logo.png" },
      { name: "Beanies", logo: "/brand-logos/Beanies-logo.png" },
      { name: "Prime", logo: "/brand-logos/Prime-logo.png" },
    ],
  },
  {
    title: "Beauty & Personal Care",
    brands: [
      { name: "L'Oreal", logo: "/brand-logos/Loreal-logo.png" },
      { name: "Schwarzkopf", logo: "/brand-logos/Schwarzkopf-logo.png" },
      { name: "Rimmel", logo: "/brand-logos/Rimmel-logo.png" },
      { name: "Palmer's", logo: "/brand-logos/Palmers-logo.png" },
      { name: "Malibu", logo: "/brand-logos/Malibu-logo.png" },
    ],
  },
  {
    title: "Household & Cleaning",
    brands: [
      { name: "Airwick", logo: "/brand-logos/Airwick-logo.png" },
      { name: "Dishmatic", logo: "/brand-logos/Dishmatic-logo.png" },
      { name: "Raid", logo: "/brand-logos/Raid-logo.png" },
      { name: "Dettol", logo: "/brand-logos/Dettol-logo.png" },
      { name: "Doff Slug", logo: "/brand-logos/Doff_Slug-logo.png" },
      { name: "Dylon", logo: "/brand-logos/Dylon-logo.png" },
    ],
  },
  {
    title: "World Foods",
    brands: [
      { name: "Natco", logo: "/brand-logos/natco-logo.png" },
      { name: "Korea Foods", logo: "/brand-logos/korea-foods-logo.png" },
      { name: "Geetas", logo: "/brand-logos/Geetas-logo.png" },
      { name: "Samyang", logo: "/brand-logos/Samyang-logo.png" },
      { name: "Nongshim", logo: "/brand-logos/Nongshim-logo.png" },
      { name: "Kewpie", logo: "/brand-logos/Kewpie-logo.png" },
      { name: "Takis", logo: "/brand-logos/Takis-logo.png" },
      { name: "Tajin", logo: "/brand-logos/Tajin-logo.png" },
    ],
  },
  {
    title: "Other",
    brands: [
      { name: "Newport", logo: "/brand-logos/Newport-logo.png" },
    ],
  },
]; 