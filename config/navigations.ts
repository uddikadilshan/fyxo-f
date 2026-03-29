import {
  IconCash,
  IconCategoryFilled,
  IconDashboard,
  IconGardenCart,
  IconHelp,
  IconListSearch,
  IconReceipt,
  IconRulerMeasure,
  IconSettings,
} from "@tabler/icons-react"

export const navigationData = {
  user: { name: "FyXo", email: "m@example.com", avatar: "/avatars/shadcn.png" },
  navMain: [
    { title: "Dashboard", url: "/main/dashboard", icon: IconDashboard },
  ],
  navSecondary: [
    { title: "Configurations", url: "#", icon: IconSettings },
    { title: "Get Help", url: "#", icon: IconHelp },
  ],
  documents: [
    {
      group: "Product",
      items: [
        { name: "Product", url: "/main/product/register", icon: IconGardenCart },
        { name: "Product List", url: "/main/product", icon: IconListSearch },
        { name: "Product Category 1", url: "/main/product/cat-1", icon: IconCategoryFilled },
        { name: "Product Category 2", url: "/main/product/cat-2", icon: IconCategoryFilled },
        { name: "Product Category 3", url: "/main/product/cat-3", icon: IconCategoryFilled },
        { name: "Product Measurement Units", url: "/main/product/measurement-units", icon: IconRulerMeasure },
      ],
    },
    {
      group: "Sales",
      items: [
        { name: "Invoice", url: "/main/sales/invoice", icon: IconReceipt },
        { name: "Payments", url: "/main/sales/payments", icon: IconCash },
      ],
    },
  ],
}
