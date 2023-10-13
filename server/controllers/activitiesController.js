import Activity from '../models/activityModel.js';

async function getInsights(req, res) {
  let insightsList;
  let currentUserId = req.user.id;

  try {
    insightsList = await Activity.findAll({
        where: {
          userId: currentUserId,
          type: 'insight',
        }
      }
    );
    res.status(200).json({ insightsList });
  } catch (error) {
      console.log(error);
  }
}

async function postInsight(req, res) {
  const insightValue = req.insightValue;
  const currentUserId = req.user.id;

  try {
    Activity.create({
      userId: currentUserId,
      type: 'insight',
      value: insightValue,
      }
    );
    res.status(200).json({ message: "Insight successfully added." });
  } catch (error) {
    console.log(error);
  }
}

async function deleteInsight(req, res) {
  const insightId = req.insightId;

  try {
    Activity.delete({
        id: insightId,
      }
    );
    res.status(200).json({ message: 'Insight successfully deleted.' });
  } catch (error) {
    console.log(error);
  }
}

async function getTasks(req, res) {
  let tasksList;
  let currentUserId = req.user.id;

  try {
    tasksList = await Activity.findAll({
        where: {
          userId: currentUserId,
          type: 'task',
        }
      }
    );
    res.status(200).json({ tasksList });
  } catch (error) {
    console.log(error);
  }
}

async function postTask(req, res) {
  const taskValue = req.taskValue;
  const currentUserId = req.user.id;

  try {
    Activity.create({
        userId: currentUserId,
        type: 'task',
        value: taskValue,
      }
    );
    res.status(200).json({ message: "Task successfully added." });
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask(req, res) {
  const taskId = req.taskId;

  try {
    Activity.delete({
        id: taskId,
      }
    );
    res.status(200).json({ message: 'Task successfully deleted.' });
  } catch (error) {
    console.log(error);
  }
}

export {
  deleteInsight,
  deleteTask,
  postInsight,
  getInsights,
  postTask,
  getTasks,
}