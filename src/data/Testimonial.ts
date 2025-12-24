import type{ LucideIcon } from "lucide-react";

export type Testimonials = {
  name: string;
  message: string; 
  icon: LucideIcon
}

import {
  Globe,
  HelpingHand,
  HeartHandshake,
  Bug
} from "lucide-react";

export const testimonials: Testimonials[] = [
  {
    name: "UNICEF Field Office",
    message:
      "Junide Car Hire consistently provides well-maintained vehicles with prompt response times. Their professionalism and reliability make them a trusted partner for our field operations.",
      icon: Globe
  },
  {
    name: "Oxfam Nigeria",
    message:
      "Their car hire service is efficient and dependable. Requests are handled quickly, and the vehicles provided are always in excellent condition.",
      icon: HelpingHand
  },
  {
    name: "Save the Children International",
    message:
      "Junide Car hire delivers quality vehicles on time and responds swiftly to our transportation needs. Their service has greatly supported our project activities.",
      icon: HeartHandshake
  },
  {
    name: "Malaria Consortium",
    message:
      "We rely on Junide Car Hire for timely and reliable vehicle hire. Their quick turnaround and well-serviced cars have been invaluable to our operations.",
      icon: Bug
  },

];
