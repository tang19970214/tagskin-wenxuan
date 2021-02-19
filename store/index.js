export const state = () => ({
  productList: [
    /* 裸光胺基酸潔顏乳 */
    {
      id: 1,
      imgPath: require("../assets/images/product/cleanser.jpg"),
      title: "裸光胺基酸潔顏乳",
      price: "NT$ 680",
      price_sale: [{
        id: 1,
        num: "1",
        price: "NT$ 680",
      }, ],
      value: "cleanser",
      description: "「25% 胺基酸 - 純物質 X 極細膩 X 極珍貴」親膚性極佳的洗顏成份！溫和配方不會過度清潔進而造成肌膚傷害與刺激、由內而外呈現裸肌光澤！",
      capacity: "100ml",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "絕對堅持不添加界面活性劑、起泡劑、酒精、防腐劑、香料、皂鹼、SLS、SLES等有害物質。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "早晚清潔臉部取適量使用後以清水洗淨"
      }],
      mainIngredient: [{
        id: 1,
        text: "25%胺基酸 - 溫和深層清潔，極細膩泡沫，洗後舒緩水嫩不乾澀不緊繃"
      },{
        id: 2,
        text: "醣基海藻糖 - 高保濕力並舒緩肌膚，增強肌膚彈潤滑"
      },{
        id: 3,
        text: "庫拉索蘆薈葉 - 幫助肌膚鎖住水分，維持肌膚健康狀態"
      },{
        id: 4,
        text: "Q10 - 舒緩修護肌膚壓力"
      }],
      ingredient: "Aqua、Sodium Lauryl Sarcosinate、Cocamidopropyl Betaine、1,3 Butylene Glycol、Glycerine、Cocamide DEA、Glycosyl Trahalose、Panthenol、Tetrasodium EDTA、Lavandin、Acetyl Hexapeptide-8、Phenoxyethanol、Aloe Barbadensis Leaf Juice、Butylene Glycol、Algae Extract、Sea Salt Extract、Sorbitol、Tocopheryl Acetate、Lavandula angustifolia、Acrylates Copolymer"
    },
    /* 酵素柔焦霜膜 */
    {
      id: 2,
      imgPath: require("../assets/images/product/creamFilm.jpg"),
      title: "酵素柔焦霜膜",
      price: "NT$ 1,380",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,380",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,600",
        },
      ],
      value: "exfoliate",
      description: "極溫和又保濕的敷式『去角質』，有別以往粗顆粒的去角質傷皮膚，只要敷10分鐘就能溫和去角質嫩膚。",
      capacity: "200g",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "",
      useTime: "（每週使用1-2次）",
      useMethod: [{
        id: 1,
        text: "正確清潔臉部"
      }, {
        id: 2,
        text: "取適量均勻塗抹敷至臉部或身體"
      }, {
        id: 3,
        text: "靜待10分鐘"
      }, {
        id: 4,
        text: "輕輕按摩2分鐘"
      }, {
        id: 5,
        text: "清水洗淨（可用洗臉巾擦拭掉再沖洗）"
      }, {
        id: 6,
        text: "日常保養步驟（化妝水➜精華液➜乳液或乳霜）"
      }],
      mainIngredient: [{
        id: 1,
        text: "木瓜酵素蛋白酶 - 去除老廢角質，含有豐富維他命C、E，避免粗顆粒可能會造成的肌膚不適"
      }, {
        id: 2,
        text: "膠原蛋白 - 使肌膚保持柔嫩平滑而健康"
      }, {
        id: 3,
        text: "蘆薈萃取 - 舒緩修護保水"
      }, {
        id: 4,
        text: "綠茶萃取 - 嫩白肌膚，通暢毛孔"
      }, {
        id: 5,
        text: "維他命E - 細緻肌膚，幫助肌膚維持健康"
      }],
      ingredient: "Deionized Water、Triglyceride、1-3 Butylene Glycol、Stearyl Alcohol、Titanium Dioxide、Steareth-2、Steareth-21、Beeswax、Sodium Polycrylate、Paraffinum Liquidum、Trideceth-6、Yellow pigment、Papaya Enzyme、Collagen、Aloe Vera Extract、Green Tea Extract、Vitamin E Oil、Phenoxyethanol、Ethylhexylglycerin、Chlorphenesin"
    },
    /* 裸光緊緻面膜 */
    {
      id: 3,
      imgPath: require("../assets/images/product/facial.jpg"),
      title: "裸光緊緻面膜",
      price: "NT$ 99",
      price_sale: [{
          id: 1,
          num: "1~9",
          price: "NT$ 99",
        },
        {
          id: 2,
          num: "10~99",
          price: "NT$ 90",
        },
        {
          id: 3,
          num: "100以上",
          price: "NT$ 80",
        },
      ],
      value: "mask",
      description: "敷的過程會麻麻崩崩刺刺均屬正常現象，敷完仔細觀察美麗緊緻的臉龐！",
      capacity: "0.84 FTOZ / 25ML",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "使用過程有繃麻感屬正常現象(含有緊緻原料關係)。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "清潔臉部→輕拍化妝水→敷臉20分鐘→按摩吸收不需清洗→務必上乳液或乳霜"
      }],
      mainIngredient: [{
        id: 1,
        text: "雪絨花 - 深層修護改善暗沉、提升肌膚防護能力"
      },{
        id: 2,
        text: "富勒烯 - 透亮淨白、保濕鎖水、淨化毛孔、幫助肌膚維持健康"
      },{
        id: 3,
        text: "五胜肽&六胜肽 - 緊緻肌膚、緊緻毛孔、維持肌膚彈性"
      }],
      ingredient: "Water, Propylene Glycol, Waltheria Indica Leaf Extract, Mannitol, Acetyl Tetrapeptide-9, Hydrolyzed Manihot Esculenta, Tuber ExtratHyaluronic Acid, Sodium Hyaluronate, Palmitoyl Oligopeptide, Cichorium Intybus Root Extract, Crithmum Maritimum Extract, Chondrus crispus Extract, Dipotassium Glycyrrhizinate, Xanthan Gum, Hydroxyethylcellulose, Chlorphenesin, Ethylhexylglycerin, Disodium EDTA, Fullerence, Pentapeptide-18 , Acetyl Hexapeptide-8, Leontopodium alpinum"
    },
    /* 裸光活化機能水 */
    {
      id: 4,
      imgPath: require("../assets/images/product/funcWater.jpg"),
      title: "裸光活化機能水",
      price: "NT$ 1,380",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,380",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,600",
        },
      ],
      value: "toner",
      description: "「買就贈機能化妝棉200片」為肌膚注入滿滿彈性與活力，更可以天天搭配機能化妝棉濕敷！",
      capacity: "400ML",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "粉紅色並不是色素，而是龍血樹脂萃取原料成分，請安心使用。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "早晚清潔臉部後取適量於手心或搭配化妝棉使用"
      }],
      mainIngredient: [{
        id: 1,
        text: "龍血樹脂萃取 - 使肌膚由內而外保濕潤澤"
      },{
        id: 2,
        text: "藍銅胜肽 - 加強保養品吸收能力，提升肌膚對環境傷害的保護力"
      },{
        id: 3,
        text: "水解酵母蛋白 - 調理肌膚油水平衡，保濕保水並鎖水"
      },{
        id: 4,
        text: "庫拉索蘆薈葉汁 - 舒緩修護，淨化毛孔及通暢毛孔"
      },{
        id: 5,
        text: "馬栗樹萃取 - 提升肌膚防護能力與肌膚舒適度"
      }],
      ingredient: "Water, Hydrolyzed Manihot Esculenta Tuber Extract, Glycerin, Rice Bran Oil, Croton Lechleri Resin Extract, Honey Extract, Aloe Barbadensis Leaf Juice, Palmitoyl Hexapeptide-12, Centella Asiatica Extract, Hydrolyzed Yeast Protein, Calendula Officinalis Flower Extract, Copper Tripeptide, Chlorphenesin, Allantoin, Sodium Hyaluronate, Panthenol, Ruscus Aculeatus Root Extract, Aesculus Hippocastanum (Horse Chestnut), Ammonium Glycyrrhizate, Ethylhexylglycerin"
    },
    /* 蜂毒絲絨精萃 */
    {
      id: 5,
      imgPath: require("../assets/images/product/essence.jpg"),
      title: "蜂毒絲絨精萃",
      price: "NT$ 1,380",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,380",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,600",
        },
      ],
      value: "essence",
      description: "「油性肌也能使用的精萃油」極溫和又長效保濕，適合所有膚質，可以代替精華液，更是春夏秋冬都能使用的美容油",
      capacity: "30ml",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "可以代替精華液及保養油使用，或搭配原有的精華液使用。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "一般保養/當前導精華使用、當一般精華液使用、當保養油使用"
      },{
        id: 2,
        text: "加強保養/與乳霜或乳液1:1混入使用"
      },{
        id: 3,
        text: "面膜保養/清潔後>化妝水>蜂毒>再敷上面膜使效果加倍"
      }],
      mainIngredient: [{
        id: 1,
        text: "蜂毒萃取 - 使肌膚保濕保水維持水分，調理肌膚油水平衡，使肌膚長效保濕潤澤、水嫩緊緻"
      },{
        id: 2,
        text: "神經醯胺 - 形成肌膚保護膜，增加肌膚水嫩度使毛孔細緻"
      },{
        id: 3,
        text: "輔酶Q10 - 舒緩肌膚不適感，提升肌膚對環境傷害的保護力"
      },{
        id: 4,
        text: "酪梨萃取油 - 使肌膚平滑，並增進肌膚防護力"
      },{
        id: 5,
        text: "維他命E - 延緩肌膚老化現象，提升肌膚舒適度"
      },],
      ingredient: "Cyclopentasiloxane、Polydimethylsiloxane、Octamethyl Cyclotetrasiloxane、Sclerocarya Birrea Seed Oil、Argania Spinosa Kernel Oil、Sweet Almond Oil、Tocopheryl Acetate、Bee Venom、Silkworm Cocoon Extract、Caviar Extract、Tocopheryl Acetate、Ubiquinone、Fragrance"
    },
    /* 光感美肌霜 */
    {
      id: 6,
      imgPath: require("../assets/images/product/cream.jpg"),
      title: "光感美肌霜",
      price: "NT$ 1,380",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,380",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,600",
        },
      ],
      value: "lotion",
      description: "「懶人族、忙碌族、熬夜人」的最愛，不必天天擔心看起來像永遠沒睡飽",
      capacity: "50g",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "代替乳液及乳霜使用，水凝霜質地可能與部分精華使用產生脫屑為正常現象，建議精華步驟按摩吸收後再使用。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "一般保養/取10元硬幣大小均勻塗抹臉部→按摩吸收"
      },{
        id: 2,
        text: "晚安凍膜/取50元硬幣大小均勻厚敷臉部→敷著入眠"
      }],
      mainIngredient: [{
        id: 1,
        text: "富勒烯 - 長效保濕鎖水加倍淨白，調理肌膚油水平衡，延緩肌膚老化"
      },{
        id: 2,
        text: "乳酸菌發酵物 - 保濕透亮柔嫩，淡化肌膚紋路"
      },{
        id: 3,
        text: "菸鹼胺 - 補水舒緩修護，淨化毛孔通暢毛孔，維持肌膚保水度"
      },{
        id: 4,
        text: "植物性複合物 - 舒緩環境對肌膚造成的不適感，改善暗沉使膚色均勻並健康"
      },{
        id: 5,
        text: "cholesterol膽固醇 - 強化肌膚保濕能力，提升肌膚防護屏障"
      }],
      ingredient: "Aqua、Niacinamide、Butylene Glycol、Carbomer、Cetyl Octanoate、Hydrogenated Polydecene 、Jojoba Oil、Tocopheryl Acetate、Sodium Hyaluronate、Lactococcus ferment extract、Ubiquinone、Dipotassium Glycyrrhizinate、Allantion、Sorbitol 、Papaya Extract 、Lemon Extract 、Hexylene Glycol 、Fructose、Glucose、Sucrose、Urea、Dextrin、Alanine、Glutamic Acid、Aspartic acid、Hexyl nicotinate、Cholesterol、Fullerence C60、Chamomile ET、Panthenol、Escin、Ruscus Aculeatus Root Extract、 Ammonium Glycyrrhizate、Centella Asiatica Extract、Hydrolyzed Yeast Protein、Calendula Officinalis Flower Extract、PEG-4 Laurate、Iodopropynyl Butylcarbamate、Phenoxyethanol、Ethylhexylglycerin、Fragrance"
    },
    /* 裸光機能霜 */
    {
      id: 7,
      imgPath: require("../assets/images/product/funcCream.jpg"),
      title: "裸光機能霜",
      price: "NT$ 1,280",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,280",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,400",
        },
      ],
      value: "lotion",
      description: "「修護肌膚必備的舒緩神器」持續24小時長效保濕補水鎖水，適合所有膚質使用，更是乾肌的最愛",
      capacity: "50g",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "代替乳液及乳霜使用，乳霜質地，建議搭配手法加強按摩。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "早晚清潔臉部→化妝水及精華液後使用"
      }],
      mainIngredient: [{
        id: 1,
        text: "海藻糖萃取 - 增加肌膚防護力，溫和保濕滋潤並改善暗沉，使肌膚光澤、柔嫩、健康"
      },{
        id: 2,
        text: "海洋深層水 - 提升肌膚舒適度，維持肌膚健康狀態進而維持肌膚健康"
      },{
        id: 3,
        text: "葡萄多酚 - 使肌膚由內而外恢復光澤亮麗，提升肌膚光透感"
      },{
        id: 4,
        text: "維生素B5 - 擁有良好的保濕力，舒緩疲倦的肌膚"
      }],
      ingredient: "Purified Water、Hamamelis Virginiana、distillate Brassica、Campestris Sterols、Triglyceride、Butyrospermum Parkii、Pantothenic Acid、Acetyl Hexapeptide-3、Licorice、Hyaluronate、Whey Protein、Retinol、Truffle、Trehalose、Camellia Sinensis、Perilla、Aloe、Grape polyphenols、Deep Ocean Water、Calendula oil"
    },
    /* 裸光絲緞隔離霜 */
    {
      id: 8,
      imgPath: require("../assets/images/product/baseCream.jpg"),
      title: "裸光絲緞隔離霜",
      price: "NT$ 1,280",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,280",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,400",
        },
      ],
      value: "basecream",
      description: "「不毒害海洋的防護隔離霜」，還兼具保濕、亮白、校色！",
      capacity: "30ml",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "務必使用卸妝產品及洗面乳卸除。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "正確清潔臉部"
      },{
        id: 2,
        text: "日常保養步驟（化妝水➜精華液➜乳液或乳霜）"
      },{
        id: 3,
        text: "取適量均勻塗抹敷至臉部及脖子"
      }],
      mainIngredient: [{
        id: 1,
        text: "阿拉伯草棉保護劑 -防護隔離，提升肌膚對環境傷害的保護力"
      },{
        id: 2,
        text: "維他命B3 - 形成肌膚保護膜，維持肌膚含水量"
      },{
        id: 3,
        text: "蜂蜜萃取 - 保持肌膚柔嫩光滑"
      },{
        id: 4,
        text: "玻尿酸 - 水潤肌膚，補水鎖水"
      },],
      ingredient: "Aqua, Dipropylene Glycol, Panthenol, Niacinamide, Glycerin, Gossypium Herbaceum Callus Culture, Gluconolactone, Sodium Benzoate, Honey Extract, Phenoxyethanol, Pearl Powder, Sea Salt, Sodium Hyaluronate, Hexylene Glycol, Fructose, Glucose, Sucrose, Urea, Dextrin, Alanine, Glutamic Acid, Aspartic Acid, Hexyl Nicotinate, Sodium Potassium Aluminum Silicate, Titanium Dioxide, Silica, Propanediol, Baicalin, Algae Extract, Phytosphingosine, Methyl Methacrylate Crosspolymer, Chlorphenesin, Cetearyl Olivate, Sorbitan Olivate, Cyclomethicone, Perfume"
    },
    /* 抗藍光保濕噴霧 */
    {
      id: 9,
      imgPath: require("../assets/images/product/spray.jpg"),
      title: "抗藍光保濕噴霧",
      price: "NT$ 880",
      price_sale: [{
        id: 1,
        num: "1",
        price: "NT$ 880",
      }, ],
      value: "spray",
      description: "「隨時隨地為肌膚補充水分」修護因藍光照射的受損肌膚，達到對外防護對內修護！",
      capacity: "60ml",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "務必使用卸妝產品卸除。孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "正確清潔臉部"
      },{
        id: 2,
        text: "日常保養步驟（化妝水➜精華液➜乳液或乳霜）"
      },{
        id: 3,
        text: "可妝前打底/搭配隔離霜後均勻噴至臉部及脖子"
      },{
        id: 4,
        text: "可妝後定妝/於完妝後均勻均勻噴至臉部及脖子"
      }],
      mainIngredient: [{
        id: 1,
        text: "黃瓜果萃取"
      },{
        id: 2,
        text: "GigaWhiteTM植物淨白複合配方"
      },{
        id: 3,
        text: "苜藍茵 UrblurayTM MS"
      },{
        id: 4,
        text: "歐蓍草萃取"
      },{
        id: 5,
        text: "香蜂草萃取"
      }],
      ingredient: "Water, Glycerin, Butylene Glycol, Flavor, Caprylyl Glycol, Hexylene Glycol, Cucumis Sativus Fruit Extract, Malva Sylvestris Extract, Mentha Piperita Extract, Alchemilla Vulgaris Extract, Primula Veris Extract, Veronica Officinalis Extract, Melissa Officinalis Extract, Achillea Millefolium Extract, Medicago Sativa (Alfalfa) Extract, Chlorphenesin, Phenoxyethanol"
    },
    /* 裸光仙人掌卸妝露 */
    {
      id: 10,
      imgPath: require("../assets/images/product/makeupRemover.jpg"),
      title: "裸光仙人掌卸妝露",
      price: "NT$ 1,280",
      price_sale: [{
        id: 1,
        num: "1",
        price: "NT$ 1,280",
      }, ],
      value: "makeup",
      description: "擁有分子量1500的「特殊大分子雙立體蝴蝶結構乳化劑」不用有別以往卸妝產品使用溶解方式的小分子乳化劑，因為在卸妝過程中容易使彩妝與髒污滲入肌膚與毛孔。「精準 “抓取“ 彩妝、髒汙、油脂」並確保不對肌膚造成負擔，就連滲入眼睛也不刺激，更能百分之百的用水沖洗乾淨，強化肌膚屏障。",
      capacity: "200ml",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "使用卸妝露後需以潔顏乳洗淨肌膚，孕婦期、哺乳期、美容課程後皆可使用。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "洗淨雙手甩乾水份，呈現手部半乾"
      },{
        id: 2,
        text: "取適量按壓約2 - 3下點壓於全臉"
      },{
        id: 3,
        text: "以指腹輕輕按摩全臉（淡妝30秒、濃妝60秒），➔淡妝以溫水洗淨即完成卸妝。 ➔濃妝以面紙擦拭彩妝再重複❷、❸步驟  (濃妝等於卸2次再以溫水洗淨即完成卸妝)"
      }],
      mainIngredient: [{
        id: 1,
        text: "特殊大分子雙立體蝴蝶結構乳化劑 - 卸除彩妝及髒污"
      },{
        id: 2,
        text: "水解梨果仙人掌花萃取 - 提亮肌膚光澤度，並能保濕舒緩修護肌膚"
      },{
        id: 3,
        text: "褐糖藻萃取 - 修護肌膚因環境造成的傷害，增強肌膚屏障功能"
      },{
        id: 4,
        text: "小米草萃取 - 保濕舒緩修護，改善暗沉提高肌膚光澤感"
      },{
        id: 5,
        text: "卵磷脂 - 肌膚調理劑，適合作為熟齡肌滋潤使用，增加皮膚光澤與彈性"
      }],
      ingredient: "Water、Propylene Glycol、Polysorbate 85、Olive Oli PEG-7 Esters、Hydrolyzed Opuntia Ficus-Indica Flower Extract、Laminaria Saccharina Extract、Glycerin、Butylene Glycol、Euphrasia、fficinalis Extract、Lecithin、Phenoxyethanol、Ethylhexylglycerin、Fragrance"
    },
    /* 植萃平衡膏 */
    {
      id: 11,
      imgPath: require("../assets/images/product/balanceCream.jpg"),
      title: "植萃平衡膏",
      price: "NT$ 1,080",
      price_sale: [{
          id: 1,
          num: "1",
          price: "NT$ 1,080",
        },
        {
          id: 2,
          num: "2",
          price: "NT$ 2,000",
        },
      ],
      value: "acnecream",
      description: "溫和保養無任何藥性成分，調理肌膚油水平衡，平衡肌膚油脂分泌、使肌膚光滑透亮毛孔細緻再也不是難事！",
      capacity: "20g",
      saveMethod: "有效期限3年，請置於陰涼乾燥處避免陽光直射及幼童無法拿取處。",
      notice: "使用期間有輕微乾燥脫皮屬正常現象(期間多注重保濕即可)。孕期&哺乳&美容課程後/不可使用",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "每日睡前保養最後一道保養程序使用，化妝水→精華液→面霜→平衡膏，沒長的地方不要擦，除非遇特殊情況需妝前急救(白天可擦)"
      }],
      mainIngredient: [{
        id: 1,
        text: "珍珠粉 - 改善暗沉，使肌膚光滑、細膩、有彈性、達到淨白的功效"
      },{
        id: 2,
        text: "桃柁酚萃取 - 調理肌膚油水平衡，適合作為修護保養使用"
      },{
        id: 3,
        text: "繖花醇 - 深入肌底舒緩修護，平衡肌膚油脂分泌"
      },{
        id: 4,
        text: "白柳樹萃取 - 深層淨化毛孔、通暢毛孔"
      }],
      ingredient: "Aqua, Dipotassium Glycyrrhizinate, Cetearyl Alcohol, C12-18 Alkyl Glucoside, Carbomer, Squalane, Sodium Hyaluronate, Butylene Glycol, Glycerin, Chlorphenesin, Phenoxyethanol, Ethylhexylglycerin, Zinc Oxide, Isopropyl Methylphenol, Pearl powder, Menthol, Sodium Citrate, Acetyl Tetrapeptide-15, Bifidus Ferment Filtrate, Pyruvic acid, Centella asiatica, Allantoin, DL-Mandelic Acid, Ceramide NP, Salix Alba Bark Extrac, Ascorbic Acid, Chrysanthemum Parthenium Extract, Camellia Sinensis, Magnolol, Lecithine, Totarol, Nicotinic Acid, Dexpanthenol, Pyridoxal, Sophora Flavescens Extract"
    },
    /* 水晶美容棒 */
    {
      id: 12,
      imgPath: require("../assets/images/product/stick.jpg"),
      title: "水晶美容棒",
      price: "NT$ 1,280",
      price_sale: [{
        id: 1,
        num: "1",
        price: "NT$ 1,280",
      }, ],
      value: "stick",
      description: "以水晶美顏能量學為其宗旨，水晶能釋放穩定的振動及能量磁場，能讓肌膚回到最原始單純健康的狀態，並有助建立體內平衡擁有強大的療癒力量，幫助臉部淋巴排毒引流、消水腫、改善紅血絲，用滾輪搭配蜂毒絲絨精粹按摩能更有效吸收及滑動。",
      capacity: "100％天然水晶玉石，玉石產地為巴西",
      saveMethod: "",
      notice: "每支均純手工獨一無二製作，紋路及尺吋存在些許差異均屬正常現象。天然水晶玉石材料，表層些微凹痕均屬正常現象並非瑕疵。使用前後請先以清水沖洗，並可定期於陽光下曬至1小時做消磁動作。本品為易碎品，請放置安全並不可重壓碰撞之處。本品如有裂痕或破損請立即停止使用避免受傷。",
      useTime: "",
      useMethod: [{
        id: 1,
        text: "搭配蜂毒絲絨精粹美容油，能更有效加強吸收並幫助肌膚按摩滑動"
      }],
      mainIngredient: [{
        id: 1,
        text: "大頭/用於額頭、臉頰、頸部，由下往上按摩有效預防肌肉下垂、消水腫達緊緻拉提"
      },{
        id: 2,
        text: "小頭/用於眼部、鼻子、嘴角，由內往外滑動有效收緊毛孔、改善紋路"
      }],
      ingredient: "舒服的冰涼觸感，能幫助肌膚降溫達鎮定解熱，比起單純的手部按摩相比，石材能使保養品吸收更完全，使用石材按摩臉部的同時壓力亦得以釋放，使心情放鬆是最有效果的美容良方。"
    },
  ],
  loading: false,
})

export const mutations = {
  SETLOADING(state, payload) {
    state.loading = payload;
  }
}

export const actions = {
  loadingHandler(state, payload) {
    state.commit("SETLOADING", payload);
  }
}
