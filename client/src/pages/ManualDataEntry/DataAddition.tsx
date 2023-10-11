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
                  <label className="mb-2.5 block text-black dark:text-white">
                    Enter start date
                  </label>
                  <input
                      type="date"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Enter end date
                  </label>
                  <input
                      type="date"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Enter income sum
                  </label>
                  <input
                    type="text"
                    placeholder="180 000"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                    <legend className="mb-2.5">Revenue amount</legend>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Total revenue Target
                      </label>
                      <input
                          type="number"
                          placeholder="300 000"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Revenue Target from PPC
                      </label>
                      <input
                          type="number"
                          placeholder="150 000"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Revenue Target from SEO
                      </label>
                      <input
                          type="number"
                          placeholder="150 000"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <legend className="mb-2.5">Lead cost</legend>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Total Lead Cost Target
                      </label>
                      <input
                          type="number"
                          placeholder="275"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Lead Cost Target from PPC
                      </label>
                      <input
                          type="number"
                          placeholder="400"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Lead Cost Target from SEO
                      </label>
                      <input
                          type="number"
                          placeholder="150"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-1">
                    <legend className="mb-2.5">Lead amount</legend>
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Total Lead Amount Target
                      </label>
                      <input
                          type="number"
                          placeholder="500"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Lead Amount Target from PPC
                      </label>
                      <input
                          type="number"
                          placeholder="250"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Lead Amount Target from SEO
                      </label>
                      <input
                          type="number"
                          placeholder="250"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </fieldset>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Save business Targets
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
