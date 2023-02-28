const columnTitle = [
    { labelName: "已读", collapseCol: "1" },
    { labelName: "年份", collapseCol: "3" },
    { labelName: "日语原版", collapseCol: "4&5" },
    { labelName: "分类", collapseCol: "6" },
    { labelName: "中文版", collapseCol: "8&9" },
    { labelName: "豆瓣评分", collapseCol: "10&11" }
];
const tableHead = [
    { headName: "已读", sortable: "string", "columnType": "checkStatus" },
    { headName: "初版次序", sortable: "number", "columnType": "center" },
    { headName: "初版年份", sortable: "number", "columnType": "center" },
    { headName: "原作名", "columnType": "JPWorks" },
    { headName: "出版社", sortable: "string", },
    { headName: "系列分类", sortable: "string", },
    { headName: "译本书名", "columnType": "CNWorks" },
    { headName: "出版社", sortable: "string" },
    { headName: "译者", sortable: "string", },
    { headName: "豆瓣评分", sortable: "number", "columnType": "center" },
    { headName: "评分人数", sortable: "number", "columnType": "right" }
];

const works = [{
    mark: "",
    id: 1,
    year: 1985,
    name: "放課後",
    press: "講談社",
    series: "长篇",
    nameCN: "放学后",
    pressCN: "南海出版公司",
    transBy: "赵峻",
    rating: "7.6",
    votes: "145399"
}, {
    mark: "",
    id: 2,
    year: 1986,
    name: "卒業―雪月花殺人ゲーム",
    press: "講談社",
    series: "加贺恭一郎系列01",
    nameCN: "毕业",
    pressCN: "南海出版公司",
    transBy: "黄真",
    rating: "7.2",
    votes: "10279"
}, {
    mark: "",
    id: 3,
    year: 1986,
    name: "白馬山荘殺人事件",
    press: "光文社",
    series: "长篇",
    nameCN: "白马山庄杀人事件",
    pressCN: "人民文学出版社",
    transBy: "袁斌",
    rating: "6.6",
    votes: "8304"
}, {
    mark: "",
    id: 4,
    year: 1987,
    name: "学生街の殺人",
    press: "講談社",
    series: "长篇",
    nameCN: "学生街的日子",
    pressCN: "南海出版公司",
    transBy: "王维幸",
    rating: "6.9",
    votes: "4162"
}, {
    mark: "",
    id: 5,
    year: 1987,
    name: "11文字の殺人",
    press: "光文社",
    series: "长篇",
    nameCN: "11字谜案",
    pressCN: "人民文学出版社",
    transBy: "羊恩媺",
    rating: "6.5",
    votes: "1733"
}, {
    mark: "",
    id: 6,
    year: 1988,
    name: "魔球",
    press: "講談社",
    series: "长篇",
    nameCN: "魔球",
    pressCN: "南海出版公司",
    transBy: "黄真",
    rating: "7.1",
    votes: "4675"
}, {
    mark: "",
    id: 7,
    year: 1988,
    name: "ウインクで乾杯",
    press: "祥伝社",
    series: "长篇",
    nameCN: "以眨眼干杯",
    pressCN: "化学工业出版社",
    transBy: "袁斌",
    rating: "6.2",
    votes: "4056"
}, {
    mark: "",
    id: 8,
    year: 1988,
    name: "浪花少年探偵団",
    press: "講談社",
    series: "浪花少年侦探团1",
    nameCN: "浪花少年侦探团",
    pressCN: "南海出版公司",
    transBy: "张舟",
    rating: "6.9",
    votes: "5911"
}, {
    mark: "",
    id: 9,
    year: 1989,
    name: "十字屋敷のピエロ",
    press: "講談社",
    series: "长篇",
    nameCN: "悲剧人偶",
    pressCN: "北京十月文艺出版社",
    transBy: "杨婉蘅",
    rating: "7.1",
    votes: "10242"
}, {
    mark: "",
    id: 10,
    year: 1989,
    name: "眠りの森",
    press: "講談社",
    series: "加贺恭一郎系列02",
    nameCN: "沉睡的森林",
    pressCN: "南海出版公司",
    transBy: "郑琳",
    rating: "6.9",
    votes: "11264"
}, {
    mark: "",
    id: 11,
    year: 1989,
    name: "鳥人計画",
    press: "新潮社",
    series: "长篇",
    nameCN: "鸟人计划",
    pressCN: "南海出版公司",
    transBy: "星野空",
    rating: "6.7",
    votes: "4401"
}, {
    mark: "",
    id: 12,
    year: 1989,
    name: "殺人現場は雲の上",
    press: "実業之日本社",
    series: "长篇",
    nameCN: "空中杀人现场",
    pressCN: "南海出版公司",
    transBy: "杨婉蘅",
    rating: "6.1",
    votes: "5142"
}, {
    mark: "",
    id: 13,
    year: 1989,
    name: "ブルータスの心臓",
    press: "光文社",
    series: "长篇",
    nameCN: "布鲁特斯的心脏",
    pressCN: "南海出版公司",
    transBy: "赵仲明",
    rating: "7",
    votes: "5791"
}, {
    mark: "",
    id: 14,
    year: 1990,
    name: "宿命",
    press: "講談社",
    series: "长篇",
    nameCN: "宿命",
    pressCN: "南海出版公司",
    transBy: "张智渊",
    rating: "7.5",
    votes: "30101"
}, {
    mark: "",
    id: 15,
    year: 1990,
    name: "探偵倶楽部",
    press: "祥伝社",
    series: "短篇小说集",
    nameCN: "侦探俱乐部",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "6.7",
    votes: "3135"
}, {
    mark: "",
    id: 16,
    year: 1990,
    name: "犯人のいない殺人の夜",
    press: "光文社",
    series: "短篇小说集",
    nameCN: "没有凶手的杀人夜",
    pressCN: "人民文学出版社",
    transBy: "袁斌",
    rating: "6.9",
    votes: "7471"
}, {
    mark: "",
    id: 17,
    year: 1990,
    name: "仮面山荘殺人事件",
    press: "徳間書店",
    series: "长篇",
    nameCN: "假面山庄",
    pressCN: "北京十月文艺出版社",
    transBy: "陈文娟",
    rating: "7.6",
    votes: "28806"
}, {
    mark: "",
    id: 18,
    year: 1991,
    name: "変身",
    press: "講談社",
    series: "长篇",
    nameCN: "变身",
    pressCN: "南海出版公司",
    transBy: "赵峻",
    rating: "7.1",
    votes: "27715"
}, {
    mark: "",
    id: 19,
    year: 1991,
    name: "回廊亭殺人事件",
    press: "光文社",
    series: "长篇",
    nameCN: "长长的回廊",
    pressCN: "南海出版公司",
    transBy: "蓝佳",
    rating: "7",
    votes: "4812"
}, {
    mark: "",
    id: 20,
    year: 1991,
    name: "天使の耳",
    press: "実業之日本社",
    series: "短篇小说集",
    nameCN: "天使之耳",
    pressCN: "人民文学出版社",
    transBy: "朱田云",
    rating: "6.6",
    votes: "1997"
}, {
    mark: "",
    id: 21,
    year: 1992,
    name: "ある閉ざされた雪の山荘で",
    press: "講談社",
    series: "长篇",
    nameCN: "大雪中的山庄",
    pressCN: "北京十月文艺出版社",
    transBy: "李盈春",
    rating: "7.1",
    votes: "8546"
}, {
    mark: "",
    id: 22,
    year: 1992,
    name: "美しき凶器",
    press: "光文社",
    series: "长篇",
    nameCN: "美丽的凶器",
    pressCN: "南海出版公司",
    transBy: "花超",
    rating: "6.5",
    votes: "5285"
}, {
    mark: "",
    id: 23,
    year: 1993,
    name: "同級生",
    press: "講談社",
    series: "长篇",
    nameCN: "同级生",
    pressCN: "南海出版公司",
    transBy: "王丽丽",
    rating: "6.7",
    votes: "11480"
}, {
    mark: "",
    id: 24,
    year: 1993,
    name: "分身",
    press: "集英社",
    series: "长篇",
    nameCN: "分身",
    pressCN: "南海出版公司",
    transBy: "王维幸",
    rating: "7.4",
    votes: "24804"
}, {
    mark: "",
    id: 25,
    year: 1993,
    name: "しのぶセンセにサヨナラ",
    press: "講談社",
    series: "浪花少年侦探团2",
    nameCN: "再见了，忍老师",
    pressCN: "南海出版公司",
    transBy: "王雪",
    rating: "7",
    votes: "1187"
}, {
    mark: "",
    id: 26,
    year: 1994,
    name: "怪しい人びと",
    press: "光文社",
    series: "短篇小说集",
    nameCN: "怪人们",
    pressCN: "人民文学出版社",
    transBy: "尹月",
    rating: "6.5",
    votes: "4883"
}, {
    mark: "",
    id: 27,
    year: 1994,
    name: "むかし僕が死んだ家",
    press: "双葉社",
    series: "长篇",
    nameCN: "从前我死去的家",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "7.6",
    votes: "16352"
}, {
    mark: "",
    id: 28,
    year: 1994,
    name: "虹を操る少年",
    press: "実業之日本社",
    series: "长篇",
    nameCN: "造彩虹的人",
    pressCN: "北京十月文艺出版社",
    transBy: "吕灵芝",
    rating: "6.2",
    votes: "3459"
}, {
    mark: "",
    id: 29,
    year: 1995,
    name: "パラレルワールド・ラブストーリー",
    press: "中央公論社",
    series: "长篇",
    nameCN: "平行世界·爱情故事",
    pressCN: "南海出版公司",
    transBy: "王维幸",
    rating: "7.2",
    votes: "9849"
}, {
    mark: "",
    id: 30,
    year: 1995,
    name: "あの頃ぼくらはアホでした",
    press: "集英社",
    series: "散文",
    nameCN: "我的晃荡的青春",
    pressCN: "南海出版公司",
    transBy: "代珂",
    rating: "6.9",
    votes: "7523"
}, {
    mark: "",
    id: 31,
    year: 1995,
    name: "怪笑小説",
    press: "集英社",
    series: "笑小说系列1",
    nameCN: "怪笑小说",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "7.9",
    votes: "12251"
}, {
    mark: "",
    id: 32,
    year: 1995,
    name: "天空の蜂",
    press: "講談社",
    series: "长篇",
    nameCN: "天空之蜂",
    pressCN: "南海出版公司",
    transBy: "王维幸",
    rating: "6.7",
    votes: "2540"
}, {
    mark: "",
    id: 33,
    year: 1996,
    name: "名探偵の掟",
    press: "講談社",
    series: "天下一大五郎系列1",
    nameCN: "名侦探的守则",
    pressCN: "南海出版公司",
    transBy: "岳远坤",
    rating: "7.3",
    votes: "19136"
}, {
    mark: "",
    id: 34,
    year: 1996,
    name: "どちらかが彼女を殺した",
    press: "講談社",
    series: "加贺恭一郎系列03",
    nameCN: "谁杀了她",
    pressCN: "南海出版公司",
    transBy: "袁斌",
    rating: "7.6",
    votes: "18668"
}, {
    mark: "",
    id: 35,
    year: 1996,
    name: "毒笑小説",
    press: "集英社",
    series: "笑小说系列2",
    nameCN: "毒笑小说",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "7.8",
    votes: "12970"
}, {
    mark: "",
    id: 36,
    year: 1996,
    name: "悪意",
    press: "講談社",
    series: "加贺恭一郎系列04",
    nameCN: "恶意",
    pressCN: "南海出版公司",
    transBy: "娄美莲",
    rating: "8.5",
    votes: "231459"
}, {
    mark: "",
    id: 37,
    year: 1996,
    name: "名探偵の呪縛",
    press: "講談社",
    series: "天下一大五郎系列2",
    nameCN: "名侦探的诅咒",
    pressCN: "南海出版公司",
    transBy: "岳远坤",
    rating: "7.1",
    votes: "8654"
}, {
    mark: "",
    id: 38,
    year: 1998,
    name: "探偵ガリレオ",
    press: "文藝春秋",
    series: "伽利略系列01",
    nameCN: "侦探伽利略",
    pressCN: "海南出版社",
    transBy: "赵博",
    rating: "7.2",
    votes: "16077"
}, {
    mark: "",
    id: 39,
    year: 1998,
    name: "秘密",
    press: "文藝春秋",
    series: "长篇",
    nameCN: "秘密",
    pressCN: "海南出版社",
    transBy: "赵博",
    rating: "7.7",
    votes: "51979"
}, {
    mark: "",
    id: 40,
    year: 1999,
    name: "私が彼を殺した",
    press: "講談社",
    series: "加贺恭一郎系列05",
    nameCN: "我杀了他",
    pressCN: "南海出版公司",
    transBy: "郑琳",
    rating: "7.4",
    votes: "10983"
}, {
    mark: "",
    id: 41,
    year: 1999,
    name: "白夜行",
    press: "集英社",
    series: "长篇",
    nameCN: "白夜行",
    pressCN: "南海出版公司",
    transBy: "刘姿君",
    rating: "9.1",
    votes: "499953"
}, {
    mark: "",
    id: 42,
    year: 2000,
    name: "嘘をもうひとつだけ",
    press: "講談社",
    series: "加贺恭一郎系列06",
    nameCN: "只差一个谎言",
    pressCN: "南海出版公司",
    transBy: "黄真",
    rating: "7.1",
    votes: "8281"
}, {
    mark: "",
    id: 43,
    year: 2000,
    name: "予知夢",
    press: "文藝春秋",
    series: "伽利略系列02",
    nameCN: "预知梦",
    pressCN: "海南出版社",
    transBy: "赵博",
    rating: "7",
    votes: "10424"
}, {
    mark: "",
    id: 44,
    year: 2001,
    name: "片想い",
    press: "文藝春秋",
    series: "长篇",
    nameCN: "单恋",
    pressCN: "南海出版公司",
    transBy: "赵峻",
    rating: "7.5",
    votes: "26573"
}, {
    mark: "",
    id: 45,
    year: 2001,
    name: "サンタのおばさん",
    press: "文藝春秋",
    series: "儿童读物",
    nameCN: "圣诞妈妈",
    pressCN: "新星出版社",
    transBy: "赵峻",
    rating: "7.9",
    votes: "382"
}, {
    mark: "",
    id: 46,
    year: 2001,
    name: "超・殺人事件 推理作家の苦悩",
    press: "新潮社",
    series: "短篇小说集",
    nameCN: "超·杀人事件",
    pressCN: "南海出版公司",
    transBy: "计丽屏",
    rating: "8.1",
    votes: "11047"
}, {
    mark: "",
    id: 47,
    year: 2002,
    name: "レイクサイド",
    press: "実業之日本社",
    series: "长篇",
    nameCN: "湖畔",
    pressCN: "化学工业出版社",
    transBy: "沈杨",
    rating: "7.3",
    votes: "14966"
}, {
    mark: "",
    id: 48,
    year: 2002,
    name: "時生",
    press: "講談社",
    series: "长篇",
    nameCN: "时生",
    pressCN: "南海出版公司",
    transBy: "徐建雄",
    rating: "7.6",
    votes: "51898"
}, {
    mark: "",
    id: 49,
    year: 2002,
    name: "ゲームの名は誘拐",
    press: "光文社",
    series: "长篇",
    nameCN: "绑架游戏",
    pressCN: "上海译文出版社",
    transBy: "郑悦",
    rating: "7.3",
    votes: "10569"
}, {
    mark: "",
    id: 50,
    year: 2003,
    name: "手紙",
    press: "文春文庫",
    series: "长篇",
    nameCN: "信",
    pressCN: "译林出版社",
    transBy: "赵江",
    rating: "7.7",
    votes: "22668"
}, {
    mark: "",
    id: 51,
    year: 2003,
    name: "おれは非情勤",
    press: "集英社",
    series: "长篇",
    nameCN: "我的老师是侦探",
    pressCN: "南海出版公司",
    transBy: "代珂",
    rating: "6.9",
    votes: "578"
}, {
    mark: "",
    id: 52,
    year: 2003,
    name: "殺人の門",
    press: "角川書店",
    series: "长篇",
    nameCN: "杀人之门",
    pressCN: "南海出版公司",
    transBy: "张智渊",
    rating: "7.5",
    votes: "10291"
}, {
    mark: "",
    id: 53,
    year: 2004,
    name: "幻夜",
    press: "集英社",
    series: "长篇",
    nameCN: "幻夜",
    pressCN: "南海出版公司",
    transBy: "李炜",
    rating: "7.5",
    votes: "81913"
}, {
    mark: "",
    id: 54,
    year: 2004,
    name: "ちゃれんじ?",
    press: "実業之日本社",
    series: "散文",
    nameCN: "挑战",
    pressCN: "人民文学出版社",
    transBy: "曹艺",
    rating: "6.1",
    votes: "630"
}, {
    mark: "",
    id: 55,
    year: 2004,
    name: "さまよう刃",
    press: "朝日新聞社",
    series: "长篇",
    nameCN: "彷徨之刃",
    pressCN: "南海出版公司",
    transBy: "刘珮瑄",
    rating: "7.9",
    votes: "20151"
}, {
    mark: "",
    id: 56,
    year: 2005,
    name: "黒笑小説",
    press: "集英社",
    series: "笑小说系列3",
    nameCN: "黑笑小说",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "7.6",
    votes: "16358"
}, {
    mark: "",
    id: 57,
    year: 2005,
    name: "容疑者Xの献身",
    press: "文藝春秋",
    series: "伽利略系列03",
    nameCN: "嫌疑人X的献身",
    pressCN: "南海出版公司",
    transBy: "刘子倩",
    rating: "8.9",
    votes: "499731"
}, {
    mark: "",
    id: 58,
    year: 2005,
    name: "さいえんす?",
    press: "角川文庫",
    series: "散文",
    nameCN: "科学？",
    pressCN: "新星出版社",
    transBy: "冯锦源",
    rating: "6.4",
    votes: "472"
}, {
    mark: "",
    id: 59,
    year: 2006,
    name: "夢はトリノをかけめぐる",
    press: "光文社",
    series: "散文",
    nameCN: "梦回都灵",
    pressCN: "人民文学出版社",
    transBy: "赵秀娟",
    rating: "5.4",
    votes: "1147"
}, {
    mark: "",
    id: 60,
    year: 2006,
    name: "赤い指",
    press: "講談社",
    series: "加贺恭一郎系列07",
    nameCN: "红手指",
    pressCN: "南海出版公司",
    transBy: "于壮",
    rating: "7.9",
    votes: "18743"
}, {
    mark: "",
    id: 61,
    year: 2006,
    name: "使命と魂のリミット",
    press: "新潮社",
    series: "长篇",
    nameCN: "使命与魂的尽头",
    pressCN: "南海出版公司",
    transBy: "刘姿君",
    rating: "7.3",
    votes: "1580"
}, {
    mark: "",
    id: 62,
    year: 2007,
    name: "たぶん最後の御挨拶",
    press: "文藝春秋",
    series: "散文",
    nameCN: "东野圭吾的最后致意",
    pressCN: "新星出版社",
    transBy: "潘璐",
    rating: "6.9",
    votes: "3194"
}, {
    mark: "",
    id: 63,
    year: 2007,
    name: "夜明けの街で",
    press: "角川書店",
    series: "长篇",
    nameCN: "黎明之街",
    pressCN: "南海出版公司",
    transBy: "李超楠",
    rating: "7.6",
    votes: "14389"
}, {
    mark: "",
    id: 64,
    year: 2007,
    name: "ダイイング・アイ",
    press: "光文社",
    series: "长篇",
    nameCN: "濒死之眼",
    pressCN: "上海译文出版社",
    transBy: "匡匡",
    rating: "6.3",
    votes: "10603"
}, {
    mark: "",
    id: 65,
    year: 2008,
    name: "流星の絆",
    press: "講談社",
    series: "长篇",
    nameCN: "流星之绊",
    pressCN: "南海出版公司",
    transBy: "徐建雄",
    rating: "7.7",
    votes: "41503"
}, {
    mark: "",
    id: 66,
    year: 2008,
    name: "ガリレオの苦悩",
    press: "文藝春秋",
    series: "伽利略系列04",
    nameCN: "伽利略的苦恼",
    pressCN: "当代世界出版社",
    transBy: "袁斌",
    rating: "7.2",
    votes: "12975"
}, {
    mark: "",
    id: 67,
    year: 2008,
    name: "聖女の救済",
    press: "文藝春秋",
    series: "伽利略系列05",
    nameCN: "圣女的救济",
    pressCN: "当代世界出版社",
    transBy: "袁斌",
    rating: "7.7",
    votes: "37669"
}, {
    mark: "",
    id: 68,
    year: 2009,
    name: "パラドックス13",
    press: "毎日新聞社",
    series: "长篇",
    nameCN: "悖论13",
    pressCN: "南海出版公司",
    transBy: "林青华",
    rating: "7.3",
    votes: "8106"
}, {
    mark: "",
    id: 69,
    year: 2009,
    name: "新参者",
    press: "講談社",
    series: "加贺恭一郎系列08",
    nameCN: "新参者",
    pressCN: "南海出版公司",
    transBy: "岳远坤",
    rating: "8.3",
    votes: "42568"
}, {
    mark: "",
    id: 70,
    year: 2010,
    name: "カッコウの卵は誰のもの",
    press: "光文社",
    series: "长篇",
    nameCN: "布谷鸟的蛋是谁的",
    pressCN: "新星出版社",
    transBy: "马杰",
    rating: "6.3",
    votes: "4466"
}, {
    mark: "",
    id: 71,
    year: 2010,
    name: "プラチナデータ",
    press: "幻冬舎",
    series: "长篇",
    nameCN: "白金数据",
    pressCN: "北京联合出版公司",
    transBy: "王蕴洁",
    rating: "7.1",
    votes: "12695"
}, {
    mark: "",
    id: 72,
    year: 2010,
    name: "白銀ジャック",
    press: "実業之日本社",
    series: "滑雪场系列1",
    nameCN: "雪国之劫",
    pressCN: "上海译文出版社",
    transBy: "郑悦",
    rating: "5.7",
    votes: "2883"
}, {
    mark: "",
    id: 73,
    year: 2011,
    name: "あの頃の誰か",
    press: "光文社",
    series: "短篇小说集",
    nameCN: "那时的某人",
    pressCN: "译林出版社",
    transBy: "吐雅",
    rating: "6.4",
    votes: "3021"
}, {
    mark: "",
    id: 74,
    year: 2011,
    name: "真夏の方程式",
    press: "文藝春秋",
    series: "伽利略系列06",
    nameCN: "盛夏的方程式",
    pressCN: "现代出版社",
    transBy: "袁斌",
    rating: "7.4",
    votes: "12434"
}, {
    mark: "",
    id: 75,
    year: 2011,
    name: "麒麟の翼",
    press: "講談社",
    series: "加贺恭一郎系列09",
    nameCN: "麒麟之翼",
    pressCN: "南海出版公司",
    transBy: "田秀娟",
    rating: "7.6",
    votes: "6795"
}, {
    mark: "",
    id: 76,
    year: 2011,
    name: "マスカレード・ホテル",
    press: "集英社",
    series: "假面饭店系列1",
    nameCN: "假面饭店",
    pressCN: "南海出版公司",
    transBy: "中森",
    rating: "7.1",
    votes: "16303"
}, {
    mark: "",
    id: 77,
    year: 2012,
    name: "歪笑小説",
    press: "集英社",
    series: "笑小说系列4",
    nameCN: "歪笑小说",
    pressCN: "南海出版公司",
    transBy: "王丽丽",
    rating: "7.4",
    votes: "4307"
}, {
    mark: "",
    id: 78,
    year: 2012,
    name: "ナミヤ雑貨店の奇蹟",
    press: "角川書店",
    series: "长篇",
    nameCN: "解忧杂货店",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "8.5",
    votes: "737992"
}, {
    mark: "",
    id: 79,
    year: 2012,
    name: "虚像の道化師",
    press: "文藝春秋",
    series: "伽利略系列07",
    nameCN: "虚像小丑",
    pressCN: "上海译文出版社",
    transBy: "郑悦",
    rating: "6.7",
    votes: "3074"
}, {
    mark: "",
    id: 80,
    year: 2012,
    name: "禁断の魔術",
    press: "文藝春秋",
    series: "伽利略系列08",
    nameCN: "禁忌魔术",
    pressCN: "上海译文出版社",
    transBy: "叶娉",
    rating: "7",
    votes: "2758"
}, {
    mark: "",
    id: 81,
    year: 2013,
    name: "夢幻花",
    press: "PHP研究所",
    series: "长篇",
    nameCN: "梦幻花",
    pressCN: "作家出版社",
    transBy: "赵峻",
    rating: "6.6",
    votes: "17494"
}, {
    mark: "",
    id: 82,
    year: 2013,
    name: "祈りの幕が下りる時",
    press: "講談社",
    series: "加贺恭一郎系列10",
    nameCN: "祈祷落幕时",
    pressCN: "南海出版公司",
    transBy: "代珂",
    rating: "7.8",
    votes: "41635"
}, {
    mark: "",
    id: 83,
    year: 2013,
    name: "疾風ロンド",
    press: "実業之日本社",
    series: "滑雪场系列2",
    nameCN: "疾风回旋曲",
    pressCN: "现代出版社",
    transBy: "苏友友",
    rating: "5.6",
    votes: "7691"
}, {
    mark: "",
    id: 84,
    year: 2014,
    name: "虚ろな十字架",
    press: "光文社",
    series: "长篇",
    nameCN: "虚无的十字架",
    pressCN: "湖南文艺出版社",
    transBy: "王蕴洁",
    rating: "7.5",
    votes: "49863"
}, {
    mark: "",
    id: 85,
    year: 2014,
    name: "マスカレード・イブ",
    press: "集英社",
    series: "假面饭店系列2",
    nameCN: "假面前夜",
    pressCN: "南海出版公司",
    transBy: "宋扬",
    rating: "6.7",
    votes: "8688"
}, {
    mark: "",
    id: 86,
    year: 2015,
    name: "ラプラスの魔女",
    press: "KADOKAWA",
    series: "拉普拉斯的魔女1",
    nameCN: "拉普拉斯的魔女",
    pressCN: "北京联合出版公司",
    transBy: "王蕴洁",
    rating: "6.7",
    votes: "23855"
}, {
    mark: "",
    id: 87,
    year: 2015,
    name: "人魚の眠る家",
    press: "幻冬舎",
    series: "长篇",
    nameCN: "沉睡的人鱼之家",
    pressCN: "北京联合出版公司",
    transBy: "王蕴洁",
    rating: "7.3",
    votes: "22254"
}, {
    mark: "",
    id: 88,
    year: 2016,
    name: "危険なビーナス",
    press: "講談社",
    series: "长篇",
    nameCN: "危险的维纳斯",
    pressCN: "北京联合出版公司",
    transBy: "星野空",
    rating: "6",
    votes: "5860"
}, {
    mark: "",
    id: 89,
    year: 2016,
    name: "恋のゴンドラ",
    press: "実業之日本社",
    series: "滑雪场系列3",
    nameCN: "恋爱的贡多拉",
    pressCN: "现代出版社",
    transBy: "魏精彩",
    rating: "5.8",
    votes: "6014"
}, {
    mark: "",
    id: 90,
    year: 2016,
    name: "雪煙チェイス",
    press: "実業之日本社",
    series: "滑雪场系列4",
    nameCN: "风雪追击",
    pressCN: "现代出版社",
    transBy: "赵文梅",
    rating: "5.7",
    votes: "6377"
}, {
    mark: "",
    id: 91,
    year: 2017,
    name: "素敵な日本人",
    press: "光文社",
    series: "短篇小说集",
    nameCN: "第十年的情人节",
    pressCN: "人民文学出版社",
    transBy: "朱田云",
    rating: "6.9",
    votes: "5473"
}, {
    mark: "",
    id: 92,
    year: 2017,
    name: "マスカレード・ナイト",
    press: "集英社",
    series: "假面饭店系列3",
    nameCN: "假面之夜",
    pressCN: "南海出版公司",
    transBy: "李倩",
    rating: "7.1",
    votes: "3985"
}, {
    mark: "",
    id: 93,
    year: 2018,
    name: "魔力の胎動",
    press: "KADOKAWA",
    series: "拉普拉斯的魔女2",
    nameCN: "魔力的胎动",
    pressCN: "北京联合出版公司",
    transBy: "王蕴洁",
    rating: "5.9",
    votes: "2540"
}, {
    mark: "",
    id: 94,
    year: 2018,
    name: "沈黙のパレード",
    press: "文藝春秋",
    series: "伽利略系列09",
    nameCN: "沉默的巡游",
    pressCN: "南海出版公司",
    transBy: "边大玉",
    rating: "7.2",
    votes: "24692"
}, {
    mark: "",
    id: 95,
    year: 2019,
    name: "希望の糸",
    press: "講談社",
    series: "加贺恭一郎番外篇",
    nameCN: "希望之线",
    pressCN: "南海出版公司",
    transBy: "张舟",
    rating: "7.7",
    votes: "7629"
}, {
    mark: "",
    id: 96,
    year: 2020,
    name: "クスノキの番人",
    press: "実業之日本社",
    series: "长篇",
    nameCN: "祈念守护人",
    pressCN: "南海出版公司",
    transBy: "宋刚",
    rating: "7.5",
    votes: "8332"
}, {
    mark: "",
    id: 97,
    year: 2020,
    name: "ブラック・ショーマンと名もなき町の殺人",
    press: "光文社",
    series: "长篇",
    nameCN: "无名之町",
    pressCN: "南海出版公司",
    transBy: "王小燕",
    rating: "6.6",
    votes: "6488"
}, {
    mark: "",
    id: 98,
    year: 2021,
    name: "白鳥とコウモリ",
    press: "幻冬舎",
    series: "长篇",
    nameCN: "白鸟与蝙蝠",
    pressCN: "南海出版公司",
    transBy: "李盈春",
    rating: "7.5",
    votes: "333"
}, {
    mark: "",
    id: 99,
    year: 2021,
    name: "透明な螺旋",
    press: "文藝春秋",
    series: "伽利略系列10",
    nameCN: "透明的螺旋",
    pressCN: "南海出版公司",
    transBy: "史诗",
    rating: "6.6",
    votes: "3797"
}, {
    mark: "",
    id: 100,
    year: 2022,
    name: "マスカレード・ゲーム",
    press: "集英社",
    series: "假面饭店系列4",
    nameCN: "--",
    pressCN: "尚未出版",
    transBy: "尚未出版",
    rating: "暂无评分",
    votes: "暂无评分"
}, {
    mark: "",
    id: 101,
    year: 2023,
    name: "魔女と過ごした七日間",
    press: "KADOKAWA",
    series: "拉普拉斯的魔女3",
    nameCN: "--",
    pressCN: "尚未出版",
    transBy: "尚未出版",
    rating: "暂无评分",
    votes: "暂无评分"
}];