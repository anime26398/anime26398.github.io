import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {education.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative flex items-center justify-center">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src={education.imageUrl}
              alt={education.institution}
              fill
              className="object-contain rounded-lg transition-all duration-300"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-2">
          <p className="text-xs text-zinc-500">
            {education.startYear}—{education.endYear}
          </p>
        </div>
        <h3 className="font-serif text-md mb-3">{education.institution}</h3>
        <p className="text-sm text-zinc-600 mb-4">{education.degree}</p>
        {education.advisor && (
          <p className="text-sm italic text-zinc-600">{education.advisor}</p>
        )}
      </div>
    </div>
  );
}
