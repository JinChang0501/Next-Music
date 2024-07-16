-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-07-15 15:34:25
-- 伺服器版本： 8.0.36
-- PHP 版本： 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `music_project`
--

-- --------------------------------------------------------

--
-- 資料表結構 `aclass`
--

CREATE TABLE `aclass` (
  `id` int NOT NULL,
  `class` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `aclass`
--

INSERT INTO `aclass` (`id`, `class`) VALUES
(1, 'concert'),
(2, 'music festival');

-- --------------------------------------------------------

--
-- 資料表結構 `activity`
--

CREATE TABLE `activity` (
  `actid` int NOT NULL,
  `class` varchar(100) DEFAULT NULL,
  `actname` varchar(255) NOT NULL,
  `actdate` date DEFAULT NULL,
  `acttime` time DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `descriptions` varchar(2000) DEFAULT NULL,
  `organizer` varchar(255) DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `activity`
--

INSERT INTO `activity` (`actid`, `class`, `actname`, `actdate`, `acttime`, `location`, `area`, `address`, `descriptions`, `organizer`, `artist_id`, `picture`, `cover`) VALUES
(1, 'concert', '一生到底', '2024-08-17', '19:30:00', '臺北流行音樂中心', '北部', '台北市南港區市民大道8段99號', '一生到底 One Life,One Shot人生像場一鏡到底的電影，時間不曾為誰停下，無法倒轉重來、也無法按下暫停。Let’s keep rolling!不斷前進的過程中，最珍貴的便是每次聚在一起就充滿能量，很多事情一時沒有答案，至少、你有滅火器的音樂可以作伴。人生keep rolling的BGM，讓滅火器陪你，一生到底。', '火氣音樂', 16, 'https://i.postimg.cc/v8Vr7zcZ/temp-Image-GXQJZ9.avif', 'https://i.postimg.cc/tTVx5qRM/temp-Image-GTMpop.avif'),
(2, 'concert', 'The Yussef  Live', '2024-08-03', '20:00:00', 'Legacy Taipei', '北部', '台北市中正區八德路一段1號華山1914創意文化園區中5A館', '南倫敦出生的 Yussef Dayes，合成一系列來自南半球、西非到加勒比海和南美洲等令人眼花繚亂的聲音和節奏，他的表演融合了精湛的技術、強烈的激情和原始的情感，更以突破界限的音樂風景吸引全世界的樂迷觀眾，在倫敦當代爵士樂壇中占有重要地位。\nYussef Dayes 4歲就開始了他的音樂生涯，10歲從師 Billy Cobham（爵士巨人 Miles Davis 鼓手、Mahavishnu Orchestra 成員），和兄弟及朋友們組成樂團 United Vibrations，2011年發行《Galaxies Not Ghettos》，當時的 Yussef Dayes 只有16歲。儘管後來以 Kamaal Williams 組成的 Yussef Kamaal、以及和 Tom Misch 合作專輯《What Kinda Music》聲名大噪，Yussef Dayes 在2023年發行個人首張專輯《Black Classical Music》，融合爵士樂、雷鬼與嘻哈，邀來 Masego、Chronixx、Jamiliah Barry、Tom Misch 等人合作，獲得全英音樂獎（BRIT Awards）「最佳新人」「最佳另類／搖滾藝人」兩項年度提名。', 'Young Team Productions', 14, 'https://i.postimg.cc/XvqFrKR3/temp-Image-DYHcq-Q.avif', 'https://i.postimg.cc/nzsvPK2T/temp-Imagenl-Bj-Y0.avif'),
(3, 'concert', '10CM 2024 ONLY', '2024-09-06', '19:00:00', 'Zepp New Taipei', '北部', '新北市新莊區新北大道四段3號8樓', '10CM在今年1月推出單曲’5.5 소년(少年)’，而4月25日發布全新單曲 5.6 ’너랑 밤새고 싶어(Late Night Walk)‘緩慢而甜蜜的唱出了戀情萌芽的羞澀與喜悅，近期甫創下收視紀錄的韓劇《淚之女王》中，10CM的聲音也讓電視劇大放異彩，過去半年內不斷推出作品的10CM將從7月開始於亞洲各國帶來精彩的演出。', 'LA RUE 文創設計', 12, 'https://i.postimg.cc/Hs0bRk0G/temp-Imagevb-O7v1.avif', 'https://i.postimg.cc/mkY1vmH3/temp-Image-DW5gw-H.avif'),
(4, 'concert', 'aespa演唱會', '2024-10-22', '19:00:00', '國立體育大學綜合體育館(林口體育館)', '北部', '桃園市龜山區文化一路250號', 'aespa出道四年首次正式來台北開專場演唱會，將於8月10號在林口體育館舉行。自從今年一月在台北舉行過專輯簽售會和受邀參加科技公司商演後，台北的MY對aespa來台北舉辦演唱會的呼聲越發高漲，在之後無預警公布的世界巡演城市名單中台北赫然在列，讓台北粉絲又驚又喜，希望演唱會快點到來。\naespa由四名成員Karina、Giselle、Winter、Ningning組成，自出道以來就以獨特的世界觀、前衛的團體概念，以及超強的舞台魅力，收穫眾多粉絲的心。她們在Youtube上每首MV的最低觀看次數都超過1億，是當代超人氣女團。\naespa在時尚方面也非常出色，瑞士奢華珠寶Chopard、義大利Versace、美國Ralph Lauren等世界知名品牌也選擇aespa團體及其成員作為該品牌的宣傳大使和代言人。\n這次台北場的演出日剛好是七夕情人節，在這個充滿粉色泡泡的日子裡，不知道成員們會給台北粉絲們帶來什麼樣的驚喜呢! 台北的MY們，八月一定要來現場和aespa一起創造幸福的回憶！', 'iMe TW', 4, 'https://i.postimg.cc/GtSrQnS9/Banner13.jpg', 'https://i.postimg.cc/257KfRN6/Cover13.jpg'),
(5, 'concert', 'Energy 一觸即發', '2024-08-04', '19:30:00', '台北小巨蛋', '北部', '臺北市松山區南京東路4段2號', '招牌發電｜經典回憶殺唱個夠\n帶你走進音樂回憶殺，首首都是陪伴人生的迷人觸景，不只「放手」、「多愛我一天」、「某年某月某一天」、「Come On」、「無懈可擊」，承諾過「永遠不說再見」的Energy，現在實現諾言，再度因你而聚，為你而跳。\n全面放電｜天王天后御用總監 打造最大夜店 \n潮流舞曲製造機音樂總監 Starr Chen 陳星翰，全新改編經典歌曲，將音樂能量觸電、發電、放電，音浪電力無限激盪，震撼台北小巨蛋！\n天王天后御用舞蹈總監林大鈞，炸裂編舞跨年代舞風大精華！舞曲全場炸翻最大夜店！\n零距離觸電｜天地對立光柱 巨型地面Led延伸舞台\n演唱會製作魔法團隊必應創造，訂製天地對立移動巨型異變光柱、巨型地面Led延伸舞台，近距離與你接觸！重磅打造超升級超大型的動感Party！\n記憶充電｜橫跨街舞世代挑動舞感神經 \n睽違22年重返當年，結合跨世代舞曲大招，當累積的能量重新匯集，走過分合 Energy 再衝一次，一起共寫屬於我們的新傳奇！', '用心音樂', 13, 'https://i.postimg.cc/8PghZ66B/temp-Imagep-QE9yu.avif', 'https://i.postimg.cc/XN1nNGWj/temp-Image-ASO20e.avif'),
(6, 'concert', 'Travis World  Tour', '2024-09-03', '20:00:00', 'Zepp New Taipei', '北部', '新北市新莊區新北大道四段3號8樓', 'Travis Japan於2012年由麥可傑克森的編舞師Travis Payne所舉辦的徵選會中選出的成員所組成，是一支擁有強大舞蹈、表演實力的七人團體。\nTravis Japan曾參與舞台劇《虎者-NINJAPAN-》演出並擔任重要角色。2020年於可容納一萬七千人的橫濱體育場連續舉辦三場演出，門票全數售罄，2021年即在日本12個城市展開全國巡演《IMAGE NATION》。\n2022年3月，成員們為了精進自身能力，前往美國洛杉磯留學，留學期間參加了世界最大規模的舞蹈比賽「World of Dance」，以及美國NBC播出的指標性選秀節目「美國達人秀」，展現出他們精湛的舞蹈技巧，也成為了他們出道的契機。備受高度期待的首支主打單曲《JUST DANCE!》MV不但於YouTube觀看次數衝破千萬，也是J-POP史上首位以出道曲強勢登上告示牌美國除外全球單曲榜第五名的團體，此曲MV在YouTube觀看次數已突破千萬次。\n以首張專輯《Road to A》為題，不僅已在日本完成全國巡迴演唱會，吸引約31萬人參與，如今更宣布將開啟首次世界巡迴演唱會《Travis Japan World Tour 2024 Road to A》，要向世界展現他們最精彩、吸睛的舞蹈魅力！', '大鴻藝術BIG ART', 15, 'https://i.postimg.cc/tJRCk5qv/Banner01.jpg', 'https://i.postimg.cc/RVq5QF5T/Cover01.jpg'),
(7, 'concert', 'BTOB FAN-CON', '2024-09-28', '19:30:00', '臺北流行音樂中心', '北部', '台北市南港區市民大道8段99號', '等了近六年！韓流三代團BTOB徐恩光、李旼赫、任炫植、PENIEL宣布6/29來台！\n很會唱、很會跳還很放閃！BTOB 終於要來啦！\n距離上次2018/9/8來台舉辦「BTOB TIME -THIS IS US」演唱會後，Melody（官粉名）等了近六年，終於要在6/29（六）見到韓流人氣實力三代團BTOB的四帥成員徐恩光、李旼赫、任炫植、PENIEL於TICC台北國際會議中心舉辦「2024 BTOB FAN-CON [OUR DREAM] in TAIPEI」！', '火氣音樂', 7, 'https://i.postimg.cc/j20J3pLd/temp-Imagel-FGn-Vc.avif', 'https://i.postimg.cc/G2ZkwBSR/temp-Imageiixi-F0.avif'),
(8, 'concert', 'Starry Sky', '2024-09-30', '18:00:00', 'Legacy Taipei', '北部', '台北市中正區八德路一段1號華山1914創意文化園區中5A館', '是勞模們迷茫徬徨的職涯課題\n是小男孩拒絕世故的搖滾初心', 'Young Team Productions', 8, 'https://i.postimg.cc/9Frcfzr9/Banner14.jpg', 'https://i.postimg.cc/k4MhJ17y/Cover14.jpg'),
(9, 'concert', '建宮蓋廟', '2024-08-15', '19:30:00', 'Zepp New Taipei', '北部', '新北市新莊區新北大道四段3號8樓', '宮廟\n不僅是多重領域大門，也是意識流的集合中心；\n宮廟\n不僅建造在地球上，也建造在太陽系八大行星衛星裡。\n令人驚奇的是\n太陽系邊界守門行星冥王星本身就是一座漂浮的宮廟行星。\n為什麼太陽系裏遍佈宮廟？\n是古地球人得到神仙的旨意、神仙的法力，而建宮蓋廟於整個太陽系？\n還是太陽系的古生命對於信仰有共識？\n我們看到的不只是過去，而是未來。\n2154年9大行星及衛星出現鬧鬼附身現象\n2159年正式進入「交由撒旦統治太陽系1000年」。\n3206年進入土星環發現多座破損宮廟隕石漂流在環中\n3264年發現冥王星是一座巨大的漂流宮廟\n3278年太陽系血肉宮廟網絡完成，血肉Boyz持續在宇宙中殺翻現場！', 'LA RUE 文創設計', 17, 'https://i.postimg.cc/CLWYD3d9/temp-Imagea-Dk-U5o.avif', 'https://i.postimg.cc/P52YfVF2/temp-Image9-Blyq-T.avif'),
(10, 'festival', '霓虹綠洲音樂祭', '2024-12-25', '12:00:00', '國立體育大學綜合體育館(林口體育館)', '北部', '桃園市龜山區文化一路250號', '本屆活動除了再度邀請台灣、日本、韓國、泰國等地的音樂人，更邀請到來自中國石家莊的搖滾傳奇萬能青年旅店、紐西蘭的蒙面歌手 JonathanBree、香港天團 RubberBand，以及前陣子於社群引起熱烈關注的金氏世界紀錄年紀最小的小學生DJ RINOKA，吸引了許多親子、寵物家庭族群一同參與本屆活動。此外，霓虹綠洲音樂祭還將新增主打嘻哈、新聲的舞台與「前夜祭」擴大舉辦，透過結合音樂祭、露營、市集，為北部都會區帶來冬日弛放音樂盛事！', 'iMe TW', 10, 'https://i.postimg.cc/8ky1DLPD/Banner12.jpg', 'https://i.postimg.cc/KY2HVcVw/Cover12.jpg'),
(11, 'festival', '雨山祭', '2024-09-24', '11:00:00', '台北小巨蛋', '北部', '臺北市松山區南京東路4段2號', '・2024年春假出遊首選音樂祭盛事\n・連續三年完售，台灣大型指標性音樂祭之一\n・台中海線小鎮漫遊，吃喝玩樂應有盡有\n・五周年擴大舉行，九大區域等你來解鎖\n・超過六國演出藝人即將來台獻技\n生活的紛擾及懊悔就留在那裡吧！一起邁向未知的新方向，大步踏出步伐，每一步都會有新風景的誕生，如同主視覺想傳達給每個朋友，跨過「浮現大門」後，回歸最純粹的模樣，化身為能代表你自己的角色，讓我們一起登陸小鎮的慶典吧！\n浮現祭五周年，再解鎖兩大場域，走進常民生活場景中，以及與海線當地有更多連結。未來，我們也將持續跨出海外，寫下更多新故事！如果你也想加入這段旅程，明年春天，我們相約老地方——台中清水，一個屬於我們冒險的起點。', '用心音樂', 9, 'https://i.postimg.cc/3NwYmx1P/Banner11.jpg', 'https://i.postimg.cc/28gJQ7xz/Cover11.jpg'),
(12, 'festival', '大港開唱', '2024-11-09', '11:00:00', 'Zepp New Taipei', '南部', '新北市新莊區新北大道四段3號8樓', '《大港開唱》（Megaport Festival），創立於2006年，由台北《野台開唱》（Formoz Festival：1995～2013）主辦團隊，在高雄創立。一南一北的兩大型音樂祭品牌，是台灣如今百花齊放音樂祭市場的先趨。即將於今年邁入第十五屆的大港開唱，於每年三月底舉辦，也是目前台灣最具指標性的大型戶外音樂祭活動。\n大港位於高雄港邊，獨特的海港地景和人文風情，常勾起人生中各種酸甜苦辣的回憶。也因如此，大港總是邀請有著豐富人生歷程的知名藝人及業界前輩演出，也會與新一代的樂團或藝人一起合作演出，交融出世代之間的化學效應，往往成為當年度為人津津樂道的經典現場，包括《黃金夜總會》的賀一航、《古惑仔》裡的大飛哥-黃秋生，永駐在人們青春回憶中的日本偶像酒井法子，再到唱出《心事誰人知》的沈文程和演出《花甲男孩》的三金得主蔡振南。除此之外，唱著《少年吔，安啦！》的伍佰以及後來變成姐姐的謝金燕，都曾是大港舞台的主角之一。', '大鴻藝術BIG ART', 10, 'https://i.postimg.cc/Zqrbhg0D/Banner07.jpg', 'https://i.postimg.cc/C51tNvtK/Cover07.jpg'),
(13, 'festival', '火球祭', '2024-08-31', '11:00:00', '臺北流行音樂中心', '北部', '台北市南港區市民大道8段99號', '地球人請注意\n重返愛的主場，火球祭正式回歸！\n距離上次火球祭\n已經過了 1,344 天\n但！有些記憶不管過多久還是難忘\n還記得播放著搖滾樂的旋轉木馬上，她的笑容讓我暈到現在\n人生中第一次踏上紅土、在音樂聲中滾草皮\n時不時被感動到哭得像個傻瓜、下一秒又笑得像個笨蛋\n在雨中熱舞、在太陽下的草皮曬乾自己\n直接拿著感應手環、買個外帶坐到看台區爽吃爽喝爽聽團❤\n48 小時裡不間斷的快樂\n現在回想起來都會笑，太爽了吧？有夠夢幻\n準備好重返我們的搖滾遊樂園嗎？', '火氣音樂', 1, 'https://i.postimg.cc/Nfzf8mWb/Banner03.jpg', 'https://i.postimg.cc/QMG23JB6/Cover03.jpg'),
(14, 'festival', '赤聲躁動音樂祭', '2024-10-13', '11:00:00', 'Legacy Taipei', '北部', '台北市中正區八德路一段1號華山1914創意文化園區中5A館', '大膽飛天｜不純的純愛｜Y2K大爆炸\n「把糖果穿在身上、大聲唱歌，和冰友跳著最in的舞步並肩搖擺！」\n千禧年代的自由及美好令人無限懷念，\n浪漫五月，跟著赤聲戰隊來去Y2K的世界，\n一起大膽追愛，在浪漫大宇宙中自由飛翔！！', 'Young Team Productions', 2, 'https://i.postimg.cc/k4qnMcbM/Banner10.jpg', 'https://i.postimg.cc/jSN1Zn8y/Cover10.jpg'),
(15, 'festival', '台秋祭', '2024-08-31', '11:00:00', 'Zepp New Taipei', '中部', '新北市新莊區新北大道四段3號8樓', '台中，\n是一個充滿熱情的所在，\n一個從北到南都得路過的所在，\n在這個交會點，\n無論是快樂、寂寞還是難過，我們都曾一起度過，\n就在「台秋祭」這個地方。\n說的沒錯，\n彼此都是生命中的過客，\n那既然你我都是旅客，\n就一起感受現場的一切，\n像是一種洗禮，一種契機，\n也會是一種轉運。\n感謝過去兩年的支持，\n歡迎來到，台秋轉運站。', 'LA RUE 文創設計', 3, 'https://i.postimg.cc/ZKR5yVDC/Banner02.jpg', 'https://i.postimg.cc/3R9V2Mt6/Cover02.jpg'),
(16, 'festival', '打狗祭', '2024-10-12', '11:00:00', '國立體育大學綜合體育館(林口體育館)', '南部', '桃園市龜山區文化一路250號', '遨遊在大宇宙中的外星小怪獸，受到打狗港灣的強大召喚！為了這群有夢想的人，打狗星際入口再度開啟》》》》》》\n延續去年的活動場域，以高流海音館、海風廣場為核心演出場域，加上珊瑚礁群、LIVE WAREHOUSE等五大場域，再次將愛河灣打造成充滿奇幻外星小怪獸的音樂宇宙星樂園，就是要讓樂迷與外星小怪獸一同遨遊穿梭，享受音樂的衝撞搖擺與微醺的快樂。', 'iMe TW', 6, 'https://i.postimg.cc/dVqGYcnh/temp-Image-FAo-ZMq.avif', 'https://i.postimg.cc/W4yZgFVZ/temp-Image-LPZrg4.avif'),
(17, 'festival', '浮現祭', '2024-08-19', '20:00:00', '台北小巨蛋', '中部', '臺北市松山區南京東路4段2號', '單日雙舞台十二組卡司，一次滿足你12個願望\n雨山眾神召集中：椅子樂團、南西肯恩、庸俗救星、靈魂沙發、JADE⋯⋯等共聚一堂，邀請所有觀眾與神同慶！\n與 「 Legacy 傳 音樂展演空間 」共同合作，將聲光音響的極致饗宴帶至政大校園\n當日活動將與「小蝸牛市集」合作，精選文山區在地特色商家，並邀請各式特色攤商集結雨山祭，打造獨一無二的雨山市集', '用心音樂', 7, 'https://i.postimg.cc/cCD1bn6x/Banner04.jpg', 'https://i.postimg.cc/mgFvJ5rz/Cover04.jpg'),
(18, 'festival', '貴人散步音樂節', '2024-11-04', '11:00:00', 'Zepp New Taipei', '南部', '新北市新莊區新北大道四段3號8樓', '象徵圓滿幸運的第7年，超強Lucky 7企劃陣容展現台灣音樂面貌\n來自世界各地多種面向的77組音樂人等你來挖寶\n全亞洲最多人潮、全台灣最國際化的Showcase音樂節\n在台南多個場館從古蹟到藝廊感受不同的演出體驗\n音樂演出之外還能享受城市探險的吃喝玩樂\n各式講座論壇，產業人士齊聚，與同業對話交流的好機會！\n多元跨界展演、城市漫遊旅程，還有更多結合音樂的另類體驗享受！', '大鴻藝術BIG ART', 1, 'https://i.postimg.cc/C17wRqGG/Banner09.jpg', 'https://i.postimg.cc/CMP91gBn/Cover09.jpg'),
(19, 'festival', '禾火OUT', '2024-09-14', '11:00:00', '臺北流行音樂中心', '北部', '台北市南港區市民大道8段99號', '中秋連假首選，雙日雙舞台，超過 25 組超強卡司在公館水岸輪番演出\n最酷主題市集：從美食、飲品、到古著選物，吃喝玩買一次到位\n充氣沙發區、露天座位區，讓你躺著看坐著看都可以', '火氣音樂', 9, 'https://i.postimg.cc/wxFBvS2C/Banner05.jpg', 'https://i.postimg.cc/wBXSTRL9/Cover05.jpg'),
(20, 'festival', '浪人祭', '2024-12-10', '11:00:00', '漁光島', '南部', '台北市中正區八德路一段1號華山1914創意文化園區中5A館', '⟢　五週年 - 震撼王城 海味鉅獻　⟣\n戎克、朱印、克拉克大帆船，晚渡於海陸之城，港內寬衍，可泊千艘。\n夕陽西下，海晏捲朱旗，歷史的軌跡被鑲入城牆壁鎖，世世代代的王城，經過四個世紀的變革，帶來多族群的共生共榮。\n⟢　浪撼魚龍宅，盂懸上下天　⟣\n深海的龍嚎引萬物復甦，海底的熔岩劃開一道赤浪，鯤魚鼓浪，位於高處的龍宮，秋夜即將展開三日熱鬧晚宴，龍宮照欲醒，金黃色魚群奏起樂器，抬起「玉手箱」穿梭於赤足章魚觸手前，優美的旋律將撼動這片大海。', 'Young Team Productions', 2, 'https://i.postimg.cc/rwRyfzTT/Banner06.jpg', 'https://i.postimg.cc/Y9tT42zY/Cover06.jpg'),
(21, 'festival', '簡單生活節', '2024-12-28', '12:00:00', 'Legacy Taipei', '北部', '台北市中正區八德路一段1號華山1914創意文化園區中5A館', '「簡單生活 Simple Life」這個品牌，自我期許是個風格化的媒介，我們希望能夠讓創作者與熱愛者在其中相遇，並且彼此扶持成長。創作者可以從生活中萌芽，在生活中成長，直到力量足夠強大。', 'Young Team Productions', 8, 'https://i.postimg.cc/N0hsSYGH/Banner08.jpg', 'https://i.postimg.cc/nrPWw4bG/Cover08.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `artist`
--

CREATE TABLE `artist` (
  `id` int NOT NULL,
  `art_name` varchar(50) DEFAULT NULL,
  `photo` varchar(300) DEFAULT NULL,
  `followers` int DEFAULT NULL,
  `introduction` text,
  `debutDate` datetime DEFAULT NULL,
  `album` int DEFAULT NULL,
  `albumDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `artist`
--

INSERT INTO `artist` (`id`, `art_name`, `photo`, `followers`, `introduction`, `debutDate`, `album`, `albumDate`) VALUES
(1, '珂拉琪 ', 'https://i.postimg.cc/fbvKBGY9/photo01.jpg', 57092, '性別：其他\n珂拉琪Collage DUO\n主唱 Vocal／夏子 Natsuko\n吉他 Guitar／王家權 Hunter Wang', '2019-01-31 00:00:00', 20, '2024-04-30 00:00:00'),
(2, '海口人', 'https://i.postimg.cc/G2hjNXjS/photo02.jpg', 257, '\"\n音樂喚醒、漂泊的詩人\n我們來自中部的海岸線\nＩＧ： haikou._official (海口人)\nＦＢ： https://www.facebook.com/haikouofficial\nＹＴ： https://www.youtube.com/channel/UCdRrd4XBDrLcGTqJQKA1vaw/about\"\n', '2022-08-16 00:00:00', 5, '2023-05-21 00:00:00'),
(3, 'LÜCY', 'https://i.postimg.cc/ZnWxY028/photo03.jpg', 16590, '性別：女\n\nContact：\nlucyfairygood@gmail.com\n\nMore information：\nhttps://linktr.ee/LucyLiao\n\nInstagram：\nhttps://www.instagram.com/_lucyliao_/\n\nYoutube：\nhttps://www.youtube.com/@LUCY-kc7zz\n', '2020-10-20 00:00:00', 6, '2023-09-22 00:00:00'),
(4, '魚條', 'https://i.postimg.cc/pTGBtKGV/photo04.jpg', 3480, '生日 / 成立時間：2011 年 12 月 27 日\n\n成立於2011。', '2011-12-27 00:00:00', 20, '2024-03-20 00:00:00'),
(5, '薄暮', 'https://i.postimg.cc/0jhdzP1L/photo05.jpg', 362, '性別：男\n\n來自台中的四人編制金屬樂團「薄暮EVENFALL」，由主唱佑星、吉他手ED、貝斯手明倫和鼓手旻璋組成。創作內核融合了高張的情緒流動和撕裂旋律的唱腔，如落日餘暉燃燒著支離破碎的雲朵，音樂勾勒出每一幕畫面，編織成電影般穿透人心的作品，將你置身於浩瀚音牆之中，感受薄暮EVENFALL最純粹的音樂衝擊。\n\n2019 年底發行首張迷你專輯『State Of Mind』，並完成首次發片巡迴；2021 年發行第二張 EP『Closer To Hell』，首張中文創作專輯即將於2024年底發行。\n\n追蹤更多 薄暮/EVENFALL 資訊\nInstagram :\nhttps://www.instagram.com/evenfallTW\nFacebook :\nhttps://www.facebook.com/evenfallTW\nYoutube:\nhttps://www.youtube.com/channel/UCtUPgDWx_dsr9C0nLRuP6rQ', '2022-08-31 00:00:00', 4, '2024-02-22 00:00:00'),
(6, '守夜人', 'https://i.postimg.cc/wxrkfcR0/photo06.jpg', 17367, '淨化系的跨領域重唱組合——守夜人 Night Keepers已於 12/12 發行全新專輯《Retune》\n\n守夜人 Night Keepers 由團長旭章、主唱稚翎、鼓手其偉及電吉他手佳穎所組成，他們用樂團及部落客的形式成團，主打療癒心靈創作，作品涵蓋了音樂、電玩、文化跨域、人工智慧以及插畫創作等各種跨界媒材，曾接連入圍了第 31 屆、第 32 屆金曲獎最佳演唱組合獎，更獲得第 24 屆台北電影獎最佳配樂獎。他們近幾年陸續參與了多項影視作品，為其量身打造戲劇主題曲，包括：電影《我的天堂城市》配樂及主題曲、電影《該死的阿修羅》配樂及片尾曲、 戲劇《四樓的天堂》片尾曲、電影《跟你老婆去旅行》插曲等，拓展了更多的聽眾面相。\n\n他們也因順流著認識各創作領域人們的焦慮，於 2023 年 12 月推出第三張專輯《Retune》，並在這張專輯裡加入天鼓和頌缽的聲音，以 Indie Pop 為骨幹，增添成人流行、情緒搖滾、電子聲響和氛圍音樂等元素，用 9 首創作與身心靈音樂頻率產生連結，期許讓每個人在慌忙的世代裡，找回日常能安穩內在價值的狀態。', '2015-10-19 00:00:00', 12, '2024-02-12 00:00:00'),
(7, '胡凱兒', 'https://i.postimg.cc/7YTnpGgD/photo07.jpg', 13985, '性別：其他\r\n\r\n“Who Cares? ”\r\n2016年4月成立於台中\r\n第三人稱單數後面動詞要加s，很重要。\r\n\r\n我們是胡凱兒。\r\n\r\n這裡可以找到我們：\r\nFacebook:www.facebook.com/whofXXkingcares\r\nInstagram:instagram.com/whocares_band\r\n\r\n演出邀約請洽：\r\n✉️ wearewhocares@gmail.com\r\n0988-851-557', '2016-04-20 00:00:00', 32, '2023-05-25 00:00:00'),
(8, '雨國', 'https://i.postimg.cc/Z5txZbcN/photo08.jpg', 1794, '雨國由主唱陳翰於2016年底組成，風格以迷幻電子舞曲為基底，加上發人省思的生存哲理歌詞，不盲目追求大眾口味，用音樂記錄生命的軌跡，創造獨有氛圍。\r\n共感、自省、坦然是建構我們音樂的裡，極簡、電子、搖滾、另類，呈現的是我們音樂的外在。\r\nhttps://linktr.ee/kingdomofrain', '2016-05-06 00:00:00', 12, '2022-06-06 00:00:00'),
(9, '老王樂隊', 'https://i.postimg.cc/zfpCnn1w/photo09.jpg', 43232, '民謠搖滾\r\n臉書：https://www.facebook.com/yourwomansleepwithothers/\r\n微博：https://m.weibo.cn/u/6364009385?uid=6364009385&luicode=10000011&lfid=1076036396826066\r\n歡迎私訊捐款\r\n', '2015-10-27 00:00:00', 17, '2022-10-25 00:00:00'),
(10, '汪定中 DEW', 'https://i.postimg.cc/rw1CwBnP/photo10.jpg', 368, '性別：男\r\n\r\nDEW（汪定中）的音樂散發一股清新的氣息，自己創作自己製作。擅長捕捉涼爽的微風和將白日夢編織成旋律，遊走在Bedroom pop、R&B、lo-fi之間。DEW於2023年發行了《NIGHTFALL》和《DAYLIGHT》兩張 EP，更舉辦了完售的專場及活躍於音樂節演出。\r\n\r\n接下來，請繫好安全帶，準備在DEW的音樂中駛向悲喜交加的公路之旅', '2013-12-04 00:00:00', 13, '2023-12-12 00:00:00'),
(11, 'BTOB', 'https://i.postimg.cc/1zy0nvb5/photo11.jpg', 1446698, 'BTOB的名稱代表著「Born TO Beat」，意思指「包含音樂抱負，希望和決心，為Beat而生」。以「Beat」的意思為節拍、伴奏、背景、衝擊，也分為「為新的音樂和舞台而生」和「用音樂給全世界聽眾帶來衝擊而生」兩個主題。成員均具有堅強的現場演唱實力以及創作能力。', '2024-07-09 09:41:51', NULL, '2024-07-17 09:41:51'),
(12, '10cm', 'https://i.postimg.cc/NMM1b5g3/photo12.jpg', 230987, '是韓國一支獨立音樂樂隊，原由權正烈和尹哲種兩位成員組成。以輕快的曲調和活潑的歌詞為主的他們自2010年正式出道以來便成為韓國一支著名的非主流樂隊。\r\n\r\n組合中，由權正烈擔任主音、尹哲種擔任和音。因為兩位成員的身高差距剛好為10公分，因此隊名改為「10cm」。首張單曲《Americano》在2010年發行。而首張正規專輯《1.0》在2011年2月發行，至今已售超過兩萬張。2011年2月，10cm舉行了首場演唱會。2016年8月，樂團來台開唱。', '2024-07-09 09:41:51', NULL, '2024-07-17 09:41:51'),
(13, 'Energy', 'https://i.postimg.cc/hj5VYcvf/photo13.jpg', 346698, NULL, NULL, NULL, NULL),
(14, 'Yussef', 'https://i.postimg.cc/0jK7RFKZ/photo14.jpg', 1800345, NULL, NULL, NULL, NULL),
(15, 'Travis J', 'https://i.postimg.cc/z3mKJ7nN/photo15.jpg', 457890, NULL, NULL, NULL, NULL),
(16, '滅火器', 'https://i.postimg.cc/7P5RZLgt/photo16.jpg', 106698, NULL, NULL, NULL, NULL),
(17, '血肉果汁機', 'https://i.postimg.cc/DfRMJK6v/photo17.jpg', 80865, NULL, NULL, NULL, NULL),
(18, 'aespa', 'https://i.postimg.cc/8zjpNv1K/photo18.jpg', 3246698, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `categories`
--

CREATE TABLE `categories` (
  `sid` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `parent_sid` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `categories`
--

INSERT INTO `categories` (`sid`, `name`, `parent_sid`) VALUES
(1, '程式設計', 0),
(2, '繪圖軟體', 0),
(3, '網際網路應用', 0),
(4, 'PHP', 1),
(5, 'JavaScript', 1),
(7, 'PS', 2),
(8, 'Chrome', 3),
(9, '騙錢的', 3),
(10, 'C++', 1),
(16, '椅拉', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `event_artists`
--

CREATE TABLE `event_artists` (
  `eaid` int NOT NULL,
  `event_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `event_artists`
--

INSERT INTO `event_artists` (`eaid`, `event_id`, `artist_id`) VALUES
(1, 1, 16),
(2, 2, 14),
(3, 3, 12),
(4, 4, 18),
(5, 5, 13),
(6, 6, 15),
(7, 7, 11),
(8, 8, 8),
(9, 9, 17),
(10, 10, 1),
(11, 10, 2),
(12, 10, 3),
(13, 10, 4),
(14, 10, 5),
(15, 11, 13),
(16, 11, 7),
(17, 11, 12),
(18, 11, 4),
(19, 11, 3),
(20, 12, 17),
(21, 12, 15),
(22, 12, 9),
(23, 13, 1),
(24, 13, 5),
(25, 13, 8),
(26, 13, 6),
(27, 14, 17),
(28, 14, 11),
(29, 14, 10),
(30, 14, 5),
(31, 14, 8),
(32, 14, 14),
(38, 15, 13),
(39, 15, 12),
(40, 15, 11),
(41, 15, 5),
(42, 15, 16),
(43, 16, 13),
(44, 16, 12),
(45, 16, 11),
(46, 16, 13),
(47, 16, 14),
(48, 16, 5),
(49, 17, 2),
(50, 17, 15),
(51, 17, 17),
(52, 17, 13),
(53, 17, 7),
(54, 17, 12),
(55, 18, 11),
(56, 18, 12),
(57, 18, 17),
(58, 18, 3),
(59, 18, 2),
(60, 18, 5),
(61, 19, 10),
(62, 19, 5),
(63, 19, 14),
(64, 19, 7),
(65, 19, 8),
(66, 19, 1),
(67, 20, 8),
(68, 20, 6),
(69, 20, 7),
(70, 20, 1),
(71, 21, 4),
(72, 21, 10),
(73, 21, 9),
(74, 21, 8),
(75, 21, 11);

-- --------------------------------------------------------

--
-- 資料表結構 `favorite`
--

CREATE TABLE `favorite` (
  `id` int NOT NULL,
  `member_id` int NOT NULL,
  `favorite_type` enum('Event','Artist','Product') DEFAULT NULL,
  `item_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `favorite`
--

INSERT INTO `favorite` (`id`, `member_id`, `favorite_type`, `item_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Event', 5, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(2, 2, 'Event', 20, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(3, 5, 'Event', 2, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(4, 3, 'Event', 11, '2024-07-08 16:26:37', '2024-07-08 16:26:37');

-- --------------------------------------------------------

--
-- 資料表結構 `from_csv_01`
--

CREATE TABLE `from_csv_01` (
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `from_csv_01`
--

INSERT INTO `from_csv_01` (`name`, `age`, `address`) VALUES
('李小明', 25, '台北市'),
('陳小華', 28, '高雄市'),
('吳大同', 24, '宜蘭縣');

-- --------------------------------------------------------

--
-- 資料表結構 `markets`
--

CREATE TABLE `markets` (
  `id` int NOT NULL,
  `market_name` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `markets`
--

INSERT INTO `markets` (`id`, `market_name`, `address`) VALUES
(1, '7-11台北小巨蛋', '台北市松山區南京東路四段2號1樓'),
(2, '7-11台北中崙', '台北市松山區八德路三段27號'),
(3, '7-11台北民有', '台北市松山區民權東路三段108號'),
(4, '7-11台北吉祥', '台北市松山區八德路四段245巷52弄31號'),
(5, '7-11台北京城', '台北市松山區南京東路四段75之2號1樓'),
(6, '7-11台北京復', '台北市松山區光復北路11巷44號'),
(7, '7-11台北延壽', '台北市松山區延壽街422號'),
(8, '7-11台北東吉', '台北市松山區民生東路五段100號'),
(9, '7-11台北中興', '台北市信義區基隆路二段22號'),
(10, '7-11台北世貿', '台北市信義區信義路五段5號1樓'),
(11, '7-11台北北府', '台北市信義區松仁路162號164號1樓'),
(12, '7-11台北北醫', '台北市信義區吳興街252號'),
(13, '7-11台北松山', '台北市信義區忠孝東路五段386號'),
(14, '7-11台北松高', '台北市信義區基隆路一段141號1樓'),
(15, '7-11台北松智', '台北市信義區莊敬路325巷43號'),
(16, '7-11台北大安復興', '台北市大安區復興南路一段247號'),
(17, '7-11台北永康', '台北市大安區永康街43號'),
(18, '7-11台北合維', '台北市大安區四維路170巷8號1樓'),
(19, '7-11台北八德', '台北市中正區臨沂街1號1樓'),
(20, '7-11台北中正許昌', '台北市中正區許昌街26號1樓'),
(21, '7-11新北台藝大', '新北市板橋區大觀路一段59號'),
(22, '7-11新北府中', '新北市板橋區府中路82號84號1樓'),
(23, '7-11新北三洋', '新北市新莊區中正路677號679號'),
(24, '7-11新北加州', '新北市新莊區中平路81巷2號'),
(25, '7-11新北宏福', '新北市新莊區公園一路34號36號1樓'),
(26, '7-11新北花旗', '新北市新莊區中港路132巷26號'),
(27, '7-11新北副都心', '新北市新莊區中央路287號289號1樓'),
(28, '7-11新北捷仕堡', '新北市新莊區龍安路15號'),
(29, '7-11新北莊和', '新北市新莊區中和街34.36號'),
(30, '7-11新北傑出', '新北市新莊區昌平街61號63號1樓');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `google_uid` varchar(255) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`id`, `name`, `email`, `password`, `gender`, `mobile`, `birthday`, `address`, `avatar`, `google_uid`, `photo_url`, `created_at`, `updated_at`) VALUES
(1, '白詩涵', 'lei1788@yahoo.com', '$2b$10$RMmeMGe3ClpK.yiZZWn52OxEp7G0bTuSLUlEDcsBt2/8.JYdgBffu', 'male', '0942135630', '1986-11-01', '706 白沙市公園巷5號之8', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(2, '普淑貞', 'wei3437@yahoo.com', '$2b$10$QTl89m0/OWpUhJzJOuxTHeRG2hnwU6Vqy8DTRtZeevtCFx.9uCBYC', 'male', '0951907593', '1973-07-29', '811 基隆迴龍巷85號之5', 'https://placeimg.com/238/1018/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(3, '龔美琪', 'fangye20@gmail.com', '$2b$10$wt8I1a3j9rldpeFn0xj07eC27nrDzDNPl6Gnw5XreKg1LZ80heJr6', 'male', '0915490413', '1958-08-07', '237 新營興街5段38號4樓', 'https://dummyimage.com/742x322', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(4, '劉承翰', 'vcui80@gmail.com', '$2b$10$bWjDttTQ8gmpxwS6/hvVqent.XULPsrwoDFpml8vvaeq8mSuE6x0e', 'male', '0938104979', '1955-09-15', '479 台東光明街5號9樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(5, '霍建宏', 'tmao53@yahoo.com', '$2b$10$3ISBoLDEgEISNlyarVLte.0pEr3IKqs6dKv88axw44i.nXDfy9LUu', 'female', '0939514218', '1962-08-30', '70459 卑南市大橋頭巷2號之2', 'https://placekitten.com/255/375', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(6, '陳家瑋', 'xiawen38@yahoo.com', '$2b$10$sJbwigklfSztw09x4P7a4uSGDxefiI9263LdJmygRSmqKtaSKV0c2', 'female', '0961246814', '2001-12-26', '371 連江市象山街73號7樓', 'https://placeimg.com/111/840/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(7, '韋雅琪', 'chaoduan70@gmail.com', '$2b$10$0AmZIDVI5woJPgD0Tnl4DuaM8NoBlkE4N73KDZ6Sz665jYwL8jYRS', 'female', '0938387564', '2003-07-23', '307 大里忠孝路4段65號2樓', 'https://dummyimage.com/594x808', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(8, '曹郁雯', 'yan4290@yahoo.com', '$2b$10$QOdVAAw7AzjUnF5ay/L1eOnMkX9Xp8.pHzJn3HWPBE76R/GZ18Kf2', 'female', '0947524119', '1975-01-21', '125 員林市民有路29號6樓', 'https://placekitten.com/736/538', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(9, '程曉雯', 'duliang90@gmail.com', '$2b$10$rn8wsKdKBYRLtGaECfOr/unfCJ.b/oi1.Ro3bXwRaWDFHwjc7Ebci', 'male', '0983842052', '1988-12-03', '33811 鳳山瑞光路83號5樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(10, '譚飛', 'wenfang94@gmail.com', '$2b$10$i/qNW5Y9Nb.lwmgDkg4twuvgzw953Y1O5qDSwVJf1J1viFwm3VJKS', 'female', '0954420226', '1992-09-05', '67884 八德民族路4號3樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(11, '陳惠婷', 'duanchao24@gmail.com', '$2b$10$H7fiqwLYhW3wgvBwafKne..HVAzsK904AupBdiJebQpe.st96dSOO', 'female', '0978162819', '1968-09-27', '91579 台北縣水源巷1段468號之9', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(12, '李瑋婷', 'yan5719@gmail.com', '$2b$10$tHMPXN8Ij0DelLnz/I7gxeXmex5Bc7a8yHL/j6wV.M6FCHiY9jw1C', 'female', '0935513777', '1935-05-27', '633 苗栗中和巷1段9號之1', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(13, '趙瑋婷', 'panqiang4@gmail.com', '$2b$10$HyE8mfGn0bjnGiTpihkna.2N2lif203NvBKeiSNfSnejliIl3BJqO', 'male', '0928030856', '1965-07-17', '961 北港縣關渡路37號5樓', 'https://dummyimage.com/632x383', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(14, '易雅惠', 'gaogang67@yahoo.com', '$2b$10$/CvZIlEuXcN3XjFYFEwBSOsUUyUOegzG1lCuqqo3Dw/fMG8oxmTJK', 'female', '0946350961', '1971-08-12', '37403 板橋松山街950號8樓', 'https://placekitten.com/506/288', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(15, '韓俊傑', 'maowei20@gmail.com', '$2b$10$oki2L9zUW4KuCi57DmetW.mkZMdlBWkNqBg9Z1eY/U5sFP..GdcHu', 'male', '0995872335', '1992-06-04', '60515 南投勝利街1段1號1樓', 'https://placeimg.com/848/573/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(16, '張皓瑋', 'pengbo8@yahoo.com', '$2b$10$N5MPocRuYMTX4cwTgtjGIesb1XAB5SxOw1qElt7kHgapf8VX4YlG2', 'female', '0973652139', '1959-02-25', '35720 羅東福德路84號', 'https://dummyimage.com/226x855', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(17, '龔文雄', 'dongdong48@gmail.com', '$2b$10$qSwn9nGqb1Jx3mVE80IHMO7oNzaxdHBIWR.V.WUP1gLyVOlp9qo.2', 'female', '0953967821', '1965-06-17', '11612 潮州光復巷5段97號6樓', 'https://dummyimage.com/595x660', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(18, '馮彥廷', 'na5987@yahoo.com', '$2b$10$6/juLz56JIAsCyXxfZAa.eq470KR3RkEWqFjyQ.QmRBBjsZghv8wu', 'female', '0927993880', '1995-03-11', '222 永康水源巷6段77號之1', 'https://placeimg.com/283/874/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(19, '連志豪', 'liangshun64@gmail.com', '$2b$10$Fkfnpxxp/dQG95SgWvepTurZdKzcdr7VMjK8OcqZqAk7dcDgNYbwW', 'male', '0921894582', '1948-03-30', '58985 桃園文化街5號5樓', 'https://placekitten.com/684/666', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(20, '傅志偉', 'chunjun74@yahoo.com', '$2b$10$kHwWTZt6k803DfEOzMq9uOB0e23e/HbmqHLlpwPiMYk8FrfnJlqpK', 'male', '0912348614', '1958-05-21', '68946 三重市中華街6號2樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(21, '林婉如', 'qiangjiao2@yahoo.com', '$2b$10$PFPDbAqNSxQ/XQneYtVw..UHDHY8.hwoZIaNrIC1fOhSUOo5eXlCS', 'female', '0912154794', '1969-10-22', '158 宜蘭市建國巷4段28號1樓', 'https://placekitten.com/266/570', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(22, '袁建宏', 'guanmeili72@yahoo.com', '$2b$10$M0pIijKyIW0v.xvFtMR04uaQq5fOc/dJ81VcgyN5zRxqE/kDFFrDq', 'female', '0934851244', '2005-08-09', '19011 平鎮迴龍街206號之4', 'https://placeimg.com/155/587/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(23, '趙嘉豪', 'chunmao22@gmail.com', '$2b$10$v..G4HQM8SHZxl15BwSlTOmczMwl2V7xe0bSyZ/ddgAhnmsWvmqLq', 'male', '0925436114', '1955-05-10', '316 板橋福德街4段95號2樓', 'https://dummyimage.com/651x960', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(24, '丁逸婷', 'duanxu91@gmail.com', '$2b$10$Jmlbaws3vCN610PMVcHJ..QPNjAvUAdf.7ymkqYWZPmtA4PApU/Rm', 'male', '0913210987', '1964-08-05', '799 台中中山街9段61號之2', 'https://dummyimage.com/938x419', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(25, '王明芳', 'guannan25@gmail.com', '$2b$10$RzQZXTSN80bEPOZsU02Jqe8xlzQ5omammgFQ2j2govMhOc5Zd3emO', 'female', '0946982135', '2000-09-10', '69451 新莊瑞光巷8段86號之3', 'https://dummyimage.com/452x952', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(26, '李建宏', 'lianghan20@yahoo.com', '$2b$10$fOMApv9vLDF3U8wUgZNWQe0g1WG23jDKz1ikNlnGrHQvox10i5k4a', 'female', '0954638112', '1970-04-21', '547 安平光明巷7號之1', 'https://dummyimage.com/375x892', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(27, '趙馨惠', 'yeyun61@yahoo.com', '$2b$10$b3C1qrKp0HG0iGawVYcBve1ysruGJWK0kILi3YdEk3VKlHsyQo6EW', 'female', '0984165172', '1959-02-24', '762 新竹市中正路9段7號之7', 'https://placekitten.com/200/500', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(28, '胡惠婷', 'ganggang93@gmail.com', '$2b$10$aedpVviaOycDaTunEXwvSObfOWx3FlzCkluqoj1GuRlV9J8BApU0q', 'male', '0976258143', '2001-11-09', '800 高雄市和平路5段92號3樓', 'https://dummyimage.com/899x735', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(29, '李志偉', 'wenfeng80@yahoo.com', '$2b$10$lEIdNC2.3uIErtqSO2AI0OIeCATOdHc1TJ/SnVARlW4jQAWSCAHEG', 'male', '0968741253', '1988-11-05', '984 台南市中正路2號5樓', 'https://dummyimage.com/123x567', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(30, '江志偉', 'jieming38@gmail.com', '$2b$10$DLf2rLUQupLv0XlalFDOgOkYgGiakbI3W8S4ak46B9tWTnwpITOZK', 'female', '0971845632', '2002-02-21', '482 安平市仁愛路3段6號8樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(31, '趙文雄', 'rongfeng87@yahoo.com', '$2b$10$XqpztmhqRHRFcYdJex6Es.UEkLjGto3Cxta6l.yrP.MCxVgR3c7.K', 'female', '0927394168', '1998-07-19', '65714 三重市中山路4段1號之3', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(32, '馬偉倫', 'meilan68@gmail.com', '$2b$10$i.TZdAN.xRdkUVvVhm3.6O6TVuS1E5TBmsI0JYBopGTJLp.iTXHOe', 'female', '0956934721', '1980-10-01', '188 三重市瑞光街2段9號之4', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(33, '鄧志偉', 'chunjun74@yahoo.com', '$2b$10$y0QUepgk9FNg.s7AqIw8be9m9lrJSjSmMWNQakxrko3AHXE9Yv.yy', 'male', '0915412378', '1974-08-11', '65812 高雄市中山路3段87號2樓', 'https://placekitten.com/800/600', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(34, '張瑋婷', 'leiming52@yahoo.com', '$2b$10$4wBMDIE9dJ3.tlkeoh5TKOtxzyctCYwuz/bdWndNOWVMCpH4IoqfO', 'female', '0957361245', '1991-01-07', '415 桃園縣三民路1段10號7樓', 'https://dummyimage.com/333x789', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(35, '張志豪', 'ruiyuan90@gmail.com', '$2b$10$HtG3xumdqvOBOqZv6oLN1.c6xNdZVrJcWPkh7nx3sAsfEN2h/K.Pe', 'female', '0925410879', '1966-03-19', '934 桃園縣和平巷7段62號5樓', 'https://dummyimage.com/852x114', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(36, '唐志偉', 'wenyuan57@yahoo.com', '$2b$10$wPFhqyF7rT8XyvRRKB4k8uVo5bQWRGn/ZpqM3MBxcdVafzETJAnTq', 'female', '0936985472', '2004-11-13', '212 新竹市中山路5段95號2樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(37, '彭志偉', 'meijun74@yahoo.com', '$2b$10$9M6ujRH4cTVhUPq7MuU4KubQi5acrQBW7ZqXSyz.Bx5r.RfJosIYG', 'male', '0974658231', '1951-07-29', '816 高雄市中華路2段78號5樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(38, '何嘉豪', 'xueliang85@gmail.com', '$2b$10$cYEVGsJPAEf6rbDILHUe8e3Ucn/7.dlOyKY/KFQkU3YduvPL80SMm', 'female', '0943658709', '1958-04-10', '945 嘉義市和平路3段7號6樓', 'https://placeimg.com/153/705/any', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(39, '邱志偉', 'chunyun32@gmail.com', '$2b$10$dafmy0DzGDDN22tfMwxEpOd.G/59CHqCn.lOh3SzEY22.Abg88K2y', 'female', '0921436987', '1995-12-12', '704 台中市文化街5段12號8樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(40, '隨意', 'castle@gg.com', '$2b$10$svZSWQ9UKrPo1nuobvGQLuGcYIn3LTdRTyM.7W0.yCEtT/LjF/lea', 'female', '0974338231', '2010-06-29', '816 高雄市中華路2段78號5樓', '40.jpg', NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:35:32'),
(41, 'Ming', 'ming@gg.com', '$2b$10$vp3EUVtmGrxovBkKGPQMOO7jcqV25QJTJWEr60NFS6bgwqWeRdjsW', 'male', '0974337231', '2010-07-23', '816 高雄市中華路2段78號5樓', NULL, NULL, NULL, '2024-07-08 16:26:37', '2024-07-08 16:26:37'),
(42, 'Jin', 'jin@test.com', '$2b$10$iu91rSgnOuoGsbplFwEqqO.U2LR7RHACBqkLa.OAXE.yanwj/j566', 'female', '0922222222', '2022-02-02', '816 高雄市中華路2段78號99樓', '42.jpg', NULL, NULL, '2024-07-08 16:26:37', '2024-07-15 13:40:28'),
(43, 'testgrr', 'test@grr.la', '$2b$10$6hY.G7vAxMbqZ7Lo2Oi.FOkM7KJyFkVKSMZA43vzZDVg.fqFAlZIS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 12:39:40', '2024-07-09 12:40:35'),
(44, '張殷睿', 'jinchang0501@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '106286310148328124364', 'https://lh3.googleusercontent.com/a/ACg8ocKqLf7dYEU6tOkkm5pqM8rGCum1jGhi6iYelsIIZA6xoVcoAA=s96-c', '2024-07-15 13:41:13', '2024-07-15 13:41:13');

-- --------------------------------------------------------

--
-- 資料表結構 `nclass`
--

CREATE TABLE `nclass` (
  `id` int NOT NULL,
  `class` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `nclass`
--

INSERT INTO `nclass` (`id`, `class`) VALUES
(1, 'artist'),
(2, 'activity');

-- --------------------------------------------------------

--
-- 資料表結構 `notification`
--

CREATE TABLE `notification` (
  `id` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `sent_time` datetime NOT NULL,
  `noti_class` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `notification`
--

INSERT INTO `notification` (`id`, `title`, `content`, `sent_time`, `noti_class`) VALUES
(1, '滅火器', '即將參加火球祭', '2024-05-20 12:00:00', 1),
(2, 'Energy', '演唱會來襲', '2024-05-20 12:00:00', 1),
(3, '血肉果汁機', '2024全新巡迴演出', '2024-05-20 12:00:00', 1),
(4, '雨山祭', '周邊搶購', '2024-05-20 12:00:00', 2),
(5, '台秋祭', '遊玩攻略', '2024-05-20 12:00:00', 2),
(6, '浪人祭', '卡司公布', '2024-05-20 12:00:00', 2),
(7, '霓虹綠洲音樂祭', '即將參加火球祭', '2024-05-20 12:00:00', 2),
(8, '滅火器', '即將參加火球祭', '2024-05-20 12:00:00', 1),
(9, 'Energy', '演唱會來襲', '2024-05-20 12:00:00', 1),
(10, '血肉果汁機', '2024全新巡迴演出', '2024-05-20 12:00:00', 1),
(11, '雨山祭', '周邊搶購', '2024-05-20 12:00:00', 2),
(12, '台秋祭', '遊玩攻略', '2024-05-20 12:00:00', 2),
(13, '浪人祭', '卡司公布', '2024-05-20 12:00:00', 2),
(14, '霓虹綠洲音樂祭', '即將參加火球祭', '2024-05-20 12:00:00', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int NOT NULL,
  `order_num` int NOT NULL,
  `member_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `pickup_method` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `TempVar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `outside` int DEFAULT NULL,
  `ship` int DEFAULT NULL,
  `storeid` int DEFAULT NULL,
  `storename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `storeaddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_num`, `member_id`, `product_id`, `quantity`, `payment_method`, `pickup_method`, `created_at`, `TempVar`, `outside`, `ship`, `storeid`, `storename`, `storeaddress`) VALUES
(1, 100001, 42, 2, 2, '現金', '711', '2024-07-15 15:17:56', '', 0, 0, 0, '', ''),
(2, 100001, 42, 2, 1, '現金', '711', '2024-07-15 15:17:56', '', 0, 0, 0, '', ''),
(33, 100001, 42, 19, 1, '現金', '711', '2024-07-15 15:17:56', '', 0, 0, 0, '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `otp`
--

CREATE TABLE `otp` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `exp_timestamp` bigint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` int DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `picture`, `activity`, `name`, `price`, `intro`, `stock`, `created_at`, `updated_at`) VALUES
(1, 't-1.jpg', 'Wonderland演唱會', 'T恤', 1500, '活動聯名T恤，限量發售，名牌設計總監親自設計，親膚材質，吸濕排汗，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(2, 'ellesse_hoodie-1.jpg', 'Wonderland演唱會', '連帽長袖上衣', 3000, '活動聯名連帽長袖上衣，限量發售，名牌設計總監親自設計，親膚材質，保暖透氣，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(3, 'pet_postcard-1.jpg', '寵物嘉年華', '明信片組', 150, '2024寵物嘉年華-明信片組，限量發售，全套4張，每一張都可愛度破表。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(4, 'pet_keyring-dog.jpg', '寵物嘉年華', '毛毛鑰匙圈-旺旺', 200, '2024寵物嘉年華-毛毛鑰匙圈(旺旺)，限量發售，可愛度破表。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(5, 'pet_keyring-cat.jpg', '寵物嘉年華', '毛毛鑰匙圈-喵喵', 200, '2024寵物嘉年華-毛毛鑰匙圈(喵喵)，限量發售，可愛度破表。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(6, 'pet_basket.jpg', '寵物嘉年華', '多功能野餐籃', 600, '寵物嘉年華-多功能野餐籃，可愛度破表，提升野餐的質感，文青最愛。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(7, 'pet_mat.jpg', '寵物嘉年華', '野餐墊', 200, '寵物嘉年華-野餐墊，可愛度破表，文青最愛，讓您優雅輕鬆享受野餐的美好時光。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(8, 'tmf_towel.jpg', '台灣音樂祭', '毛巾', 500, '2024台灣音樂祭T恤，最新2024台灣音樂祭官方毛巾，本網站限量1000件。高質感，柔軟快乾', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(9, 'tmf_mat.jpg', '台灣音樂祭', '地毯', 500, '最新2024台灣音樂祭官方地毯，本網站限量1000件。高質感，居家裝飾好物', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(10, 'tmf_lightstick', '台灣音樂祭', '應援手燈', 200, '最新2024台灣音樂祭-官方應援手燈，在音樂祭中跟隨音樂搖動手中的手燈，舞動您的身體，盡情沉浸在超High氣氛中。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(11, 'tmf_curtain.jpg', '台灣音樂祭', '門簾', 500, '在家中布置台灣音樂祭-高質感門簾，隨時沉浸在台灣音樂祭熱情的氣氛。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(12, 'tmf_bag-blue.jpg', '台灣音樂祭', '托特袋-藍', 350, '活動聯名限量托特袋，名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(13, 'tmf_bag-pink.jpg', '台灣音樂祭', '托特袋-粉', 350, '活動聯名限量托特袋，名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(14, 'tmf_bag-green.jpg', '台灣音樂祭', '托特袋-綠', 350, '活動聯名限量托特袋，名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(15, 'tmf_t-shirt.jpg', '台灣音樂祭', '高質感T恤', 590, '2024台灣音樂祭T恤，最新2024台灣音樂祭官方T恤，本網站限量1000件。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(16, 'tmf_keyring.jpg', '台灣音樂祭', '鑰匙圈', 350, '2024台灣音樂祭T恤，最新2024台灣音樂祭官方鑰匙圈，本網站限量1000件。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(17, 'sw_towel.jpg', '春浪', '毛巾', 300, '2024春浪活動毛巾，最新2024台灣音樂祭官方毛巾，高質感，柔軟快乾', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(18, 'sw_sticker.jpg', '春浪', '貼紙', 100, '活動聯名限量貼紙，名牌設計總監親自設計，可愛度破表！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(19, 'sw_bag.jpg', '春浪', '購物袋', 300, '活動聯名限量購物袋，名牌設計總監親自設計，好裝耐用，美觀！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(20, 'sw_t-shirt.jpg', '春浪', 'T恤', 500, '活動聯名限量T恤，名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(21, 'sw_mat.jpg', '春浪', '野餐墊', 500, '2024春浪活動限量野餐墊，可愛度破表，文青最愛，讓您優雅輕鬆享受野餐的美好時光。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(22, 'bubble_t-shirt-white.jpg', 'Bubble音樂會', 'T恤-白', 2100, '活動聯名限量T恤，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(23, 'bubble_t-shirt-pink.jpg', 'Bubble音樂會 ', 'T恤-粉', 2100, '活動聯名限量T恤，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(24, 'foundation_t-shirt.jpg', 'Foundation 音樂會', 'T恤', 2100, '官方限量T恤，本網站限量1000件。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(25, 'foundation_hoodie.jpg', 'Foundation 音樂會', '連帽長袖上衣', 3000, '活動聯名限量連帽長袖上衣，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(26, 'love_t-shirt.jpg', 'Foundation 音樂會', 'Love T恤', 2100, '官方限量T恤，本網站限量1000件。', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(27, 'love_hoodie.jpg', 'Foundation 音樂會', '連帽長袖上衣', 3000, '活動聯名限量連帽長袖上衣，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(28, 'red_baseball-cap.jpg', 'Foundation 音樂會', '棒球帽-紅', 700, '活動聯名限量棒球帽，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(29, 'purple_baseball-cap.jpg', 'Foundation 音樂會', '棒球帽-紫', 700, '活動聯名限量棒球帽，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09'),
(30, 'blue_baseball-cap.jpg', 'Foundation 音樂會', '棒球帽-藍', 700, '活動聯名限量棒球帽，本網站限量1000件。名牌設計總監親自設計，超高回頭率！', 1000, '2024-07-09 15:27:09', '2024-07-09 15:27:09');

-- --------------------------------------------------------

--
-- 資料表結構 `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `product_name` varchar(150) NOT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `purchase_quantity` int DEFAULT '1',
  `activitie_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `products`
--

INSERT INTO `products` (`id`, `product_name`, `picture`, `price`, `purchase_quantity`, `activitie_id`) VALUES
(1, '寵物嘉年華 明信片組', 'pet_postcard.jpg', 150, 1000, 1),
(2, '寵物嘉年華 毛毛鑰匙圈', 'pet_keyring-dog.jpg', 200, 1000, 1),
(3, '寵物嘉年華 毛毛鑰匙圈', 'pet_keyring-cat.jpg', 200, 1000, 1),
(4, '寵物嘉年華 多功能野餐籃', 'pet_basket.jpg', 600, 1000, 1),
(5, '寵物嘉年華 野餐墊', 'pet_mat.jpg', 200, 1000, 1),
(6, '台灣音樂祭 T恤', 'tmf_t-shirt.jpg', 590, 1000, 2),
(7, '台灣音樂祭 鑰匙圈', 'tmf_keyring.jpg', 350, 1000, 2),
(8, '台灣音樂祭 毛巾', 'tmf_towel.jpg', 500, 1000, 2),
(9, '台灣音樂祭 地毯', 'tmf_mat.jpg', 500, 1000, 2),
(10, '台灣音樂祭 應援手燈', 'tmf_lightstick.jpg', 250, 1000, 2),
(11, '台灣音樂祭 T恤', 'tmf_curtain.jpg', 500, 1000, 2),
(12, '台灣音樂祭 托特袋-藍', 'tmf_bag-blue.jpg', 350, 1000, 2),
(13, '台灣音樂祭 托特袋-粉', 'tmf_bag-pink.jpg', 350, 1000, 2),
(14, '台灣音樂祭 托特袋-綠', 'tmf_bag-green.jpg', 350, 1000, 2),
(15, '春浪-T恤', 'sw_t-shirt.jpg', 500, 1000, 3),
(16, '春浪-野餐墊', 'sw_mat.jpg', 500, 1000, 3),
(17, '春浪-毛巾', 'sw_towel.jpg', 300, 1000, 3),
(18, '春浪-貼紙', 'sw_sticker.jpg', 100, 1000, 3),
(19, '春浪-購物袋', 'sw_bag.jpg', 300, 1000, 3),
(20, 'Bubble T恤 黑', 'bubble_t-shirt-black.jpg', 2100, 1000, 4),
(21, 'Bubble T恤 粉', 'bubble_t-shirt-pink.jpg', 2100, 1000, 4),
(22, 'Bubble T恤 白', 'bubble_t-shirt-white.jpg', 2100, 1000, 4),
(23, 'Bubble hoodie 黑', 'bubble_hoodie-black.jpg', 3000, 500, 4),
(24, 'Butterfly T恤', 'butterfly_t-shirt.jpg', 2100, 1000, 5),
(25, 'Ellesse hoodie', 'ellesse_hoodie.jpg', 3000, 550, 5),
(26, 'Ellesse T恤', 'ellesse_t-shirt.jpg', 2100, 1000, 5),
(27, 'lIVE T恤', 'live_t-shirt.jpg', 2000, 1000, 6),
(28, 'LIVE sweatshirt', 'live_sweatshirt.jpg', 3000, 550, 6),
(29, 'lOVE T恤', 'love_t-shirt.jpg', 2000, 1000, 6),
(30, 'lOVE hoodie', 'love_hoodie.jpg', 3000, 500, 6),
(31, 'Fundation T恤', 'foundation_t-shirt.jpg', 2100, 900, 6),
(32, 'Foundation hoodie', 'foundation_hoodie.jpg', 3000, 500, 6),
(34, 'fusion活動T-shirt', '40ddd94c9e819ff91d5376241da03ed1b16f232c.jpg', 1500, 400, 7),
(35, 'blue_baseball-cap', '15b9c15abed4873ea88daf6bc47a72e2d280ced8.jpg', 700, 500, 7),
(37, 'fusion_t-shirt', '1f984ffdffec41191cc646a0af1785c2a98f7b61.jpg', 1500, 50, 7);

-- --------------------------------------------------------

--
-- 資料表結構 `ticket`
--

CREATE TABLE `ticket` (
  `tid` int NOT NULL,
  `activity_id` int DEFAULT NULL,
  `seat_area` varchar(50) NOT NULL,
  `seat_row` varchar(50) NOT NULL,
  `seat_number` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `member_id` int DEFAULT NULL,
  `payment` varchar(50) DEFAULT NULL,
  `order_num` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `cx` float NOT NULL,
  `cy` float NOT NULL,
  `r` float NOT NULL,
  `transform` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `ticket`
--

INSERT INTO `ticket` (`tid`, `activity_id`, `seat_area`, `seat_row`, `seat_number`, `price`, `member_id`, `payment`, `order_num`, `created_at`,`cx`,`cy`,`r`, `transform`) VALUES
(1, NULL, 'A', 'A', '1', 5200, NULL, NULL, NULL, NULL, 283, 508, 12.5, NULL),
(2, NULL, 'A', 'A', '2', 5200, NULL, NULL, NULL, NULL, 323, 508, 12.5, NULL),
(3, NULL, 'A', 'A', '3', 5200, NULL, NULL, NULL, NULL, 363, 508, 12.5, NULL),
(4, NULL, 'A', 'A', '4', 5200, NULL, NULL, NULL, NULL, 403, 508, 12.5, NULL),
(5, NULL, 'A', 'A', '5', 5200, NULL, NULL, NULL, NULL, 443, 508, 12.5, NULL),
(6, NULL, 'A', 'B', '6', 5200, NULL, NULL, NULL, NULL, 283, 468, 12.5, NULL),
(7, NULL, 'A', 'B', '7', 5200, NULL, NULL, NULL, NULL, 323, 468, 12.5, NULL),
(8, NULL, 'A', 'B', '8', 5200, NULL, NULL, NULL, NULL, 363, 468, 12.5, NULL),
(9, NULL, 'A', 'B', '9', 5200, NULL, NULL, NULL, NULL, 403, 468, 12.5, NULL),
(10, NULL, 'A', 'B', '10', 5200, NULL, NULL, NULL, NULL, 443, 468, 12.5, NULL),
(11, NULL, 'A', 'C', '11', 5200, NULL, NULL, NULL, NULL, 283, 428, 12.5, NULL),
(12, NULL, 'A', 'C', '12', 5200, NULL, NULL, NULL, NULL, 323, 428, 12.5, NULL),
(13, NULL, 'A', 'C', '13', 5200, NULL, NULL, NULL, NULL, 363, 428, 12.5, NULL),
(14, NULL, 'A', 'C', '14', 5200, NULL, NULL, NULL, NULL, 403, 428, 12.5, NULL),
(15, NULL, 'A', 'C', '15', 5200, NULL, NULL, NULL, NULL, 443, 428, 12.5, NULL),

(16, NULL, 'B', 'A', '16', 3500, NULL, NULL, NULL, NULL, 314.557, 357.847, 12.5, 'rotate(-38.3385 314.557 357.847)'),
(17, NULL, 'B', 'A', '17', 3500, NULL, NULL, NULL, NULL, 348.313, 353.976, 12.5, 'rotate(-38.3385 348.313 353.976)'),
(18, NULL, 'B', 'A', '18', 3500, NULL, NULL, NULL, NULL, 380.948, 354.94, 12.5, 'rotate(-38.3385 380.948 354.94)'),
(19, NULL, 'B', 'A', '19', 3500, NULL, NULL, NULL, NULL, 412.928, 361.523, 12.5, 'rotate(-38.3385 412.928 361.523)'),
(20, NULL, 'B', 'B', '20', 3500, NULL, NULL, NULL, NULL, 302.558, 322.951, 12.5, 'rotate(-38.3385 302.558 322.951)'),
(21, NULL, 'B', 'B', '21', 3500, NULL, NULL, NULL, NULL, 343.558, 319.559, 12.5, 'rotate(-38.3385 343.558 319.559)'),
(22, NULL, 'B', 'B', '22', 3500, NULL, NULL, NULL, NULL, 385.558, 320.559, 12.5, 'rotate(-38.3385 385.558 320.559)'),
(23, NULL, 'B', 'B', '23', 3500, NULL, NULL, NULL, NULL, 424.559, 326.442, 12.5, 'rotate(-38.3385 424.559 326.442)'),
(24, NULL, 'B', 'C', '24', 3500, NULL, NULL, NULL, NULL, 290.558, 288.055, 12.5, 'rotate(-38.3385 290.558 288.055)'),
(25, NULL, 'B', 'C', '25', 3500, NULL, NULL, NULL, NULL, 326.558, 282.559, 12.5, 'rotate(-38.3385 326.558 282.559)'),
(26, NULL, 'B', 'C', '26', 3500, NULL, NULL, NULL, NULL, 364.558, 280.559, 12.5, 'rotate(-38.3385 364.558 280.559)'),
(27, NULL, 'B', 'C', '27', 3500, NULL, NULL, NULL, NULL, 401.558, 283.559, 12.5, 'rotate(-38.3385 401.558 283.559)'),
(28, NULL, 'B', 'C', '28', 3500, NULL, NULL, NULL, NULL, 436.558, 291.362, 12.5, 'rotate(-38.3385 436.558 291.362)'),
(29, NULL, 'B', 'D', '29', 3500, NULL, NULL, NULL, NULL, 278.558, 252.538, 12.5, 'rotate(-38.3385 278.558 252.538)'),
(30, NULL, 'B', 'D', '30', 3500, NULL, NULL, NULL, NULL, 323.558, 243.558, 12.5, 'rotate(-38.3385 323.558 243.558)'),
(31, NULL, 'B', 'D', '31', 3500, NULL, NULL, NULL, NULL, 366.558, 243.558, 12.5, 'rotate(-38.3385 366.558 243.558)'),
(32, NULL, 'B', 'D', '32', 3500, NULL, NULL, NULL, NULL, 410.558, 245.558, 12.5, 'rotate(-38.3385 410.558 245.558)'),
(33, NULL, 'B', 'D', '33', 3500, NULL, NULL, NULL, NULL, 448.558, 254.558, 12.5, 'rotate(-38.3385 448.558 254.558)'),
(34, NULL, 'B', 'E', '34', 3500, NULL, NULL, NULL, NULL, 266.776, 217.021, 12.5, 'rotate(-38.3385 266.776 217.021)'),
(35, NULL, 'B', 'E', '35', 3500, NULL, NULL, NULL, NULL, 305.558, 208.558, 12.5, 'rotate(-38.3385 305.558 208.558)'),
(36, NULL, 'B', 'E', '36', 3500, NULL, NULL, NULL, NULL, 342.558, 202.558, 12.5, 'rotate(-38.3385 342.558 202.558)'),
(37, NULL, 'B', 'E', '37', 3500, NULL, NULL, NULL, NULL, 385.558, 203.558, 12.5, 'rotate(-38.3385 385.558 203.558)'),
(38, NULL, 'B', 'E', '38', 3500, NULL, NULL, NULL, NULL, 423.558, 208.558, 12.5, 'rotate(-38.3385 423.558 208.558)'),
(39, NULL, 'B', 'E', '39', 3500, NULL, NULL, NULL, NULL, 459.558, 218.558, 12.5, 'rotate(-38.3385 459.558 218.558)'),

(40, NULL, 'C', 'A', '40', 2200, NULL, NULL, NULL, NULL, 203.139, 438.872, 12.5, 'rotate(-76.0885 203.139 438.872)'),
(41, NULL, 'C', 'A', '41', 2200, NULL, NULL, NULL, NULL, 222.139, 411.139, 12.5, 'rotate(-76.0885 222.139 411.139)'),
(42, NULL, 'C', 'A', '42', 2200, NULL, NULL, NULL, NULL, 247.139, 390.139, 12.5, 'rotate(-76.0885 247.139 390.139)'),
(43, NULL, 'C', 'A', '43', 2200, NULL, NULL, NULL, NULL, 277.139, 373.872, 12.5, 'rotate(-76.0885 277.139 373.872)'),
(44, NULL, 'C', 'B', '44', 2200, NULL, NULL, NULL, NULL, 174.139, 417.872, 12.5, 'rotate(-76.0885 174.139 417.872)'),
(45, NULL, 'C', 'B', '45', 2200, NULL, NULL, NULL, NULL, 199.139, 385.139, 12.5, 'rotate(-76.0885 199.139 385.139)'),
(46, NULL, 'C', 'B', '46', 2200, NULL, NULL, NULL, NULL, 228.139, 359.139, 12.5, 'rotate(-76.0885 228.139 359.139)'),
(47, NULL, 'C', 'B', '47', 2200, NULL, NULL, NULL, NULL, 262.139, 339.872, 12.5, 'rotate(-76.0885 262.139 339.872)'),
(48, NULL, 'C', 'C', '48', 2200, NULL, NULL, NULL, NULL, 143.139, 396.872, 12.5, 'rotate(-76.0885 143.139 396.872)'),
(49, NULL, 'C', 'C', '49', 2200, NULL, NULL, NULL, NULL, 166.139, 367.139, 12.5, 'rotate(-76.0885 166.139 367.139)'),
(50, NULL, 'C', 'C', '50', 2200, NULL, NULL, NULL, NULL, 190.139, 343.139, 12.5, 'rotate(-76.0885 190.139 343.139)'),
(51, NULL, 'C', 'C', '51', 2200, NULL, NULL, NULL, NULL, 217.139, 321.139, 12.5, 'rotate(-76.0885 217.139 321.139)'),
(52, NULL, 'C', 'C', '52', 2200, NULL, NULL, NULL, NULL, 249.139, 305.872, 12.5, 'rotate(-76.0885 249.139 305.872)'),
(53, NULL, 'C', 'D', '53', 2200, NULL, NULL, NULL, NULL, 113.139, 375.872, 12.5, 'rotate(-76.0885 113.139 375.872)'),
(54, NULL, 'C', 'D', '54', 2200, NULL, NULL, NULL, NULL, 138.139, 346.139, 12.5, 'rotate(-76.0885 138.139 346.139)'),
(55, NULL, 'C', 'D', '55', 2200, NULL, NULL, NULL, NULL, 165.139, 319.139, 12.5, 'rotate(-76.0885 165.139 319.139)'),
(56, NULL, 'C', 'D', '56', 2200, NULL, NULL, NULL, NULL, 199.139, 293.139, 12.5, 'rotate(-76.0885 199.139 293.139)'),
(57, NULL, 'C', 'D', '57', 2200, NULL, NULL, NULL, NULL, 237.139, 271.872, 12.5, 'rotate(-76.0885 237.139 271.872)'),
(58, NULL, 'C', 'E', '58', 2200, NULL, NULL, NULL, NULL, 85.1386, 355.139, 12.5, 'rotate(-76.0885 85.1386 355.139)'),
(59, NULL, 'C', 'E', '59', 2200, NULL, NULL, NULL, NULL, 107.139, 325.139, 12.5, 'rotate(-76.0885 107.139 325.139)'),
(60, NULL, 'C', 'E', '60', 2200, NULL, NULL, NULL, NULL, 131.139, 298.139, 12.5, 'rotate(-76.0885 131.139 298.139)'),
(61, NULL, 'C', 'E', '61', 2200, NULL, NULL, NULL, NULL, 160.139, 274.139, 12.5, 'rotate(-76.0885 160.139 274.139)'),
(62, NULL, 'C', 'E', '62', 2200, NULL, NULL, NULL, NULL, 190.139, 253.139, 12.5, 'rotate(-76.0885 190.139 253.139)'),
(63, NULL, 'C', 'E', '63', 2200, NULL, NULL, NULL, NULL, 223.139, 238.139, 12.5, 'rotate(-76.0885 223.139 238.139)'),

(64, NULL, 'D', 'A', '64', 2200, NULL, NULL, NULL, NULL, 454.5, 374.5, 12.5, NULL),
(65, NULL, 'D', 'A', '65', 2200, NULL, NULL, NULL, NULL, 481.5, 391.5, 12.5, NULL),
(66, NULL, 'D', 'A', '66', 2200, NULL, NULL, NULL, NULL, 507.5, 414.5, 12.5, NULL),
(67, NULL, 'D', 'A', '67', 2200, NULL, NULL, NULL, NULL, 527.757, 438.152, 12.5, 'rotate(-1.19185 527.757 438.152)'),
(68, NULL, 'D', 'B', '68', 2200, NULL, NULL, NULL, NULL, 466.5, 339.5, 12.5, NULL),
(69, NULL, 'D', 'B', '69', 2200, NULL, NULL, NULL, NULL, 500.5, 360.5, 12.5, NULL),
(70, NULL, 'D', 'B', '70', 2200, NULL, NULL, NULL, NULL, 527.5, 384.5, 12.5, NULL),
(71, NULL, 'D', 'B', '71', 2200, NULL, NULL, NULL, NULL, 557.314, 416.533, 12.5, 'rotate(-1.19185 557.314 416.533)'),
(72, NULL, 'D', 'C', '72', 2200, NULL, NULL, NULL, NULL, 478.5, 304.5, 12.5, NULL),
(73, NULL, 'D', 'C', '73', 2200, NULL, NULL, NULL, NULL, 507.5, 324.5, 12.5, NULL),
(74, NULL, 'D', 'C', '74', 2200, NULL, NULL, NULL, NULL, 535.5, 347.5, 12.5, NULL),
(75, NULL, 'D', 'C', '75', 2200, NULL, NULL, NULL, NULL, 560.5, 372.5, 12.5, NULL),
(76, NULL, 'D', 'C', '76', 2200, NULL, NULL, NULL, NULL, 586.871, 394.913, 12.5, 'rotate(-1.19185 586.871 394.913)'),
(77, NULL, 'D', 'D', '77', 2200, NULL, NULL, NULL, NULL, 491.5, 269.5, 12.5, NULL),
(78, NULL, 'D', 'D', '78', 2200, NULL, NULL, NULL, NULL, 527.5, 290.5, 12.5, NULL),
(79, NULL, 'D', 'D', '79', 2200, NULL, NULL, NULL, NULL, 561.5, 317.5, 12.5, NULL),
(80, NULL, 'D', 'D', '80', 2200, NULL, NULL, NULL, NULL, 587.5, 345.5, 12.5, NULL),
(81, NULL, 'D', 'D', '81', 2200, NULL, NULL, NULL, NULL, 614.427, 373.335, 12.5, 'rotate(-1.19185 614.427 373.335)'),
(82, NULL, 'D', 'E', '82', 2200, NULL, NULL, NULL, NULL, 504.5, 234.5, 12.5, NULL),
(83, NULL, 'D', 'E', '83', 2200, NULL, NULL, NULL, NULL, 539.5, 250.5, 12.5, NULL),
(84, NULL, 'D', 'E', '84', 2200, NULL, NULL, NULL, NULL, 569.5, 271.5, 12.5, NULL),
(85, NULL, 'D', 'E', '85', 2200, NULL, NULL, NULL, NULL, 595.5, 296.5, 12.5, NULL),
(86, NULL, 'D', 'E', '86', 2200, NULL, NULL, NULL, NULL, 618.5, 324.5, 12.5, NULL),
(87, NULL, 'D', 'E', '87', 2200, NULL, NULL, NULL, NULL, 641.986, 351.757, 12.5, 'rotate(-1.19185 641.986 351.757)'),

(88, NULL, 'E', 'A', '88', 1520, NULL, NULL, NULL, NULL, 39.5, 284.5, 12.5, NULL),
(89, NULL, 'E', 'A', '89', 1520, NULL, NULL, NULL, NULL, 72.5, 259.5, 12.5, NULL),
(90, NULL, 'E', 'A', '90', 1520, NULL, NULL, NULL, NULL, 108.5, 233.5, 12.5, NULL),
(91, NULL, 'E', 'A', '91', 1520, NULL, NULL, NULL, NULL, 146.5, 212.5, 12.5, NULL),
(92, NULL, 'E', 'A', '92', 1520, NULL, NULL, NULL, NULL, 185.5, 193.5, 12.5, NULL),
(93, NULL, 'E', 'A', '93', 1520, NULL, NULL, NULL, NULL, 227.5, 177.5, 12.5, NULL),
(94, NULL, 'E', 'A', '94', 1520, NULL, NULL, NULL, NULL, 272.5, 164.5, 12.5, NULL),
(95, NULL, 'E', 'A', '95', 1520, NULL, NULL, NULL, NULL, 317.5, 152.5, 12.5, NULL),
(96, NULL, 'E', 'A', '96', 1520, NULL, NULL, NULL, NULL, 365.5, 148.5, 12.5, NULL),
(97, NULL, 'E', 'A', '97', 1520, NULL, NULL, NULL, NULL, 413.5, 152.5, 12.5, NULL),
(98, NULL, 'E', 'A', '98', 1520, NULL, NULL, NULL, NULL, 461.5, 164.5, 12.5, NULL),
(99, NULL, 'E', 'A', '99', 1520, NULL, NULL, NULL, NULL, 503.5, 177.5, 12.5, NULL),
(100, NULL, 'E', 'A', '100', 1520, NULL, NULL, NULL, NULL, 545.5, 193.5, 12.5, NULL),
(101, NULL, 'E', 'A', '101', 1520, NULL, NULL, NULL, NULL, 584.5, 212.5, 12.5, NULL),
(102, NULL, 'E', 'A', '102', 1520, NULL, NULL, NULL, NULL, 622.5, 233.5, 12.5, NULL),
(103, NULL, 'E', 'A', '103', 1520, NULL, NULL, NULL, NULL, 658.5, 259.5, 12.5, NULL),
(104, NULL, 'E', 'A', '104', 1520, NULL, NULL, NULL, NULL, 691.5, 284.5, 12.5, NULL),
(105, NULL, 'E', 'B', '105', 1520, NULL, NULL, NULL, NULL, 37.5, 224.5, 12.5, NULL),
(106, NULL, 'E', 'B', '106', 1520, NULL, NULL, NULL, NULL, 70.5, 199.5, 12.5, NULL),
(107, NULL, 'E', 'B', '107', 1520, NULL, NULL, NULL, NULL, 106.5, 173.5, 12.5, NULL),
(108, NULL, 'E', 'B', '108', 1520, NULL, NULL, NULL, NULL, 144.5, 152.5, 12.5, NULL),
(109, NULL, 'E', 'B', '109', 1520, NULL, NULL, NULL, NULL, 183.5, 133.5, 12.5, NULL),
(110, NULL, 'E', 'B', '110', 1520, NULL, NULL, NULL, NULL, 225.5, 117.5, 12.5, NULL),
(111, NULL, 'E', 'B', '111', 1520, NULL, NULL, NULL, NULL, 270.5, 104.5, 12.5, NULL),
(112, NULL, 'E', 'B', '112', 1520, NULL, NULL, NULL, NULL, 315.5, 92.5, 12.5, NULL),
(113, NULL, 'E', 'B', '113', 1520, NULL, NULL, NULL, NULL, 363.5, 88.5, 12.5, NULL),
(114, NULL, 'E', 'B', '114', 1520, NULL, NULL, NULL, NULL, 411.5, 92.5, 12.5, NULL),
(115, NULL, 'E', 'B', '115', 1520, NULL, NULL, NULL, NULL, 456.5, 104.5, 12.5, NULL),
(116, NULL, 'E', 'B', '116', 1520, NULL, NULL, NULL, NULL, 501.5, 117.5, 12.5, NULL),
(117, NULL, 'E', 'B', '117', 1520, NULL, NULL, NULL, NULL, 543.5, 133.5, 12.5, NULL),
(118, NULL, 'E', 'B', '118', 1520, NULL, NULL, NULL, NULL, 582.5, 152.5, 12.5, NULL),
(119, NULL, 'E', 'B', '119', 1520, NULL, NULL, NULL, NULL, 620.5, 173.5, 12.5, NULL),
(120, NULL, 'E', 'B', '120', 1520, NULL, NULL, NULL, NULL, 656.5, 199.5, 12.5, NULL),
(121, NULL, 'E', 'B', '121', 1520, NULL, NULL, NULL, NULL, 689.5, 224.5, 12.5, NULL),
(122, NULL, 'E', 'C', '122', 1520, NULL, NULL, NULL, NULL, 37.5, 165.5, 12.5, NULL),
(123, NULL, 'E', 'C', '123', 1520, NULL, NULL, NULL, NULL, 70.5, 140.5, 12.5, NULL),
(124, NULL, 'E', 'C', '124', 1520, NULL, NULL, NULL, NULL, 106.5, 114.5, 12.5, NULL),
(125, NULL, 'E', 'C', '125', 1520, NULL, NULL, NULL, NULL, 144.5, 93.5, 12.5, NULL),
(126, NULL, 'E', 'C', '126', 1520, NULL, NULL, NULL, NULL, 183.5, 74.5, 12.5, NULL),
(127, NULL, 'E', 'C', '127', 1520, NULL, NULL, NULL, NULL, 225.5, 58.5, 12.5, NULL),
(128, NULL, 'E', 'C', '128', 1520, NULL, NULL, NULL, NULL, 270.5, 45.5, 12.5, NULL),
(129, NULL, 'E', 'C', '129', 1520, NULL, NULL, NULL, NULL, 315.5, 33.5, 12.5, NULL),
(130, NULL, 'E', 'C', '130', 1520, NULL, NULL, NULL, NULL, 363.5, 29.5, 12.5, NULL),
(131, NULL, 'E', 'C', '131', 1520, NULL, NULL, NULL, NULL, 411.5, 33.5, 12.5, NULL),
(132, NULL, 'E', 'C', '132', 1520, NULL, NULL, NULL, NULL, 456.5, 45.5, 12.5, NULL),
(133, NULL, 'E', 'C', '133', 1520, NULL, NULL, NULL, NULL, 501.5, 58.5, 12.5, NULL),
(134, NULL, 'E', 'C', '134', 1520, NULL, NULL, NULL, NULL, 543.5, 74.5, 12.5, NULL),
(135, NULL, 'E', 'C', '135', 1520, NULL, NULL, NULL, NULL, 582.5, 93.5, 12.5, NULL),
(136, NULL, 'E', 'C', '136', 1520, NULL, NULL, NULL, NULL, 620.5, 114.5, 12.5, NULL),
(137, NULL, 'E', 'C', '137', 1520, NULL, NULL, NULL, NULL, 656.5, 140.5, 12.5, NULL),
(138, NULL, 'E', 'D', '138', 1520, NULL, NULL, NULL, NULL, 689.5, 165.5, 12.5, NULL);
-- --------------------------------------------------------

--
-- 資料表結構 `user_notification`
--

CREATE TABLE `user_notification` (
  `id` int NOT NULL,
  `member_id` int DEFAULT NULL,
  `notification_id` int DEFAULT NULL,
  `isread` tinyint(1) NOT NULL DEFAULT '0',
  `accept_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `user_notification`
--

INSERT INTO `user_notification` (`id`, `member_id`, `notification_id`, `isread`, `accept_time`) VALUES
(1, 36, 2, 0, NULL),
(2, 4, 4, 0, NULL),
(3, 20, 5, 0, NULL),
(4, 17, 4, 0, NULL),
(5, 42, 7, 0, NULL),
(6, 42, 2, 0, NULL);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `aclass`
--
ALTER TABLE `aclass`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`actid`),
  ADD KEY `activity_class` (`class`),
  ADD KEY `artist_id` (`artist_id`);

--
-- 資料表索引 `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `event_artists`
--
ALTER TABLE `event_artists`
  ADD PRIMARY KEY (`eaid`),
  ADD KEY `artist_id` (`artist_id`),
  ADD KEY `event_id` (`event_id`);

--
-- 資料表索引 `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

--
-- 資料表索引 `markets`
--
ALTER TABLE `markets`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `nclass`
--
ALTER TABLE `nclass`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `noti_class` (`noti_class`);

--
-- 資料表索引 `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `member_id` (`member_id`);

--
-- 資料表索引 `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activitie_id` (`activitie_id`);

--
-- 資料表索引 `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`tid`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- 資料表索引 `user_notification`
--
ALTER TABLE `user_notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `user_notification_ibfk_2` (`notification_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `aclass`
--
ALTER TABLE `aclass`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `activity`
--
ALTER TABLE `activity`
  MODIFY `actid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_artists`
--
ALTER TABLE `event_artists`
  MODIFY `eaid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `markets`
--
ALTER TABLE `markets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `nclass`
--
ALTER TABLE `nclass`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ticket`
--
ALTER TABLE `ticket`
  MODIFY `tid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `event_artists`
--
ALTER TABLE `event_artists`
  ADD CONSTRAINT `event_artists_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`),
  ADD CONSTRAINT `event_artists_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `activity` (`actid`);

--
-- 資料表的限制式 `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`);

--
-- 資料表的限制式 `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`noti_class`) REFERENCES `nclass` (`id`);

--
-- 資料表的限制式 `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_3` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- 資料表的限制式 `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`activitie_id`) REFERENCES `activity` (`actid`);

--
-- 資料表的限制式 `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`actid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
