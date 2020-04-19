const seed_data = [
    {fish_name: "Bitterling", northern_season: "Jan, Feb, Mar, Nov, Dec", northern_availability: "N/A", southern_season: "May, Jun, Jul, Aug, Sept", southern_availability: "N/A", location: "River", sell_price: 900, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_1_i.png"},
    {fish_name: "Pale Chub", northern_season: "All months", northern_availability: "9am-4pm", southern_season: "All months", southern_availability: "All hours", location: "River", sell_price: 200, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_2_i.png"},
    {fish_name: "Crucian Carp", northern_season: "All months", northern_availability: "All hours", southern_season: "All months", southern_availability: "All hours", location: "River", sell_price: 160, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_3_i.png"},
    {fish_name: "Dace", northern_season: "All months", northern_availability: "4pm-9am",southern_season: "All months", southern_availability: "4pm-9am", location: "River", sell_price: 240, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_4_i.png"},
    {fish_name: "Carp", northern_season: "All months", northern_availability: "All hours", southern_season: "All months", southern_availability: "All hours", location: "Pond", sell_price: 300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_5_i.png"},
    {fish_name: "Koi", northern_season: "All months", northern_availability: "4pm-9am", southern_season: "All months", southern_availability: "4pm-9am", location: "Pond", sell_price: 4000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_6_i.png"},
    {fish_name: "Goldfish", northern_season: "All months", northern_availability: "All hours", southern_season: "All months", southern_availability: "All hours", location: "Pond", sell_price: 1300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_7_i.png"},
    {fish_name: "Pop-Eyed Goldfish", northern_season: "All months", northern_availability: "All hours", southern_season: "All months", southern_availability: "All hours", location: "Pond", sell_price: 1300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_8_i.png"},
    {fish_name: "Ranchu Goldfish", northern_season: "All months", northern_availability: "9am-4pm", southern_season: "All months", southern_availability: "9am-4pm", location: "Pond", sell_price: 4500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_9_i.png"},
    {fish_name: "Killifish", northern_season: "Apr, May, Jun, Jul, Aug", northern_availability: "All hours",southern_season: "Jan, Feb, Oct, Nov, Dec", southern_availability: "N/A", location: "Pond", sell_price: 300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_10_i.png"},
    {fish_name: "Crawfish", northern_season: "Apr, May, Jun, Jul, Aug, Sept", northern_availability: "All hours", southern_season: "Jan, Feb, Mar, Oct, Nov, Dec", southern_availability: "All hours", location: "River", sell_price: 200, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_11_i.png"},
    {fish_name: "Soft-shelled Turtle", northern_season: "Aug, Sept", northern_availability: "N/A",southern_season: "Feb, Mar", southern_availability: "N/A", location: "River", sell_price: 3750, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_12_i.png"},
    {fish_name: "Snapping Turtle", northern_season: "Apr, May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Oct,Nov, Dec", southern_availability: "9pm-4am", location: "River", sell_price: 5000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_13_i.png"},
    {fish_name: "Tadpole", northern_season: "Mar, Apr, May, Jun, July", northern_availability: "All hours",southern_season: "Jan, Sept, Oct, Nov, Dec", southern_availability: "N/A", location: "Pond", sell_price: 100, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_14_i.png"},
    {fish_name: "Frog", northern_season: "May, Jun, Jul, Aug", northern_availability: "N/A",southern_season: "Jan, Feb, Nov, Dec", southern_availability: "N/A", location: "Pond", sell_price: 120, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_15_i.png"},
    {fish_name: "Freshwater Goby", northern_season: "All months", northern_availability: "4pm-9am",southern_season: "All months", southern_availability: "4pm-9am", location: "River", sell_price: 400, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_16_i.png"},
    {fish_name: "Loach", northern_season: "Mar, Apr, May", northern_availability: "All hours", southern_season: "Sept, Oct, Nov", southern_availability: "N/A", location: "River", sell_price: 400, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_17_i.png"},
    {fish_name: "Catfish", northern_season: "May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Nov, Dec", southern_availability: "4pm-9am", location: "Pond", sell_price: 800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_18_i.png"},
    {fish_name: "Giant Snakehead", northern_season: "Jun, Jul, Aug", northern_availability: "N/A",southern_season: "Jan, Feb, Dec", southern_availability: "N/A", location: "Pond", sell_price: 5500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_19_i.png"},
    {fish_name: "Bluegill", northern_season: "All months", northern_availability: "9am-4pm", southern_season: "All months", southern_availability: "9am-4pm",location: "River", sell_price: 180, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_20_i.png"},
    {fish_name: "Yellow Perch", northern_season: "Jan, Feb, Mar, Oct, Nov, Dec", northern_availability: "N/A",southern_season: "Apr, May, Jun, Jul, Aug, Sept", southern_availability: "All hours", location: "River", sell_price: 300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_21_i.png"},
    {fish_name: "Black Bass", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "River", sell_price: 400, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_22_i.png"},
    {fish_name: "Tilapia", northern_season: "Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Dec", southern_availability: "All hours", location: "River", sell_price: 800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_23_i.png"},
    {fish_name: "Pike", northern_season: "Sept, Oct, Nov, Dec", northern_availability: "N/A", southern_season: "Mar, April, May, June", southern_availability: "All hours",location: "River", sell_price: 1800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_24_i.png"},
    {fish_name: "Pond Smelt", northern_season: "Jan, Feb, Dec", northern_availability: "N/A", southern_season: "Jun, Jul, Aug", southern_availability: "N/A", location: "River", sell_price: 400, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_25_i.png"},
    {fish_name: "Sweetfish", northern_season: "Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar", southern_availability: "N/A", location: "River", sell_price: 900, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_26_i.png"},
    {fish_name: "Cherry Salmon", northern_season: "Mar, Apr, May, Jun, Sept, Oct, Nov", northern_availability: "4pm-9am",southern_season: "Mar, Apr, May, Sept, Oct, Nov, Dec", southern_availability: "4pm-9am", location: "Clifftop River", sell_price: 1000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_27_i.png"},
    {fish_name: "Char", northern_season: "Mar, Apr, May, Jun, Sept, Oct, Nov", northern_availability: "4pm-9am",southern_season: "Mar, Apr, May, Sept, Oct, Nov, Dec", southern_availability: "4pm-9am", location: "Clifftop River", sell_price: 3800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_28_i.png"},
    {fish_name: "Golden Trout", northern_season: "Mar, Apr, May, Sept, Oct, Nov", northern_availability: "4pm-9am", location: "Clifftop River", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_29_i.png"},
    {fish_name: "Stringfish", northern_season: "Jan, Feb, Mar, Dec", northern_availability: "4pm-9am",southern_season: "Mar, Apr, May, Sept, Oct, Nov, Dec", southern_availability: "4pm-9am", location: "Clifftop River", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_30_i.png"},
    {fish_name: "Salmon", northern_season: "Sept", northern_availability: "N/A", southern_season: "Jun, Jul, Aug, Sept", southern_availability: "N/A", location: "River Mouth", sell_price: 700, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_31_i.png"},
    {fish_name: "King Salmon", northern_season: "Sept", northern_availability: "N/A", southern_season: "Mar", southern_availability: "N/A", location: "River Mouth", sell_price: 1800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_32_i.png"},
    {fish_name: "Mitten Crab", northern_season: "Sept, Oct, Nov", northern_availability: "N/A", southern_season: "Mar, April, May", southern_availability: "4pm-9am", location: "River", sell_price: 2000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_33_i.png"},
    {fish_name: "Guppy", northern_season: "Apr, May, Jun, Jul, Aug, Sept, Oct, Nov", northern_availability: "9am-4pm", southern_season: "Jan, Mar, Apr, May, Oct, Nov", southern_availability: "9am-4pm", location: "River", sell_price: 1300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_34_i.png"},
    {fish_name: "Nibble Fish", northern_season: "May, Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Nov, Dec", southern_availability: "N/A", location: "River", sell_price: 1500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_35_i.png"},
    {fish_name: "Angelfish", northern_season: "May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Nov, Dec", southern_availability: "4pm-9am", location: "River", sell_price: 3000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_36_i.png"},
    {fish_name: "Betta", northern_season: "May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Nov, Dec", southern_availability: "N/A", location: "River", sell_price: 2500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_37_i.png"},
    {fish_name: "Neon Tetra", northern_season: "Apr, May, Jun, Jul, Aug, Sept, Oct, Nov", northern_availability: "9am-4pm",southern_season: "Jan, Feb, Mar, Apr, May, Oct, Nov, Dec", southern_availability: "9am-4pm", location: "River", sell_price: 500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_38_i.png"},
    {fish_name: "Rainbowfish", northern_season: "May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Nov, Dec", southern_availability: "9am-4pm", location: "River", sell_price: 800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_39_i.png"},
    {fish_name: "Piranha", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "River", sell_price: 2500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_40_i.png"},
    {fish_name: "Arowana", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "River", sell_price: 10000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_41_i.png"},
    {fish_name: "Dorado", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "River", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_42_i.png"},
    {fish_name: "Gar", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar", southern_availability: "N/A", location: "Pond", sell_price: 6000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_43_i.png"},
    {fish_name: "Arapaima", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar, Apr", southern_availability: "4pm-9am", location: "River", sell_price: 10000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_44_i.png"},
    {fish_name: "Saddled Bichir", northern_season: "Jun, Jul, Aug, Sept", southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", northern_availability: "N/A", location: "River", sell_price: 4000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_45_i.png"},
    {fish_name: "Sturgeon", northern_season: "Jan, Feb, Mar, Sept, Oct, Nov, Dec", northern_availability: "N/A",southern_season: "Mar, Apr, May, Jun, Jul, Aug, Sept", southern_availability: "All hours", location: "River Mouth", sell_price: 10000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_42_i.png"},
    {fish_name: "Sea Butterfly", northern_season: "Jan, Feb, Mar, Dec", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Oct, Nov, Dec", southern_availability: "N/A", location: "Sea", sell_price: 1000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_47_i.png"},
    {fish_name: "Seahorse", northern_season: "Apr, May, Jun, Jul, Aug, Sept, Oct, Nov", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Apr, May, Oct, Nov, Dec", southern_availability: "All hours", location: "Sea", sell_price: 1100, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_48_i.png"},
    {fish_name: "Clown Fish", northern_season: "Apr, May, Jun, Jul, Aug, Sept", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Oct, Nov, Dec", southern_availability: "N/A", location: "Sea", sell_price: 650, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_49_i.png"},
    {fish_name: "Surgeonfish", northern_season: "Apr, May, Jun, Jul, Aug, Sept", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Oct, Nov, Dec", southern_availability: "N/A", location: "Sea", sell_price: 1000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_50_i.png"},
    {fish_name: "Butterfly Fish", northern_season: "Apr, May, Jun, Jul, Aug, Sept", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Oct, Nov, Dec", southern_availability: "N/A", location: "Sea", sell_price: 1000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_51_i.png"},
    {fish_name: "Napoleonfish", northern_season: "Jul, Aug", northern_availability: "N/A", southern_season: "Jan, Feb", southern_availability: "N/A", location: "Sea", sell_price: 10000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_52_i.png"},
    {fish_name: "Zebra Turkeyfish", northern_season: "Apr, May, Jun, Jul, Aug, Sept, Oct, Nov", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Apr, May, Oct, Nov, Dec", southern_availability: "All hours", location: "Sea", sell_price: 500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_53_i.png"},
    {fish_name: "Blowfish", northern_season: "Jan, Feb, Nov, Dec", northern_availability: "N/A", southern_season: "May, Jun, Jul, Aug", southern_availability: "N/A", location: "Sea", sell_price: 5000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_54_i.png"},
    {fish_name: "Puffer Fish", northern_season: "Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar", southern_availability: "N/A", location: "Sea", sell_price: 250, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_55_i.png"},
    {fish_name: "Anchovy", northern_season: "All months", northern_availability: "4pm-9am",southern_season: "All months", southern_availability: "4pm-9am", location: "Sea", sell_price: 200, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_56_i.png"},
    {fish_name: "Horse Mackerel", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "Sea", sell_price: 150, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_57_i.png"},
    {fish_name: "Barred Knifejaw", northern_season: "Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, Apr, May, Sept, Oct, Nov, Dec", southern_availability: "All hours", location: "Sea", sell_price: 5000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_58_i.png"},
    {fish_name: "Sea Bass", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "Sea", sell_price: 400, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_59_i.png"},
    {fish_name: "Red Snapper", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "Sea", sell_price: 3000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_60_i.png"},
    {fish_name: "Dab", northern_season: "Jan, Feb, Mar, Apr, Oct, Nov, Dec", northern_availability: "N/A",southern_season: "Aug, Sept, Oct", southern_availability: "N/A", location: "Sea", sell_price: 300, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_61_i.png"},
    {fish_name: "Olive Flounder", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "Sea", sell_price: 800, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_62_i.png"},
    {fish_name: "Squid", northern_season: "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Dec", northern_availability: "All hours", southern_season: "All months", southern_availability: "All hours", location: "Sea", sell_price: 500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_63_i.png"},
    {fish_name: "Moray Eel", northern_season: "Aug, Sept, Oct", northern_availability: "N/A", southern_season: "Feb, Mar, April", southern_availability: "All hours", location: "Sea", sell_price: 2000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_64_i.png"},
    {fish_name: "Ribbon Eel", northern_season: "Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A", southern_season: "Jan,Feb, Mar, Apr, Dec", southern_availability: "All hours",location: "Sea", sell_price: 600, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_65_i.png"},
    {fish_name: "Tuna", northern_season: "Jan, Feb, Mar, Apr, Nov, Dec", northern_availability: "All hours", southern_season: "May, Jun, Jul, Aug, Sept, Oct", southern_availability: "N/A",location: "Pier", sell_price: 7000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_66_i.png"},
    {fish_name: "Blue Marlin", northern_season: "Jan, Feb, Mar, Apr, Jul, Aug, Sept, Nov, Dec", northern_availability: "All hours",southern_season: "Jan, Feb, Mar, May, Jun, Jul, Aug, Sept, Oct", southern_availability: "N/A", location: "Pier", sell_price: 10000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_67_i.png"},
    {fish_name: "Giant Trevally", northern_season: "May, Jun, Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar, Nov, Dec", southern_availability: "N/A",  location: "Pier", sell_price: 4500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_68_i.png"},
    {fish_name: "Mahi-mahi", northern_season: "May, Jun, Jul, Aug, Sept, Oct", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Apr, Nov, Dec", southern_availability: "All hours", location: "Pier", sell_price: 12000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_69_i.png"},
    {fish_name: "Ocean Sunfish", northern_season: "Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar", southern_availability: "N/A",location: "Sea", sell_price: 4000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_70_i.png"},
    {fish_name: "Ray", northern_season: "Aug, Sept, Oct, Nov", northern_availability: "N/A", southern_season: "Feb, Mar, Apr, May", southern_availability: "4am-9pm", location: "Sea", sell_price: 3000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_71_i.png"},
    {fish_name: "Saw Shark", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "Sea", sell_price: 12000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_72_i.png"},
    {fish_name: "Hammerhead Shark", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "Sea", sell_price: 8000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_73_i.png"},
    {fish_name: "Great White Shark", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "Sea", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_74_i.png"},
    {fish_name: "Whale Shark", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A", southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "Sea", sell_price: 13000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_75_i.png"},
    {fish_name: "Suckerfisk", northern_season: "Jun, Jul, Aug, Sept", northern_availability: "N/A",southern_season: "Jan, Feb, Mar, Dec", southern_availability: "N/A", location: "Sea", sell_price: 1500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_76_i.png"},
    {fish_name: "Football Fish", northern_season: "Jan, Feb, Mar, Nov, Dec", northern_availability: "N/A",southern_season: "May, Jun, Jul, Aug, Sept", southern_availability: "N/A", location: "Sea", sell_price: 2500, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_77_i.png"},
    {fish_name: "Oarfish", northern_season: "Jan, Feb, Mar, Apr, May, Dec", northern_availability: "All hours",southern_season: "Jun, Jul, Aug, Sept, Oct, Nov", southern_availability: "N/A", location: "Sea", sell_price: 9000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_78_i.png"},
    {fish_name: "Barreleye", northern_season: "All months", northern_availability: "9pm-4am",southern_season: "All months", southern_availability: "9pm-4am", location: "Sea", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_79_i.png"},
    {fish_name: "Coelacanth", northern_season: "All months", northern_availability: "All hours",southern_season: "All months", southern_availability: "All hours", location: "Sea - Rainy Days", sell_price: 15000, image_url: "https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/sakana_80_i.png"},
  ];
  // So we can import seed_data for testing
  exports.fish_data = seed_data;
  
  exports.seed = knex => knex("fish").insert(seed_data);
