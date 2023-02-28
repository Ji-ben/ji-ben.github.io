const columnTitle = [
	{ labelName: "已读", collapseCol: "1" },
	{ labelName: "原版书名", collapseCol: "3" },
	{ labelName: "系列分类", collapseCol: "4" },
	{ labelName: "豆瓣评分", collapseCol: "6&7" }
];
const tableHead = [
	{ headName: "已读", "columnType": "checkStatus", sortable: "string" },
	{ headName: "年份", "columnType": "center", sortable: "number" },
	{ headName: "原作书名", "columnType": "ENWorks" },
	{ headName: "系列分类", sortable: "string" },
	{ headName: "译本书名", "columnType": "CNWorks" },
	{ headName: "豆瓣评分", "columnType": "center", sortable: "number" },
	{ headName: "评分人数", "columnType": "right", sortable: "number" }
];

const works = [{
    mark: "",
    year: 1921,
    title: "The Mysterious Affair at Styles",
    series: "大侦探波洛",
    titleCN: "斯泰尔斯庄园奇案",
    rating: 7.9,
    votes: 10175
}, {
    mark: "",
    year: 1922,
    title: "The Secret Adversary",
    series: "汤米夫妇",
    titleCN: "暗藏杀机",
    rating: 7.4,
    votes: 603
}, {
    mark: "",
    year: 1923,
    title: "The Murder on the Links",
    series: "大侦探波洛",
    titleCN: "高尔夫球场命案",
    rating: 8.1,
    votes: 4244
}, {
    mark: "",
    year: 1924,
    title: "The Man in the Brown Suit",
    series: "雷斯上校",
    titleCN: "褐衣男子",
    rating: 7.6,
    votes: 1606
}, {
    mark: "",
    year: 1924,
    title: "Poirot Investigates",
    series: "短篇小说集",
    titleCN: "首相绑架案",
    rating: 6.7,
    votes: 1051
}, {
    mark: "",
    year: 1925,
    title: "The Secret of Chimneys",
    series: "巴特尔警监",
    titleCN: "烟囱别墅之谜",
    rating: 7.2,
    votes: 637
}, {
    mark: "",
    year: 1926,
    title: "The Murder of Roger Ackroyd",
    series: "大侦探波洛",
    titleCN: "罗杰疑案",
    rating: 9.1,
    votes: 31136
}, {
    mark: "",
    year: 1927,
    title: "The Big Four",
    series: "大侦探波洛",
    titleCN: "四魔头",
    rating: 6.4,
    votes: 2233
}, {
    mark: "",
    year: 1928,
    title: "The Mystery of the Blue Train",
    series: "大侦探波洛",
    titleCN: "蓝色列车之谜",
    rating: 7.3,
    votes: 2166
}, {
    mark: "",
    year: 1929,
    title: "The Seven Dials Mystery",
    series: "巴特尔警监",
    titleCN: "七面钟之谜",
    rating: 6.7,
    votes: 1433
}, {
    mark: "",
    year: 1929,
    title: "Partners in Crime",
    series: "短篇小说集",
    titleCN: "犯罪团伙",
    rating: 7.0,
    votes: 836
}, {
    mark: "",
    year: 1930,
    title: "The Murder at the Vicarage",
    series: "马普尔小姐",
    titleCN: "寓所谜案",
    rating: 7.3,
    votes: 1807
}, {
    mark: "",
    year: 1930,
    title: "Giant's Bread",
    series: "其它",
    titleCN: "撒旦的情歌",
    rating: 8.0,
    votes: 271
}, {
    mark: "",
    year: 1930,
    title: "The Mysterious Mr Quin",
    series: "短篇小说集",
    titleCN: "神秘的奎因先生",
    rating: 6.7,
    votes: 454
}, {
    mark: "",
    year: 1931,
    title: "The Sittaford Mystery",
    series: "悬疑小说",
    titleCN: "斯塔福特疑案",
    rating: 6.8,
    votes: 663
}, {
    mark: "",
    year: 1932,
    title: "Peril at End House",
    series: "大侦探波洛",
    titleCN: "悬崖山庄奇案",
    rating: 8.1,
    votes: 5631
}, {
    mark: "",
    year: 1932,
    title: "The Thirteen Problems",
    series: "短篇小说集",
    titleCN: "死亡草",
    rating: 8.1,
    votes: 1503
}, {
    mark: "",
    year: 1933,
    title: "Lord Edgware Dies",
    series: "大侦探波洛",
    titleCN: "人性记录",
    rating: 7.8,
    votes: 4994
}, {
    mark: "",
    year: 1934,
    title: "Murder on the Orient Express",
    series: "大侦探波洛",
    titleCN: "东方快车谋杀案",
    rating: 9.0,
    votes: 112764
}, {
    mark: "",
    year: 1934,
    title: "Unfinished Portrait",
    series: "其它",
    titleCN: "未完成的肖像",
    rating: 7.6,
    votes: 402
}, {
    mark: "",
    year: 1934,
    title: "Why Didn't They Ask Evans?",
    series: "悬疑小说",
    titleCN: "悬崖上的谋杀",
    rating: 7.7,
    votes: 999
}, {
    mark: "",
    year: 1934,
    title: "The Listerdale Mystery",
    series: "短篇小说集",
    titleCN: "金色的机遇",
    rating: 6.9,
    votes: 400
}, {
    mark: "",
    year: 1934,
    title: "Parker Pyne Investigates",
    series: "短篇小说集",
    titleCN: "惊险的浪漫",
    rating: 7.5,
    votes: 521
}, {
    mark: "",
    year: 1935,
    title: "Three Act Tragedy",
    series: "大侦探波洛",
    titleCN: "三幕悲剧",
    rating: 7.8,
    votes: 2355
}, {
    mark: "",
    year: 1935,
    title: "Death in the Clouds",
    series: "大侦探波洛",
    titleCN: "云中命案",
    rating: 7.3,
    votes: 5441
}, {
    mark: "",
    year: 1936,
    title: "The A.B.C. Murders",
    series: "大侦探波洛",
    titleCN: "ABC谋杀案",
    rating: 8.3,
    votes: 16136
}, {
    mark: "",
    year: 1936,
    title: "Murder in Mesopotamia",
    series: "大侦探波洛",
    titleCN: "古墓之谜",
    rating: 7.7,
    votes: 3355
}, {
    mark: "",
    year: 1936,
    title: "Cards on the Table",
    series: "大侦探波洛",
    titleCN: "底牌",
    rating: 8.0,
    votes: 4577
}, {
    mark: "",
    year: 1937,
    title: "Dumb Witness",
    series: "大侦探波洛",
    titleCN: "沉默的证人",
    rating: 7.5,
    votes: 3154
}, {
    mark: "",
    year: 1937,
    title: "Death on the Nile",
    series: "大侦探波洛",
    titleCN: "尼罗河上的惨案",
    rating: 8.7,
    votes: 40806
}, {
    mark: "",
    year: 1937,
    title: "Murder in the Mews",
    series: "短篇小说集",
    titleCN: "幽巷谋杀案",
    rating: 7.3,
    votes: 676
}, {
    mark: "",
    year: 1938,
    title: "Appointment with Death",
    series: "大侦探波洛",
    titleCN: "死亡约会",
    rating: 7.7,
    votes: 5754
}, {
    mark: "",
    year: 1938,
    title: "Hercule Poirot's Christmas",
    series: "大侦探波洛",
    titleCN: "波洛圣诞探案记",
    rating: 8.3,
    votes: 2774
}, {
    mark: "",
    year: 1939,
    title: "Murder Is Easy",
    series: "巴特尔警监",
    titleCN: "逆我者亡",
    rating: 7.3,
    votes: 2474
}, {
    mark: "",
    year: 1939,
    title: "Ten Little Indians",
    series: "悬疑小说",
    titleCN: "无人生还",
    rating: 8.8,
    votes: 116454
}, {
    mark: "",
    year: 1940,
    title: "Sad Cypress",
    series: "大侦探波洛",
    titleCN: "H庄园的午餐",
    rating: 7.7,
    votes: 1699
}, {
    mark: "",
    year: 1940,
    title: "One, Two, Buckle My Shoe",
    series: "大侦探波洛",
    titleCN: "牙医谋杀案",
    rating: 7.7,
    votes: 2385
}, {
    mark: "",
    year: 1941,
    title: "Evil Under the Sun",
    series: "大侦探波洛",
    titleCN: "阳光下的罪恶",
    rating: 8.2,
    votes: 12770
}, {
    mark: "",
    year: 1941,
    title: "N or M?",
    series: "汤米夫妇",
    titleCN: "桑苏西来客",
    rating: 7.4,
    votes: 1234
}, {
    mark: "",
    year: 1942,
    title: "The Body in the Library",
    series: "马普尔小姐",
    titleCN: "藏书室女尸之谜",
    rating: 7.3,
    votes: 4135
}, {
    mark: "",
    year: 1942,
    title: "Five Little Pigs",
    series: "大侦探波洛",
    titleCN: "五只小猪",
    rating: 8.4,
    votes: 7879
}, {
    mark: "",
    year: 1943,
    title: "The Moving Finger",
    series: "马普尔小姐",
    titleCN: "魔手",
    rating: 7.0,
    votes: 1939
}, {
    mark: "",
    year: 1944,
    title: "Towards Zero",
    series: "巴特尔警监",
    titleCN: "零点",
    rating: 7.9,
    votes: 1720
}, {
    mark: "",
    year: 1944,
    title: "Absent in the Spring",
    series: "其它",
    titleCN: "幸福假面",
    rating: 8.4,
    votes: 1062
}, {
    mark: "",
    year: 1945,
    title: "Death Comes as the End",
    series: "悬疑小说",
    titleCN: "死亡终局",
    rating: 7.4,
    votes: 971
}, {
    mark: "",
    year: 1945,
    title: "Sparkling Cyanide",
    series: "雷斯上校",
    titleCN: "闪光的氰化物",
    rating: 7.4,
    votes: 1313
}, {
    mark: "",
    year: 1946,
    title: "The Hollow",
    series: "大侦探波洛",
    titleCN: "空幻之屋",
    rating: 7.6,
    votes: 2829
}, {
    mark: "",
    year: 1947,
    title: "The Labours of Hercules",
    series: "短篇小说集",
    titleCN: "大侦探波洛的丰功伟绩",
    rating: 7.6,
    votes: 1267
}, {
    mark: "",
    year: 1948,
    title: "Taken at the Flood",
    series: "大侦探波洛",
    titleCN: "顺水推舟",
    rating: 7.7,
    votes: 5364
}, {
    mark: "",
    year: 1948,
    title: "The Rose and the Yew Tree",
    series: "其它",
    titleCN: "玫瑰与紫杉",
    rating: 7.9,
    votes: 1312
}, {
    mark: "",
    year: 1948,
    title: "The Witness for the Prosecution and Other Stories",
    series: "短篇小说集",
    titleCN: "控方证人",
    rating: 7.2,
    votes: 2024
}, {
    mark: "",
    year: 1949,
    title: "Crooked House",
    series: "悬疑小说",
    titleCN: "怪屋",
    rating: 7.7,
    votes: 2860
}, {
    mark: "",
    year: 1950,
    title: "A Murder Is Announced",
    series: "马普尔小姐",
    titleCN: "谋杀启事",
    rating: 7.6,
    votes: 1347
}, {
    mark: "",
    year: 1951,
    title: "They Came to Baghdad",
    series: "悬疑小说",
    titleCN: "他们来到巴格达",
    rating: 7.5,
    votes: 1012
}, {
    mark: "",
    year: 1952,
    title: "Mrs McGinty's Dead",
    series: "大侦探波洛",
    titleCN: "清洁女工之死",
    rating: 7.3,
    votes: 1378
}, {
    mark: "",
    year: 1952,
    title: "They Do It with Mirrors",
    series: "马普尔小姐",
    titleCN: "借镜杀人",
    rating: 7.1,
    votes: 1939
}, {
    mark: "",
    year: 1952,
    title: "A Daughter's a Daughter",
    series: "其它",
    titleCN: "母亲的女儿",
    rating: 7.7,
    votes: 3763
}, {
    mark: "",
    year: 1953,
    title: "After the Funeral",
    series: "大侦探波洛",
    titleCN: "葬礼之后",
    rating: 7.5,
    votes: 3763
}, {
    mark: "",
    year: 1953,
    title: "A Pocket Full of Rye",
    series: "马普尔小姐",
    titleCN: "黑麦奇案",
    rating: 7.4,
    votes: 1378
}, {
    mark: "",
    year: 1954,
    title: "Destination Unknown",
    series: "悬疑小说",
    titleCN: "地狱之旅",
    rating: 7.2,
    votes: 1939
}, {
    mark: "",
    year: 1955,
    title: "Hickory Dickory Dock",
    series: "大侦探波洛",
    titleCN: "山核桃大街谋杀案",
    rating: 7.0,
    votes: 3763
}, {
    mark: "",
    year: 1956,
    title: "Dead Man's Folly",
    series: "大侦探波洛",
    titleCN: "弄假成真",
    rating: 7.3,
    votes: 3763
}, {
    mark: "",
    year: 1956,
    title: "The Burden",
    series: "其它",
    titleCN: "爱的重量",
    rating: 7.4,
    votes: 3763
}, {
    mark: "",
    year: 1957,
    title: "4.50 from Paddington",
    series: "马普尔小姐",
    titleCN: "命案目睹记",
    rating: 7.2,
    votes: 3763
}, {
    mark: "",
    year: 1958,
    title: "Ordeal by Innocence",
    series: "悬疑小说",
    titleCN: "奉命谋杀",
    rating: 7.5,
    votes: 1939
}, {
    mark: "",
    year: 1959,
    title: "Cat Among the Pigeons",
    series: "大侦探波洛",
    titleCN: "鸽群中的猫",
    rating: 7.2,
    votes: 3763
}, {
    mark: "",
    year: 1961,
    title: "The Pale Horse",
    series: "悬疑小说",
    titleCN: "灰马酒店",
    rating: 7.5,
    votes: 1158
}, {
    mark: "",
    year: 1962,
    title: "The Mirror Crack'd from Side to Side",
    series: "马普尔小姐",
    titleCN: "破镜谋杀案",
    rating: 7.5,
    votes: 1776
}, {
    mark: "",
    year: 1963,
    title: "The Clocks",
    series: "大侦探波洛",
    titleCN: "怪钟疑案",
    rating: 6.8,
    votes: 1230
}, {
    mark: "",
    year: 1964,
    title: "A Caribbean Mystery",
    series: "马普尔小姐",
    titleCN: "加勒比海之谜",
    rating: 7.5,
    votes: 857
}, {
    mark: "",
    year: 1965,
    title: "At Bertram's Hotel",
    series: "马普尔小姐",
    titleCN: "伯特伦旅馆",
    rating: 6.9,
    votes: 679
}, {
    mark: "",
    year: 1966,
    title: "Third Girl",
    series: "大侦探波洛",
    titleCN: "第三个女郎",
    rating: 6.8,
    votes: 1569
}, {
    mark: "",
    year: 1967,
    title: "Endless Night",
    series: "悬疑小说",
    titleCN: "长夜",
    rating: 7.9,
    votes: 3780
}, {
    mark: "",
    year: 1968,
    title: "By the Pricking of My Thumbs",
    series: "汤米夫妇",
    titleCN: "煦阳岭疑云",
    rating: 7.2,
    votes: 868
}, {
    mark: "",
    year: 1969,
    title: "Hallowe'en Party",
    series: "大侦探波洛",
    titleCN: "万圣节前夜的谋杀",
    rating: 6.9,
    votes: 1883
}, {
    mark: "",
    year: 1970,
    title: "Passenger to Frankfurt",
    series: "悬疑小说",
    titleCN: "天涯过客",
    rating: 5.9,
    votes: 1512
}, {
    mark: "",
    year: 1971,
    title: "Nemesis",
    series: "马普尔小姐",
    titleCN: "复仇女神",
    rating: 7.4,
    votes: 2612
}, {
    mark: "",
    year: 1972,
    title: "Elephants Can Remember",
    series: "大侦探波洛",
    titleCN: "大象的证词",
    rating: 6.6,
    votes: 1512
}, {
    mark: "",
    year: 1973,
    title: "Postern of Fate",
    series: "汤米夫妇",
    titleCN: "命运之门",
    rating: 5.3,
    votes: 520
}, {
    mark: "",
    year: 1974,
    title: "Poirot's Early Cases",
    series: "短篇小说集",
    titleCN: "蒙面女人",
    rating: 7.1,
    votes: 766
}, {
    mark: "",
    year: 1975,
    title: "Curtain",
    series: "大侦探波洛",
    titleCN: "帷幕",
    rating: 9.0,
    votes: 7106
}, {
    mark: "",
    year: 1976,
    title: "Sleeping Murder",
    series: "马普尔小姐",
    titleCN: "沉睡的谋杀案",
    rating: 7.6,
    votes: 2612
}, {
    mark: "",
    year: 1979,
    title: "Miss Marple's Final Cases and Two Other Stories",
    series: "短篇小说集",
    titleCN: "马普尔小姐最后的案件",
    rating: 7.0,
    votes: 1281
}];