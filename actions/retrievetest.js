import db from "../config/firebase";

function takenews() {
  let newsRef = db
    .collection("news")
    .orderBy("time", "desc")
    .limit(1);

  let getDoc = newsRef
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        console.log("Document data:", doc.data());
        const newsStory = doc.data();
        console.log(newsStory.title);
      }
    })
    .catch(err => {
      console.log("Error getting document", err);
    });
}

export default takenews;

//if i export this whole function, will the variable i assign named 'newsStory' still be accessible from the i called it?
// takenews = () => {
//   let newsRef = db.collection("news").doc("Patsy");
//   let getDoc = newsRef
//     .get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log("No such document!");
//       } else {
//         console.log("Document data:", doc.data());
//         const newsStory = doc.data();
//         this.setState({ newsStory });
//       }
//     })
//     .catch(err => {
//       console.log("Error getting document", err);
//     });
// };
