/* eslint-disable */ export default {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split("."),
        i = s[0],
        v0 = !s[1];
      if (ord) return "other";
      return n == 1 && v0
        ? "one"
        : i >= 2 && i <= 4 && v0
        ? "few"
        : !v0
        ? "many"
        : "other";
    },
  },
  messages: {
    "<0>Actions</0>": "<0>Actions</0>",
    "Add food": "Add food",
    "Add ingredient": "Add ingredient",
    "Add new food": "Add new food",
    "Add new meal": "Add new meal",
    "Always add attributes per 100g": "Always add attributes per 100g",
    Cancel: "Cancel",
    Carbohydrates: "Carbohydrates",
    "Carbohydrates (g)": "Carbohydrates (g)",
    "Energy (cal)": "Energy (cal)",
    "Energy (kJ)": "Energy (kJ)",
    "Energy (kcal|kJ)": "Energy (kcal|kJ)",
    Fats: "Fats",
    "Fats (g)": "Fats (g)",
    Food: "Food",
    "Library updated": "Library updated",
    Meals: "Meals",
    "Meals successfully updated": "Meals successfully updated",
    Name: "Name",
    Proteins: "Proteins",
    "Proteins (g)": "Proteins (g)",
    Ration: "Ration",
    "Select week of the year:": "Select week of the year:",
    Submit: "Submit",
    Summary: "Summary",
    "Time when meal was or will be consumed could be added later later. Selection of ingredients meal consist of, could be listed in FOOD LIBRARY tab and extended by <0>Add food</0> button.":
      "Time when meal was or will be consumed could be added later later. Selection of ingredients meal consist of, could be listed in FOOD LIBRARY tab and extended by <0>Add food</0> button.",
    Type: "Type",
    "Weight (g)": "Weight (g)",
    When: "When",
    "{0}": function (a) {
      return [a("0")];
    },
  },
};
