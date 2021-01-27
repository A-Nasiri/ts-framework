import { User } from "./models/User";

const user = new User({ name: "robert", age: 20 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("change detected, dom needs updates");
});

user.set({ name: "New Name" });
