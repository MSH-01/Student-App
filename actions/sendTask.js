import db from "../config/firebase";
import faker from "faker";
import moment from "moment";

function sendTask(task) {
  return new Promise((resolve, reject) => {
    const taskRef = db.collection("task");
    console.log(task.name);

    let setTask = taskRef
      .doc(task.name)
      .set({
        color: task.color,
        completed: "",
        description: "",
        duedate: "",
        name: "",
        subject: "",
        user: ""
      })
      .then(res => {
        resolve();
      })
      .catch(err => {
        reject("Database error");
      });
  });
}

export default sendTask;

// time: parseInt(moment().format("X"))
// time: moment()
//       .startOf("month")
//       .format("X")
