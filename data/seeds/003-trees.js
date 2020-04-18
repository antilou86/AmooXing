const seed_data = [
    {tree_name: "Apple", image_url: "https://gamewith-en.akamaized.net/img/1cf76b5ab6185b1636fb35558ef2e889.jpg"},
    {tree_name: "Pear", image_url: "https://gamewith-en.akamaized.net/img/e5c8684bce21e6820406dff6be9f2cf7.jpg"},
    {tree_name: "Peach", image_url: "https://gamewith-en.akamaized.net/img/d9b3a229e893f583c4bc2a6881cb8f40.jpg"},
    {tree_name: "Cherry", image_url: "https://gamewith-en.akamaized.net/img/cfe536a1c6428cfdb174e4a8dd4c61e1.jpg"},
    {tree_name: "Orange", image_url: "https://gamewith-en.akamaized.net/img/23085606f213e911798e0ab7720a88f0.jpg"},
    {tree_name: "Coconut", image_url: "https://gamewith-en.akamaized.net/img/b95cc6df4ff9b7d0eeda503fc58ac7cf.jpg"},
  ];
  // So we can import seed_data for testing
  exports.trees_data = seed_data;
  
  exports.seed = knex => knex("trees").insert(seed_data);
