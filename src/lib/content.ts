/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */
import { mockupLanding, mockupMaps, mockupModify, mockupPremium } from "@/assets";

const Content = {
  NavItems: [
    {
      name: "Purchase",
      href: "/purchase",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Terms of Service",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
  ],
  CarouselImages: [mockupLanding, mockupMaps, mockupModify, mockupPremium],
};

export default Content;
