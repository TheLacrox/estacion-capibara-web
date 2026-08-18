"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/cn";

export interface ShowcaseImage {
  src: string;
  alt: string;
  caption: string;
}

interface MediaShowcaseProps {
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  images: ShowcaseImage[];
  accentVar: string;
  /** Put the photos on the left instead of the right */
  reverse?: boolean;
}

function ShowcasePhoto({
  image,
  accentVar,
  tall = false,
}: {
  image: ShowcaseImage;
  accentVar: string;
  tall?: boolean;
}) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-sm border border-grid-line bg-space-void/60",
        tall ? "row-span-2" : ""
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-space-void/95 via-space-void/50 to-transparent pt-8 pb-2 px-3">
        <figcaption
          className="font-mono text-[11px] uppercase tracking-widest"
          style={{ color: accentVar }}
        >
          {image.caption}
        </figcaption>
      </div>
    </figure>
  );
}

export function MediaShowcase({
  eyebrow,
  title,
  paragraphs,
  images,
  accentVar,
  reverse = false,
}: MediaShowcaseProps) {
  const [first, ...rest] = images;

  return (
    <section className="relative py-20 sm:py-28 bg-space-void overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center",
            reverse && "lg:[direction:rtl]"
          )}
        >
          <FadeInView
            direction={reverse ? "right" : "left"}
            className="lg:[direction:ltr]"
          >
            <p
              className="font-mono text-sm tracking-widest uppercase mb-4"
              style={{ color: accentVar }}
            >
              {eyebrow}
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div
              className="mt-8 h-0.5 w-24 rounded-full"
              style={{ backgroundColor: accentVar }}
            />
          </FadeInView>

          <FadeInView
            direction={reverse ? "left" : "right"}
            className="lg:[direction:ltr]"
          >
            <div className="grid grid-cols-2 gap-3 auto-rows-[10rem] sm:auto-rows-[12rem]">
              {first && (
                <ShowcasePhoto image={first} accentVar={accentVar} tall />
              )}
              {rest.slice(0, 2).map((image) => (
                <ShowcasePhoto key={image.src} image={image} accentVar={accentVar} />
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
