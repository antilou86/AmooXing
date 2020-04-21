const seed_data = [
    {material_name:"Tree branch", how_to_get:"Shaking trees", selling_price: 5, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Treebranch.png/revision/latest/scale-to-width-down/100?cb=20200326191935"},
    {material_name:"Wood", how_to_get:"Use axe on a tree", selling_price: 60, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/c/c4/NH_Wood.png/revision/latest/scale-to-width-down/100?cb=20200326192052"},
    {material_name:"Hardwood", how_to_get:"Use axe on a tree", selling_price: 60, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/9/9f/NH-Hardwood.png/revision/latest/scale-to-width-down/100?cb=20200326192143"},
    {material_name:"Softwood", how_to_get:"Use axe on a tree", selling_price: 60, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/9/9c/NH-Softwood.png/revision/latest/scale-to-width-down/100?cb=20200326192221"},
    {material_name:"Stone", how_to_get:"Hitting rocks, Shaking trees, Fishing, Balloon presents", selling_price: 75, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/d/d2/NH_Stone.png/revision/latest/scale-to-width-down/100?cb=20200326192310"},
    {material_name:"Clay", how_to_get:"Hitting rocks, Balloon presents", selling_price: 100, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/c/cf/NH-Material_Clay.png/revision/latest/scale-to-width-down/100?cb=20200326192353"},
    {material_name:"Iron nugget", how_to_get:"Hitting rocks, Balloon presents", selling_price: 375, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH_Ironnugget.png/revision/latest/scale-to-width-down/100?cb=20200326192456"},
    {material_name:"Gold nugget", how_to_get:"Hitting rocks, Balloon presents", selling_price: 10000, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/1/1a/NH-gold_nugget.png/revision/latest/scale-to-width-down/100?cb=20200326192540"},
    {material_name:"Acorn", how_to_get:"Shaking hardwood trees", selling_price: 200, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Material_acorn.png/revision/latest/scale-to-width-down/100?cb=20200326192625"},
    {material_name:"Pinecone", how_to_get:"Shaking cedar trees", selling_price: 0, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/0/0b/NH-Material_pinecone.png/revision/latest/scale-to-width-down/100?cb=20200326192801"},
    {material_name:"Bamboo piece", how_to_get:"Use axe on bamboo", selling_price: 80, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/5/5c/NH_Bamboopiece.png/revision/latest/scale-to-width-down/100?cb=20200326193925"},
    {material_name:"Young spring bamboo", how_to_get:"Use axe on bamboo", selling_price:200, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Young_spring_bamboo.png/revision/latest/scale-to-width-down/100?cb=20200326193947"},
    {material_name:"Bamboo shoot", how_to_get:"Digging near bamboo", selling_price: 250, image_url:"https://gamewith-en.akamaized.net/img/e1910e8fad66600669cb08f543913f6a.jpg"},
    {material_name:"Clump of weeds", how_to_get:"Pulling off of ground", selling_price: 10, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH_Weed.png/revision/latest/scale-to-width-down/100?cb=20200326194017"},
    {material_name:"Native Fruit", how_to_get:"Shake your native trees", selling_price: 100, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Fruit-cherry.png/revision/latest/scale-to-width-down/100?cb=20200327062700"},
    {material_name:"Non-Native Fruit (Coconuts excluded)", how_to_get:"Mystery island tours, or trading with friends(online play)", selling_price: 500, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Fruit-cherry.png/revision/latest/scale-to-width-down/100?cb=20200327062700"},
    {material_name:"Coconuts", how_to_get:"Shake coconut trees", selling_price: 250, image_url:"https://gamewith-en.akamaized.net/img/bf91550b90cee5325e625c1fcb6edc60.jpg"},
    {material_name:"Wasp nest", how_to_get:"Shaking trees", selling_price: 300, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/4/49/NH-Wasp_nest.png/revision/latest/scale-to-width-down/100?cb=20200326194037"},
    {material_name:"Tire", how_to_get:"Fishing", selling_price: 10, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Old_tire.png/revision/latest?cb=20200324081851"},
    {material_name:"Boot", how_to_get:"Fishing", selling_price: 10, image_url:"https://gamewith-en.akamaized.net/img/3895b42a283d071acb139b31e8ee1442.jpg"},
    {material_name:"Can", how_to_get:"Fishing", selling_price: 10, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/9/90/Can.png/revision/latest?cb=20130613034002"},
    {material_name:"Fossil", how_to_get:"Digging with Shovel", selling_price: 100, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Fossil_item.png/revision/latest/scale-to-width-down/100?cb=20200326234113"},
    {material_name:"Star fragment", how_to_get:"On beach the day after wishing on a star", selling_price: 250, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/9/96/NH-Star_fragment.png/revision/latest/scale-to-width-down/100?cb=20200326194818"},
    {material_name:"Large star fragment", how_to_get:"On beach the day after wishing on a star", selling_price: 2500, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Large_star_fragment.png/revision/latest/scale-to-width-down/100?cb=20200326194837"},
    {material_name:"Zodiac star fragments", how_to_get:"On beach the day after wishing on a star (type depends on astrological cycle)", selling_price: 0, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/8/89/NH-Leo_star_fragment.png/revision/latest/scale-to-width-down/100?cb=20200326195823"},
    {material_name:"Cherry-blossom petal", how_to_get:"Caught with a net during cherry-blossom season", selling_price: 200, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/c/cf/NH-Cherry-blossom_petal.png/revision/latest/scale-to-width-down/100?cb=20200326195619"},
    {material_name:"Earth Egg", how_to_get:"Dig for fossils during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/5fad54cfd8b5b1e13882d8d196bc6248.jpg"},
    {material_name:"Water Egg", how_to_get:"Go Fishing during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/a34671415a10851efbbb961b4b4758ec.jpg"},
    {material_name:"Leaf Egg", how_to_get:"Shake trees during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/b865261c5de7805ebc014601cc025d21.jpg"},
    {material_name:"Wood Egg", how_to_get:"Chop trees during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/72f53af03115a2bd8d62dbf75de96cd0.jpg"},
    {material_name:"Sky Egg", how_to_get:"Pop balloons during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/4007c2871ca6477d54226f8b2435f77f.jpg"},
    {material_name:"Stone Egg", how_to_get:"Hit Rocks during bunny day event", selling_price: 200, image_url:"https://gamewith-en.akamaized.net/img/11f6e283719b911359b8b6b7cc8a050c.jpg"},
    {material_name:"Rusted part", how_to_get:"Recycling bin after a Gulliver visit or by not turning the Communicator Parts into Gulliver before the next day", selling_price: 10, image_url:"https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Rusted_part.png/revision/latest/scale-to-width-down/100?cb=20200326194057"},
    {material_name:"Snowflake", how_to_get:"Catch with a Net", selling_price: 0, image_url:"https://gamewith-en.akamaized.net/img/0f043f25e9de218bceedebf1ece45beb.jpg"},
    {material_name:"Summer Shell", how_to_get:"Pick up on the beach in the summer", selling_price: 0, image_url:"https://gamewith-en.akamaized.net/img/0f043f25e9de218bceedebf1ece45beb.jpg"},
    {material_name:"Manila Clam", how_to_get:"Dig up sand on the beach", selling_price: 0, image_url:"https://gamewith-en.akamaized.net/img/6b69f063156eca24b5bfa911c37cf1f4.jpg"},
]
// So we can import seed_data for testing
exports.materials_data = seed_data;

exports.seed = knex => knex("materials").insert(seed_data);
