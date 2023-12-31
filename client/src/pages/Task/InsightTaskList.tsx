import React, {useEffect, useState} from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb.js';
import DropdownDefault from '../../components/Dropdowns/DropdownDefault.js';
import InsightsHeader from "../../components/InsightsHeader.tsx";
import TaskHeader from '../../components/TaskHeader';
import Drag from '../../js/drag.js';
import axios from "axios";

const InsightTaskList: React.FC = () => {
  const [insights, setInsights] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Drag();

    axios.get('http://localhost:3011/api/activities/insights/', {
      withCredentials: true
    })
      .then(response => {
        setInsights(response.data.insightsList);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
    axios.get('http://localhost:3011/api/activities/tasks/', {
      withCredentials: true
    })
      .then(response => {
        setTasks(response.data.tasksList);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleInsightDeletion = (insightId: any) => {
    axios.delete(`http://localhost:3011/api/activities/insights/${insightId}`, {
      withCredentials: true
    })
      .then(() => {
        setInsights(insights.filter(insight => insight.id !== insightId));
      })
      .catch(error => {
        console.error('Error deleting insight:', error);
      });
  };

  const handleTaskDeletion = (taskId: any) => {
    axios.delete(`http://localhost:3011/api/activities/tasks/${taskId}`, {
      withCredentials: true
    })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="Task & Insights"/>

        {/* <!-- Insight Header Start --> */}
        <InsightsHeader/>
        {/* <!-- Insight Header End --> */}

        {/* <!-- Task List Wrapper Start --> */}
        <div className="mt-9 flex flex-col gap-9">
          {/* <!-- Insights list --> */}
          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="hidden text-xl font-semibold text-black dark:text-white">
              Insights
            </h4>

            <div
              draggable="true"
              className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <div>
                <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                  Insights list
                </h5>

                <div className="flex flex-col gap-2">
                  {insights.map(insight => (
                    <label htmlFor={`insightCheckbox${insight.id}`} key={insight.id} className="cursor-pointer">
                      <div className="relative flex items-center pt-0.5">
                        <input
                          type="checkbox"
                          id={`insightCheckbox${insight.id}`}
                          className="taskCheckbox sr-only"
                          onChange={() => handleInsightDeletion(insight.id)}
                        />
                        <div
                          className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                            <span className="text-white opacity-0">
                              <svg
                                className="fill-current"
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                                  fill=""
                                />
                              </svg>
                            </span>
                        </div>
                        <p>{insight.value}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="absolute right-4 top-4">
                <DropdownDefault/>
              </div>
            </div>

          </div>

        </div>
        {/* <!-- Task List Wrapper End --> */}

        {/* <!-- Task Header Start --> */}
        <TaskHeader/>
        {/* <!-- Task Header End --> */}

        {/* <!-- Task List Wrapper Start --> */}
        <div className="mt-9 flex flex-col gap-9">

          {/* <!-- Todo list --> */}
          <div className="swim-lane flex flex-col gap-5.5">

            <div
              draggable="true"
              className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <div>
                <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                  Task list
                </h5>

                <div className="flex flex-col gap-2">
                  {/* A list of tasks */}
                  {tasks.map(task => (
                    <label htmlFor={`insightCheckbox${task.id}`} key={task.id} className="cursor-pointer">
                      <div className="relative flex items-center pt-0.5">
                        <input
                          type="checkbox"
                          id={`insightCheckbox${task.id}`}
                          className="taskCheckbox sr-only"
                          onChange={() => handleTaskDeletion(task.id)}
                        />
                        <div
                          className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                            <span className="text-white opacity-0">
                              <svg
                                className="fill-current"
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                                  fill=""
                                />
                              </svg>
                            </span>
                        </div>
                        <p>{task.value}</p>
                      </div>
                    </label>
                  ))}
                </div>

              </div>

              <div className="absolute right-4 top-4">
                <DropdownDefault/>
              </div>
            </div>

          </div>

        </div>
        {/* <!-- Task List Wrapper End --> */}
      </div>
    </>
  );
};

export default InsightTaskList;
