//This array stores the name of every table needed for the database
//Each table has a schema file stored in ./tables

//To add a table; add it's name to the array and put it's schema in ./tables
tables = [
    "bugs",
    "DIYs",
    "fish",
    "flowers",
    "materials",
    "trees",
    "user_roles",
    "users",
    "villagers"
  ];
  
  //Creates tables in the database from the array of tables above and imports their schema from ./tables
  exports.up = async knex =>
    Promise.all(
      tables.map(table =>
        knex.schema.createTable(table, require(`./tables/${table}`)),
      ),
    );
  
  //Reverses the order the tables were created in, then removes them
  exports.down = knex =>
    Promise.all(
      tables.reverse().map(table => knex.schema.dropTableIfExists(table, true)),
    );