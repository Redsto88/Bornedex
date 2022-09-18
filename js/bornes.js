var bornes = [
    /*{ "nom": "Mairie dijon", "x": "0", "y": "0", "alt": "250.564" },*/
    /*{ "nom": "Random bâtiment Strasbourg", "x": "0", "y": "0", "alt": "0" },*/
    { "id": 0, "nom": "Boulangerie campaillette Dijon", "x": "47.324377426803196", "y": "5.029040749716927", "alt": "251.997", "ville":"Dijon" },
    { "id": 1, "nom": "Hôtel de Bretagne Dijon", "x": "47.31988636288924", "y": "5.040121982996752", "alt": "243.564", "ville": "Dijon", "wiki":"https://fr.wikipedia.org/wiki/H%C3%B4tel_de_Bretagne" },
    { "id": 2, "nom": "Porte Stanislas Nancy", "x": "48.69115585206748", "y": "6.17552904382446", "alt": "246", "ville": "Nancy"},
    { "id": 3, "nom": "Arc héré Nancy", "x": "48.69441572905896", "y": " 6.18268347019083", "alt": "inconnue", "ville": "Nancy", "wiki":"https://fr.wikipedia.org/wiki/Arc_H%C3%A9r%C3%A9" },
    { "id": 4, "nom": "Porte Guillaume", "x": "47.323302114219", "y": "5.0347434178908985", "alt": "245.807", "ville": "Dijon", "wiki":"https://fr.wikipedia.org/wiki/Porte_Guillaume_(Dijon)" },
    { "id": 5, "nom": "Banque LCL Tulle", "x": "45.266338188125495", "y": "1.7705654100440575", "alt": "inconnue", "ville":"Tulle" },    
    { "id": 6, "nom": "Brivezac sur dordogne lieu dit Peyriget", "x": "45.00169850940791", "y": "1.839096248070066", "alt": "149.55", "ville": "Beaulieu-sur-Dordogne" },
    { "id": 7, "nom": "Caserne Paris 1", "x": "48.85467630404854", "y": "2.3475930720990132", "alt": "inconnue", "ville":"Paris" },
    { "id": 8, "nom": "Caserne Paris 2", "x": "48.854496420713986", "y": "2.34752101020763", "alt": "35.949", "ville":"Paris" },
    { "id": 9, "nom": "Cathédrale Notre-Dame-de-l'Assomption (Nord) Clermont-Ferrand", "x": "45.77887693912433", "y": "3.086040963630065", "alt": "354.056", "ville": "Clermont-Ferrand", "wiki":"https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame-de-l%27Assomption_de_Clermont"},
    { "id": 10, "nom": "Cathédrale Notre-Dame-de-l'Assomption (Sud) Clermont-Ferrand", "x": "45.77854875182503", "y": "3.085968979104246", "alt": "inconnue", "ville": "Clermont-Ferrand", "wiki": "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame-de-l%27Assomption_de_Clermont" },
    { "id": 11, "nom": "Cathédrale Notre-Dame Tulle", "x": "45.26798228069819", "y": "1.770754998330699", "alt": "inconnue", "ville": "Tulle", "wiki": "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Tulle" },
    { "id": 12, "nom": "Cathédrale Notre-Dame de Strasbourg", "x": "48.581683406099174", "y": "7.75032915300844", "alt": "144.665", "ville": "Strasbourg", "wiki": "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Strasbourg" },
    { "id": 13, "nom": "Cathédrale Notre-Dame-de-l'Annonciation Nancy", "x": "48.6915100891874", "y": "6.185734518077786", "alt": "inconnue", "ville": "Nancy", "wiki": "https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame-de-l%27Annonciation_de_Nancy" },
    { "id": 14, "nom": "Collège Simone Veil, Cheneraille", "x": "46.110746800392924", "y": "2.172894382954418", "alt": "531", "ville": "Cheneraille"},
    { "id": 15, "nom": "Cimetière Vert-Saint-Denis", "x": "48.570239463456566", "y": "2.6129995265003860", "alt": "inconnue", "ville": "Vert-Saint-Denis" },
    { "id": 16, "nom": "Cimetière de Pont à Mousson", "x": "48.906322616208115", "y": "6.061355894430302", "alt": "189", "ville": "Mousson" },
    { "id": 17, "nom": "Cimetière de Rougnat", "x": "46.05800360766778", "y": "2.502295936473763", "alt": "inconnue", "ville": "Rougnat" },
    { "id": 18, "nom": "Croisement rue du cailloux Cesson", "x": "48.5679623516244", "y": "2.59854884126762680", "alt": "inconnue", "ville": "Cesson" },
    { "id": 19, "nom": "Église Sainte-Libaire Damelevieres", "x": "48.55672054161744", "y": "6.3871258777734", "alt": "221", "ville": "Damelevieres" },
    { "id": 20, "nom": "Eglise Saint-Julien Tours", "x": "47.39579030141666", "y": "0.68703430613512", "alt": "inconnue", "ville": "Tours", "wiki": "https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Julien_de_Tours"},
    { "id": 21, "nom": "Eglise Saint-Etienne Voinsles", "x": "48.69046824978045", "y": "3.0031793191265366", "alt": "113", "ville": "Voinsles" },
    { "id": 22, "nom": "Abbaye d'Aubazine", "x": "45.174444427704536", "y": "1.6702706674570613", "alt": "inconnue", "ville": "Aubazine", "wiki": "https://fr.wikipedia.org/wiki/Abbaye_d%27Aubazine" },
    {"id":23, "nom": "Eglise d'Egleton", "x": "45.40613279906627", "y": "2.045740906421809", "alt": "653" },
    {"id":24, "nom": "Eglise de Jard-Sur-Mer", "x": "46.42029877116087", "y": "-1.573939967121303", "alt": "14" },
    {"id":25, "nom": "Eglise de Jarnage", "x": "46.181099783542855", "y": "2.0856175953433667", "alt": "475" },
    {"id":26, "nom": "Eglise de Maron", "x": "48.635482212641655", "y": "6.048294863781719", "alt": "inconnue" },
    {"id":27, "nom": "Eglise de la Savonnières", "x": "47.347862270298855", "y": "0.5451791839336032", "alt": "47" },
    {"id":28, "nom": "Eglise lac Xonrupt-Longemer", "x": "48.07698770534409", "y": "6.945595538189629", "alt": "inconnue" },
    { "id": 29, "nom": "Chapelle du Sacré-Cœur Les Sables d'Olonnes", "x": "46.496381363378546", "y": "-1.781664803075823", "alt": "9", "ville": "Les Sables d'Olonnes" },
    {"id":30, "nom": "Ensemble scolaire Foucault Nancy", "x": "48.69020773713943", "y": "6.187689363489561", "alt": "138.7" },
    {"id":31, "nom": "Espace culturel charle boizard Puy-l'évêque", "x": "44.50443263913613", "y": "1.139398128499645", "alt": "127" },
    {"id":32, "nom": "Faculté de droits Nancy", "x": "48.69338032911849", "y": "6.176569179097144", "alt": "243.5" },
    {"id":33, "nom": "Fontaine des bosquets Luneville", "x": "48.59374855688748", "y": "6.496712058907699", "alt": "234.401" },
    {"id":34, "nom": "Gare varangéville", "x": "48.63530817381197", "y": "6.313065383230644", "alt": "inconnue" },
    {"id":35, "nom": "Hôtel Dieu Paris", "x": "48.853755621516285", "y": "2.3488648079926646", "alt": "inconnue" },
    {"id":36, "nom": "Hôtel de ville Luneville", "x": "48.59184470609504", "y": "6.492129543061259", "alt": "234.038" },
    {"id":37, "nom": "Institut de Paris 1", "x": "48.857787576625824", "y": "2.3364224738562243", "alt": "inconnue" },
    {"id":38, "nom": "Institut de Paris 2", "x": "48.85720219314348", "y": "2.3365549728264394", "alt": "inconnue" },
    {"id":39, "nom": "L'église de saint Pierre ès liens, Saint Pierre Cherignat", "x": "45.974090620103155", "y": "1.606493555451288", "alt": "inconnue" },
    {"id":40, "nom": "Mairie Nancy", "x": "48.69318046422626", "y": "6.183653929288364", "alt": "201" , "wiki":"https://fr.wikipedia.org/wiki/Place_Stanislas" },
    {"id":41, "nom": "Mairie de Boussac", "x": "46.34810462066158", "y": "2.2139764127809056", "alt": "377" },
    {"id":42, "nom": "Mairie de Brive-la-Gaillarde", "x": "45.15940591321425", "y": "1.5338746191322712", "alt": "114" },
    {"id":43, "nom": "Monument aux morts Col de Laléger", "x": "46.03894079812632", "y": "1.5900774492641307", "alt": "inconnue" },
    {"id":44, "nom": "Opéra de Nancy", "x": "48.69387065179138", "y": "6.184090129993062", "alt": "201.2" },
    {"id":45, "nom": "Palais des états Dijon", "x": "47.32146483453007", "y": "5.041555195612352", "alt": "244.703" },
    {"id":46, "nom": "Pont de Maron", "x": "48.63451647695748", "y": "6.042954434662606", "alt": "inconnue" },
    {"id":47, "nom": "Pont de l'Indre, Azay le rideau", "x": "47.26038795328215", "y": "0.46464858737402903", "alt": "46" },
    {"id":48, "nom": "Port Saint Tropez", "x": "43.273810804217554", "y": "6.638654767545435", "alt": "2" },
    {"id":49, "nom": "Porte Saint-Georges Nancy", "x": "48.69232322971854", "y": "6.18818689883684", "alt": "198.5" },
    {"id":50, "nom": "Porte de la Craffe Nancy", "x": "48.69886329335995", "y": "6.177775769527502", "alt": "200" },
    {"id":51, "nom": "Place de la Poste de Pionnat", "x": "46.1709017397444", "y": "2.02523561373274", "alt": "452" },
    {"id":52, "nom": "Puit Gassin", "x": "43.22846211297053", "y": "6.585470407406807", "alt": "189.1" },
    {"id":53, "nom": "Restaurant Floréal Luneville", "x": "48.59192445140089", "y": "6.495616200101397", "alt": "inconnue" },
    {"id":54, "nom": "Route de haraucourt", "x": "48.649402332266654", "y": "6.33361749523677", "alt": "inconnue" },
    { "id": 55, "nom": "Rue de l'hôtel de Ville Merlines", "x": "45.64669512124714", "y": "2.460927152602937", "alt": "770", "ville": "Merlines" },
    { "id": 56, "nom": "Saint Germain les belles", "x": "45.613787364189896", "y": "1.4895267670268029", "alt": "424", "ville": "Saint-Germain-les-Belles", "wiki": "https://fr.wikipedia.org/wiki/Saint-Germain-les-Belles" },
    { "id": 57, "nom": "Jardin Darcy Dijon", "x": "47.32384259789241", "y": "5.033475123175144", "alt": "250.977", "ville": "Dijon", "wiki": "https://fr.wikipedia.org/wiki/Jardin_Darcy" },
    {"id":58, "nom": "Stalingrad Paris", "x": "48.884007465984034", "y": "2.3692692087578098", "alt": "inconnue" },
    {"id":59, "nom": "Temple protestant Nancy", "x": "48.68997439564464", "y": "6.177815054827749", "alt": "212.8" },
    {"id":60, "nom": "Théâtre Strasbourg", "x": "48.586496243825515", "y": "7.754963834267567", "alt": "140.542" },
    { "id": 61, "nom": "Théâtre Les 7 collines Tulle", "x": "45.26689425786952", "y": "1.7711660485738887", "alt": "213", "ville": "Tulle", "wiki": "https://fr.wikipedia.org/wiki/Les_7_collines_(Tulle)" },
    {"id":62, "nom": "Tribunal judiciaire Tulle", "x": "45.26549613511575", "y": "1.7705296508401507", "alt": "213" },
    { "id": 63, "nom": "Arcade Saint-Epvre Nancy", "x": "48.69659786152611", "y": "6.180527442810942", "alt": "inconnue", "ville": "Nancy" },
    { "id": 64, "nom": "Gare de Tulle", "x": "45.25864746568026", "y": "1.7564337389836062", "alt": "212.944", "ville": "Tulle", "wiki": "https://fr.wikipedia.org/wiki/Gare_de_Tulle" },
    {"id":65, "nom": "Saint-Pardoux-les-Cards lieu dit Ecurat", "x": "46.09659578063166", "y": "2.151974109708316", "alt": "inconnue" },
    { "id": 66, "nom": "Lycée Chaptal Paris", "x": "48.88191186782011", "y": "2.3203378412597293", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Lyc%C3%A9e_Chaptal" },
    { "id": 67, "nom": "Musée Magnin Dijon", "x": "47.32093375809003", "y": "5.042327624346835", "alt": "244.977", "ville": "Dijon", "wiki": "https://fr.wikipedia.org/wiki/Mus%C3%A9e_Magnin" },
    {"id":68, "nom": "notre dame de la route Fontanières", "x": "46.110075711149456", "y": "2.5003131524628426", "alt": "549" },
    {"id":69, "nom": "pont saint julien au bois le pied de lune", "x": "45.12763325005808", "y": "2.139788836512123", "alt": "564" },
    {"id":70, "nom": "porte de la Villette 1 Paris", "x": "48.899567539838955", "y": "2.3879697334532493", "alt": "inconnue" },
    {"id":71, "nom": "porte de la Villette 2 Paris", "x": "48.89806189131463", "y": "2.386320121353912", "alt": "inconnue" },
    {"id":72, "nom": "rue Georges Toussaint Varangéville", "x": "48.637026184569976", "y": "6.323395786801033", "alt": "inconnue" },
    { "id": 73, "nom": "vieux bâtiment Cesson", "x": "48.56647022256168", "y": "2.6031514429407830", "alt": "inconnue", "ville": "Cesson" },
    {"id":74, "nom": "Église Rosières-aux-Salines", "x": "48.59406696265421", "y": "6.3326936002263480", "alt": "inconnue" },
    {"id":75, "nom": "Eglise Ducal Nancy", "x": "48.69761019273807", "y": "6.179054990625346", "alt": "201.5" },
    {"id":76, "nom": "Caillou, au croisement de la départementale 941 avant St Amand Jartoudeix lieu dit Le Nouhaud", "x": "45.930435618421875", "y": "1.6514439343206604", "alt": "486" },
    {"id":77, "nom": "Eglise de Bourganeuf", "x": "45.95365227898478", "y": "1.7561269287490469", "alt": "446.285" },
    {"id":78, "nom": "Eglise Savigny-le-temple", "x": "48.57565646203012", "y": "2.5828722132442183", "alt": "446.285" },
    {"id":79, "nom": "Mur d'une maison, Savigny-le-temple", "x": "48.57540668909647", "y": "2.582275549932581", "alt": "446.285" },
    {"id":80, "nom": "Mairie annexe Villers-sur-Mer", "x": "49.32142209777034", "y": "-0.004810816742217145", "alt": "16" },
    {"id":81, "nom": "Poste Villers-sur-Mer", "x": "49.321971168145666", "y": "-0.004635424620449258", "alt": "13" },
    {"id":82, "nom": "Eglise Saint-Martin Villers-sur-Mer", "x": "49.32081501238101", "y": "-0.0059489234901346786", "alt": "17" },
    {"id":83, "nom": "Eglise Trouville-sur-Mer", "x": "49.36496910140653", "y": "0.08423655639246685", "alt": "inconnue" },
    {"id":84, "nom": "Eglise Villerville", "x": "49.399788230185685", "y": "0.1283282896859487", "alt": "35" },
    {"id":85, "nom": "Chapelle aux Lierres Cricqueboeuf", "x": "49.40204829060152", "y": "0.14562449697418453", "alt": "37" },
    {"id":86, "nom": "La lieutenance Honfleur", "x": "49.421170121575685", "y": "0.23356644013252456", "alt": "inconnue" },
    {"id":87, "nom": "Vieux bassin Honfleur", "x": "49.419892285910144", "y": "0.23231172951945425", "alt": "inconnue" },
    {"id":88, "nom": "Port Honfleur, grande roue", "x": "49.42044358506204", "y": "0.23653563043980863", "alt": "6" },
    {"id":89, "nom": "Eglise Sainte-Catherine Honfleur", "x": "49.421116753053155", "y": "0.23222286590703345", "alt": "inconnue" },
    {"id":90, "nom": "Eglise Saint-Leonard Honfleur", "x": "49.41767729621173", "y": "0.23462518153318015", "alt": "13.12" },
    {"id":91, "nom": "Eglise Saint Michel Cabourg", "x": "49.28655779301614", "y": "-0.11818901764315501", "alt": "5" },
    {"id":92, "nom": "Eglise Saint-Jacques Reims", "x": "49.25401602301123", "y": "4.028105743516506", "alt": "54.24" },
    {"id":93, "nom": "Rue Thiers Reims", "x": "49.258235430284024", "y": "4.027182845538804", "alt": "83.787" },
    {"id":94, "nom": "Boulevard Foch Reims", "x": "49.259300262253625", "y": "4.028577824408618", "alt": "85,989" },
    {"id":95, "nom": "Boulevard Jules Cesar Reims", "x": "49.26194763914611", "y": "4.029943321971145", "alt": "88.036" },
    {"id":96, "nom": "Mairie Marcillac la Croisille", "x": "45.27342087342", "y": "2.031788614138351", "alt": "565" },
    {"id":97, "nom": "Eglise Luneville", "x": "48.59245409145298", "y": "6.491950354836047", "alt": "235" },
    {"id":98, "nom": "Porte Sainte-Catherine Nancy", "x": "48.69555116601601", "y": "6.189981785359711", "alt": "498.3" },
    {"id":99, "nom": "Eglise Laneuveville-devant-Nancy", "x": "48.65708473430285", "y": "6.230961474473358", "alt": "212" },
    {"id":100, "nom": "Église Notre-Dame-de-Bonsecours Nancy", "x": "48.676776130888015", "y": "6.199438046661186", "alt": "198.5" },
    {"id":101, "nom": "Eglise de Saint-Léonard-de-Noblat", "x": "45.8372362150849", "y": "1.4897999657348913", "alt": "422.78" },
    {"id": 102, "nom": "Parc Buttes-Chaumont 1 Paris", "x": "48.87956626302113", "y": "2.382545705845382", "alt": "inconnue", "ville":"Paris", "wiki":"https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id": 103, "nom": "Parc Buttes-Chaumont 2 Paris", "x": "48.88104084686981", "y": "2.382181494112461", "alt": "inconnue", "ville":"Paris", "wiki":"https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id": 104, "nom": "Parc Buttes-Chaumont 3 Paris", "x": "48.87812707083048", "y": "2.3797859920172764", "alt": "inconnue", "ville":"Paris", "wiki":"https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id":105, "nom": "Cimetière de Cubjac-Auvezere-Val D'ans", "x": "45.22418895727475", "y": "0.9365093875520085", "alt": "125" },
    {"id":106, "nom": "Maison Cubjac-Auvezere-Val D'ans", "x": "45.23131726897331", "y": "0.9356413844602096", "alt": "inconnue" },
    {"id":107, "nom": "Eglise Gout-Rossignol", "x": "45.41338297477797", "y": "0.3838254217898137", "alt": "128" },
    {"id":108, "nom": "Maison Savignac-les-Églises", "x": "45.270626930765886", "y": "0.9099424815118606", "alt": "111" },
    {"id":109, "nom": "Entrée de ville Lorey", "x": "48.49820351526742", "y": "6.302916032535162", "alt": "inconnue" },
    {"id": 110, "nom": "Mairie Saffais", "x": "48.55591350550755", "y": "6.311138639826255", "alt": "348", "ville": "Saffais" },
    {"id":111, "nom": "Église Saint-Mard", "x": "48.505836729230744", "y": "6.304668576547503", "alt": "inconnue" },
    {"id":112, "nom": "École de la Providence Bayon", "x": "48.47628167914696", "y": "6.312196494163723", "alt": "261" },
    {"id":113, "nom": "Maison Bayon", "x": "48.473640057273656", "y": "6.315769053436389", "alt": "265" },
    {"id":114, "nom": "Eglise Roville-Devant-Bayon", "x": "48.46682428601606", "y": "6.2907851210356105", "alt": "inconnue" },
    {"id":115, "nom": "Cimetière Crantenoy", "x": "48.46735727069716", "y": "6.221811264577388", "alt": "inconnue" },
    {"id":116, "nom": "Pont du Madon, Haroué", "x": "48.46608798750506", "y": "6.178784982365115", "alt": "inconnue" },
    {"id":117, "nom": "Mairie Tantonville", "x": "48.46944752044825", "y": "6.139309351781766", "alt": "inconnue" },
    {"id":118, "nom": "Eglise Praye", "x": "48.43401595110411", "y": "6.10508166697065", "alt": "inconnue" },
    {"id":119, "nom": "Mairie Badonviller", "x": "48.49782185346564", "y": "6.894343414203031", "alt": "321" },
    {"id":120, "nom": "Musée-Atelier Céramique Badonviller", "x": "48.49749814706286", "y": "6.889259196569152", "alt": "316" },
    {"id":121, "nom": "Cimetière Badonviller", "x": "48.49920021025207", "y": "6.895167497513946", "alt": "335" },
    {"id":122, "nom": "Droguerie Badonviller", "x": "48.498995652124044", "y": "6.8922101530757915", "alt": "318" },
    {"id":123, "nom": "Logement social Badonviller", "x": "48.501506267500616", "y": "6.892074345347664", "alt": "326" },
    {"id":124, "nom": "Église Fenneviller", "x": "48.48751097068803", "y": "6.880355468997762", "alt": "319.495" },
    {"id":125, "nom": "Mairie Pexonne", "x": "48.48340656037813", "y": "6.865454817848781", "alt": "inconnue" },
    {"id":126, "nom": "Mairie 10eme arrondissement Paris", "x": "48.87208439135131", "y": "2.3575274583926142", "alt": "inconnue" },
    {"id":127, "nom": "Porte saint Martin Paris", "x": "48.86915742957728", "y": "2.355724956332834", "alt": "inconnue" },
    {"id":128, "nom": "Place à L'hospice Uzerche", "x": "45.42716631990667", "y": "1.5655739651639717", "alt": "297" },
    {"id":129, "nom": "Presbytère Uzerche", "x": "45.42448843069292", "y": "1.5634837120758152", "alt": "inconnue" },
    {"id": 130, "nom": "Mairie Brunoy", "x": "48.697836820723246", "y": "2.504271073247553", "alt": "inconnue", "ville":"Brunoy" },
    {"id": 131, "nom": "Maison Brunoy", "x": "48.70177604968252", "y": "2.5101553871997595", "alt": "75.61", "ville": "Brunoy" },
    {"id": 132, "nom": "Gare de Cesson", "x": "48.565612733978924", "y": "2.5939389677035067", "alt": "inconnue", "ville": "Cesson", "wiki": "https://fr.wikipedia.org/wiki/Gare_de_Cesson" },
    {"id": 133, "nom": "Borne fontaine au croisement rue Bouret et rue Armand carrel Paris", "x": "48.882793455714285", "y": "2.3716774207995224", "alt": "inconnue", "ville": "Paris" },
    {"id": 134, "nom": "Creche rue Armand carrel Paris", "x": "48.882618816399564", "y": "2.377804412493506", "alt": "inconnue", "ville": "Paris" },
    {"id": 135, "nom": "Croisement rue Armand Carrel et rue de meaux Paris", "x": "48.882735395079536", "y": "2.37557826428185", "alt": "inconnue", "ville": "Paris" },
    {"id": 136, "nom": "Croisement rue faubourg saint Martin et rue Eugène Varlin Paris", "x": "48.879274876638725", "y": "2.363146925030727", "alt": "inconnue", "ville": "Paris" },
    {"id": 137, "nom": "Gare de Paris-Est", "x": "48.876981751946445", "y": "2.360923083429044", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Gare_de_Paris-Est" },
    {"id": 138, "nom": "Parc Buttes-Chaumont 4 Paris", "x": "48.88266381509211", "y": "2.3847653745901933", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id": 139, "nom": "Parc Buttes-Chaumont 5 Paris", "x": "48.879182993203294", "y": "2.3803512432957707", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id": 140, "nom": "Parc Buttes-Chaumont 6 Paris", "x": "48.87855090465156", "y": "2.3789063388169427", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Parc_des_Buttes-Chaumont" },
    {"id":141, "nom": "Place Armand Carrel Paris", "x": "48.88290232218434", "y": "2.382292666748429", "alt": "inconnue" },
    {"id":142, "nom": "Rue du Rhin Paris", "x": "48.88443505650463", "y": "2.3815237020029243", "alt": "inconnue" },
    {"id":143, "nom": "Rue de meaux, station Laumière Paris", "x": "48.885138731417626", "y": "2.380221588723829", "alt": "inconnue" },
    {"id":144, "nom": "Stalingrad 2 Paris", "x": "48.88313309180583", "y": "2.370283565779968", "alt": "inconnue" },
    {"id": 145, "nom": "Pont de Bercy Paris", "x": "48.83774817954024", "y": "2.3738583856331883", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Pont_de_Bercy" },
    {"id": 146, "nom": "Pont de Tolbiac Paris", "x": "48.832466308401465", "y": "2.3797984119626348", "alt": "30.500", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Pont_de_Tolbiac" },
    {"id": 147, "nom": "Quai de Bercy Paris", "x": "48.83870932946213", "y": "2.3755138347266436", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Quai_de_Bercy" },
    {"id": 148, "nom": "Quai de la râpée Paris", "x": "48.83954802551557", "y": "2.374721757093692", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Quai_de_la_Rap%C3%A9e" },
    {"id":149, "nom": "Tunnel proudhon Paris", "x": "48.83693508920345", "y": "2.389421362991972", "alt": "inconnue" },
    {"id":150, "nom": "Avenue du Président Kennedy, kenclub Paris", "x": "48.85356663867718", "y": "2.282397857866793", "alt": "inconnue" },
    {"id": 151, "nom": "Croisement Avenue du Président Kennedy, rue d'Ankara Paris", "x": "48.854398785751734", "y": "2.2836224631462243", "alt": "inconnue", "ville": "Paris" },
    {"id": 152, "nom": "Croisement Boulevard de Belleville, Rue D'Oberkampf Paris", "x": "48.86714505108471", "y": "2.382545722744368", "alt": "inconnue", "ville": "Paris" },
    {"id":153, "nom": "Eglise Gimel-les-Cascades", "x": "45.298985074406964", "y": "1.8513032981901254", "alt": "inconnue" },
    {"id":154, "nom": "Eglise Vert-Saint-Denis", "x": "48.56552162001606", "y": "2.6134980651200403", "alt": "inconnue" },
    {"id":155, "nom": "Gare d'avenue du président Kennedy Paris", "x": "48.852894635171246", "y": "2.281286362183796", "alt": "inconnue" },
    {"id": 156, "nom": "LCL croisement rue Daniel Stern, boulevard de grenelles Paris", "x": "48.851054815711244", "y": "2.292807338373962", "alt": "inconnue", "ville": "Paris" },
    {"id": 157, "nom": "Le Reverdi Cesson", "x": "48.55795986888066", "y": "2.608467134970431", "alt": "inconnue", "ville": "Cesson" },
    {"id":158, "nom": "Pont d'Inéa Paris", "x": "48.85917169293937", "y": "2.2926313810267227", "alt": "inconnue" },
    {"id":159, "nom": "Port Debilly, Pont d'Inéa Paris", "x": "48.86015984392405", "y": "2.2911111519830576", "alt": "28,975" },
    {"id": 160, "nom": "Poste croisement rue du théâtre, rue de Lourmel Paris", "x": "48.84822681493093", "y": "2.290145817764662", "alt": "inconnue", "ville": "Paris" },
    {"id":161, "nom": "Rond point Vert-Saint-Denis", "x": "48.56634465081164", "y": "2.6186002264150114", "alt": "75,80" },
    {"id":162, "nom": "Rue de Lourmel École Saint Elizabeth Paris", "x": "48.84288343414814", "y": "2.286131069865411", "alt": "inconnue" },
    {"id":163, "nom": "Rue de Lourmel, arrêt 42 Charles Michels Paris", "x": "48.845458670833644", "y": "2.2877329946912397", "alt": "inconnue" },
    {"id":164, "nom": "Rue Émile Zola Restaurant l'épopée Paris", "x": "48.84674675528673", "y": "2.288239723665233", "alt": "inconnue" },
    {"id":165, "nom": "Sortie parc de Belleville rue Julien Lacroix Paris", "x": "48.87090973409201", "y": "2.383622305829808", "alt": "inconnue" },
    {"id": 166, "nom": "Gare de Melun", "x": "48.527472136591086", "y": "2.655834323942217", "alt": "inconnue", "ville": "Melun", "wiki": "https://fr.wikipedia.org/wiki/Gare_de_Melun" },
    {"id": 167, "nom": "Château de Fontainebleau", "x": "48.40262830233666", "y": "2.6971310823628594", "alt": "76", "ville": "Fontainebleau", "wiki": "https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Fontainebleau" },
    {"id": 168, "nom": "Église Saint-Louis de Fontainebleau", "x": "48.405351589711245", "y": "2.701348841375569", "alt": "79,34", "ville": "Fontainebleau", "wiki": "https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Louis_de_Fontainebleau" },
    {"id": 169, "nom": "Le grand canal bridge - Fontainebleau", "x": "48.40165895393035", "y": "2.7061642213112513", "alt": "65", "ville": "Fontainebleau" },
    {"id": 170, "nom": "Rue Paul Séramy - Fontainebleau", "x": "48.40337818832932", "y": "2.704342910310553", "alt": "71", "ville": "Fontainebleau" },
    {"id": 171, "nom": "Hôtel des Postes de Fontainebleau", "x": "48.40382883265984", "y": "2.7002017821930977", "alt": "78", "ville": "Fontainebleau", "wiki": "https://fr.wikipedia.org/wiki/H%C3%B4tel_des_Postes_de_Fontainebleau" },
    {"id":172, "nom": "Passage à niveau - La Grande-Paroisse", "x": "48.379714907567255", "y": "2.9023452308287343", "alt": "52,12" },
    {"id":173, "nom": "Eglise Saint-Germain-de-Paris - La Grande-Paroisse", "x": "48.38065300267814", "y": "2.9031341426693005", "alt": "inconnue" },
    {"id":174, "nom": "Ecole Primaire Clovis Moriot - La Grande-Paroisse", "x": "48.386415739364956", "y": "2.9006035233923", "alt": "116" },
    {"id":175, "nom": "Rue de la Garenne - La Grande-Paroisse", "x": "48.38758445050553", "y": "2.9053821082405933", "alt": "121" },
    {"id":176, "nom": "Rue Haute - La Grande-Paroisse", "x": "48.38684105798552", "y": "2.906724398145804", "alt": "119,02" },
    {"id":177, "nom": "Arc de Triomphe du Carrousel Paris", "x": "48.86169812319998", "y": "2.3328998869525264", "alt": "35.50" },
    {"id":178, "nom": "Chapelle Villemoneix", "x": "45.81384064080763", "y": "2.0227241890008933", "alt": "736" },
    {"id": 179, "nom": "Cimetière Seine-Port", "x": "48.556173195514624", "y": "2.5597076949191857", "alt": "inconnue", "ville": "Seine-Port" },
    {"id": 180, "nom": "Croisement rue Ernest Legouvé, Route de Nandy Seine-Port", "x": "48.56197512582688", "y": "2.5514377797621295", "alt": "54", "ville": "Seine-Port" },
    {"id": 181, "nom": "Église Saint-Sulpice Seine-Port", "x": "48.55733902024411", "y": "2.5518504365801826", "alt": "50.10", "ville": "Seine-Port" },
    {"id":182, "nom": "Entrée Chicane, Seine-Port", "x": "48.55439278940779", "y": "2.5476045969428496", "alt": "50,20" },
    {"id":183, "nom": "Rapid'Market Seine-Port", "x": "48.557652452217766", "y": "2.548936568648738", "alt": "46" },
    {"id":184, "nom": "Nouveau Quartier Seine-Port", "x": "48.555227730668214", "y": "2.5432110317082977", "alt": "47" },
    {"id":185, "nom": "Le Balory Seine-Port", "x": "48.55847282415883", "y": "2.5511467977505764", "alt": "44" },
    {"id":186, "nom": "Pont Évry", "x": "48.62584494757559", "y": "2.433935577758956", "alt": "inconnue" },
    {"id":187, "nom": "Jardin Lecoq Clermont-Ferrand", "x": "45.77348032037136", "y": "3.08979261778077", "alt": "381.369" },
    {"id":188, "nom": "Paris 10eme, sapeur pompier", "x": "48.87128315002652", "y": "2.3581701718386348", "alt": "inconnue" },
    {"id":189, "nom": "Olivier Et Co - Levallois-Perret", "x": "48.88692899353736", "y": "2.283287805667875", "alt": "inconnue" },  
    {"id":190, "nom": "Église Saint-Pierre-de-Montrouge - Paris", "x": "48.82852516267791", "y": "2.3268417048343455", "alt": "inconnue" },  
    {"id":191, "nom": "Palais d'Orléans - Paris", "x": "48.83070767624404", "y": "2.3254646772684926", "alt": "inconnue" },
    {"id":192, "nom": "Jardin de l'Observatoire de Paris", "x": "48.83477433989855", "y": "2.3367628120823825", "alt": "inconnue" },
    {"id":193, "nom": "16b Av. René Coty - Paris", "x": "48.82999444933938", "y": "2.333828297673664", "alt": "inconnue" },
    {"id":194, "nom": "Lirairie petit Limoges", "x": "45.83261957502892", "y": "1.2555999222043306", "alt": "284" },
    {"id": 195, "nom": "Pouilly-le-Fort", "x": "48.584579228983664", "y": "2.6294435084912453", "alt": "80.53", "ville": "Vert-Saint-Denis", "wiki":"https://fr.wikipedia.org/wiki/Pouilly-le-Fort" },
    {"id": 196, "nom": "Eglise - Réau", "x": "48.610369755252826", "y": "2.623171791993719", "alt": "90.605", "ville": "Réau" },
    {"id": 197, "nom": "Ecole - Réau", "x": "48.612105535799685", "y": "2.6223960538030227", "alt": "inconnue", "ville": "Réau" },
    {"id": 198, "nom": "Mairie - Réau", "x": "48.61070376511946", "y": "2.6237589737216362", "alt": "91", "ville": "Réau" },
    {"id":199, "nom": "Rue Sophie Germain - Paris", "x": "48.83077211866985", "y": "2.331193354403655", "alt": "inconnue" },
    {"id":200, "nom": "19 bis Av. du Général Leclerc - Paris", "x": "48.831382806135856", "y": "2.330190435370789", "alt": "64.126" },
    {"id":201, "nom": "Hotel de Police 14e - Paris", "x": "48.83236876641028", "y": "2.3310468128809245", "alt": "inconnue" },
    {"id":202, "nom": "Maison rue de Paris - Cesson", "x": "48.57692799398464", "y": "2.6017533079991675", "alt": "inconnue", "ville": "Cesson" },
    {"id": 203, "nom": "Pont de Tolbiac 2", "x": "48.83354506512381", "y": "2.3818657957660454", "alt": "30.5", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Pont_de_Tolbiac" },
    {"id": 204, "nom": "Boulevard Diderot Paris", "x": "48.84536070082637", "y": "2.3705050592254238", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Boulevard_Diderot" },
    {"id": 205, "nom": "Paris Gare de Lyon", "x": "48.84469982689874", "y": "2.3728412683933042", "alt": "inconnue", "ville": "Paris", "wiki":"https://fr.wikipedia.org/wiki/Paris-Gare-de-Lyon" },
    {"id": 206, "nom": "Rue de l'église de Crisenoy", "x": "48.59776562982324", "y": "2.7440049312700254", "alt": "91", "ville": "Crisenoy" },
    {"id": 207, "nom": "Eglise Saint-Maurice - Blandy", "x": "48.56787334484295", "y": "2.781514379983031", "alt": "inconnue", "ville": "Blandy", "wiki": "https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Maurice_de_Blandy" },
    {"id": 208, "nom": "Rue Vauchevres - Blandy", "x": "48.56550379493838", "y": "2.7796628779724974", "alt": "inconnue", "ville": "Blandy", },
    {"id": 209, "nom": "Pont Paillard - Blandy", "x": "48.57098446288633", "y": "2.7824569945541446", "alt": "inconnue", "ville": "Blandy", },
    {"id": 210, "nom": "Sous le pont de la gare de Melun", "x": "48.52758573890251", "y": "2.6535736267595165", "alt": "inconnue", "ville": "Melun", "wiki": "https://fr.wikipedia.org/wiki/Gare_de_Melun" },
    {"id": 211, "nom": "Chapelle du Puy Saint Clair, Tulle", "x":"45.272189568899805", "y":"1.7733403098902139", "alt":"inconnue", "ville":"Tulle" },
    {"id": 212, "nom": "Croisement boulevard Diderot, rue de Bercy Paris", "x": "48.84577757697178", "y": "2.371072193674523", "alt": "inconnue", "ville": "Paris" },
    {"id": 213, "nom": "Gare de Lyon, rue de Lyon et Bd Diderot, Paris", "x": "48.845513665300466", "y": "2.372004372930986", "alt": "inconnue", "ville": "Paris", "wiki": "https://fr.wikipedia.org/wiki/Paris-Gare-de-Lyon" },
    {"id":214, "nom": "Chateau d'eau rue joffre Colmar", "x":"48.07120716467561", "y":"7.352615561851307", "alt":"inconnue"},
    {"id":215, "nom": "Église des Dominicains Colmar", "x":"48.07834468806482", "y":"7.357111502703038", "alt":"194"},
    {"id":216, "nom": "EM Lyon business school Paris", "x":"48.845758399930254", "y":"2.3715398502546465", "alt":"inconnue"},
    {"id":217, "nom": "Chateau d'eau Boutigny-sur-Essonne", "x": "48.44491280906846", "y": "2.3915250495772375", "alt": "133" },
    {"id":218, "nom": "La Poste Chevry-Cossigny", "x": "48.724676529691074", "y": "2.6583898003881643", "alt": "102" },
    {"id":219, "nom": "Paroisse de Chevry-Cossigny", "x": "48.72448243755652", "y": "2.6579156147342173", "alt": "102" },
    {"id":220, "nom": "Eglise de Chevry-Cossigny", "x": "48.7249552062767", "y": "2.657260048963047", "alt": "101" },
    {"id":221, "nom": "Eglise de Linthelles", "x": "48.71605615051701", "y": "3.8216444614096177", "alt": "101.63" },
    {"id":222, "nom": "Rue de Sézanne Linthelles", "x": "48.716555", "y": "3.818670", "alt": "102.01" },
    {"id":223, "nom": "Maison Praye", "x": "48.43369751821106", "y": "6.103512069506479", "alt": "310" },
    {"id":224, "nom": "Maison Tantonville", "x": "48.46908885111301", "y": "6.146842394694886", "alt": "inconnue" },
    {"id":225, "nom": "Mairie Neuviller-sur-Moselle", "x": "48.49298499392965", "y": "6.289264912667959", "alt": "245.545" },
    {"id": 226, "nom": "Église Saint-Maurice Lille", "x": "50.635727729542204", "y": "3.0669594733734047", "alt": "20,825", "ville": "Lille", "wiki":"https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Maurice_de_Lille" },
    {"id":227, "nom": "Porte de Paris Lille", "x": "50.629724509925", "y": "3.0688286895351746", "alt": "22,53" },
    {"id":228, "nom": "Théâtre du nord Lille", "x": "50.636437323164515", "y": "3.063837341501822", "alt": "20.980" },
    {"id":229, "nom": "Rue du Lavoir de Maincy", "x": "48.55003597482087", "y": "2.701338910654465", "alt": "83.45" },
    {"id": 230, "nom": "Hôtel de ville Bruxelles", "x": "50.84616263176381", "y": "4.351697999709192", "alt": "21.15", "ville": "Bruxelles", "wiki":"https://fr.wikipedia.org/wiki/H%C3%B4tel_de_ville_de_Bruxelles" },
    {"id":231, "nom": "Office du tourisme Hyères", "x": "43.11992027141953", "y": "6.130933392790056", "alt": "inconnue" },
    {"id":232, "nom": "Porte Massillon Hyères", "x": "43.12072141596795", "y": "6.130726357376559", "alt": "inconnue" },
    {"id":233, "nom": "Hôtel de Ville Hyères", "x": "43.11999823353953", "y": "6.130301758195966", "alt": "inconnue" },
    {"id": 234, "nom": "Clocher Saint Barthélémy", "x": "48.54169845565036", "y": "2.6558232617648816", "alt": "69.64", "ville": "Melun", "wiki": "https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Barth%C3%A9lemy_de_Melun" },
    {"id": 235, "nom": "Église Saint-Aspais de Melun", "x": "48.538917595005756", "y": "2.659507831829803", "alt": "inconnue", "ville": "Melun", "wiki":"https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Aspais_de_Melun" },
    {"id": 236, "nom": "Mairie de Châtelet-en-Brie", "x": "48.50491601577713", "y": "2.7947394070931835", "alt": "90", "ville": "Le Châtelet-en-Brie" },
    {"id": 237, "nom": "Place du Puits de l'Échelle de Châtelet-en-Brie", "x": "48.50390885450965", "y": "2.792836470761182", "alt": "86.72", "ville": "Le Châtelet-en-Brie" },
    {"id": 238, "nom": "Chapelle Sainte-Reine de Châtelet-en-Brie", "x": "48.50246242201866", "y": "2.794911003592093", "alt": "87", "ville": "Le Châtelet-en-Brie" },
    {"id": 239, "nom": "Pont du Ru de Chatelet", "x": "48.50283856424969", "y": "2.7942852805504126", "alt": "inconnue", "ville": "Le Châtelet-en-Brie" },
    {"id": 240, "nom": "Église Saint-Étienne de Maincy", "x": "48.550427597113874", "y": "2.699498827856823", "alt": "inconnue", "ville": "Maincy" },
    {"id": 241, "nom": "Ferme lieu dit Pointe Pierre", "x": "45.81653735846607", "y": "2.0305193126940964", "alt": "738", "ville": "Gentilloux Pigerolles" },
    {"id": 242, "nom": "Buse sortie Pointe Pierre", "x": "45.81775334271881", "y": "2.0327293917973024", "alt": "752", "ville": "Gentilloux Pigerolles" },
    {"id": 243, "nom": "Pilier en Caillou croisement D992 et D26 La Nouaille", "x": "45.81904285573936", "y": "2.0417334233233095", "alt": "772.509", "ville": "La Nouaille" },
    {"id": 244, "nom": "Angle rue de la Forge Millevache", "x": "45.641181920434335", "y": "2.095107428640484", "alt": "909", "ville": "Millevache" },
    {"id": 245, "nom": "Cimetière Millevache", "x": "45.644768491780866", "y": "2.0934220856538186", "alt": "928", "ville": "Millevache" },
    {"id": 246, "nom": "Église Feniers", "x": "45.749533770836955", "y": "2.1260883001300965", "alt": "832", "ville": "Feniers" },
    {"id": 247, "nom": "Église Jeanménil", "x": "48.335374971262596", "y": "6.687566000603827", "alt": "inconnue", "ville": "Jeanménil" },
    {"id": 248, "nom": "Lieu dit le Poteau de Maussac", "x": "45.467609765860864", "y": "2.143525120077443", "alt": "600", "ville": "Maussac" },
    {"id": 249, "nom": "Rue de la Forge Millevache", "x": "45.641032464610774", "y": "2.095344099997953", "alt": "907", "ville": "Millevache" },
    {"id": 250, "nom": "Rue principale Millevache", "x": "45.64177408503842", "y": "2.0948910842409156", "alt": "911", "ville": "Millevache" },
    {"id": 251, "nom": "Rue de l'église de Crisenoy", "x": "48.59641611523292", "y": "2.7448527698304614", "alt": "90", "ville": "Crisenoy" },
    {"id": 252, "nom": "Ru d'Andy", "x": "48.59355495603607", "y": "2.7488117979778974", "alt": "88", "ville": "Crisenoy" },
    {"id": 253, "nom": "Mairie de Crisenoy", "x": "48.595664", "y": "2.740600", "alt": "inconnue", "ville": "Crisenoy" },
    {"id": 254, "nom": "Cathédrale St Benigne Dijon", "x": "47.3226444", "y": "5.0382611", "alt": "244.363", "ville": "Dijon" },
    {"id": 255, "nom": "Les Halles Dijon", "x": "47.3243278", "y": "5.0389667", "alt": "245.162", "ville": "Dijon" },
    { "id": 256, "nom": "Lyon croisement Vendome Servient", "x": "45.76016464390946", "y": "4.846754310851442", "alt": "inconnue", "ville": "Lyon" },
    { "id": 257, "nom": "National 6 Chalon", "x": "46.777926", "y": "4.850924", "alt": "inconnue", "ville": "Chalon" },
    
    { "id": 258, "nom": "Rue Justin Godard Lyon", "x": "45.7759905244786", "y": "4.8360547410847206", "alt": "235,603", "ville": "Lyon" },

    // 259
    // Boulevard de la croix rousse
    // 45.774167, 4.828056
    { "id": 259, "nom": "Boulevard de la Croix Rousse Lyon", "x": "45.774167", "y": "4.828056", "alt": "inconnue", "ville": "Lyon" },

    // 260
    // Rue Jacquard
    // 45.775833, 4.825556
    { "id": 260, "nom": "Rue Jacquard Lyon", "x": "45.775833", "y": "4.825556", "alt": "251.255", "ville": "Lyon" },

    // 261
    // Pont masaryk 
    // 45.778056, 4.810556
    { "id": 261, "nom": "Pont Masaryk Lyon", "x": "45.778056", "y": "4.810556", "alt": "170.821", "ville": "Lyon" },

    // 262
    // Rue masaryk
    // 45.7787672, 4.8071006
    { "id": 262, "nom": "Rue Masaryk Lyon", "x": "45.7787672", "y": "4.8071006", "alt": "168.600", "ville": "Lyon" },

    { "id": 263, "nom": "Rue de Bourgogne Lyon", "x": "45.778906627043554", "y": "4.802074866772532", "alt": "inconnue", "ville": "Lyon" },

    // 264
    // Rue de Bourgogne
    // 45.776667, 4.804167
    { "id": 264, "nom": "Rue de Bourgogne Lyon", "x": "45.776667", "y": "4.804167", "alt": "inconnue", "ville": "Lyon" },

    // 265
    // Rue de Bourgogne
    // 45.775556, 4.805000
    { "id": 265, "nom": "Rue de Bourgogne Lyon", "x": "45.775556", "y": "4.805000", "alt": "169.177", "ville": "Lyon" },

    { "id": 266, "nom": "Rue Marieton Lyon", "x": "45.775257199447786", "y": "4.805062950877887", "alt": "169.196", "ville": "Lyon", "wiki": "https://fr.wikipedia.org/wiki/Rue_Marietton" },
    { "id": 267, "nom": "Place du Marché Lyon", "x": "45.77418274231527", "y": "4.8067880890190935", "alt": "inconnue", "ville": "Lyon" },
    { "id": 268, "nom": "Quai Saint Vincent Lyon", "x": "45.76947024118283", "y": "4.814655679870683", "alt": "inconnue", "ville": "Lyon" },
    { "id": 269, "nom": "École Nationale Supérieure des Beaux-Arts de Lyon", "x": "45.76784965264016", "y": "4.81712702970803", "alt": "166.33", "ville": "Lyon", "wiki": "https://fr.wikipedia.org/wiki/%C3%89cole_nationale_sup%C3%A9rieure_des_beaux-arts_de_Lyon" },
    { "id": 270, "nom": "2 Place du Port-Neuville Lyon", "x": "45.76810513012359", "y": "4.821462017021566", "alt": "inconnue", "ville": "Lyon" },
    { "id": 271, "nom": "2 Place du Port-Neuville Lyon", "x": "45.76811401743283", "y": "4.821516331756255", "alt": "inconnue", "ville": "Lyon" },
    { "id": 272, "nom": "Quai Saint Vincent Lyon", "x": "45.76845124850508", "y": "4.824789437770332", "alt": "468.435", "ville": "Lyon" },

    // 273
    // Quai st Vincent
    // 45°46'5'' N, 4°49'41'' E
    // 169.220


    // 274
    // Quai de Bondy
    // 45.767222, 4.827500
    { "id": 274, "nom": "Quai de Bondy Lyon", "x": "45.767222", "y": "4.827500", "alt": "inconnue", "ville": "Lyon" },

    { "id": 275, "nom": "Église Saint-Paul de Lyon", "x": "45.7664500170161", "y": "4.826921374240972", "alt": "inconnue", "ville": "Lyon", "wiki": "https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Paul_de_Lyon" },

    // 276
    // Quai de pierre-scize 
    // 45.767500, 4.825556
    { "id": 276, "nom": "Quai de Pierre-Scize Lyon", "x": "45.767500", "y": "4.825556", "alt": "169.227", "ville": "Lyon" },

    // 277
    // Quai du général sarrail 
    // 45°45'53'' N, 4°50'30'' E

    // 278
    // Eglise st Pothin 
    // 45°45'58'' N, 4°50'45'' E

    // 279
    // Quai du général sarrail 
    // 45.766589,4.841519

    // 280
    // Quai du général sarrail 
    // 45°46'3'' N, 4°50'29'' E

    // 281
    // Rue Tronchet 
    // 45°46'10'' N, 4°50'38'' E

    // 282
    // Rue Créqui 
    // 45°46'11'' N, 4°50'45'' E

    // 283
    // Rue tronchet 
    // 45°46'12'' N, 4°50'55'' E

    { "id": 284, "nom": "Rue Tronchet Lyon", "x": "45.77018834366377", "y": "4.852168531871875", "alt": "inconnue", "ville": "Lyon" },
    { "id": 285, "nom": "Rue du Canal Lyon", "x": "45.77144069219687", "y": "4.90401041560812", "alt": "171.256", "ville": "Lyon" },
]
