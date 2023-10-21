import React from 'react';
import SeoRevenueOverview from "../../components/Charts/SeoRevenueOverview.tsx";
import SeoRevenueStatsGroup from "../../components/DataStats/SeoRevenueStatsGroup.tsx";
import SeoOverviewKeyMetrics from "../../components/DataStats/SeoOverviewKeyMetrics.tsx";
import SeoOverviewRevenueTrend from "../../components/Charts/SeoOverviewRevenueTrend.tsx";
import SeoOverviewLeadsTrend from "../../components/Charts/SeoOverviewLeadsTrend.tsx";


const SeoOverview: React.FC = () => {
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
          <SeoRevenueOverview />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <SeoRevenueStatsGroup />
        </div>

      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Key Metrics
          </h2>
        </div>
        <div className="col-span-12">
          <SeoOverviewKeyMetrics />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Revenue trend
          </h2>
        </div>
        <div className="col-span-12">
          <SeoOverviewRevenueTrend />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Leads trend
          </h2>
        </div>
        <div className="col-span-12">
          <SeoOverviewLeadsTrend />
        </div>
      </div>
    </>
  );
};

export default SeoOverview;
