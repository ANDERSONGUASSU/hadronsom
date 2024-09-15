import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

const CorporativeSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Skeleton para cada card */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-100">
            <Skeleton className="h-12 w-full rounded-lg mb-2" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        ))}
      </div>

      {/* Skeleton para a seção da Timeline */}
      <div className="mt-8">
        <Skeleton className="h-8 w-full rounded-lg mb-2" />
        <Skeleton className="h-6 w-2/3 rounded-lg" />
      </div>

      {/* Skeleton para a seção do Time */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-100">
            <Skeleton className="h-12 w-full rounded-lg mb-2" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporativeSkeleton;
