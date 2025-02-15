import Image from "next/image";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const dateDisplay = experience.startYear === "Summer" 
    ? `${experience.startYear} ${experience.endYear}`
    : `${experience.startYear}—${experience.endYear}`;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {experience.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative flex items-center justify-center">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src={experience.imageUrl}
              alt={experience.company}
              fill
              className="object-contain rounded-lg transition-all duration-300"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          <p className="text-xs text-zinc-500">
            {dateDisplay}
          </p>
        </div>
        <h3 className="font-serif text-md mb-3">{experience.company}</h3>
        <p className="text-sm text-zinc-600 mb-4">{experience.title}</p>
        {experience.description && (
          <p className="text-sm text-zinc-600 mb-2">{experience.description}</p>
        )}
        {experience.manager && (
          <p className="text-sm italic text-zinc-600">Manager: {experience.manager}</p>
        )}
      </div>
    </div>
  );
}
