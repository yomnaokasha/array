function alwaysHungry(Array) {
  let foundFood = false;
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] == "food") {
      console.log("yummy");
      foundFood = true;
    }
  }
  if (foundFood == false) {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
