var myStuff = {
"Angeles":{city:"Los Angeles", state: "California", stadium:"Angel Stadium", sport:"MLB", "coord":[-117.8825,33.80046]},
"Astros":{city:"Houston", state: "TexasMinute Maid ParkMLB", "coord":[-95.35518,29.7572]},
"Athletics":{city:"Las Vegas", state: "NevadaSutter Health ParkMLB", "coord":[-122.20052,37.75162]},
"Blue Jays":{city:"Toronto", state: "CanadaRogers CentreMLB", "coord":[-79.38917,43.6414]},
"Braves":{city:"Atlanta", state: "GeorgiaTruist ParkMLB", "coord":[-84.38925,33.73542]},
"Brewers":{city:"Milwaukee", state: "WisconsonAmerican Family FieldMLB", "coord":[-87.971,43.02834]},
"Cardinals":{city:"St. Louis", state: "MissouriBusch StadiumMLB", "coord":[-90.19249,38.62378]},
"Cubs":{city:"Chicago", state: "IllinoisWrigley FieldMLB", "coord":[-87.65536,41.94822]},
"Devil Rays":{city:"Tampa Bay", state: "FloridaGeorge M Steinbrenner FieldMLB", "coord":[-82.65333,27.76799]},
"Diamondbacks":{city:"Phoenix", state: "ArizonaChase FieldMLB", "coord":[-112.06666,33.44526]},
"Dodgers":{city:"Los Angeles", state: "CaliforniaDodger StadiumMLB", "coord":[-118.23996,34.07388]},
"Giants":{city:"San Francisco", state: "CaliforniaOracle ParkMLB", "coord":[-122.38845,37.77866]},
"Guardians":{city:"Cleveland", state: "OhioProgressive FieldMLB", "coord":[-81.68511,41.49601]},
"Mariners":{city:"Seattle", state: "WashingtonT-Mobile ParkMLB", "coord":[-122.33178,47.59195]},
"Marlins":{city:"Miami", state: "FloridaLoanDepot ParkMLB", "coord":[-80.23868,25.95794]},
"Mets":{city:"New York", state: "New YorkCiti FieldMLB", "coord":[-73.84745,40.75551]},
"Nationals":{city:"Washington", state: "District of ColumbiaNationals ParkMLB", "coord":[-76.97178,38.88989]},
"Orioles":{city:"Baltimore", state: "MarylandCamden YardsMLB", "coord":[-76.6213,39.28394]},
"Padres":{city:"San Diego", state: "CaliforniaPetco ParkMLB", "coord":[-117.15708,32.70724]},
"Phillies":{city:"Philadelphia", state: "PennsilvaniaCitizens Bank ParkMLB", "coord":[-75.16632,39.90596]},
"Pirates":{city:"Pittsburgh", state: "PennsilvaniaPNC ParkMLB", "coord":[-80.0056,40.44684]},
"Rangers":{city:"Arlington", state: "TexasGlobe Life FieldMLB", "coord":[-97.08269,32.75119]},
"Reds":{city:"Cincinnati", state: "OhioGreat American Ball ParkMLB", "coord":[-84.50707,39.09714]},
"Red Sox":{city:"Boston", state: "MassachusettsFenwayMLB", "coord":[-71.09698,42.34666]},
"Rockies":{city:"Denver", state: "ColoradoCoors FieldMLB", "coord":[-104.99402,39.7562]},
"Royals":{city:"Kansas City", state: "MissouriKauffman StadiumMLB", "coord":[-94.4801,39.05158]},
"Tigers":{city:"Detroit", state: "MichiganComerica ParkMLB", "coord":[-83.04843,42.33907]},
"Twins":{city:"Minneapolis", state: "MinnesotaTarget FieldMLB", "coord":[-93.25789,44.97379]},
"White Sox":{city:"Chicago", state: "IllinoisGuaranteed Rate FieldMLB", "coord":[-87.63335,41.82981]},
"Yankees":{city:"New York", state: "New YorkYankee StadiumMLB", "coord":[-73.9274,40.82661]},
"Jaguars ":{city:"Jacksonville", state: "FloridaEverBank StadiumNFL", "coord":[-81.637323,30.323925]},
"Chiefs ":{city:"Kansas City", state: "MissouriArrowhead StadiumNFL", "coord":[-94.483916,39.048939]},
"Ravens":{city:"Baltimore", state: "MarylandM&T Bank StadiumNFL", "coord":[-76.622704,39.277988]},
"Panthers ":{city:"Charlotte", state: "North CarolinaBank of America StadiumNFL", "coord":[-80.852835,35.225832]},
"Browns":{city:"Cleveland", state: "OhioHuntington Bank FieldNFL", "coord":[-81.699548,41.506054]},
"Commanders":{city:"Washington", state: "District of ColumbiaNorthwest StadiumNFL", "coord":[-76.864546,38.907643]},
"Lions":{city:"Detroit", state: "MichiganFord FieldNFL", "coord":[-83.045603,42.340006]},
"Falcons":{city:"Atlanta", state: "GeorgiaMercedes-Benz StadiumNFL", "coord":[-84.401067,33.755429]},
"Patriots":{city:"New England", state: "MassachusettsGillette StadiumNFL", "coord":[-71.264346,42.090946]},
"Broncos":{city:"Denver", state: "ColoradoEmpower Field at Mile HighNFL", "coord":[-105.020105,39.743939]},
"Titans":{city:"Nashville", state: "TennesseeNissan StadiumNFL", "coord":[-86.77129,36.166479]},
"Packers":{city:"Green Bay", state: "WisconsonLambeau FieldNFL", "coord":[-88.062208,44.501341]},
"Eagles":{city:"Philadelphia", state: "PennsilvaniaLincoln Financial FieldNFL", "coord":[-75.167463,39.900767]},
"Saints":{city:"New Orleans", state: "LouisianaSuperdomeNFL", "coord":[-90.081244,29.951061]},
"Vikings ":{city:"Minneapolis", state: "MinnesotaU.S. Bank StadiumNFL", "coord":[-93.257307,44.973603]},
"49ers":{city:"San Francisco", state: "CaliforniaLevi's StadiumNFL", "coord":[-121.969836,37.403219]},
"Bengals":{city:"Cincinnati", state: "OhioPaycor Stadium  (The Jungle)NFL", "coord":[-84.516058,39.095458]},
"Steelers":{city:"Pittsburgh", state: "PennsilvaniaAcrisure StadiumNFL", "coord":[-80.01576,40.446765]},
"Dolphins":{city:"Miami", state: "FloridaHard Rock StadiumNFL", "coord":[-80.23886,25.957967]},
"Seahawks":{city:"Seattle", state: "WashingtonLumen FieldNFL", "coord":[-122.331639,47.595152]},
"Bills":{city:"Buffalo", state: "New YorkHighmark StadiumNFL", "coord":[-78.786973,42.77376]},
"Buccaneers":{city:"Tampa Bay", state: "FloridaRaymond James StadiumNFL", "coord":[-82.503334,27.975869]},
"Colts":{city:"Indianapolis", state: "IndianaLucas Oil StadiumNFL", "coord":[-86.163888,39.760101]},
"Texans ":{city:"Houston", state: "TexasNRG StadiumNFL", "coord":[-95.410736,29.684904]},
"Bears":{city:"Chicago", state: "IllinoisSoldier FieldNFL", "coord":[-87.616688,41.862313]},
"Cardinals ":{city:"Phoenix", state: "ArizonaState Farm StadiumNFL", "coord":[-112.262567,33.527781]},
"Giants & Jets":{city:"New York", state: "New YorkMetLife StadiumNFL", "coord":[-74.074209,40.81284]},
"Cowboys  ":{city:"Dallas", state: "TexasAT&T StadiumNFL", "coord":[-97.094494,32.747284]},
"Raiders ":{city:"Las Vegas", state: "NevadaAllegiant Stadium - (Death Star)NFL", "coord":[-115.183554,36.089913]},
"Rams & Chargers":{city:"Los Angeles", state: "CaliforniaSoFi StadiumNFL", "coord":[-118.339096,33.953249]},
"Maple Leafs":{city:"Toronto", state: "CanadaScotiabank ArenaNHL", "coord":[-79.379099,43.643466]},
"Stars":{city:"Dallas", state: "TexasAmerican Airlines CenterNHL", "coord":[-96.810355,32.790506]},
"Panthers":{city:"Sunrise", state: "FloridaAmerant Bank ArenaNHL", "coord":[-80.325443,26.158134]},
"Canadiens":{city:"Montreal", state: "CanadaNationwide ArenaNHL", "coord":[-73.569159,45.495849]},
"Devils":{city:"Newark", state: "New JerseyPrudential CenterNHL", "coord":[-74.171283,40.733405]},
"Predators":{city:"Nashville", state: "TennesseeBridgestone ArenaNHL", "coord":[-86.7785,36.15912]},
"Canucks":{city:"Vancouver", state: "CanadaRogers ArenaNHL", "coord":[-123.108787,49.277829]},
"Ducks":{city:"Anaheim", state: "CaliforniaHonda CenterNHL", "coord":[-117.876545,33.807857]},
"Sharks":{city:"San Jose", state: "CaliforniaSAP CenterNHL", "coord":[-121.901232,37.332768]},
"Sabres":{city:"Buffalo", state: "New YorkKeyBank CenterNHL", "coord":[-78.87665,42.874973]},
"Red Wings":{city:"Detroit", state: "MichiganLittle Caesars ArenaNHL", "coord":[-83.055236,42.34114]},
"Rangers":{city:"New York", state: "New YorkMadison Square GardenNHL", "coord":[-73.993439,40.750504]},
"Penguins":{city:"Pittsburgh", state: "PennsilvaniaPPG Paints ArenaNHL", "coord":[-79.989484,40.439672]},
"Islanders":{city:"New York", state: "New YorkUBS ArenaNHL", "coord":[-73.726126,40.711793]},
"Blue Jackets":{city:"Columbus", state: "OhioNationwide ArenaNHL", "coord":[-83.005987,39.969309]},
"Flames":{city:"Calgary", state: "CanadaScotiabank SaddledomeNHL", "coord":[-114.051951,51.037387]},
"Avalanche":{city:"Denver", state: "ColoradoBall ArenaNHL", "coord":[-105.00771,39.74866]},
"Hurricanes":{city:"Raleigh", state: "North CarolinaLenovo CenterNHL", "coord":[-78.721875,35.80337]},
"Oilers":{city:"Edmonton", state: "CanadaRogers PlaceNHL", "coord":[-113.497744,53.546887]},
"Senators":{city:"Ottawa", state: "CanadaCanadian Tire CenterNHL", "coord":[-75.926949,45.296988]},
"Blues":{city:"St. Louis", state: "MissouriEnterprise CenterNHL", "coord":[-90.202632,38.626862]},
"Kings":{city:"Los Angeles", state: "CaliforniaCrypto.com ArenaNHL", "coord":[-118.267254,34.043017]},
"Lightning":{city:"Tampa Bay", state: "FloridaAmelie ArenaNHL", "coord":[-82.451905,27.942702]},
"Bruins":{city:"Boston", state: "MassachusettsTD GardenNHL", "coord":[-71.062146,42.366198]},
"Blackhawks":{city:"Chicago", state: "IllinoisUnited CenterNHL", "coord":[-87.674176,41.880691]},
"Capitals":{city:"Washington", state: "District of ColumbiaCapitol One ArenaNHL", "coord":[-77.02088,38.898125]},
"Flyers":{city:"Philadelphia", state: "PennsilvaniaWells Fargo CenterNHL", "coord":[-75.17198,39.901201]},
"Wild":{city:"Minneapolis", state: "MinnesotaXcel Energy CenterNHL", "coord":[-93.101081,44.944818]},
"Jets":{city:"Winnipeg", state: "CanadaCanada Life CentreNHL", "coord":[-97.143616,49.892533]},
"Golden Knights":{city:"Las Vegas", state: "NevadaT-Mobile ArenaNHL", "coord":[-115.178178,36.102758]},
"Kraken":{city:"Seattle", state: "WashingtonClimate Pledge ArenaNHL", "coord":[-122.35398,47.62214]},
"Utah Hockey Club ":{city:"Salt Lake City", state: "UtahDelta CenterNHL", "coord":[-111.901087,40.768268]},
"Hawks":{city:"Atlanta", state: "GeorgiaState Farm ArenaNBA", "coord":[-84.396324,33.757289]},
"Celtics":{city:"Boston", state: "MassachusettsTD GardenNBA", "coord":[-71.062146,42.366198]},
"Hornets":{city:"Charlotte", state: "North CarolinaSpectrum CenterNBA", "coord":[-80.839235,35.225143]},
"Bulls":{city:"Chicago", state: "IllinoisUnited CenterNBA", "coord":[-87.674176,41.880691]},
"Cavaliers":{city:"Cleveland", state: "OhioRocket Mortgage FieldHouseNBA", "coord":[-81.688209,41.496554]},
"Mavericks":{city:"Dallas", state: "TexasAmerican Airlines CenterNBA", "coord":[-96.810355,32.790506]},
"Nuggets":{city:"Denver", state: "ColoradoBall ArenaNBA", "coord":[-105.00771,39.74866]},
"Pistons":{city:"Detroit", state: "MichiganLittle Caesars ArenaNBA", "coord":[-83.055236,42.34114]},
"Rocket":{city:"Houston", state: "TexasToyota CenterNBA", "coord":[-95.3621,29.75076]},
"Pacers":{city:"Indianapolis", state: "IndianaGainbridge FieldhouseNBA", "coord":[-86.155464,39.76393]},
"Lakers":{city:"Los Angeles", state: "CaliforniaCrypto.com ArenaNBA", "coord":[-118.267254,34.043017]},
"Golden State Warriors":{city:"Okland", state: "CaliforniaChase CenterNBA", "coord":[-122.387766,37.768005]},
"Grizzlies":{city:"Memphis", state: "TennesseeFedEx ForumNBA", "coord":[-90.050474,35.138204]},
"Heat":{city:"Miami", state: "FloridaKaseya CenterNBA", "coord":[-80.186977,25.781402]},
"Bucks":{city:"Milwaukee", state: "WisconsonFiserv ForumNBA", "coord":[-87.91715,43.04514]},
"Timberwolves":{city:"Minneapolis", state: "MinnesotaTarget CenterNBA", "coord":[-93.27619,44.979455]},
"Nets":{city:"Brooklyn", state: "New YorkBarclays CenterNBA", "coord":[-73.975035,40.682495]},
"Pelicans":{city:"New Orleans", state: "LouisianaSmoothie King CenterNBA", "coord":[-90.082057,29.949035]},
"Knickerbockers":{city:"New York", state: "New YorkMadison Square GardenNBA", "coord":[-73.993439,40.750504]},
"Thunder":{city:"Oklahoma City", state: "OklahomaPaycom CenterNBA", "coord":[-97.515118,35.463417]},
"Magic":{city:"Orlando", state: "FloridaKia CenterNBA", "coord":[-81.383935,28.539269]},
"76ers":{city:"Philadelphia", state: "PennsilvaniaWells Fargo CenterNBA", "coord":[-75.17198,39.901201]},
"Suns":{city:"Phoenix", state: "ArizonaFootprint CenterNBA", "coord":[-112.071174,33.4458]},
"Trailblazers":{city:"Portland", state: "OregonModa CenterNBA", "coord":[-122.666842,45.531565]},
"Kings":{city:"Sacramento", state: "CaliforniaGolden 1 CenterNBA", "coord":[-121.499619,38.580641]},
"Spurs":{city:"San Antonio", state: "TexasFrost Bank CenterNBA", "coord":[-98.437445,29.427071]},
"Raptors":{city:"Toronto", state: "CanadaScotiabank ArenaNBA", "coord":[-79.379099,43.643466]},
"Jazz":{city:"Salt Lake City", state: "UtahDelta CenterNBA", "coord":[-111.901087,40.768268]},
"Wizards":{city:"Washington", state: "District of ColumbiaCapital One ArenaNBA", "coord":[-77.02088,38.898125]},
"Clippers":{city:"Los Angeles", state: "CaliforniaIntuit DomeNBA", "coord":[-118.342377,33.943812]},
"Crew":{city:"Columbus", state: "OhioCrew StadiumMLS", "coord":[-82.991259,40.008151]},
"Rapids":{city:"Denver", state: "ColoradoDick's Sporting Goods ParkMLS", "coord":[-104.90011,39.798487]},
"FC Dallas":{city:"Dallas", state: "TexasPizza Hut ParkMLS", "coord":[-96.839222,33.152794]},
"Dynamo":{city:"Houston", state: "TexasRobertson StadiumMLS", "coord":[-95.349284,29.72199]},
"Galaxy / Los Angeles FC":{city:"Los Angeles", state: "CaliforniaHome Depot CenterMLS", "coord":[-118.262505,33.866296]},
"Real Salt Lake":{city:"Salt Lake City", state: "UtahRice-Eccles StadiumMLS", "coord":[-111.848835,40.759949]},
"Fire":{city:"Chicago", state: "IllinoisToyota ParkMLS", "coord":[-87.804107,41.762857]},
"DC United":{city:"Washington", state: "District of ColumbiaRFK StadiumMLS", "coord":[-76.973553,38.8898]},
"Wizards":{city:"Kansas City", state: "MissouriArrowhead StadiumMLS", "coord":[-94.484111,39.048982]},
"Revolution":{city:"New England", state: "MassachusettsGillette StadiumMLS", "coord":[-71.26433,42.090969]},
"Red Bulls":{city:"New York", state: "New YorkGiants StadiumMLS", "coord":[-74.077002,40.812241]},
"Toronto FC":{city:"Toronto", state: "CanadaBMO FieldMLS", "coord":[-79.376661,43.641773]},
"CF Montreal":{city:"Montreal", state: "CanadaSaputo StadiumMLS", "coord":[-73.552690589188,45.5631338631421]},
"Union":{city:"Philadelphia", state: "PennsilvaniaSubaru ParkMLS", "coord":[-75.3783807291469,39.8329197160008]},
"Cincinnati":{city:"Cincinnati", state: "OhioTQL StadiumMLS", "coord":[-84.5222764605972,39.111255342019]},
"Inter Miami":{city:"Miami", state: "FloridaChase StadiumMLS", "coord":[-80.2314666676199,27.1107316009237]},
"Minnesota United":{city:"Minneapolis", state: "MinnesotaAllianz FieldMLS", "coord":[-93.1647937045558,44.9532827530554]},
"Nashville FC":{city:"Nashville", state: "TennesseeGeodis ParkMLS", "coord":[-86.7654610146688,36.1303659159713]},
"Charlotte FC":{city:"Charlotte", state: "North CarolinaBank of America StadiumMLS", "coord":[-80.853007918399,35.225910936086]},
"Atlanta United":{city:"Atlanta", state: "GeorgiaMercedes-Benz StadiumMLS", "coord":[-84.4006226896089,33.7555461766644]},
"Austin FC":{city:"Austin", state: "TexasQ2 StadiumMLS", "coord":[-97.7193321878555,30.3878478789185]},
"Orlando City SC":{city:"Orlando", state: "FloridaInter&Co StadiumMLS", "coord":[-81.3889727437252,28.5413524256278]},
"Sounders":{city:"Seattle", state: "WashingtonLumen FieldMLS", "coord":[-122.331564300745,47.5952313577818]},
"Whitecaps FC":{city:"Vancouver", state: "CanadaBC PlaceMLS", "coord":[-123.111913171838,49.276910960939]},
"Fleet":{city:"Boston", state: "MassachusettsTsongas CenterPWHL", "coord":[-71.3132188027955,42.6498577974857]},
"Frost":{city:"Minneapolis", state: "MinnesotaXcel Energy CenterPWHL", "coord":[-93.1011603180487,44.9449499581635]},
"Victoire":{city:"Montreal", state: "CanadaPlace BellPWHL", "coord":[-73.7212402315167,45.5562721948232]},
"Sirens":{city:"New York", state: "New YorkPrudential CenterPWHL", "coord":[-74.1683247920497,40.7486242020949]},
"Charge":{city:"Ottawa", state: "CanadaTD Place ArenaPWHL", "coord":[-75.6836049891947,45.3985693077829]},
"Sceptres":{city:"Toronto", state: "CanadaCoca-Cola ColiseumPWHL", "coord":[-79.4152867162501,43.6350730011402]},
"Spirit":{city:"Washington", state: "District of ColumbiaAudi FieldNWSL", "coord":[-77.0128585740983,38.8685762920239]},
"Reign":{city:"Tacoma", state: "WashingtonCheney StadiumNWSL", "coord":[-122.497553875626,47.2382680584585]},
"Current":{city:"Kansas City", state: "MissouriCPKC StadiumNWSL", "coord":[-94.4780765466922,39.3388591659339]},
"Pride":{city:"Orlando", state: "FloridaExploria StadiumNWSL", "coord":[-81.3890907609189,28.5413712756007]},
"Racing Louisville":{city:"Louisville", state: "KentuckyLyn Family StadiumNWSL", "coord":[-85.7331996177598,38.2601481904662]},
"Thorns ":{city:"Portland", state: "OregonProvidence ParkNWSL", "coord":[-122.69182294501,45.5217493484548]},
"NJ / NY Gotham FC":{city:"Harrison", state: "New JerseyRed Bull ArenaNWSL", "coord":[-74.1502033163598,40.7369736416396]},
"Red Stars":{city:"Chicago", state: "IllinoisSeat Geek StadiumNWSL", "coord":[-87.8053900316649,41.7649336157865]},
"Dash":{city:"Houston", state: "TexasShell Energy StadiumNWSL", "coord":[-95.3522923320515,29.7523365370359]},
"Courage":{city:"Cary", state: "North North CarolinaWakeMed Soccer ParkNWSL", "coord":[-78.7550482876946,35.7867555371707]},
"Angel City":{city:"Los Angeles", state: "CaliforniaBMO StadiumNWSL", "coord":[-118.284053545422,34.0130076113437]},
"Bay FC":{city:"Tampa Bay", state: "FloridaPayPal ParkNWSL", "coord":[-121.9245659723,37.3513327319059]},
"Royals":{city:"Salt Lake City", state: "UtahAmerica First FieldNWSL", "coord":[-111.893459447051,40.5829286423795]},
"Bos Nation":{city:"Boston", state: "MassachusettsWhite StadiumNWSL", "coord":[-71.0958660874654,42.3099429247006]},
"Waves ":{city:"San Diego", state: "CaliforniaSnapdragon StadiumNWSL", "coord":[-117.122350772444,32.7842389125261]},
"Dream":{city:"Atlanta", state: "GeorgiaState Farm ArenaWNBA", "coord":[-84.3963677702953,33.7576050791583]},
"Sky":{city:"Chicago", state: "IllinoisWintrust ArenaWNBA", "coord":[-87.6213212451541,41.8539026899966]},
"Sun":{city:"Uncasville", state: "ConnecticutMohegan Sun ArenaWNBA", "coord":[-72.0897085605108,41.4912753920275]},
"Fever":{city:"Indianapolis", state: "IndianaGainbridge FieldhouseWNBA", "coord":[-86.1554203896147,39.7648594802738]},
"Liberty":{city:"New York", state: "New YorkWestchester County CenterWNBA", "coord":[-73.7786209549761,41.0369776341532]},
"Mystics":{city:"D.C", state: "WashingtonCapital One ArenaWNBA", "coord":[-77.0208138875899,38.8983762178834]},
"Wings":{city:"Dallas", state: "TexasCollege Park CenterWNBA", "coord":[-97.1080034166248,32.7308142547912]},
"Golden State Valkyries":{city:"San Francisco", state: "CaliforniaChase CenterWNBA", "coord":[-122.38789867676,37.7682047840166]},
"Aces":{city:"Las Vegas", state: "NevadaMichelob Ultra ArenaWNBA", "coord":[-115.178901845356,36.090764618003]},
"Sparks":{city:"Los Angeles", state: "CaliforniaCrypto.com ArenaWNBA", "coord":[-118.267254103092,34.043177494835]},
"Lynx":{city:"Minneapolis", state: "MinnesotaTarget CenterWNBA", "coord":[-93.2760303296894,44.9795846973667]},
"Mercury":{city:"Phoenix", state: "ArizonaFootprint CenterWNBA", "coord":[-112.071189574275,33.4459518266095]},
"Storm":{city:"Seattle", state: "WashingtonClimate Pledge ArenaWNBA", "coord":[-122.35404983779,47.6222015670713]}
}