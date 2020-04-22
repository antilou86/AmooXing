const seed_data = [
    {user_id: 1, role_id: 1},
  ];
  // So we can import seed_data for testing
  exports.user_roles_data = seed_data;
  
  exports.seed = knex => knex("user_roles").insert(seed_data);