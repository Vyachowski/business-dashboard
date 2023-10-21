import React from 'react';
import RevenueOverview from "../../components/Charts/RevenueOverview.tsx";
import RevenueStatsGroup from "../../components/DataStats/RevenueStatsGroup.tsx";
import OverviewKeyMetrics from "../../components/DataStats/OverviewKeyMetrics.tsx";
import OverviewRevenueTrend from "../../components/Charts/OverviewRevenueTrend.tsx";
import OverviewLeadsTrend from "../../components/Charts/OverviewLeadsTrend.tsx";


const Overview: React.FC = () => {
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
          <RevenueOverview />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <RevenueStatsGroup />
        </div>

      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Key Metrics
          </h2>
        </div>
        <div className="col-span-12">
          <OverviewKeyMetrics />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Revenue trend
          </h2>
        </div>
        <div className="col-span-12">
          <OverviewRevenueTrend />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Leads trend
          </h2>
        </div>
        <div className="col-span-12">
          <OverviewLeadsTrend />
        </div>
      </div>
    </>
  );
};

export default Overview;
