import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Zapier",
  description: _package.description,
  installed: true,
  category: "other",
  imageSrc: "/api/app-store/zapier/icon.svg",
  logo: "/api/app-store/zapier/icon.svg",
  publisher: "vicino•ical",
  rating: 0,
  reviews: 0,
  slug: "zapier",
  title: "Zapier",
  trending: true,
  type: "zapier_other",
  url: "https://ical.vicinocard.com/apps/zapier",
  variant: "other",
  verified: true,
  email: "help@cal.com",
} as App;

export default metadata;
