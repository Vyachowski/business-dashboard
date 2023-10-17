import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {useState} from "react";
import axios from "axios";
// import start from "../../components/Start.tsx";

const DataAddition = () => {
  const [revenueState, setRevenueState] = useState({
    startDate: "2022-02-12",
    endDate: "2023-02-12",
    revenuePerPeriod: 100000,
  })

  const [businessMetricsState, setBusinessMetricsState] = useState({
    totalRevenueGoal: 300000,
    ppcRevenueGoal: 150000,
    seoRevenueGoal: 150000,
    totalLeadCostGoal: 275,
    ppcLeadCostGoal: 400,
    seoLeadCostGoal: 150,
    totalLeadAmountGoal: 500,
    ppcLeadAmountGoal: 250,
    seoLeadAmountGoal: 250,
  })
  const handleRevenueInputChange = (e: { target: { name: any; value: any; }; }) => {
    const {name, value} = e.target;
    setRevenueState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBusinessMetricsInputChange = (e: { target: { name: any; value: any; }; }) => {
    const {name, value} = e.target;
    setBusinessMetricsState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRevenueAdditionForm = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const startDate = formData.get('startDate');
    const endDate = formData.get('endDate');
    const revenuePerPeriod = formData.get('revenuePerPeriod');

    try {
      const response = await axios.post(
        'http://localhost:3011/api/revenue/',
        {
          startDate,
          endDate,
          revenuePerPeriod,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        console.log('Revenue data was successfully added')
      }
    } catch (error) {
      console.error('Sorry, there was an error during revenue data addition:', error);
    }
  }
  const handleBusinessMetricsForm = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const totalRevenueGoal = formData.get('totalRevenueGoal');
    const ppcRevenueGoal = formData.get('ppcRevenueGoal');
    const seoRevenueGoal = formData.get('seoRevenueGoal');
    const totalLeadCostGoal = formData.get('totalLeadCostGoal');
    const ppcLeadCostGoal = formData.get('ppcLeadCostGoal');
    const seoLeadCostGoal = formData.get('seoLeadCostGoal');
    const totalLeadAmountGoal = formData.get('totalLeadAmountGoal');
    const ppcLeadAmountGoal = formData.get('ppcLeadAmountGoal');
    const seoLeadAmountGoal = formData.get('seoLeadAmountGoal');

    try {
      const response = await axios.post(
        'http://localhost:3011/api/user/business-metrics/',
        {
          totalRevenueGoal,
          ppcRevenueGoal,
          seoRevenueGoal,
          totalLeadCostGoal,
          ppcLeadCostGoal,
          seoLeadCostGoal,
          totalLeadAmountGoal,
          ppcLeadAmountGoal,
          seoLeadAmountGoal,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        console.log('Business metrics data was successfully added')
      }
      console.log(
        totalRevenueGoal,
        ppcRevenueGoal,
        seoRevenueGoal,
        totalLeadCostGoal,
        ppcLeadCostGoal,
        seoLeadCostGoal,
        totalLeadAmountGoal,
        ppcLeadAmountGoal,
        seoLeadAmountGoal,
      );
    } catch (error) {
      console.error('Sorry, there was an error during business metrics data addition:', error);
    }
  }

  return (
    <>
      <Breadcrumb pageName="Data addition"/>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Revenue Form --> */}
          <div
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Revenue entry
              </h3>
            </div>
            <form name="incomeForm" onSubmit={handleRevenueAdditionForm}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label
                    className="mb-2.5 block text-black dark:text-white"
                    htmlFor="data_addition-start-date"
                  >
                    Enter start date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="data_addition-start-date"
                    value={revenueState.startDate}
                    onChange={handleRevenueInputChange}
                    name="startDate"
                  />
                </div>
                <div className="mb-4.5">
                  <label
                    className="mb-2.5 block text-black dark:text-white"
                    htmlFor="data_addition-end-date"
                  >
                    Enter end date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="data_addition-end-date"
                    value={revenueState.endDate}
                    onChange={handleRevenueInputChange}
                    name="endDate"
                  />
                </div>

                <div className="mb-4.5">
                  <label
                    className="mb-2.5 block text-black dark:text-white"
                    htmlFor="data_addition-income-sum"
                  >
                    Enter revenue sum
                  </label>
                  <input
                    type="text"
                    placeholder="180 000"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="data_addition-income-sum"
                    value={revenueState.revenuePerPeriod}
                    onChange={handleRevenueInputChange}
                    name="revenuePerPeriod"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Save income data
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- Business metrics Form --> */}
          <div
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Business metrics entry
              </h3>
            </div>
            <form name="businessMetricsForm" onSubmit={handleBusinessMetricsForm}>
              <div className="p-6.5">
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <legend className="mb-2.5">Revenue amount goals</legend>
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-revenue-total"
                      >
                        Total
                      </label>
                      <input
                        type="number"
                        placeholder="300 000"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-revenue-total"
                        value={businessMetricsState.totalRevenueGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="totalRevenueGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-revenue-ppc"
                      >
                        From PPC
                      </label>
                      <input
                        type="number"
                        placeholder="150 000"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-revenue-ppc"
                        value={businessMetricsState.ppcRevenueGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="ppcRevenueGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-revenue-seo"
                      >
                        From SEO
                      </label>
                      <input
                        type="number"
                        placeholder="150 000"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-revenue-seo"
                        value={businessMetricsState.seoRevenueGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="seoRevenueGoal"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  {/* All goals are set for the year */}
                  <legend className="mb-2.5">Lead cost goals</legend>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-cost-total"
                      >
                        Total
                      </label>
                      <input
                        type="number"
                        placeholder="275"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-cost-total"
                        value={businessMetricsState.totalLeadCostGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="totalLeadCostGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-cost-ppc"
                      >
                        From PPC
                      </label>
                      <input
                        type="number"
                        placeholder="400"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-cost-ppc"
                        value={businessMetricsState.ppcLeadCostGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="ppcLeadCostGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-cost-seo"
                      >
                        From SEO
                      </label>
                      <input
                        type="number"
                        placeholder="150"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-cost-seo"
                        value={businessMetricsState.seoLeadCostGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="seoLeadCostGoal"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  {/* All goals are set for the year */}
                  <legend className="mb-2.5">Lead amount goals</legend>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-amount-total"
                      >
                        Total
                      </label>
                      <input
                        type="number"
                        placeholder="500"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-amount-total"
                        value={businessMetricsState.totalLeadAmountGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="totalLeadAmountGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-amount-ppc"
                      >
                        From PPC
                      </label>
                      <input
                        type="number"
                        placeholder="250"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-amount-ppc"
                        value={businessMetricsState.ppcLeadAmountGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="ppcLeadAmountGoal"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor="data_addition-lead-amount-seo"
                      >
                        From SEO
                      </label>
                      <input
                        type="number"
                        placeholder="250"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        id="data_addition-lead-amount-seo"
                        value={businessMetricsState.seoLeadAmountGoal}
                        onChange={handleBusinessMetricsInputChange}
                        name="seoLeadAmountGoal"
                      />
                    </div>
                  </div>
                </fieldset>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Save business goals
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAddition;
