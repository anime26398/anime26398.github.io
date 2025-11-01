import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Software } from "@/data/software";

export function SoftwareEntry({ software }: { software: Software }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {software.videoUrl ? (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
          >
            <source src={software.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        software.imageUrl && (
          <div className="w-full sm:w-1/4 min-w-[160px] relative">
            <Image
              src={software.imageUrl}
              alt={software.title}
              width={160}
              height={200}
              className="rounded-lg transition-all duration-300"
            />
          </div>
        )
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">{software.title}</h3>
        <p className="text-sm text-zinc-600 mb-4">{software.description}</p>
        <div className="flex flex-wrap items-center gap-4">
          {software.githubUrl && (
            <a
              href={software.githubUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">GitHub</span>
            </a>
          )}
          {software.websiteUrl && (
            <a
              href={software.websiteUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Website</span>
            </a>
          )}
          {software.demoUrl && (
            <a
              href={software.demoUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Demo</span>
            </a>
          )}
          {software.icons?.length ? (
            <div className="flex items-center gap-2">
              {software.icons.map((icon, index) => (
                <Image
                  key={`${software.title}-${index}`}
                  src={icon.src}
                  alt={icon.alt ?? `${software.title} icon ${index + 1}`}
                  width={icon.width ?? 40}
                  height={icon.height ?? 40}
                  className="w-10 h-10 object-contain drop-shadow-sm"
                />
              ))}
            </div>
          ) : null}
        </div>
        {software.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {software.tldr}
          </p>
        )}
      </div>
    </div>
  );
} 