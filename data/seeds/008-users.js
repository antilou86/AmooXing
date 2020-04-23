const bcrypt = require("bcryptjs");

const seed_data = [
  {
    username: "Lou",
    password: `${bcrypt.hashSync("testpassword2", 8)}`,
    email: "antilou86@gmail.com",
    birth_date: "10/9",
    town_fruit: "Peach",
    town_flower: "Rose",
    town_name: "Frozville",
    nintendo_user_name: "no idea",
    nintendo_friend_code: "no idea",
    last_login: "",
    friends: "",
    friend_requests: "",
    avatar_url: "",
  },
];
exports.users_data = seed_data;
exports.seed = knex => knex("users").insert(seed_data);