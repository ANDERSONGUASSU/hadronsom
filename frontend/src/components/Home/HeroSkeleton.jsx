import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

const HeroSkeleton = () => {
  return (
    <div className="hero w-svw min-h-screen bg-gray-200">
      <div className="hero-overlay bg-gradient-to-b from-transparent to-primary-content opacity-100"></div>
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <Skeleton className="max-w-lg h-12 mb-4" />
          <Skeleton className="max-w-xl h-10 mb-4" />
          <Skeleton className="max-w-sm h-8" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
