import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "CalDav Server",
  description: _package.description,
  installed: true,
  type: "caldav_calendar",
  title: "CalDav Server",
  imageSrc: "/api/app-store/caldavcalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  logo: "/api/app-store/caldavcalendar/icon.svg",
  publisher: "vicino•ical",
  rating: 5,
  reviews: 69,
  slug: "caldav-calendar",
  trending: false,
  url: "https://ical.vicinocard.com/",
  verified: true,
  email: "help@cal.com",
} as App;

export * as api from "./api";
export * as components from "./components";
export * as lib from "./lib";
