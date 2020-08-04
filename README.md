# AmooXing
Back end for [AmooXing]("https://master.d3u1c7xm8qrvaq.amplifyapp.com/") a companion app for Animal Crossing New Horizons
## Endpoints 

#### /sellables
##### GET

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

#### /villagers
##### GET

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
