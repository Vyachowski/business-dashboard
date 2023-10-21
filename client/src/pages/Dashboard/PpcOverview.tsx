import React from 'react';
import PpcRevenueOverview from "../../components/Charts/PpcRevenueOverview.tsx";
import PpcRevenueStatsGroup from "../../components/DataStats/PpcRevenueStatsGroup.tsx";
import PpcOverviewKeyMetrics from "../../components/DataStats/PpcOverviewKeyMetrics.tsx";
import PpcOverviewRevenueTrend from "../../components/Charts/PpcOverviewRevenueTrend.tsx";
import PpcOverviewLeadsTrend from "../../components/Charts/PpcOverviewLeadsTrend.tsx";


const PpcOverview: React.FC = () => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Goal’s Overview
          </h2>
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <PpcRevenueOverview />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <PpcRevenueStatsGroup />
        </div>

      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Key Metrics
          </h2>
        </div>
        <div className="col-span-12">
          <PpcOverviewKeyMetrics />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Revenue trend
          </h2>
        </div>
        <div className="col-span-12">
          <PpcOverviewRevenueTrend />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Leads trend
          </h2>
        </div>
        <div className="col-span-12">
          <PpcOverviewLeadsTrend />
        </div>
      </div>
    </>
  );
};

export default PpcOverview;
