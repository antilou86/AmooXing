module.exports = tbl => {
    tbl.increments("id");
    tbl
      .text("username", 24)
      .unique()
      .notNullable();
    tbl.text("password").notNullable();
    tbl.text("email");
    tbl.text("birth_date");
    tbl.text("town_fruit");
    tbl.text("town_flower");
    tbl.text("town_name"); 
    tbl.text("nintendo_user_name"); //to search for your nintendo friends when not connected
    tbl.text("nintendo_friend_code"); //for finding connected friends on switch
    tbl.text("last_login"); //for filtering through who has what atm (should always order by specified filter, THEN last login)
    tbl.text("friends"); //accepted requests
    tbl.text("friend_requests"); //message for pending requests.
    tbl.text("avatar_url");  //TODO - generate random default avatar url on user generation (could choose a character based on user's bday - idk)
  };