import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

const AboutSectionSkeleton = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Skeleton para AboutSectionInfo */}
          <div className="col-span-1">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-8 w-full mb-4" />
            <Skeleton className="h-6 w-48" />
          </div>

          {/* Skeleton para AboutSectionCard */}
          <div className="col-span-2 grid md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-4">
                <Skeleton className="h-12 w-full rounded-lg mb-2" />
                <Skeleton className="h-6 w-2/3 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionSkeleton;
