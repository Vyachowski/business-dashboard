import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const DataAddition = () => {
  return (
    <>
      <Breadcrumb pageName="Data addition" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Income Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Income entry
              </h3>
            </div>
            <form action="#">
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
                  />
                </div>

                <div className="mb-4.5">
                  <label
                      className="mb-2.5 block text-black dark:text-white"
                      htmlFor="data_addition-income-sum"
                  >
                    Enter income sum
                  </label>
                  <input
                    type="text"
                    placeholder="180 000"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    id="data_addition-income-sum"
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
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Business metrics entry
              </h3>
            </div>
            <form action="#">
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
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <legend className="mb-2.5">Lead cost goals</legend>
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
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <legend className="mb-2.5">Lead amount goals</legend>
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
