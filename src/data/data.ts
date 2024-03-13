import {
  CalendarIcon,
  ShareIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

export interface Iservice {
  id: number;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  quantity: number;
  price: number;
  recurring: boolean;
}

export const services: Array<Iservice> = [
  {
    id: 1,
    icon: CalendarIcon,
    title: "Website Design",
    description: "A fully custom 4 page website.Includes 2 edit rounds ",
    quantity: 1,
    price: 958,
    recurring: false,
  },
  {
    id: 2,
    icon: ShareIcon,
    title: "Web",
    description: "Content creation & posting for 3 social media platforms ",
    quantity: 2,
    price: 200,
    recurring: true,
  },
  {
    id: 3,
    icon: CloudArrowUpIcon,
    title: "Social Media",
    description:
      "Complete web hosting with 99.9% uptime. Includes plugin updates ",
    quantity: 1,

    price: 99,
    recurring: true,
  },
];
