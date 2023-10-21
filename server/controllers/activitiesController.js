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
  const {insightDescription} = req.body;
  const currentUserId = req.user.id;

  try {
    Activity.create({
      userId: currentUserId,
      type: 'insight',
      value: insightDescription,
      }
    );
    res.status(200).json({ message: "Insight successfully added." });
  } catch (error) {
    console.log(error);
  }
}

async function deleteInsight(req, res) {
  const { insightId } = req.params;

  try {
    const deletedInsightCount = await Activity.destroy({
      where: {
        id: insightId
      }
    });

    if (deletedInsightCount === 0) {
      return res.status(404).json({ message: 'Insight not found.' });
    }

    res.status(200).json({ message: 'Insight successfully deleted.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
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
  const {taskDescription} = req.body;
  const currentUserId = req.user.id;

  try {
    await Activity.create({
        userId: currentUserId,
        type: 'task',
        value: taskDescription,
      }
    );
    res.status(200).json({ message: "Task successfully added." });
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask(req, res) {
  const { taskId } = req.params;

  try {
    const deletedTaskCount = await Activity.destroy({
      where: {
        id: taskId
      }
    });

    if (deletedTaskCount === 0) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    res.status(200).json({ message: 'Task successfully deleted.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
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