
import {
  HeartPulse,
  PackageSearch,
  Globe,
  Leaf,
  HeartHandshake,
  Stethoscope,
  Bug,
  Building,
  HelpingHand,
  ShieldCheck,
  Microscope,
  Church,
  Hotel,
  Hospital,
  Baby,
  User
} from "lucide-react";

const clients = [
  { name: "Integrated Health Project (Palladium Group)", icon: HeartPulse },
  { name: "Global Health Supply Chain Program (GHSC-PSM)", icon: PackageSearch },
  { name: "UNICEF Sokoto/Kebbi State Field Office", icon: Globe },
  { name: "Spring Project, John Snow Incorporated (JSI)", icon: Leaf },
  { name: "Health Communication Capacity Collaborative (HC3) Project", icon: Hospital},
  { name: "Association for Reproductive and Family Health (ARFH)", icon: HeartHandshake },
  { name: "Management Sciences for Health (MSH)", icon: Stethoscope },
  { name: "Save the Children International (SCI)", icon: Baby },
  { name: "Malaria Consortium (MC)", icon: Bug },
  { name: "ABT Associate", icon: Building },
  { name: "Oxfam Nigeria", icon: HelpingHand },
  { name: "Department of Defence Walter Reeds Program (Nigeria)", icon: ShieldCheck },
  { name: "HJF Medical Research", icon: Microscope },
  { name: "Catholic Relief Services (CRS)", icon: Church },
  { name: "Safar Hotel", icon: Hotel },
  { name: "Individuals", icon: User }
];

const ClientCards = () => {

  return (
<div className="overflow-hidden py-4 px-2 scroll-smooth">
      <div className="flex animate-scroll gap-8 w-max">
        {clients.map((client, index) => {
          const Icon = client.icon || User;

          return (
            <div
              key={index}
              className="text-center w-64 p-4 border rounded-xl shadow hover:shadow-lg transition flex flex-col items-center gap-3 bg-white"
            >
              <Icon className="w-7 h-7 text-brand-accent" />
              <p className="text-brand-text text-sm font-semibold">
                {client.name}
              </p>
            </div>
          );
        })}
      </div>
</div>

  );
}

export default ClientCards;
