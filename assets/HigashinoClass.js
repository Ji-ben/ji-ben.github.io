//#region 表格首行
var thName = [
	"标记", "初版次序", "初版年份", "原作书名", "出版社", "系列分类",
	"译本书名", "出版社", "译者", "豆瓣评分", "评分人数", "个人评分"
];
//#endregion

//#region 奖项数据
var ulAward = [
	"1985年《放学后》获第31届江户川乱步奖",
	"1999年《秘密》获第52届日本推理作家协会奖（长篇类）",
	"2006年《嫌疑人X的献身》获直木三十五奖，第6届本格推理大奖（小说类）",
	"2008年《流星之绊》获第43届新风奖",
	"2012年《解忧杂货店》获第7届中央公论文艺奖",
	"2013年《梦幻花》获第26届柴田炼三郎奖",
	"2014年《祈祷落幕时》获第48届吉川英治文学奖"
];
var ulBunShun = [
	"1985年《放学后》",
	"1999年《白夜行》",
	"2005年《嫌疑人X的献身》",
	"2009年《新参者》",
	"2018年《沉默的游行》"
];
//#endregion

//表格数据
var books = [];
books[0] = {
	id: 1,
	year: 1985,
	name: "『放課後』",
	press: "講談社",
	series: "长篇",
	nameCN: "《放学后》",
	douban: 4074636,
	pressCN: "南海出版公司",
	transBy: "赵峻",
	rating: 7.6,
	votes: 124857,
};
books[1] = {
	id: 2,
	year: 1986,
	name: "『卒業―雪月花殺人ゲーム』",
	press: "講談社",
	series: "加贺恭一郎系列1",
	nameCN: "《毕业》",
	douban: 10598145,
	pressCN: "南海出版公司",
	transBy: "黄真",
	rating: 7.2,
	votes: 8453,
};
books[2] = {
	id: 3,
	year: 1986,
	name: "『白馬山荘殺人事件』",
	press: "光文社",
	series: "长篇",
	nameCN: "《白马山庄杀人事件》",
	douban: 5326850,
	pressCN: "人民文学出版社",
	transBy: "袁斌",
	rating: 6.6,
	votes: 7023,
};
books[3] = {
	id: 4,
	year: 1987,
	name: "『学生街の殺人』",
	press: "講談社",
	series: "长篇",
	nameCN: "《学生街的日子》",
	douban: 30276769,
	pressCN: "南海出版公司",
	transBy: "王维幸",
	rating: 6.8,
	votes: 2572,
};
books[4] = {
	id: 5,
	year: 1987,
	name: "『11文字の殺人』",
	press: "光文社",
	series: "长篇",
	nameCN: "《11字谜案》",
	douban: 34799537,
	pressCN: "人民文学出版社",
	transBy: "羊恩媺",
	rating: 6.3,
	votes: 714,
};
books[5] = {
	id: 6,
	year: 1988,
	name: "『魔球』",
	press: "講談社",
	series: "长篇",
	nameCN: "《魔球》",
	douban: 25779594,
	pressCN: "南海出版公司",
	transBy: "黄真",
	rating: 7.1,
	votes: 3509,
};
books[6] = {
	id: 7,
	year: 1988,
	name: "『ウインクで乾杯』",
	press: "祥伝社",
	series: "长篇",
	nameCN: "《以眨眼干杯》",
	douban: 6314045,
	pressCN: "化学工业出版社",
	transBy: "袁斌",
	rating: 6.2,
	votes: 3626,
};
books[7] = {
	id: 8,
	year: 1988,
	name: "『浪花少年探偵団』",
	press: "講談社",
	series: "浪花少年侦探团1",
	nameCN: "《浪花少年侦探团》",
	douban: 26935572,
	pressCN: "南海出版公司",
	transBy: "张舟",
	rating: 6.9,
	votes: 4696,
};
books[8] = {
	id: 9,
	year: 1989,
	name: "『十字屋敷のピエロ』",
	press: "講談社",
	series: "长篇",
	nameCN: "《悲剧人偶》",
	douban: 30210694,
	pressCN: "北京十月文艺出版社",
	transBy: "杨婉蘅",
	rating: 7.1,
	votes: 5966,
};
books[9] = {
	id: 10,
	year: 1989,
	name: "『眠りの森』",
	press: "講談社",
	series: "加贺恭一郎系列2",
	nameCN: "《沉睡的森林》",
	douban: 10594783,
	pressCN: "南海出版公司",
	transBy: "郑琳",
	rating: 6.9,
	votes: 9570,
};
books[10] = {
	id: 11,
	year: 1989,
	name: "『鳥人計画』",
	press: "新潮社",
	series: "长篇",
	nameCN: "《鸟人计划》",
	douban: 5939295,
	pressCN: "南海出版公司",
	transBy: "星野空",
	rating: 6.6,
	votes: 4021,
};
books[11] = {
	id: 12,
	year: 1989,
	name: "『殺人現場は雲の上』",
	press: "実業之日本社",
	series: "长篇",
	nameCN: "《空中杀人现场》",
	douban: 23010385,
	pressCN: "南海出版社",
	transBy: "杨婉蘅",
	rating: 6,
	votes: 4198,
};
books[12] = {
	id: 13,
	year: 1989,
	name: "『ブルータスの心臓』",
	press: "光文社",
	series: "长篇",
	nameCN: "《布鲁特斯的心脏》",
	douban: 20432186,
	pressCN: "南海出版公司",
	transBy: "赵仲明",
	rating: 7,
	votes: 4990,
};
books[13] = {
	id: 14,
	year: 1990,
	name: "『宿命』",
	press: "講談社",
	series: "长篇",
	nameCN: "《宿命》",
	douban: 3615061,
	pressCN: "南海出版公司",
	transBy: "张智渊",
	rating: 7.5,
	votes: 27800,
};
books[14] = {
	id: 15,
	year: 1990,
	name: "『探偵倶楽部』",
	press: "祥伝社",
	series: "短篇小说集",
	nameCN: "《侦探俱乐部》",
	douban: 19964966,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 6.7,
	votes: 2803,
};
books[15] = {
	id: 16,
	year: 1990,
	name: "『犯人のいない殺人の夜』",
	press: "光文社",
	series: "短篇小说集",
	nameCN: "《没有凶手的暗夜》",
	douban: 4903190,
	pressCN: "人民文学出版社",
	transBy: "袁斌",
	rating: 6.9,
	votes: 6822,
};
books[16] = {
	id: 17,
	year: 1990,
	name: "『仮面山荘殺人事件』",
	press: "徳間書店",
	series: "长篇",
	nameCN: "《假面山庄》",
	douban: 27200261,
	pressCN: "北京十月文艺出版社",
	transBy: "陈文娟",
	rating: 7.6,
	votes: 17710,
};
books[17] = {
	id: 18,
	year: 1991,
	name: "『変身』",
	press: "講談社",
	series: "长篇",
	nameCN: "《变身》",
	douban: 3865832,
	pressCN: "南海出版公司",
	transBy: "赵峻",
	rating: 7.1,
	votes: 25581,
};
books[18] = {
	id: 19,
	year: 1991,
	name: "『回廊亭殺人事件』",
	press: "光文社",
	series: "长篇",
	nameCN: "《长长的回廊》",
	douban: 35039915,
	pressCN: "南海出版公司",
	transBy: "蓝佳",
	rating: 7.1,
	votes: 284,
};
books[19] = {
	id: 20,
	year: 1991,
	name: "『天使の耳』",
	press: "実業之日本社",
	series: "短篇小说集",
	nameCN: "《天使之耳：交通警察之夜》",
	douban: 30488942,
	pressCN: "人民文学出版社",
	transBy: "朱田云",
	rating: 6.7,
	votes: 1020,
};
books[20] = {
	id: 21,
	year: 1992,
	name: "『ある閉ざされた雪の山荘で』",
	press: "講談社",
	series: "长篇",
	nameCN: "《大雪中的山庄》",
	douban: 27037148,
	pressCN: "北京十月文艺出版社",
	transBy: "李盈春",
	rating: 7.1,
	votes: 6004,
};
books[21] = {
	id: 22,
	year: 1992,
	name: "『美しき凶器』",
	press: "光文社",
	series: "长篇",
	nameCN: "《美丽的凶器》",
	douban: 6429267,
	pressCN: "南海出版公司",
	transBy: "花超",
	rating: 6.5,
	votes: 4865,
};
books[22] = {
	id: 23,
	year: 1993,
	name: "『同級生』",
	press: "講談社",
	series: "长篇",
	nameCN: "《同级生》",
	douban: 7047148,
	pressCN: "南海出版公司",
	transBy: "王丽丽",
	rating: 6.7,
	votes: 9856,
};
books[23] = {
	id: 24,
	year: 1993,
	name: "『分身』",
	press: "集英社",
	series: "长篇",
	nameCN: "《分身》",
	douban: 4753783,
	pressCN: "南海出版公司",
	transBy: "王维幸",
	rating: 7.4,
	votes: 23054,
};
books[24] = {
	id: 25,
	year: 1993,
	name: "『しのぶセンセにサヨナラ』",
	press: "講談社",
	series: "浪花少年侦探团2",
	nameCN: "《再见了，忍老师》",
	douban: 30464974,
	pressCN: "南海出版公司",
	transBy: "王雪",
	rating: 6.9,
	votes: 678,
};
books[25] = {
	id: 26,
	year: 1994,
	name: "『怪しい人びと』",
	press: "光文社",
	series: "短篇小说集",
	nameCN: "《怪人们》",
	douban: 4903189,
	pressCN: "人民文学出版社",
	transBy: "尹月",
	rating: 6.5,
	votes: 4540,
};
books[26] = {
	id: 27,
	year: 1994,
	name: "『むかし僕が死んだ家』",
	press: "双葉社",
	series: "长篇",
	nameCN: "《从前我死去的家》",
	douban: 24153181,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 7.6,
	votes: 13429,
};
books[27] = {
	id: 28,
	year: 1994,
	name: "『虹を操る少年』",
	press: "実業之日本社",
	series: "长篇",
	nameCN: "《造彩虹的人》",
	douban: 27037149,
	pressCN: "北京十月文艺出版社",
	transBy: "吕灵芝",
	rating: 6.3,
	votes: 2523,
};
books[28] = {
	id: 29,
	year: 1995,
	name: "『パラレルワールド・ラブストーリー』",
	press: "中央公論社",
	series: "长篇",
	nameCN: "《平行世界·爱情故事》",
	douban: 6902164,
	pressCN: "南海出版公司",
	transBy: "王维幸",
	rating: 7.2,
	votes: 8790,
};
books[29] = {
	id: 30,
	year: 1995,
	name: "『あの頃ぼくらはアホでした』",
	press: "集英社",
	series: "短文",
	nameCN: "《我的晃荡的青春》",
	douban: 26576518,
	pressCN: "南海出版公司",
	transBy: "代珂",
	rating: 6.9,
	votes: 6111,
};
books[30] = {
	id: 31,
	year: 1995,
	name: "『怪笑小説』",
	press: "集英社",
	series: "笑小说系列1",
	nameCN: "《怪笑小说》",
	douban: 5380266,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 7.9,
	votes: 11122,
};
books[31] = {
	id: 32,
	year: 1995,
	name: "『天空の蜂』",
	press: "講談社",
	series: "长篇",
	nameCN: "《天空之蜂》",
	douban: 26264953,
	pressCN: "南海出版公司",
	transBy: "王维幸",
	rating: 6.6,
	votes: 1967,
};
books[32] = {
	id: 33,
	year: 1996,
	name: "『名探偵の掟』",
	press: "講談社",
	series: "天下一大五郎系列1",
	nameCN: "《名侦探的守则》",
	douban: 4264003,
	pressCN: "南海出版公司",
	transBy: "岳远坤",
	rating: 7.4,
	votes: 17733,
};
books[33] = {
	id: 34,
	year: 1996,
	name: "『どちらかが彼女を殺した』",
	press: "講談社",
	series: "加贺恭一郎系列3",
	nameCN: "《谁杀了她》",
	douban: 10594788,
	pressCN: "南海出版公司",
	transBy: "袁斌",
	rating: 7.5,
	votes: 15255,
};
books[34] = {
	id: 35,
	year: 1996,
	name: "『毒笑小説』",
	press: "集英社",
	series: "笑小说系列2",
	nameCN: "《毒笑小说》",
	douban: 4718973,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 7.8,
	votes: 11856,
};
books[35] = {
	id: 36,
	year: 1996,
	name: "『悪意』",
	press: "講談社",
	series: "加贺恭一郎系列4",
	nameCN: "《恶意》",
	douban: 3646172,
	pressCN: "南海出版公司",
	transBy: "娄美莲",
	rating: 8.4,
	votes: 202272,
};
books[36] = {
	id: 37,
	year: 1996,
	name: "『名探偵の呪縛』",
	press: "講談社",
	series: "天下一大五郎系列2",
	nameCN: "《名侦探的诅咒》",
	douban: 4903440,
	pressCN: "南海出版公司",
	transBy: "岳远坤",
	rating: 7.1,
	votes: 7813,
};
books[37] = {
	id: 38,
	year: 1998,
	name: "『探偵ガリレオ』",
	press: "文藝春秋",
	series: "伽利略系列1",
	nameCN: "《侦探伽利略》",
	douban: 3053207,
	pressCN: "海南出版社",
	transBy: "赵博",
	rating: 7.2,
	votes: 15026,
};
books[38] = {
	id: 39,
	year: 1998,
	name: "『秘密』",
	press: "文藝春秋",
	series: "长篇",
	nameCN: "《秘密》",
	douban: 3102324,
	pressCN: "海南出版社",
	transBy: "赵博",
	rating: 7.7,
	votes: 45650,
};
books[39] = {
	id: 40,
	year: 1999,
	name: "『私が彼を殺した』",
	press: "講談社",
	series: "加贺恭一郎系列5",
	nameCN: "《我杀了他》",
	douban: 20449829,
	pressCN: "南海出版公司",
	transBy: "郑琳",
	rating: 7.4,
	votes: 9218,
};
books[40] = {
	id: 41,
	year: 1999,
	name: "『白夜行』",
	press: "集英社",
	series: "长篇",
	nameCN: "《白夜行》",
	douban: 3259440,
	pressCN: "南海出版公司",
	transBy: "刘姿君",
	rating: 9.1,
	votes: 464937,
};
books[41] = {
	id: 42,
	year: 2000,
	name: "『嘘をもうひとつだけ』",
	press: "講談社",
	series: "加贺恭一郎系列6",
	nameCN: "《只差一个谎言》",
	douban: 21347638,
	pressCN: "南海出版公司",
	transBy: "黄真",
	rating: 7.1,
	votes: 6699,
};
books[42] = {
	id: 43,
	year: 2000,
	name: "『予知夢』",
	press: "文藝春秋",
	series: "伽利略系列2",
	nameCN: "《预知梦》",
	douban: 2242461,
	pressCN: "海南出版社",
	transBy: "赵博",
	rating: 7,
	votes: 9701,
};
books[43] = {
	id: 44,
	year: 2001,
	name: "『片想い』",
	press: "文藝春秋",
	series: "长篇",
	nameCN: "《单恋》",
	douban: 4928387,
	pressCN: "南海出版公司",
	transBy: "赵峻",
	rating: 7.5,
	votes: 23987,
};
books[44] = {
	id: 45,
	year: 2001,
	name: "『超・殺人事件 推理作家の苦悩』",
	press: "新潮社",
	series: "短篇小说集",
	nameCN: "《超·杀人事件》",
	douban: 5939312,
	pressCN: "南海出版公司",
	transBy: "计丽屏",
	rating: 8.2,
	votes: 9623,
};
books[45] = {
	id: 46,
	year: 2002,
	name: "『レイクサイド』",
	press: "実業之日本社",
	series: "长篇",
	nameCN: "《湖畔》",
	douban: 26598142,
	pressCN: "化学工业出版社",
	transBy: "沈杨",
	rating: 7.3,
	votes: 11577,
};
books[46] = {
	id: 47,
	year: 2002,
	name: "『時生』",
	press: "講談社",
	series: "长篇",
	nameCN: "《时生》",
	douban: 4152754,
	pressCN: "南海出版公司",
	transBy: "徐建雄",
	rating: 7.6,
	votes: 44155,
};
books[47] = {
	id: 48,
	year: 2002,
	name: "『ゲームの名は誘拐』",
	press: "光文社",
	series: "长篇",
	nameCN: "《绑架游戏》",
	douban: 4191594,
	pressCN: "上海译文出版社",
	transBy: "郑悦",
	rating: 7.3,
	votes: 9320,
};
books[48] = {
	id: 49,
	year: 2003,
	name: "『手紙』",
	press: "文春文庫",
	series: "长篇",
	nameCN: "《信》",
	douban: 3890174,
	pressCN: "译林出版社",
	transBy: "赵江",
	rating: 7.7,
	votes: 20912,
};
books[49] = {
	id: 50,
	year: 2003,
	name: "『おれは非情勤』",
	press: "集英社",
	series: "长篇",
	nameCN: "《我的老师是侦探》",
	douban: 33442266,
	pressCN: "南海出版公司",
	transBy: "代珂",
	rating: 6.7,
	votes: 285,
};
books[50] = {
	id: 51,
	year: 2003,
	name: "『殺人の門』",
	press: "角川書店",
	series: "长篇",
	nameCN: "《杀人之门》",
	douban: 5416915,
	pressCN: "南海出版公司",
	transBy: "张智渊",
	rating: 7.5,
	votes: 9034,
};
books[51] = {
	id: 52,
	year: 2004,
	name: "『幻夜』",
	press: "集英社",
	series: "长篇",
	nameCN: "《幻夜》",
	douban: 4009552,
	pressCN: "南海出版公司",
	transBy: "李炜",
	rating: 7.5,
	votes: 69248,
};
books[52] = {
	id: 53,
	year: 2004,
	name: "『ちゃれんじ?』",
	press: "実業之日本社",
	series: "短文",
	nameCN: "《挑战》",
	douban: 33437510,
	pressCN: "人民文学出版社",
	transBy: "曹艺",
	rating: 6.4,
	votes: 325,
};
books[53] = {
	id: 54,
	year: 2004,
	name: "『さまよう刃』",
	press: "朝日新聞社",
	series: "长篇",
	nameCN: "《彷徨之刃》",
	douban: 5347699,
	pressCN: "南海出版公司",
	transBy: "刘珮瑄",
	rating: 7.8,
	votes: 17924,
};
books[54] = {
	id: 55,
	year: 2005,
	name: "『黒笑小説』",
	press: "集英社",
	series: "笑小说系列3",
	nameCN: "《黑笑小說》",
	douban: 4213995,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 7.6,
	votes: 15248,
};
books[55] = {
	id: 56,
	year: 2005,
	name: "『容疑者Xの献身』",
	press: "文藝春秋",
	series: "伽利略系列3",
	nameCN: "《嫌疑人X的献身》",
	douban: 3211779,
	pressCN: "南海出版公司",
	transBy: "刘子倩",
	rating: 8.9,
	votes: 426988,
};
books[56] = {
	id: 57,
	year: 2005,
	name: "『さいえんす?』",
	press: "角川文庫",
	series: "短文",
	nameCN: "《科学？》",
	douban: 34449302,
	pressCN: "新星出版社",
	transBy: "冯锦源",
	rating: 6.8,
	votes: 221,
};
books[57] = {
	id: 58,
	year: 2006,
	name: "『夢はトリノをかけめぐる』",
	press: "光文社",
	series: "短文",
	nameCN: "《梦回都灵》",
	douban: 6785995,
	pressCN: "人民文学出版社",
	transBy: "赵秀娟",
	rating: 5.5,
	votes: 985,
};
books[58] = {
	id: 59,
	year: 2006,
	name: "『赤い指』",
	press: "講談社",
	series: "加贺恭一郎系列7",
	nameCN: "《红手指》",
	douban: 6794021,
	pressCN: "南海出版公司",
	transBy: "于壮",
	rating: 7.8,
	votes: 17668,
};
books[59] = {
	id: 60,
	year: 2006,
	name: "『使命と魂のリミット』",
	press: "新潮社",
	series: "长篇",
	nameCN: "《使命与魂的尽头》",
	douban: 24384166,
	pressCN: "南海出版公司",
	transBy: "刘姿君",
	rating: 7.3,
	votes: 1464,
};
books[60] = {
	id: 61,
	year: 2007,
	name: "『たぶん最後の御挨拶』",
	press: "文藝春秋",
	series: "短文",
	nameCN: "《东野圭吾的最后致意》",
	douban: 20507419,
	pressCN: "新星出版社",
	transBy: "潘璐",
	rating: 7,
	votes: 3014,
};
books[61] = {
	id: 62,
	year: 2007,
	name: "『夜明けの街で』",
	press: "角川書店",
	series: "长篇",
	nameCN: "《黎明之街》",
	douban: 27178063,
	pressCN: "南海出版公司",
	transBy: "李超楠",
	rating: 7.4,
	votes: 8732,
};
books[62] = {
	id: 63,
	year: 2007,
	name: "『ダイイング・アイ』",
	press: "光文社",
	series: "长篇",
	nameCN: "《濒死之眼》",
	douban: 4286244,
	pressCN: "上海译文出版社",
	transBy: "匡匡",
	rating: 6.3,
	votes: 9910,
};
books[63] = {
	id: 64,
	year: 2008,
	name: "『流星の絆』",
	press: "講談社",
	series: "长篇",
	nameCN: "《流星之绊》",
	douban: 4580972,
	pressCN: "南海出版公司",
	transBy: "徐建雄",
	rating: 7.7,
	votes: 35554,
};
books[64] = {
	id: 65,
	year: 2008,
	name: "『ガリレオの苦悩』",
	press: "文藝春秋",
	series: "伽利略系列4",
	nameCN: "《伽利略的苦恼》",
	douban: 3926665,
	pressCN: "当代世界出版社",
	transBy: "袁斌",
	rating: 7.2,
	votes: 12121,
};
books[65] = {
	id: 66,
	year: 2008,
	name: "『聖女の救済』",
	press: "文藝春秋",
	series: "伽利略系列5",
	nameCN: "《圣女的救济》",
	douban: 3713327,
	pressCN: "当代世界出版社",
	transBy: "袁斌",
	rating: 7.7,
	votes: 33975,
};
books[66] = {
	id: 67,
	year: 2009,
	name: "『パラドックス13』",
	press: "毎日新聞社",
	series: "长篇",
	nameCN: "《悖论13》",
	douban: 11511204,
	pressCN: "南海出版公司",
	transBy: "林青华",
	rating: 7.4,
	votes: 7230,
};
books[67] = {
	id: 68,
	year: 2009,
	name: "『新参者』",
	press: "講談社",
	series: "加贺恭一郎系列8",
	nameCN: "《新参者》",
	douban: 6746289,
	pressCN: "南海出版公司",
	transBy: "岳远坤",
	rating: 8.4,
	votes: 35038,
};
books[68] = {
	id: 69,
	year: 2010,
	name: "『カッコウの卵は誰のもの』",
	press: "光文社",
	series: "长篇",
	nameCN: "《布谷鸟的蛋是谁的》",
	douban: 5290397,
	pressCN: "新星出版社",
	transBy: "马杰",
	rating: 6.3,
	votes: 4196,
};
books[69] = {
	id: 70,
	year: 2010,
	name: "『プラチナデータ』",
	press: "幻冬舎",
	series: "长篇",
	nameCN: "《白金数据》",
	douban: 27173553,
	pressCN: "北京联合出版公司",
	transBy: "王蕴洁",
	rating: 7.1,
	votes: 8787,
};
books[70] = {
	id: 71,
	year: 2010,
	name: "『白銀ジャック』",
	press: "実業之日本社",
	series: "滑雪场系列1",
	nameCN: "《雪国之劫》",
	douban: 24720957,
	pressCN: "上海译文出版社",
	transBy: "郑悦",
	rating: 5.7,
	votes: 2518,
};
books[71] = {
	id: 72,
	year: 2011,
	name: "『あの頃の誰か』",
	press: "光文社",
	series: "短篇小说集",
	nameCN: "《那时的某人》",
	douban: 26911126,
	pressCN: "译林出版社",
	transBy: "吐雅",
	rating: 6.4,
	votes: 2199,
};
books[72] = {
	id: 73,
	year: 2011,
	name: "『真夏の方程式』",
	press: "文藝春秋",
	series: "伽利略系列6",
	nameCN: "《盛夏方程式》",
	douban: 17724327,
	pressCN: "现代出版社",
	transBy: "袁斌",
	rating: 7.4,
	votes: 11083,
};
books[73] = {
	id: 74,
	year: 2011,
	name: "『麒麟の翼』",
	press: "講談社",
	series: "加贺恭一郎系列9",
	nameCN: "《麒麟之翼》",
	douban: 24384165,
	pressCN: "南海出版公司",
	transBy: "田秀娟",
	rating: 7.6,
	votes: 6483,
};
books[74] = {
	id: 75,
	year: 2011,
	name: "『マスカレード・ホテル』",
	press: "集英社",
	series: "假面饭店系列1",
	nameCN: "《假面饭店》",
	douban: 11615173,
	pressCN: "南海出版公司",
	transBy: "中森",
	rating: 7.1,
	votes: 14038,
};
books[75] = {
	id: 76,
	year: 2012,
	name: "『歪笑小説』",
	press: "集英社",
	series: "笑小说系列4",
	nameCN: "《歪笑小说》",
	douban: 26417643,
	pressCN: "南海出版公司",
	transBy: "王丽丽",
	rating: 7.4,
	votes: 3679,
};
books[76] = {
	id: 77,
	year: 2012,
	name: "『ナミヤ雑貨店の奇蹟』",
	press: "角川書店",
	series: "长篇",
	nameCN: "《解忧杂货店》",
	douban: 25862578,
	pressCN: "南海出版公司",
	transBy: "李盈春",
	rating: 8.5,
	votes: 656596,
};
books[77] = {
	id: 78,
	year: 2012,
	name: "『虚像の道化師』",
	press: "文藝春秋",
	series: "伽利略系列7",
	nameCN: "《虚像小丑》",
	douban: 25754002,
	pressCN: "上海译文出版社",
	transBy: "郑悦",
	rating: 6.8,
	votes: 2702,
};
books[78] = {
	id: 79,
	year: 2012,
	name: "『禁断の魔術』",
	press: "文藝春秋",
	series: "伽利略系列8",
	nameCN: "《禁忌魔术》",
	douban: 25756926,
	pressCN: "上海译文出版社",
	transBy: "叶娉",
	rating: 7.1,
	votes: 2426,
};
books[79] = {
	id: 80,
	year: 2013,
	name: "『夢幻花』",
	press: "PHP研究所",
	series: "长篇",
	nameCN: "《梦幻花》",
	douban: 26297985,
	pressCN: "作家出版社",
	transBy: "赵峻",
	rating: 6.6,
	votes: 15362,
};
books[80] = {
	id: 81,
	year: 2013,
	name: "『祈りの幕が下りる時』",
	press: "講談社",
	series: "加贺恭一郎系列10",
	nameCN: "《祈祷落幕时》",
	douban: 26118072,
	pressCN: "南海出版公司",
	transBy: "代珂",
	rating: 7.7,
	votes: 31420,
};
books[81] = {
	id: 82,
	year: 2013,
	name: "『疾風ロンド』",
	press: "実業之日本社",
	series: "滑雪场系列2",
	nameCN: "《疾风回旋曲》",
	douban: 25841847,
	pressCN: "现代出版社",
	transBy: "苏友友",
	rating: 5.6,
	votes: 6546,
};
books[82] = {
	id: 83,
	year: 2014,
	name: "『虚ろな十字架』",
	press: "光文社",
	series: "长篇",
	nameCN: "《虚无的十字架》",
	douban: 26413027,
	pressCN: "湖南文艺出版社",
	transBy: "王蕴洁",
	rating: 7.5,
	votes: 43176,
};
books[83] = {
	id: 84,
	year: 2014,
	name: "『マスカレード・イブ』",
	press: "集英社",
	series: "假面饭店系列2",
	nameCN: "《假面前夜》",
	douban: 26703641,
	pressCN: "南海出版公司",
	transBy: "宋扬",
	rating: 6.7,
	votes: 6556,
};
books[84] = {
	id: 85,
	year: 2015,
	name: "『ラプラスの魔女』",
	press: "KADOKAWA",
	series: "拉普拉斯的魔女系列1",
	nameCN: "《拉普拉斯的魔女》",
	douban: 26920165,
	pressCN: "北京联合出版公司",
	transBy: "王蕴洁",
	rating: 6.8,
	votes: 17938,
};
books[85] = {
	id: 86,
	year: 2015,
	name: "『人魚の眠る家』",
	press: "幻冬舎",
	series: "长篇",
	nameCN: "《沉睡的人鱼之家》",
	douban: 27028847,
	pressCN: "北京联合出版公司",
	transBy: "王蕴洁",
	rating: 7.2,
	votes: 17395,
};
books[86] = {
	id: 87,
	year: 2016,
	name: "『危険なビーナス』",
	press: "講談社",
	series: "长篇",
	nameCN: "《危险的维纳斯》",
	douban: 30380271,
	pressCN: "北京联合出版公司",
	transBy: "星野空",
	rating: 6.1,
	votes: 4152,
};
books[87] = {
	id: 88,
	year: 2016,
	name: "『恋のゴンドラ』",
	press: "実業之日本社",
	series: "滑雪场系列3",
	nameCN: "《恋爱的贡多拉》",
	douban: 27007486,
	pressCN: "现代出版社",
	transBy: "魏精彩",
	rating: 5.8,
	votes: 4682,
};
books[88] = {
	id: 89,
	year: 2016,
	name: "『雪煙チェイス』",
	press: "実業之日本社",
	series: "滑雪场系列4",
	nameCN: "《风雪追击》",
	douban: 26971148,
	pressCN: "现代出版社",
	transBy: "赵文梅",
	rating: 5.9,
	votes: 5011,
};
books[89] = {
	id: 90,
	year: 2017,
	name: "『素敵な日本人』",
	press: "光文社",
	series: "短篇小说集",
	nameCN: "《第十年的情人节》",
	douban: 27125950,
	pressCN: "人民文学出版社",
	transBy: "朱田云",
	rating: 6.9,
	votes: 3824,
};
books[90] = {
	id: 91,
	year: 2017,
	name: "『マスカレード・ナイト』",
	press: "集英社",
	series: "假面饭店系列3",
	nameCN: "《假面之夜》",
	douban: 30206396,
	pressCN: "南海出版公司",
	transBy: "李倩",
	rating: 7.1,
	votes: 2410,
};
books[91] = {
	id: 92,
	year: 2018,
	name: "『魔力の胎動』",
	press: "KADOKAWA",
	series: "拉普拉斯的魔女系列2",
	nameCN: "《魔力的胎动》",
	douban: 33455230,
	pressCN: "北京联合出版公司",
	transBy: "王蕴洁",
	rating: 6.1,
	votes: 1398,
};
books[92] = {
	id: 93,
	year: 2018,
	name: "『沈黙のパレード』",
	press: "文藝春秋",
	series: "伽利略系列9",
	nameCN: "《沉默的巡游》",
	douban: 34786086,
	pressCN: "南海出版公司",
	transBy: "边大玉",
	rating: 7.3,
	votes: 13162,
};
books[93] = {
	id: 94,
	year: 2019,
	name: "『希望の糸』",
	press: "講談社",
	series: "加贺恭一郎系列番外篇",
	nameCN: "《希望之线》",
	douban: 26413796,
	pressCN: "春天出版国际",
	transBy: "王蕴洁",
	rating: 8.4,
	votes: 91,
};
books[94] = {
	id: 95,
	year: 2020,
	name: "『クスノキの番人』",
	press: "実業之日本社",
	series: "长篇",
	nameCN: "《祈念守护人》",
	douban: 35017604,
	pressCN: "南海出版公司",
	transBy: "宋刚",
	rating: 7.7,
	votes: 2445,
};
books[95] = {
	id: 96,
	year: 2020,
	name: "『ブラック・ショーマンと名もなき町の殺人』",
	press: "光文社",
	series: "",
	nameCN: "尚未出版",
	douban: 0,
	pressCN: "",
	transBy: "",
	rating: 0,
	votes: 0,
};