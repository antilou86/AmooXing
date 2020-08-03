# AmooXing
a way for friends to stay connected and informed about the current state of each others animal crossing islands

## Endpoints 

#### Sellable items
##### GET
/sellables <br/>
returns an array of json objects shaped like so: 
```javascript
[
  {
    "id": 60,   //integer
    "name": "Golden Stag",  //string
    "northern_season": "Jul, Aug", //string
    "northern_availability": "N/A", //string
    "southern_season": "Jan, Feb", //string
    "southern_availability": "N/A", //string
    "location": "On trees", //string
    "sell_price": 12000, //integer
    "image_url": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/musi_60_i.png" //string
  },
]
```

#### Villagers
##### GET
/villagers <br/>
returns an array of json objects shaped like so: 
```javascript
[
  {
  "id": 1, //integer
  "villager_name":"Shrunk", //string
  "birthday":"1/2", //string
  "personality": "unspecified",  //string
  "image_url": "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/c1_i.png", //string
  }, 
]
```
