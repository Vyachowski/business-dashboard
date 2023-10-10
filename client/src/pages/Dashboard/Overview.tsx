import React from 'react';
import ChartSeven from '../../components/Charts/ChartSeven';
import DataStatsOne from "../../components/DataStats/DataStatsOne.tsx";
import DataStats from "../../components/DataStats/DataStats.tsx";
import ChartFour from "../../components/Charts/ChartFour.tsx";


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
          <ChartSeven />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <DataStatsOne />
        </div>

      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Key Metrics
          </h2>
        </div>
        <div className="col-span-12">
          <DataStats />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Revenue trend
          </h2>
        </div>
        <div className="col-span-12">
          <ChartFour />
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Leads trend
          </h2>
        </div>
        <div className="col-span-12">
          <ChartFour />
        </div>
      </div>
    </>
  );
};

export default Overview;
