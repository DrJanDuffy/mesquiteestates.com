"use client";

import React from "react";
import Link from "next/link";

export default function RealEstateShowcase() {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-32 ">
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900">
          Mesquite Homes for Sale
        </h2>
        <Link
          href="/Mesquite_Homes_For_Sale"
          className="bg-indigo-900 content-center justify-center text-white px-4 py-2 sm:px-1 sm:py-2 text-sm sm:text-base rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 lg:px-4"
        >
          View All Mesquite Listings →
        </Link>
      </div>
      <div className="w-full">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="NEWEST" 
          listing-status="For Sale" 
          property-types=",SFR,OTHER,MOBILE"
        ></realscout-office-listings>
      </div>
    </div>
  );
}
