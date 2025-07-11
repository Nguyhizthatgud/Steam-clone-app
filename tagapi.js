const gameTags = [
    {
        "tagid": 9,
        "name": "Strategy"
    },
    {
        "tagid": 19,
        "name": "Action"
    },
    {
        "tagid": 21,
        "name": "Adventure"
    },
    {
        "tagid": 84,
        "name": "Design & Illustration"
    },
    {
        "tagid": 87,
        "name": "Utilities"
    },
    {
        "tagid": 113,
        "name": "Free to Play"
    },
    {
        "tagid": 122,
        "name": "RPG"
    },
    {
        "tagid": 128,
        "name": "Massively Multiplayer"
    },
    {
        "tagid": 492,
        "name": "Indie"
    },
    {
        "tagid": 493,
        "name": "Early Access"
    },
    {
        "tagid": 597,
        "name": "Casual"
    },
    {
        "tagid": 599,
        "name": "Simulation"
    },
    {
        "tagid": 699,
        "name": "Racing"
    },
    {
        "tagid": 701,
        "name": "Sports"
    },
    {
        "tagid": 784,
        "name": "Video Production"
    },
    {
        "tagid": 809,
        "name": "Photo Editing"
    },
    {
        "tagid": 872,
        "name": "Animation & Modeling"
    },
    {
        "tagid": 1027,
        "name": "Audio Production"
    },
    {
        "tagid": 1036,
        "name": "Education"
    },
    {
        "tagid": 1038,
        "name": "Web Publishing"
    },
    {
        "tagid": 1445,
        "name": "Software Training"
    },
    {
        "tagid": 1616,
        "name": "Trains"
    },
    {
        "tagid": 1621,
        "name": "Music"
    },
    {
        "tagid": 1625,
        "name": "Platformer"
    },
    {
        "tagid": 1628,
        "name": "Metroidvania"
    },
    {
        "tagid": 1638,
        "name": "Dog"
    },
    {
        "tagid": 1643,
        "name": "Building"
    },
    {
        "tagid": 1644,
        "name": "Driving"
    },
    {
        "tagid": 1645,
        "name": "Tower Defense"
    },
    {
        "tagid": 1646,
        "name": "Hack and Slash"
    },
    {
        "tagid": 1647,
        "name": "Western"
    },
    {
        "tagid": 1649,
        "name": "GameMaker"
    },
    {
        "tagid": 1651,
        "name": "Satire"
    },
    {
        "tagid": 1654,
        "name": "Relaxing"
    },
    {
        "tagid": 1659,
        "name": "Zombies"
    },
    {
        "tagid": 1662,
        "name": "Survival"
    },
    {
        "tagid": 1663,
        "name": "FPS"
    },
    {
        "tagid": 1664,
        "name": "Puzzle"
    },
    {
        "tagid": 1665,
        "name": "Match 3"
    },
    {
        "tagid": 1666,
        "name": "Card Game"
    },
    {
        "tagid": 1667,
        "name": "Horror"
    },
    {
        "tagid": 1669,
        "name": "Moddable"
    },
    {
        "tagid": 1670,
        "name": "4X"
    },
    {
        "tagid": 1671,
        "name": "Superhero"
    },
    {
        "tagid": 1673,
        "name": "Aliens"
    },
    {
        "tagid": 1674,
        "name": "Typing"
    },
    {
        "tagid": 1676,
        "name": "RTS"
    },
    {
        "tagid": 1677,
        "name": "Turn-Based"
    },
    {
        "tagid": 1678,
        "name": "War"
    },
    {
        "tagid": 1680,
        "name": "Heist"
    },
    {
        "tagid": 1681,
        "name": "Pirates"
    },
    {
        "tagid": 1684,
        "name": "Fantasy"
    },
    {
        "tagid": 1685,
        "name": "Co-op"
    },
    {
        "tagid": 1687,
        "name": "Stealth"
    },
    {
        "tagid": 1688,
        "name": "Ninja"
    },
    {
        "tagid": 1693,
        "name": "Classic"
    },
    {
        "tagid": 1695,
        "name": "Open World"
    },
    {
        "tagid": 1697,
        "name": "Third Person"
    },
    {
        "tagid": 1698,
        "name": "Point & Click"
    },
    {
        "tagid": 1702,
        "name": "Crafting"
    },
    {
        "tagid": 1708,
        "name": "Tactical"
    },
    {
        "tagid": 1710,
        "name": "Surreal"
    },
    {
        "tagid": 1714,
        "name": "Psychedelic"
    },
    {
        "tagid": 1716,
        "name": "Roguelike"
    },
    {
        "tagid": 1717,
        "name": "Hex Grid"
    },
    {
        "tagid": 1718,
        "name": "MOBA"
    },
    {
        "tagid": 1719,
        "name": "Comedy"
    },
    {
        "tagid": 1720,
        "name": "Dungeon Crawler"
    },
    {
        "tagid": 1721,
        "name": "Psychological Horror"
    },
    {
        "tagid": 1723,
        "name": "Action RTS"
    },
    {
        "tagid": 1730,
        "name": "Sokoban"
    },
    {
        "tagid": 1732,
        "name": "Voxel"
    },
    {
        "tagid": 1733,
        "name": "Unforgiving"
    },
    {
        "tagid": 1734,
        "name": "Fast-Paced"
    },
    {
        "tagid": 1736,
        "name": "LEGO"
    },
    {
        "tagid": 1738,
        "name": "Hidden Object"
    },
    {
        "tagid": 1741,
        "name": "Turn-Based Strategy"
    },
    {
        "tagid": 1742,
        "name": "Story Rich"
    },
    {
        "tagid": 1743,
        "name": "Fighting"
    },
    {
        "tagid": 1746,
        "name": "Basketball"
    },
    {
        "tagid": 1751,
        "name": "Comic Book"
    },
    {
        "tagid": 1752,
        "name": "Rhythm"
    },
    {
        "tagid": 1753,
        "name": "Skateboarding"
    },
    {
        "tagid": 1754,
        "name": "MMORPG"
    },
    {
        "tagid": 1755,
        "name": "Space"
    },
    {
        "tagid": 1756,
        "name": "Great Soundtrack"
    },
    {
        "tagid": 1759,
        "name": "Perma Death"
    },
    {
        "tagid": 1770,
        "name": "Board Game"
    },
    {
        "tagid": 1773,
        "name": "Arcade"
    },
    {
        "tagid": 1774,
        "name": "Shooter"
    },
    {
        "tagid": 1775,
        "name": "PvP"
    },
    {
        "tagid": 1777,
        "name": "Steampunk"
    },
    {
        "tagid": 3796,
        "name": "Based On A Novel"
    },
    {
        "tagid": 3798,
        "name": "Side Scroller"
    },
    {
        "tagid": 3799,
        "name": "Visual Novel"
    },
    {
        "tagid": 3810,
        "name": "Sandbox"
    },
    {
        "tagid": 3813,
        "name": "Real Time Tactics"
    },
    {
        "tagid": 3814,
        "name": "Third-Person Shooter"
    },
    {
        "tagid": 3834,
        "name": "Exploration"
    },
    {
        "tagid": 3835,
        "name": "Post-apocalyptic"
    },
    {
        "tagid": 3839,
        "name": "First-Person"
    },
    {
        "tagid": 3841,
        "name": "Local Co-Op"
    },
    {
        "tagid": 3843,
        "name": "Online Co-Op"
    },
    {
        "tagid": 3854,
        "name": "Lore-Rich"
    },
    {
        "tagid": 3859,
        "name": "Multiplayer"
    },
    {
        "tagid": 3871,
        "name": "2D"
    },
    {
        "tagid": 3877,
        "name": "Precision Platformer"
    },
    {
        "tagid": 3878,
        "name": "Competitive"
    },
    {
        "tagid": 3916,
        "name": "Old School"
    },
    {
        "tagid": 3920,
        "name": "Cooking"
    },
    {
        "tagid": 3934,
        "name": "Immersive"
    },
    {
        "tagid": 3942,
        "name": "Sci-fi"
    },
    {
        "tagid": 3952,
        "name": "Gothic"
    },
    {
        "tagid": 3954,
        "name": "Rail Shooter"
    },
    {
        "tagid": 3955,
        "name": "Character Action Game"
    },
    {
        "tagid": 3959,
        "name": "Roguelite"
    },
    {
        "tagid": 3964,
        "name": "Pixel Graphics"
    },
    {
        "tagid": 3965,
        "name": "Epic"
    },
    {
        "tagid": 3968,
        "name": "Physics"
    },
    {
        "tagid": 3978,
        "name": "Survival Horror"
    },
    {
        "tagid": 3987,
        "name": "Historical"
    },
    {
        "tagid": 3993,
        "name": "Combat"
    },
    {
        "tagid": 4004,
        "name": "Retro"
    },
    {
        "tagid": 4018,
        "name": "Vampire"
    },
    {
        "tagid": 4026,
        "name": "Difficult"
    },
    {
        "tagid": 4036,
        "name": "Parkour"
    },
    {
        "tagid": 4046,
        "name": "Dragons"
    },
    {
        "tagid": 4057,
        "name": "Magic"
    },
    {
        "tagid": 4064,
        "name": "Thriller"
    },
    {
        "tagid": 4085,
        "name": "Anime"
    },
    {
        "tagid": 4094,
        "name": "Minimalist"
    },
    {
        "tagid": 4102,
        "name": "Combat Racing"
    },
    {
        "tagid": 4106,
        "name": "Action-Adventure"
    },
    {
        "tagid": 4115,
        "name": "Cyberpunk"
    },
    {
        "tagid": 4136,
        "name": "Funny"
    },
    {
        "tagid": 4137,
        "name": "Transhumanism"
    },
    {
        "tagid": 4145,
        "name": "Cinematic"
    },
    {
        "tagid": 4150,
        "name": "World War II"
    },
    {
        "tagid": 4155,
        "name": "Class-Based"
    },
    {
        "tagid": 4158,
        "name": "Beat 'em up"
    },
    {
        "tagid": 4161,
        "name": "Real-Time"
    },
    {
        "tagid": 4162,
        "name": "Kids"
    },
    {
        "tagid": 4166,
        "name": "Atmospheric"
    },
    {
        "tagid": 4168,
        "name": "Military"
    },
    {
        "tagid": 4172,
        "name": "Medieval"
    },
    {
        "tagid": 4175,
        "name": "Realistic"
    },
    {
        "tagid": 4182,
        "name": "Singleplayer"
    },
    {
        "tagid": 4184,
        "name": "Chess"
    },
    {
        "tagid": 4190,
        "name": "Addictive"
    },
    {
        "tagid": 4191,
        "name": "3D"
    },
    {
        "tagid": 4195,
        "name": "Cartoony"
    },
    {
        "tagid": 4202,
        "name": "Trading"
    },
    {
        "tagid": 4231,
        "name": "Action RPG"
    },
    {
        "tagid": 4234,
        "name": "Short"
    },
    {
        "tagid": 4236,
        "name": "Loot"
    },
    {
        "tagid": 4242,
        "name": "Episodic"
    },
    {
        "tagid": 4252,
        "name": "Stylized"
    },
    {
        "tagid": 4255,
        "name": "Shoot 'Em Up"
    },
    {
        "tagid": 4291,
        "name": "Spaceships"
    },
    {
        "tagid": 4295,
        "name": "Futuristic"
    },
    {
        "tagid": 4305,
        "name": "Colorful"
    },
    {
        "tagid": 4325,
        "name": "Turn-Based Combat"
    },
    {
        "tagid": 4328,
        "name": "City Builder"
    },
    {
        "tagid": 4342,
        "name": "Dark"
    },
    {
        "tagid": 4345,
        "name": "Gore"
    },
    {
        "tagid": 4364,
        "name": "Grand Strategy"
    },
    {
        "tagid": 4376,
        "name": "Assassin"
    },
    {
        "tagid": 4400,
        "name": "Abstract"
    },
    {
        "tagid": 4434,
        "name": "JRPG"
    },
    {
        "tagid": 4474,
        "name": "CRPG"
    },
    {
        "tagid": 4486,
        "name": "Choose Your Own Adventure"
    },
    {
        "tagid": 4508,
        "name": "Co-op Campaign"
    },
    {
        "tagid": 4520,
        "name": "Farming"
    },
    {
        "tagid": 4559,
        "name": "Quick-Time Events"
    },
    {
        "tagid": 4562,
        "name": "Cartoon"
    },
    {
        "tagid": 4598,
        "name": "Alternate History"
    },
    {
        "tagid": 4604,
        "name": "Dark Fantasy"
    },
    {
        "tagid": 4608,
        "name": "Swordplay"
    },
    {
        "tagid": 4637,
        "name": "Top-Down Shooter"
    },
    {
        "tagid": 4667,
        "name": "Violent"
    },
    {
        "tagid": 4684,
        "name": "Wargame"
    },
    {
        "tagid": 4695,
        "name": "Economy"
    },
    {
        "tagid": 4700,
        "name": "Movie"
    },
    {
        "tagid": 4711,
        "name": "Replay Value"
    },
    {
        "tagid": 4726,
        "name": "Cute"
    },
    {
        "tagid": 4736,
        "name": "2D Fighter"
    },
    {
        "tagid": 4747,
        "name": "Character Customization"
    },
    {
        "tagid": 4754,
        "name": "Politics"
    },
    {
        "tagid": 4758,
        "name": "Twin Stick Shooter"
    },
    {
        "tagid": 4777,
        "name": "Spectacle fighter"
    },
    {
        "tagid": 4791,
        "name": "Top-Down"
    },
    {
        "tagid": 4821,
        "name": "Mechs"
    },
    {
        "tagid": 4835,
        "name": "6DOF"
    },
    {
        "tagid": 4840,
        "name": "4 Player Local"
    },
    {
        "tagid": 4845,
        "name": "Capitalism"
    },
    {
        "tagid": 4853,
        "name": "Political"
    },
    {
        "tagid": 4878,
        "name": "Parody "
    },
    {
        "tagid": 4885,
        "name": "Bullet Hell"
    },
    {
        "tagid": 4947,
        "name": "Romance"
    },
    {
        "tagid": 4975,
        "name": "2.5D"
    },
    {
        "tagid": 4994,
        "name": "Naval Combat"
    },
    {
        "tagid": 5030,
        "name": "Dystopian "
    },
    {
        "tagid": 5055,
        "name": "eSports"
    },
    {
        "tagid": 5094,
        "name": "Narration"
    },
    {
        "tagid": 5125,
        "name": "Procedural Generation"
    },
    {
        "tagid": 5153,
        "name": "Kickstarter"
    },
    {
        "tagid": 5154,
        "name": "Score Attack"
    },
    {
        "tagid": 5160,
        "name": "Dinosaurs"
    },
    {
        "tagid": 5179,
        "name": "Cold War"
    },
    {
        "tagid": 5186,
        "name": "Psychological"
    },
    {
        "tagid": 5228,
        "name": "Blood"
    },
    {
        "tagid": 5230,
        "name": "Sequel"
    },
    {
        "tagid": 5300,
        "name": "God Game"
    },
    {
        "tagid": 5310,
        "name": "Games Workshop"
    },
    {
        "tagid": 5348,
        "name": "Mod"
    },
    {
        "tagid": 5350,
        "name": "Family Friendly"
    },
    {
        "tagid": 5363,
        "name": "Destruction"
    },
    {
        "tagid": 5372,
        "name": "Conspiracy"
    },
    {
        "tagid": 5379,
        "name": "2D Platformer"
    },
    {
        "tagid": 5382,
        "name": "World War I"
    },
    {
        "tagid": 5390,
        "name": "Time Attack"
    },
    {
        "tagid": 5395,
        "name": "3D Platformer"
    },
    {
        "tagid": 5407,
        "name": "Benchmark"
    },
    {
        "tagid": 5411,
        "name": "Beautiful"
    },
    {
        "tagid": 5432,
        "name": "Programming"
    },
    {
        "tagid": 5502,
        "name": "Hacking"
    },
    {
        "tagid": 5537,
        "name": "Puzzle Platformer"
    },
    {
        "tagid": 5547,
        "name": "Arena Shooter"
    },
    {
        "tagid": 5577,
        "name": "RPGMaker"
    },
    {
        "tagid": 5608,
        "name": "Emotional"
    },
    {
        "tagid": 5611,
        "name": "Mature"
    },
    {
        "tagid": 5613,
        "name": "Detective"
    },
    {
        "tagid": 5652,
        "name": "Collectathon"
    },
    {
        "tagid": 5673,
        "name": "Modern"
    },
    {
        "tagid": 5708,
        "name": "Remake"
    },
    {
        "tagid": 5711,
        "name": "Team-Based"
    },
    {
        "tagid": 5716,
        "name": "Mystery"
    },
    {
        "tagid": 5727,
        "name": "Baseball"
    },
    {
        "tagid": 5752,
        "name": "Robots"
    },
    {
        "tagid": 5765,
        "name": "Gun Customization"
    },
    {
        "tagid": 5794,
        "name": "Science"
    },
    {
        "tagid": 5796,
        "name": "Bullet Time"
    },
    {
        "tagid": 5851,
        "name": "Isometric"
    },
    {
        "tagid": 5900,
        "name": "Walking Simulator"
    },
    {
        "tagid": 5914,
        "name": "Tennis"
    },
    {
        "tagid": 5923,
        "name": "Dark Humor"
    },
    {
        "tagid": 5941,
        "name": "Reboot"
    },
    {
        "tagid": 5981,
        "name": "Mining"
    },
    {
        "tagid": 5984,
        "name": "Drama"
    },
    {
        "tagid": 6041,
        "name": "Horses"
    },
    {
        "tagid": 6052,
        "name": "Noir"
    },
    {
        "tagid": 6129,
        "name": "Logic"
    },
    {
        "tagid": 6214,
        "name": "Birds"
    },
    {
        "tagid": 6276,
        "name": "Inventory Management"
    },
    {
        "tagid": 6310,
        "name": "Diplomacy"
    },
    {
        "tagid": 6378,
        "name": "Crime"
    },
    {
        "tagid": 6426,
        "name": "Choices Matter"
    },
    {
        "tagid": 6506,
        "name": "3D Fighter"
    },
    {
        "tagid": 6621,
        "name": "Pinball"
    },
    {
        "tagid": 6625,
        "name": "Time Manipulation"
    },
    {
        "tagid": 6650,
        "name": "Nudity"
    },
    {
        "tagid": 6691,
        "name": "1990's"
    },
    {
        "tagid": 6702,
        "name": "Mars"
    },
    {
        "tagid": 6730,
        "name": "PvE"
    },
    {
        "tagid": 6815,
        "name": "Hand-drawn"
    },
    {
        "tagid": 6869,
        "name": "Nonlinear"
    },
    {
        "tagid": 6910,
        "name": "Naval"
    },
    {
        "tagid": 6915,
        "name": "Martial Arts"
    },
    {
        "tagid": 6948,
        "name": "Rome"
    },
    {
        "tagid": 6971,
        "name": "Multiple Endings"
    },
    {
        "tagid": 7038,
        "name": "Golf"
    },
    {
        "tagid": 7107,
        "name": "Real-Time with Pause"
    },
    {
        "tagid": 7108,
        "name": "Party"
    },
    {
        "tagid": 7113,
        "name": "Crowdfunded"
    },
    {
        "tagid": 7178,
        "name": "Party Game"
    },
    {
        "tagid": 7208,
        "name": "Female Protagonist"
    },
    {
        "tagid": 7250,
        "name": "Linear"
    },
    {
        "tagid": 7309,
        "name": "Skiing"
    },
    {
        "tagid": 7328,
        "name": "Bowling"
    },
    {
        "tagid": 7332,
        "name": "Base Building"
    },
    {
        "tagid": 7368,
        "name": "Local Multiplayer"
    },
    {
        "tagid": 7423,
        "name": "Sniper"
    },
    {
        "tagid": 7432,
        "name": "Lovecraftian"
    },
    {
        "tagid": 7478,
        "name": "Illuminati"
    },
    {
        "tagid": 7481,
        "name": "Controller"
    },
    {
        "tagid": 7556,
        "name": "Dice"
    },
    {
        "tagid": 7569,
        "name": "Grid-Based Movement"
    },
    {
        "tagid": 7622,
        "name": "Offroad"
    },
    {
        "tagid": 7702,
        "name": "Narrative"
    },
    {
        "tagid": 7743,
        "name": "1980s"
    },
    {
        "tagid": 7782,
        "name": "Cult Classic"
    },
    {
        "tagid": 7918,
        "name": "Dwarf"
    },
    {
        "tagid": 7926,
        "name": "Artificial Intelligence"
    },
    {
        "tagid": 7948,
        "name": "Soundtrack"
    },
    {
        "tagid": 8013,
        "name": "Software"
    },
    {
        "tagid": 8075,
        "name": "TrackIR"
    },
    {
        "tagid": 8093,
        "name": "Minigames"
    },
    {
        "tagid": 8122,
        "name": "Level Editor"
    },
    {
        "tagid": 8253,
        "name": "Music-Based Procedural Generation"
    },
    {
        "tagid": 8369,
        "name": "Investigation"
    },
    {
        "tagid": 8461,
        "name": "Well-Written"
    },
    {
        "tagid": 8666,
        "name": "Runner"
    },
    {
        "tagid": 8945,
        "name": "Resource Management"
    },
    {
        "tagid": 9130,
        "name": "Hentai"
    },
    {
        "tagid": 9157,
        "name": "Underwater"
    },
    {
        "tagid": 9204,
        "name": "Immersive Sim"
    },
    {
        "tagid": 9271,
        "name": "Trading Card Game"
    },
    {
        "tagid": 9541,
        "name": "Demons"
    },
    {
        "tagid": 9551,
        "name": "Dating Sim"
    },
    {
        "tagid": 9564,
        "name": "Hunting"
    },
    {
        "tagid": 9592,
        "name": "Dynamic Narration"
    },
    {
        "tagid": 9803,
        "name": "Snow"
    },
    {
        "tagid": 9994,
        "name": "Experience"
    },
    {
        "tagid": 10235,
        "name": "Life Sim"
    },
    {
        "tagid": 10383,
        "name": "Transportation"
    },
    {
        "tagid": 10397,
        "name": "Memes"
    },
    {
        "tagid": 10437,
        "name": "Trivia"
    },
    {
        "tagid": 10679,
        "name": "Time Travel"
    },
    {
        "tagid": 10695,
        "name": "Party-Based RPG"
    },
    {
        "tagid": 10808,
        "name": "Supernatural"
    },
    {
        "tagid": 10816,
        "name": "Split Screen"
    },
    {
        "tagid": 11014,
        "name": "Interactive Fiction"
    },
    {
        "tagid": 11095,
        "name": "Boss Rush"
    },
    {
        "tagid": 11104,
        "name": "Vehicular Combat"
    },
    {
        "tagid": 11123,
        "name": "Mouse only"
    },
    {
        "tagid": 11333,
        "name": "Villain Protagonist"
    },
    {
        "tagid": 11634,
        "name": "Vikings"
    },
    {
        "tagid": 12057,
        "name": "Tutorial"
    },
    {
        "tagid": 12095,
        "name": "Sexual Content"
    },
    {
        "tagid": 12190,
        "name": "Boxing"
    },
    {
        "tagid": 12286,
        "name": "Warhammer 40K"
    },
    {
        "tagid": 12472,
        "name": "Management"
    },
    {
        "tagid": 13070,
        "name": "Solitaire"
    },
    {
        "tagid": 13190,
        "name": "America"
    },
    {
        "tagid": 13276,
        "name": "Tanks"
    },
    {
        "tagid": 13382,
        "name": "Archery"
    },
    {
        "tagid": 13577,
        "name": "Sailing"
    },
    {
        "tagid": 13782,
        "name": "Experimental"
    },
    {
        "tagid": 13906,
        "name": "Game Development"
    },
    {
        "tagid": 14139,
        "name": "Turn-Based Tactics"
    },
    {
        "tagid": 14153,
        "name": "Dungeons & Dragons"
    },
    {
        "tagid": 14720,
        "name": "Nostalgia"
    },
    {
        "tagid": 14906,
        "name": "Intentionally Awkward Controls"
    },
    {
        "tagid": 15045,
        "name": "Flight"
    },
    {
        "tagid": 15172,
        "name": "Conversation"
    },
    {
        "tagid": 15277,
        "name": "Philosophical"
    },
    {
        "tagid": 15339,
        "name": "Documentary"
    },
    {
        "tagid": 15564,
        "name": "Fishing"
    },
    {
        "tagid": 15868,
        "name": "Motocross"
    },
    {
        "tagid": 15954,
        "name": "Silent Protagonist"
    },
    {
        "tagid": 16094,
        "name": "Mythology"
    },
    {
        "tagid": 16250,
        "name": "Gambling"
    },
    {
        "tagid": 16598,
        "name": "Space Sim"
    },
    {
        "tagid": 16689,
        "name": "Time Management"
    },
    {
        "tagid": 17015,
        "name": "Werewolves"
    },
    {
        "tagid": 17305,
        "name": "Strategy RPG"
    },
    {
        "tagid": 17337,
        "name": "Lemmings"
    },
    {
        "tagid": 17389,
        "name": "Tabletop"
    },
    {
        "tagid": 17770,
        "name": "Asynchronous Multiplayer"
    },
    {
        "tagid": 17894,
        "name": "Cats"
    },
    {
        "tagid": 17927,
        "name": "Pool"
    },
    {
        "tagid": 18594,
        "name": "FMV"
    },
    {
        "tagid": 19568,
        "name": "Cycling"
    },
    {
        "tagid": 19780,
        "name": "Submarine"
    },
    {
        "tagid": 19995,
        "name": "Dark Comedy"
    },
    {
        "tagid": 21006,
        "name": "Underground"
    },
    {
        "tagid": 21725,
        "name": "Tactical RPG"
    },
    {
        "tagid": 21978,
        "name": "VR"
    },
    {
        "tagid": 22602,
        "name": "Agriculture"
    },
    {
        "tagid": 22955,
        "name": "Mini Golf"
    },
    {
        "tagid": 24003,
        "name": "Word Game"
    },
    {
        "tagid": 24904,
        "name": "NSFW"
    },
    {
        "tagid": 25085,
        "name": "Touch-Friendly"
    },
    {
        "tagid": 26921,
        "name": "Political Sim"
    },
    {
        "tagid": 27758,
        "name": "Voice Control"
    },
    {
        "tagid": 28444,
        "name": "Snowboarding"
    },
    {
        "tagid": 29363,
        "name": "3D Vision"
    },
    {
        "tagid": 29482,
        "name": "Souls-like"
    },
    {
        "tagid": 29855,
        "name": "Ambient"
    },
    {
        "tagid": 30358,
        "name": "Nature"
    },
    {
        "tagid": 30927,
        "name": "Fox"
    },
    {
        "tagid": 31275,
        "name": "Text-Based"
    },
    {
        "tagid": 31579,
        "name": "Otome"
    },
    {
        "tagid": 32322,
        "name": "Deckbuilding"
    },
    {
        "tagid": 33572,
        "name": "Mahjong"
    },
    {
        "tagid": 35079,
        "name": "Job Simulator"
    },
    {
        "tagid": 37799,
        "name": "Combat Flight Simulator"
    },
    {
        "tagid": 40500,
        "name": "Sexual Themes"
    },
    {
        "tagid": 42089,
        "name": "Jump Scare"
    },
    {
        "tagid": 42329,
        "name": "Coding"
    },
    {
        "tagid": 42804,
        "name": "Action Roguelike"
    },
    {
        "tagid": 44868,
        "name": "LGBTQ+"
    },
    {
        "tagid": 47827,
        "name": "Wrestling"
    },
    {
        "tagid": 49213,
        "name": "Rugby"
    },
    {
        "tagid": 51306,
        "name": "Foreign"
    },
    {
        "tagid": 56690,
        "name": "On-Rails Shooter"
    },
    {
        "tagid": 61357,
        "name": "Electronic Music"
    },
    {
        "tagid": 71389,
        "name": "Spelling"
    },
    {
        "tagid": 87918,
        "name": "Farming Sim"
    },
    {
        "tagid": 91114,
        "name": "Shop Keeper"
    },
    {
        "tagid": 92092,
        "name": "Jet"
    },
    {
        "tagid": 96359,
        "name": "Skating"
    },
    {
        "tagid": 97376,
        "name": "Cozy"
    },
    {
        "tagid": 102530,
        "name": "Elf"
    },
    {
        "tagid": 117648,
        "name": "8-bit Music"
    },
    {
        "tagid": 123332,
        "name": "Bikes"
    },
    {
        "tagid": 129761,
        "name": "ATV"
    },
    {
        "tagid": 143739,
        "name": "Electronic"
    },
    {
        "tagid": 150626,
        "name": "Gaming"
    },
    {
        "tagid": 158638,
        "name": "Cricket"
    },
    {
        "tagid": 176981,
        "name": "Battle Royale"
    },
    {
        "tagid": 180368,
        "name": "Faith"
    },
    {
        "tagid": 189941,
        "name": "Instrumental Music"
    },
    {
        "tagid": 198631,
        "name": "Mystery Dungeon"
    },
    {
        "tagid": 198913,
        "name": "Motorbike"
    },
    {
        "tagid": 220585,
        "name": "Colony Sim"
    },
    {
        "tagid": 233824,
        "name": "Feature Film"
    },
    {
        "tagid": 252854,
        "name": "BMX"
    },
    {
        "tagid": 255534,
        "name": "Automation"
    },
    {
        "tagid": 323922,
        "name": "Musou"
    },
    {
        "tagid": 324176,
        "name": "Hockey"
    },
    {
        "tagid": 337964,
        "name": "Rock Music"
    },
    {
        "tagid": 348922,
        "name": "Steam Machine"
    },
    {
        "tagid": 353880,
        "name": "Looter Shooter"
    },
    {
        "tagid": 363767,
        "name": "Snooker"
    },
    {
        "tagid": 379975,
        "name": "Clicker"
    },
    {
        "tagid": 454187,
        "name": "Traditional Roguelike"
    },
    {
        "tagid": 552282,
        "name": "Wholesome"
    },
    {
        "tagid": 603297,
        "name": "Hardware"
    },
    {
        "tagid": 615955,
        "name": "Idler"
    },
    {
        "tagid": 620519,
        "name": "Hero Shooter"
    },
    {
        "tagid": 745697,
        "name": "Social Deduction"
    },
    {
        "tagid": 769306,
        "name": "Escape Room"
    },
    {
        "tagid": 776177,
        "name": "360 Video"
    },
    {
        "tagid": 791774,
        "name": "Card Battler"
    },
    {
        "tagid": 847164,
        "name": "Volleyball"
    },
    {
        "tagid": 856791,
        "name": "Asymmetric VR"
    },
    {
        "tagid": 916648,
        "name": "Creature Collector"
    },
    {
        "tagid": 922563,
        "name": "Roguevania"
    },
    {
        "tagid": 1023537,
        "name": "Boomer Shooter"
    },
    {
        "tagid": 1084988,
        "name": "Auto Battler"
    },
    {
        "tagid": 1091588,
        "name": "Roguelike Deckbuilder"
    },
    {
        "tagid": 1100686,
        "name": "Outbreak Sim"
    },
    {
        "tagid": 1100687,
        "name": "Automobile Sim"
    },
    {
        "tagid": 1100688,
        "name": "Medical Sim"
    },
    {
        "tagid": 1100689,
        "name": "Open World Survival Craft"
    },
    {
        "tagid": 1199779,
        "name": "Extraction Shooter"
    },
    {
        "tagid": 1220528,
        "name": "Hobby Sim"
    },
    {
        "tagid": 1254546,
        "name": "Football (Soccer)"
    },
    {
        "tagid": 1254552,
        "name": "Football (American)"
    }
];

export default gameTags;