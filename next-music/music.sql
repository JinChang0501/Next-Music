-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: music_project
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aclass`
--

DROP TABLE IF EXISTS `aclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aclass` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aclass`
--

LOCK TABLES `aclass` WRITE;
/*!40000 ALTER TABLE `aclass` DISABLE KEYS */;
INSERT INTO `aclass` VALUES (1,'concert'),(2,'music festival');
/*!40000 ALTER TABLE `aclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `actid` int NOT NULL AUTO_INCREMENT,
  `activity_class` int DEFAULT NULL,
  `activity_name` varchar(100) NOT NULL,
  `a_date` date NOT NULL,
  `a_time` time NOT NULL,
  `location` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `descriptions` text,
  `organizer` varchar(100) NOT NULL,
  `artist_id` int DEFAULT NULL,
  `picture` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`actid`),
  KEY `activity_class` (`activity_class`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`activity_class`) REFERENCES `aclass` (`id`),
  CONSTRAINT `activities_ibfk_2` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,1,'一生到底 One Life, One Shot','2024-06-15','19:30:00','臺北流行音樂中心','台北市南港區市民大道8段99號','一生到底 One Life, One Shot人生像場一鏡到底的電影，時間不曾為誰停下，無法倒轉重來、也無法按下暫停。 \r\nLet’s keep rolling!不斷前進的過程中，最珍貴的便是每次聚在一起就充滿能量，很多事情一時沒有答案，至少、你有滅火器的音樂可以作伴。人生keep rolling的BGM，讓滅火器陪你，一生到底。','火氣音樂',1,'fireextp.jpeg'),(2,1,'The Yussef Dayes Experience - Live in Taipei','2024-07-25','20:00:00','Legacy Taipei','台北市中正區八德路一段1號華山1914創意文化園區中5A館','南倫敦出生的 Yussef Dayes，合成一系列來自南半球、西非到加勒比海和南美洲等令人眼花繚亂的聲音和節奏，他的表演融合了精湛的技術、強烈的激情和原始的情感，更以突破界限的音樂風景吸引全世界的樂迷觀眾，在倫敦當代爵士樂壇中占有重要地位。\nYussef Dayes 4歲就開始了他的音樂生涯，10歲從師 Billy Cobham（爵士巨人 Miles Davis 鼓手、Mahavishnu Orchestra 成員），和兄弟及朋友們組成樂團 United Vibrations，2011年發行《Galaxies Not Ghettos》，當時的 Yussef Dayes 只有16歲。儘管後來以 Kamaal Williams 組成的 Yussef Kamaal、以及和 Tom Misch 合作專輯《What Kinda Music》聲名大噪，Yussef Dayes 在2023年發行個人首張專輯《Black Classical Music》，融合爵士樂、雷鬼與嘻哈，邀來 Masego、Chronixx、Jamiliah Barry、Tom Misch 等人合作，獲得全英音樂獎（BRIT Awards）「最佳新人」「最佳另類／搖滾藝人」兩項年度提名。','Young Team Productions',1,'0725_Yussef Dayes.jpg'),(3,1,'10CM演唱會2024台北站','2024-09-06','19:00:00','Zepp New Taipei','新北市新莊區新北大道四段3號8樓','10CM在今年1月推出單曲’5.5 소년(少年)’，而4月25日發布全新單曲 5.6 ’너랑 밤새고 싶어(Late Night Walk)‘緩慢而甜蜜的唱出了戀情萌芽的羞澀與喜悅，近期甫創下收視紀錄的韓劇《淚之女王》中，10CM的聲音也讓電視劇大放異彩，過去半年內不斷推出作品的10CM將從7月開始於亞洲各國帶來精彩的演出。','LA RUE 文創設計',2,'10cm.jpg'),(4,1,'aespa台北演唱會2024','2024-08-10','19:00:00','國立體育大學綜合體育館(林口體育館)','桃園市龜山區文化一路250號','aespa出道四年首次正式來台北開專場演唱會，將於8月10號在林口體育館舉行。自從今年一月在台北舉行過專輯簽售會和受邀參加科技公司商演後，台北的MY對aespa來台北舉辦演唱會的呼聲越發高漲，在之後無預警公布的世界巡演城市名單中台北赫然在列，讓台北粉絲又驚又喜，希望演唱會快點到來。\naespa由四名成員Karina、Giselle、Winter、Ningning組成，自出道以來就以獨特的世界觀、前衛的團體概念，以及超強的舞台魅力，收穫眾多粉絲的心。她們在Youtube上每首MV的最低觀看次數都超過1億，是當代超人氣女團。\naespa在時尚方面也非常出色，瑞士奢華珠寶Chopard、義大利Versace、美國Ralph Lauren等世界知名品牌也選擇aespa團體及其成員作為該品牌的宣傳大使和代言人。\n這次台北場的演出日剛好是七夕情人節，在這個充滿粉色泡泡的日子裡，不知道成員們會給台北粉絲們帶來什麼樣的驚喜呢! 台北的MY們，八月一定要來現場和aespa一起創造幸福的回憶！','iMe TW',3,'aespa.jpg'),(5,1,'2024 Energy《一觸即發》台北演唱會','2024-07-27','19:30:00','台北小巨蛋','臺北市松山區南京東路4段2號','招牌發電｜經典回憶殺唱個夠\n帶你走進音樂回憶殺，首首都是陪伴人生的迷人觸景，不只「放手」、「多愛我一天」、「某年某月某一天」、「Come On」、「無懈可擊」，承諾過「永遠不說再見」的Energy，現在實現諾言，再度因你而聚，為你而跳。\n全面放電｜天王天后御用總監 打造最大夜店 \n潮流舞曲製造機音樂總監 Starr Chen 陳星翰，全新改編經典歌曲，將音樂能量觸電、發電、放電，音浪電力無限激盪，震撼台北小巨蛋！\n天王天后御用舞蹈總監林大鈞，炸裂編舞跨年代舞風大精華！舞曲全場炸翻最大夜店！\n零距離觸電｜天地對立光柱 巨型地面Led延伸舞台\n演唱會製作魔法團隊必應創造，訂製天地對立移動巨型異變光柱、巨型地面Led延伸舞台，近距離與你接觸！重磅打造超升級超大型的動感Party！\n記憶充電｜橫跨街舞世代挑動舞感神經 \n睽違22年重返當年，結合跨世代舞曲大招，當累積的能量重新匯集，走過分合 Energy 再衝一次，一起共寫屬於我們的新傳奇！','用心音樂',5,'energy.jpg'),(6,1,'Travis Japan World Tour 2024 Road to A','2024-09-03','20:00:00','Zepp New Taipei','新北市新莊區新北大道四段3號8樓','Travis Japan於2012年由麥可傑克森的編舞師Travis Payne所舉辦的徵選會中選出的成員所組成，是一支擁有強大舞蹈、表演實力的七人團體。\nTravis Japan曾參與舞台劇《虎者-NINJAPAN-》演出並擔任重要角色。2020年於可容納一萬七千人的橫濱體育場連續舉辦三場演出，門票全數售罄，2021年即在日本12個城市展開全國巡演《IMAGE NATION》。\n2022年3月，成員們為了精進自身能力，前往美國洛杉磯留學，留學期間參加了世界最大規模的舞蹈比賽「World of Dance」，以及美國NBC播出的指標性選秀節目「美國達人秀」，展現出他們精湛的舞蹈技巧，也成為了他們出道的契機。備受高度期待的首支主打單曲《JUST DANCE!》MV不但於YouTube觀看次數衝破千萬，也是J-POP史上首位以出道曲強勢登上告示牌美國除外全球單曲榜第五名的團體，此曲MV在YouTube觀看次數已突破千萬次。\n以首張專輯《Road to A》為題，不僅已在日本完成全國巡迴演唱會，吸引約31萬人參與，如今更宣布將開啟首次世界巡迴演唱會《Travis Japan World Tour 2024 Road to A》，要向世界展現他們最精彩、吸睛的舞蹈魅力！','大鴻藝術BIG ART',4,'Travis_Japan.jpeg'),(7,1,'2024 BTOB FAN-CON [OUR DREAM] in TAIPEI','2024-06-28','19:30:00','TICC台北國際會議中心','台北市信義區信義路五段一號','等了近六年！韓流三代團BTOB徐恩光、李旼赫、任炫植、PENIEL宣布6/29來台！\n很會唱、很會跳還很放閃！BTOB 終於要來啦！\n距離上次2018/9/8來台舉辦「BTOB TIME -THIS IS US」演唱會後，Melody（官粉名）等了近六年，終於要在6/29（六）見到韓流人氣實力三代團BTOB的四帥成員徐恩光、李旼赫、任炫植、PENIEL於TICC台北國際會議中心舉辦「2024 BTOB FAN-CON [OUR DREAM] in TAIPEI」！','SHOW Office Entertainment.co.ltd',6,'BTOB.jpeg'),(8,1,'小男孩樂團〔老闆！到底行不行？〕','2024-06-30','18:00:00','Zepp New Taipei','新北市新莊區新北大道四段3號8樓','是勞模們迷茫徬徨的職涯課題\n是小男孩拒絕世故的搖滾初心','滾石唱片',7,'LittleBoy.JPG'),(9,1,'血肉果汁機2024建宮蓋廟-宇宙預言','2024-07-27','19:30:00','臺北流行音樂中心','台北市南港區市民大道8段99號','宮廟\n不僅是多重領域大門，也是意識流的集合中心；\n宮廟\n不僅建造在地球上，也建造在太陽系八大行星衛星裡。\n令人驚奇的是\n太陽系邊界守門行星冥王星本身就是一座漂浮的宮廟行星。\n為什麼太陽系裏遍佈宮廟？\n是古地球人得到神仙的旨意、神仙的法力，而建宮蓋廟於整個太陽系？\n還是太陽系的古生命對於信仰有共識？\n我們看到的不只是過去，而是未來。\n2154年9大行星及衛星出現鬧鬼附身現象\n2159年正式進入「交由撒旦統治太陽系1000年」。\n3206年進入土星環發現多座破損宮廟隕石漂流在環中\n3264年發現冥王星是一座巨大的漂流宮廟\n3278年太陽系血肉宮廟網絡完成，血肉Boyz持續在宇宙中殺翻現場！','血肉果汁機',8,'flesh_temple.png'),(10,2,'霓虹綠洲音樂祭','2024-01-20','12:00:00','新店文山生態農場','新北市新店區湖子內路100號','本屆活動除了再度邀請台灣、日本、韓國、泰國等地的音樂人，更邀請到來自中國石家莊的搖滾傳奇萬能青年旅店、紐西蘭的蒙面歌手 JonathanBree、香港天團 RubberBand，以及前陣子於社群引起熱烈關注的金氏世界紀錄年紀最小的小學生DJ RINOKA，吸引了許多親子、寵物家庭族群一同參與本屆活動。此外，霓虹綠洲音樂祭還將新增主打嘻哈、新聲的舞台與「前夜祭」擴大舉辦，透過結合音樂祭、露營、市集，為北部都會區帶來冬日弛放音樂盛事！','霓虹綠洲音樂祭',9,'neon-oasis.jpg'),(11,2,'浮現祭','2024-02-24','11:00:00','清水鰲峰山運動公園','台中市清水區鰲海路70號','・2024年春假出遊首選音樂祭盛事\n・連續三年完售，台灣大型指標性音樂祭之一\n・台中海線小鎮漫遊，吃喝玩樂應有盡有\n・五周年擴大舉行，九大區域等你來解鎖\n・超過六國演出藝人即將來台獻技\n生活的紛擾及懊悔就留在那裡吧！一起邁向未知的新方向，大步踏出步伐，每一步都會有新風景的誕生，如同主視覺想傳達給每個朋友，跨過「浮現大門」後，回歸最純粹的模樣，化身為能代表你自己的角色，讓我們一起登陸小鎮的慶典吧！\n浮現祭五周年，再解鎖兩大場域，走進常民生活場景中，以及與海線當地有更多連結。未來，我們也將持續跨出海外，寫下更多新故事！如果你也想加入這段旅程，明年春天，我們相約老地方——台中清水，一個屬於我們冒險的起點。','浮現音樂藝文有限公司',10,'emerge_fest.png'),(12,2,'大港開唱','2024-03-30','11:00:00','高雄駁二藝術特區','高雄市鹽埕區大勇路1號','《大港開唱》（Megaport Festival），創立於2006年，由台北《野台開唱》（Formoz Festival：1995～2013）主辦團隊，在高雄創立。一南一北的兩大型音樂祭品牌，是台灣如今百花齊放音樂祭市場的先趨。即將於今年邁入第十五屆的大港開唱，於每年三月底舉辦，也是目前台灣最具指標性的大型戶外音樂祭活動。\n大港位於高雄港邊，獨特的海港地景和人文風情，常勾起人生中各種酸甜苦辣的回憶。也因如此，大港總是邀請有著豐富人生歷程的知名藝人及業界前輩演出，也會與新一代的樂團或藝人一起合作演出，交融出世代之間的化學效應，往往成為當年度為人津津樂道的經典現場，包括《黃金夜總會》的賀一航、《古惑仔》裡的大飛哥-黃秋生，永駐在人們青春回憶中的日本偶像酒井法子，再到唱出《心事誰人知》的沈文程和演出《花甲男孩》的三金得主蔡振南。除此之外，唱著《少年吔，安啦！》的伍佰以及後來變成姐姐的謝金燕，都曾是大港舞台的主角之一。','出日音樂股份有限公司',5,'mega-port.png'),(13,2,'火球祭','2024-11-25','11:00:00','樂天桃園棒球場','桃園市中壢區領航北路一段1號','地球人請注意\n重返愛的主場，火球祭正式回歸！\n距離上次火球祭\n已經過了 1,344 天\n但！有些記憶不管過多久還是難忘\n還記得播放著搖滾樂的旋轉木馬上，她的笑容讓我暈到現在\n人生中第一次踏上紅土、在音樂聲中滾草皮\n時不時被感動到哭得像個傻瓜、下一秒又笑得像個笨蛋\n在雨中熱舞、在太陽下的草皮曬乾自己\n直接拿著感應手環、買個外帶坐到看台區爽吃爽喝爽聽團❤\n48 小時裡不間斷的快樂\n現在回想起來都會笑，太爽了吧？有夠夢幻\n準備好重返我們的搖滾遊樂園嗎？','夥球擊股份有限公司',9,'fireball.jpg'),(14,2,'赤聲躁動音樂祭','2024-05-18','11:00:00','台中烏日觀光啤酒廠','台中市烏日區光華街1號','大膽飛天｜不純的純愛｜Y2K大爆炸\n「把糖果穿在身上、大聲唱歌，和冰友跳著最in的舞步並肩搖擺！」\n千禧年代的自由及美好令人無限懷念，\n浪漫五月，跟著赤聲戰隊來去Y2K的世界，\n一起大膽追愛，在浪漫大宇宙中自由飛翔！！','浮現音樂藝文有限公司',8,'carnival-fever.png'),(15,2,'台秋祭','2024-07-27','11:00:00','台中驛鐵道文化園區','台中市中區台灣大道一段1段1號','台中，\n是一個充滿熱情的所在，\n一個從北到南都得路過的所在，\n在這個交會點，\n無論是快樂、寂寞還是難過，我們都曾一起度過，\n就在「台秋祭」這個地方。\n說的沒錯，\n彼此都是生命中的過客，\n那既然你我都是旅客，\n就一起感受現場的一切，\n像是一種洗禮，一種契機，\n也會是一種轉運。\n感謝過去兩年的支持，\n歡迎來到，台秋轉運站。','大發展演有限公司',7,'taichill.jpg'),(16,2,'打狗祭','2024-10-07','11:00:00','高雄流行音樂中心','高雄市鹽埕區真愛路1號','遨遊在大宇宙中的外星小怪獸，受到打狗港灣的強大召喚！為了這群有夢想的人，打狗星際入口再度開啟》》》》》》\n延續去年的活動場域，以高流海音館、海風廣場為核心演出場域，加上珊瑚礁群、LIVE WAREHOUSE等五大場域，再次將愛河灣打造成充滿奇幻外星小怪獸的音樂宇宙星樂園，就是要讓樂迷與外星小怪獸一同遨遊穿梭，享受音樂的衝撞搖擺與微醺的快樂。','高雄流行音樂中心',6,'takao_rock.jpg'),(17,2,'雨山祭','2024-09-24','11:00:00','國立政治大學','台北市文山區指南路二段64號','單日雙舞台十二組卡司，一次滿足你12個願望\n雨山眾神召集中：椅子樂團、南西肯恩、庸俗救星、靈魂沙發、JADE⋯⋯等共聚一堂，邀請所有觀眾與神同慶！\n與 「 Legacy 傳 音樂展演空間 」共同合作，將聲光音響的極致饗宴帶至政大校園\n當日活動將與「小蝸牛市集」合作，精選文山區在地特色商家，並邀請各式特色攤商集結雨山祭，打造獨一無二的雨山市集','國立政治大學',5,'nccu_music_fest.jpg'),(18,2,'貴人散步音樂節','2024-11-04','10:30:00','台南市中西區多場館','台南市中西區永福路二段187號','象徵圓滿幸運的第7年，超強Lucky 7企劃陣容展現台灣音樂面貌\n來自世界各地多種面向的77組音樂人等你來挖寶\n全亞洲最多人潮、全台灣最國際化的Showcase音樂節\n在台南多個場館從古蹟到藝廊感受不同的演出體驗\n音樂演出之外還能享受城市探險的吃喝玩樂\n各式講座論壇，產業人士齊聚，與同業對話交流的好機會！\n多元跨界展演、城市漫遊旅程，還有更多結合音樂的另類體驗享受！','HO合為貴',4,'LUCfest.jpg'),(19,2,'禾火OUT','2024-09-28','11:00:00','公館水岸廣場','台北市中正區思源街1號','中秋連假首選，雙日雙舞台，超過 25 組超強卡司在公館水岸輪番演出\n最酷主題市集：從美食、飲品、到古著選物，吃喝玩買一次到位\n充氣沙發區、露天座位區，讓你躺著看坐著看都可以','PIPE Live Music',3,'chilloutfest.jpg'),(20,2,'浪人祭','2024-10-13','11:00:00','觀夕平台旁大草皮','台南市安平區金城里洲安三街','⟢　五週年 - 震撼王城 海味鉅獻　⟣\n戎克、朱印、克拉克大帆船，晚渡於海陸之城，港內寬衍，可泊千艘。\n夕陽西下，海晏捲朱旗，歷史的軌跡被鑲入城牆壁鎖，世世代代的王城，經過四個世紀的變革，帶來多族群的共生共榮。\n⟢　浪撼魚龍宅，盂懸上下天　⟣\n深海的龍嚎引萬物復甦，海底的熔岩劃開一道赤浪，鯤魚鼓浪，位於高處的龍宮，秋夜即將展開三日熱鬧晚宴，龍宮照欲醒，金黃色魚群奏起樂器，抬起「玉手箱」穿梭於赤足章魚觸手前，優美的旋律將撼動這片大海。','笨道策展有限公司',2,'Vega_Fest.jpg'),(21,2,'簡單生活節','2024-12-28','12:00:00','台北華山','台北市中正區八德路一段1號','「簡單生活 Simple Life」這個品牌，自我期許是個風格化的媒介，我們希望能夠讓創作者與熱愛者在其中相遇，並且彼此扶持成長。創作者可以從生活中萌芽，在生活中成長，直到力量足夠強大。','簡單生活節',1,'Simple_Life.jpg');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `art_name` varchar(50) DEFAULT NULL,
  `followers` int DEFAULT NULL,
  `introduction` text,
  `debutDate` datetime DEFAULT NULL,
  `album` int DEFAULT NULL,
  `albumDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'珂拉琪 Collage',57092,'性別：其他\n珂拉琪Collage DUO\n主唱 Vocal／夏子 Natsuko\n吉他 Guitar／王家權 Hunter Wang','2019-01-31 00:00:00',20,'2024-04-30 00:00:00'),(2,'海口人-Haikoupeople',257,'\"\n音樂喚醒、漂泊的詩人\n我們來自中部的海岸線\nＩＧ： haikou._official (海口人)\nＦＢ： https://www.facebook.com/haikouofficial\nＹＴ： https://www.youtube.com/channel/UCdRrd4XBDrLcGTqJQKA1vaw/about\"\n','2022-08-16 00:00:00',5,'2023-05-21 00:00:00'),(3,'LÜCY',16590,'性別：女\n\nContact：\nlucyfairygood@gmail.com\n\nMore information：\nhttps://linktr.ee/LucyLiao\n\nInstagram：\nhttps://www.instagram.com/_lucyliao_/\n\nYoutube：\nhttps://www.youtube.com/@LUCY-kc7zz\n','2020-10-20 00:00:00',6,'2023-09-22 00:00:00'),(4,'魚條 Fish Stick',3480,'生日 / 成立時間：2011 年 12 月 27 日\n\n成立於2011。','2011-12-27 00:00:00',20,'2024-03-20 00:00:00'),(5,'薄暮 Evenfall',362,'性別：男\n\n來自台中的四人編制金屬樂團「薄暮EVENFALL」，由主唱佑星、吉他手ED、貝斯手明倫和鼓手旻璋組成。創作內核融合了高張的情緒流動和撕裂旋律的唱腔，如落日餘暉燃燒著支離破碎的雲朵，音樂勾勒出每一幕畫面，編織成電影般穿透人心的作品，將你置身於浩瀚音牆之中，感受薄暮EVENFALL最純粹的音樂衝擊。\n\n2019 年底發行首張迷你專輯『State Of Mind』，並完成首次發片巡迴；2021 年發行第二張 EP『Closer To Hell』，首張中文創作專輯即將於2024年底發行。\n\n追蹤更多 薄暮/EVENFALL 資訊\nInstagram :\nhttps://www.instagram.com/evenfallTW\nFacebook :\nhttps://www.facebook.com/evenfallTW\nYoutube:\nhttps://www.youtube.com/channel/UCtUPgDWx_dsr9C0nLRuP6rQ','2022-08-31 00:00:00',4,'2024-02-22 00:00:00'),(6,'Night Keepers 守夜人',17367,'淨化系的跨領域重唱組合——守夜人 Night Keepers已於 12/12 發行全新專輯《Retune》\n\n守夜人 Night Keepers 由團長旭章、主唱稚翎、鼓手其偉及電吉他手佳穎所組成，他們用樂團及部落客的形式成團，主打療癒心靈創作，作品涵蓋了音樂、電玩、文化跨域、人工智慧以及插畫創作等各種跨界媒材，曾接連入圍了第 31 屆、第 32 屆金曲獎最佳演唱組合獎，更獲得第 24 屆台北電影獎最佳配樂獎。他們近幾年陸續參與了多項影視作品，為其量身打造戲劇主題曲，包括：電影《我的天堂城市》配樂及主題曲、電影《該死的阿修羅》配樂及片尾曲、 戲劇《四樓的天堂》片尾曲、電影《跟你老婆去旅行》插曲等，拓展了更多的聽眾面相。\n\n他們也因順流著認識各創作領域人們的焦慮，於 2023 年 12 月推出第三張專輯《Retune》，並在這張專輯裡加入天鼓和頌缽的聲音，以 Indie Pop 為骨幹，增添成人流行、情緒搖滾、電子聲響和氛圍音樂等元素，用 9 首創作與身心靈音樂頻率產生連結，期許讓每個人在慌忙的世代裡，找回日常能安穩內在價值的狀態。','2015-10-19 00:00:00',12,'2024-02-12 00:00:00'),(7,'Who Cares 胡凱兒',13985,'性別：其他\r\n\r\n“Who Cares? ”\r\n2016年4月成立於台中\r\n第三人稱單數後面動詞要加s，很重要。\r\n\r\n我們是胡凱兒。\r\n\r\n這裡可以找到我們：\r\nFacebook:www.facebook.com/whofXXkingcares\r\nInstagram:instagram.com/whocares_band\r\n\r\n演出邀約請洽：\r\n✉️ wearewhocares@gmail.com\r\n0988-851-557','2016-04-20 00:00:00',32,'2023-05-25 00:00:00'),(8,'雨國 Kingdom of Rain',1794,'雨國由主唱陳翰於2016年底組成，風格以迷幻電子舞曲為基底，加上發人省思的生存哲理歌詞，不盲目追求大眾口味，用音樂記錄生命的軌跡，創造獨有氛圍。\r\n共感、自省、坦然是建構我們音樂的裡，極簡、電子、搖滾、另類，呈現的是我們音樂的外在。\r\nhttps://linktr.ee/kingdomofrain','2016-05-06 00:00:00',12,'2022-06-06 00:00:00'),(9,'老王樂隊',43232,'民謠搖滾\r\n臉書：https://www.facebook.com/yourwomansleepwithothers/\r\n微博：https://m.weibo.cn/u/6364009385?uid=6364009385&luicode=10000011&lfid=1076036396826066\r\n歡迎私訊捐款\r\n','2015-10-27 00:00:00',17,'2022-10-25 00:00:00'),(10,'汪定中 DEW',368,'性別：男\r\n\r\nDEW（汪定中）的音樂散發一股清新的氣息，自己創作自己製作。擅長捕捉涼爽的微風和將白日夢編織成旋律，遊走在Bedroom pop、R&B、lo-fi之間。DEW於2023年發行了《NIGHTFALL》和《DAYLIGHT》兩張 EP，更舉辦了完售的專場及活躍於音樂節演出。\r\n\r\n接下來，請繫好安全帶，準備在DEW的音樂中駛向悲喜交加的公路之旅','2013-12-04 00:00:00',13,'2023-12-12 00:00:00');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect_activity`
--

DROP TABLE IF EXISTS `collect_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collect_activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `members_id` int NOT NULL,
  `activity_id` int NOT NULL,
  `activity_class` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `members_id` (`members_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `collect_activity_ibfk_1` FOREIGN KEY (`members_id`) REFERENCES `members` (`id`),
  CONSTRAINT `collect_activity_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`actid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_activity`
--

LOCK TABLES `collect_activity` WRITE;
/*!40000 ALTER TABLE `collect_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `collect_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect_artist`
--

DROP TABLE IF EXISTS `collect_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collect_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `members_id` int NOT NULL,
  `artist_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `members_id` (`members_id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `collect_artist_ibfk_1` FOREIGN KEY (`members_id`) REFERENCES `members` (`id`),
  CONSTRAINT `collect_artist_ibfk_2` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_artist`
--

LOCK TABLES `collect_artist` WRITE;
/*!40000 ALTER TABLE `collect_artist` DISABLE KEYS */;
/*!40000 ALTER TABLE `collect_artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `passwords` varchar(30) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Jin','Chang','jin@test.com','12345678','male','0912345678','2024-05-01 08:30:00'),(2,'John','Doe','johndoe@test.com','00000000','male','0912345678','2024-05-03 09:30:00'),(3,'Jane','Smith','janesmith@test.com','abcdefg','male','0923456789','2024-05-03 15:30:00'),(4,'Michael','Johnson','michaeljohnson@test.com','michael123','female','0934567890','2024-05-03 18:30:00'),(5,'Emily','Williams','emilywilliams@test.com','emily@123','female','0945678901','2024-04-03 08:30:00'),(6,'David','Brown','davidbrown@test.com','davidbrown123','male','0956789012','2024-04-03 07:25:00'),(8,'John','Doe','johndoe@gmail.com','password1','Male','0912345678','2024-05-12 17:48:27'),(9,'Jane','Smith','janesmith@yahoo.com','password2','Female','0923456789','2024-05-12 17:48:27'),(10,'Michael','Johnson','michaeljohnson@gmail.com','password3','Male','0934567890','2024-05-12 17:48:27'),(11,'Emily','Williams','emilywilliams@yahoo.com','password4','Female','0945678901','2024-05-12 17:48:27'),(12,'David','Brown','davidbrown@gmail.com','password5','Male','0956789012','2024-05-12 17:48:27'),(13,'Sarah','Jones','sarahjones@yahoo.com','password6','Female','0967890123','2024-05-12 17:48:27'),(14,'James','Garcia','jamesgarcia@gmail.com','password7','Male','0978901234','2024-05-12 17:48:27'),(15,'Jessica','Martinez','jessicamartinez@yahoo.com','password8','Female','0989012345','2024-05-12 17:48:27'),(16,'Christopher','Hernandez','christopherhernandez@gmail.com','password9','Male','0990123456','2024-05-12 17:48:27'),(17,'Ashley','Lopez','ashleylopez@yahoo.com','password10','Female','0911234567','2024-05-12 17:48:27'),(18,'Matthew','Gonzalez','matthewgonzalez@gmail.com','password11','Male','0922345678','2024-05-12 17:48:27'),(19,'Amanda','Wilson','amandawilson@yahoo.com','password12','Female','0933456789','2024-05-12 17:48:27'),(20,'Daniel','Anderson','danielanderson@gmail.com','password13','Male','0944567890','2024-05-12 17:48:27'),(21,'Melissa','Thomas','melissathomas@yahoo.com','password14','Female','0955678901','2024-05-12 17:48:27'),(22,'Andrew','Taylor','andrewtaylor@gmail.com','password15','Male','0966789012','2024-05-12 17:48:27'),(23,'Stephanie','Moore','stephaniemoore@yahoo.com','password16','Female','0977890123','2024-05-12 17:48:27'),(24,'Joshua','Jackson','joshuajackson@gmail.com','password17','Male','0988901234','2024-05-12 17:48:27'),(25,'Nicole','White','nicolewhite@yahoo.com','password18','Female','0999012345','2024-05-12 17:48:27'),(26,'Kevin','Harris','kevinharris@gmail.com','password19','Male','0910123456','2024-05-12 17:48:27'),(27,'Michelle','Clark','michelleclark@yahoo.com','password20','Female','0921234567','2024-05-12 17:48:27'),(28,'Jacob','Lewis','jacoblewis@gmail.com','password21','Male','0932345678','2024-05-12 17:48:27'),(29,'Kimberly','Lee','kimberlylee@yahoo.com','password22','Female','0943456789','2024-05-12 17:48:27'),(30,'Joseph','Walker','josephwalker@gmail.com','password23','Male','0954567890','2024-05-12 17:48:27'),(31,'Megan','Hall','meganhall@yahoo.com','password24','Female','0965678901','2024-05-12 17:48:27'),(32,'Benjamin','Young','benjaminyoung@gmail.com','password25','Male','0976789012','2024-05-12 17:48:27'),(33,'SSSHHHAAA','King','rachelking@yahoo.com','password26','Female','0987890123','2024-05-12 17:48:27');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `markets`
--

DROP TABLE IF EXISTS `markets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `markets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `market_name` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `markets`
--

LOCK TABLES `markets` WRITE;
/*!40000 ALTER TABLE `markets` DISABLE KEYS */;
INSERT INTO `markets` VALUES (1,'7-11台北小巨蛋','台北市松山區南京東路四段2號1樓'),(2,'7-11台北中崙','台北市松山區八德路三段27號'),(3,'7-11台北民有','台北市松山區民權東路三段108號'),(4,'7-11台北吉祥','台北市松山區八德路四段245巷52弄31號'),(5,'7-11台北京城','台北市松山區南京東路四段75之2號1樓'),(6,'7-11台北京復','台北市松山區光復北路11巷44號'),(7,'7-11台北延壽','台北市松山區延壽街422號'),(8,'7-11台北東吉','台北市松山區民生東路五段100號'),(9,'7-11台北中興','台北市信義區基隆路二段22號'),(10,'7-11台北世貿','台北市信義區信義路五段5號1樓'),(11,'7-11台北北府','台北市信義區松仁路162號164號1樓'),(12,'7-11台北北醫','台北市信義區吳興街252號'),(13,'7-11台北松山','台北市信義區忠孝東路五段386號'),(14,'7-11台北松高','台北市信義區基隆路一段141號1樓'),(15,'7-11台北松智','台北市信義區莊敬路325巷43號'),(16,'7-11台北大安復興','台北市大安區復興南路一段247號'),(17,'7-11台北永康','台北市大安區永康街43號'),(18,'7-11台北合維','台北市大安區四維路170巷8號1樓'),(19,'7-11台北八德','台北市中正區臨沂街1號1樓'),(20,'7-11台北中正許昌','台北市中正區許昌街26號1樓'),(21,'7-11新北台藝大','新北市板橋區大觀路一段59號'),(22,'7-11新北府中','新北市板橋區府中路82號84號1樓'),(23,'7-11新北三洋','新北市新莊區中正路677號679號'),(24,'7-11新北加州','新北市新莊區中平路81巷2號'),(25,'7-11新北宏福','新北市新莊區公園一路34號36號1樓'),(26,'7-11新北花旗','新北市新莊區中港路132巷26號'),(27,'7-11新北副都心','新北市新莊區中央路287號289號1樓'),(28,'7-11新北捷仕堡','新北市新莊區龍安路15號'),(29,'7-11新北莊和','新北市新莊區中和街34.36號'),(30,'7-11新北傑出','新北市新莊區昌平街61號63號1樓');
/*!40000 ALTER TABLE `markets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `passwords` varchar(30) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Doe','johndoe@example.com','johndoe@123','Male','0912345678','1990-05-15','123 Main St, Anytown',NULL,'2024-05-03 08:00:00'),(2,'Smith','janesmith@example.com','janesmith@123','Female','0923456789','1985-09-25','456 Oak Ave, Another City',NULL,'2024-05-03 09:30:00'),(3,'Johnson','michaeljohnson@example.com','michael123','Male','0934567890','1978-12-10','789 Elm St, Someplace',NULL,'2024-05-03 10:45:00'),(4,'Williams','emilywilliams@example.com','emily@123','Female','0945678901','1995-03-20','1010 Pine Dr, Anywhere',NULL,'2024-05-03 12:15:00'),(5,'Brown','davidbrown@example.com','davidbrown123','Male','0956789012','1982-07-05','1212 Maple Ln, Nowhere',NULL,'2024-05-03 14:00:00'),(6,'Test','test@test.com','12345678','male','0312548784','2024-05-23','Taipei',NULL,'2024-05-04 17:15:09'),(7,'two','ttwo@gmai.com','123456789','male','0911111111','2024-05-01','',NULL,'2024-05-04 17:23:19'),(10,'Doe','johndoe@gmail.com','password1','Male','0912345678','1990-01-01','123 Main St.',NULL,'2024-05-12 17:41:48'),(11,'Smith','janesmith@yahoo.com','password2','Female','0923456789','1995-02-15','456 Elm St.',NULL,'2024-05-12 17:41:48'),(12,'Johnson','michaeljohnson@gmail.com','password3','Male','0934567890','1988-07-20','789 Oak St.',NULL,'2024-05-12 17:41:48'),(13,'Williams','emilywilliams@yahoo.com','password4','Female','0945678901','1987-12-10','1011 Pine St.',NULL,'2024-05-12 17:41:48'),(14,'Brown','davidbrown@gmail.com','password5','Male','0956789012','1992-04-05','1315 Maple St.',NULL,'2024-05-12 17:41:48'),(15,'Jones','sarahjones@yahoo.com','password6','Female','0967890123','1984-09-30','1617 Cedar St.',NULL,'2024-05-12 17:41:48'),(16,'Garcia','jamesgarcia@gmail.com','password7','Male','0978901234','1982-11-25','1819 Birch St.',NULL,'2024-05-12 17:41:48'),(17,'Martinez','jessicamartinez@yahoo.com','password8','Female','0989012345','1998-06-12','2021 Walnut St.',NULL,'2024-05-12 17:41:48'),(18,'Hernandez','christopherhernandez@gmail.com','password9','Male','0990123456','1989-03-18','2223 Hickory St.',NULL,'2024-05-12 17:41:48'),(19,'Lopez','ashleylopez@yahoo.com','password10','Female','0911234567','1993-08-22','2425 Chestnut St.',NULL,'2024-05-12 17:41:48'),(20,'Gonzalez','matthewgonzalez@gmail.com','password11','Male','0922345678','1991-05-17','2627 Poplar St.',NULL,'2024-05-12 17:41:48'),(21,'Wilson','amandawilson@yahoo.com','password12','Female','0933456789','1986-02-28','2829 Sycamore St.',NULL,'2024-05-12 17:41:48'),(22,'Anderson','danielanderson@gmail.com','password13','Male','0944567890','1980-10-08','3031 Cedar St.',NULL,'2024-05-12 17:41:48'),(23,'Thomas','melissathomas@yahoo.com','password14','Female','0955678901','1997-07-03','3233 Maple St.',NULL,'2024-05-12 17:41:48'),(24,'Taylor','andrewtaylor@gmail.com','password15','Male','0966789012','1983-04-15','3435 Elm St.',NULL,'2024-05-12 17:41:48'),(25,'Moore','stephaniemoore@yahoo.com','password16','Male','0977890123','1979-12-20','3637 Oak St.',NULL,'2024-05-12 17:41:48'),(51,'Min','johndoe@example.com','12345678','Male','0984918158','2024-04-08','Test City1421324sdfsdfsdf',NULL,'2024-05-15 10:01:04'),(52,'Wick','johndoe@example.com','123456789','Male','0981581881','2024-05-01','fpigwiongnpwh',NULL,'2024-05-15 10:02:53'),(53,'Min','johndoe@example.com','test','Female','0984884848','2024-05-02','GGGGGGGGGGG',NULL,'2024-05-15 10:05:17'),(54,'Red','you@example.com','12346','Male','0910112584','2024-05-09','Test City1421324FF',NULL,'2024-05-15 10:19:01'),(55,'Min','johndoe@example.commm','13211189891','Male','0988844844','2024-05-01','GGGGGGGGGGG',NULL,'2024-05-15 10:34:17'),(56,'Photo','phpto@gmail.com','1891919','Male','0958484848','2024-05-01','Test City1421324sdfsdfsdf',NULL,'2024-05-15 11:35:46'),(57,'Photo','phpto@gmail.comasd','1891919','Male','0958484848','2024-05-01','Test City1421324sdfsdfsdf','5659e5e9ae9cd110f7ec0a108b1c7a65bbdde78c.jpg','2024-05-15 11:36:41'),(59,'Test','EORIGNRIO@RGMRPOMG.CVOWNMGIN','SOGMPOSEGMPWIEM','Male','0988181181','2024-05-01','1819191','ff22c176824a171f6c2fac38c752d8449c201106.jpg','2024-05-15 13:35:01'),(60,'Kitty','red@yahoo.com','09884848488448','Female','0984848848','2024-05-01','GGGGGGGGGGG','7281b2a14591494e6657226cbb7fa96cc84501c5.jpg','2024-05-15 15:00:14'),(61,'Name','jin@test.com','18919191','Female','0910112584','2024-05-01','Test City','d6b91e4c3b07b642e575a48e22da7cd6adeb7d38.jpg','2024-05-15 15:33:20'),(62,'Red','jin@test.comsd','191919191','Female','0910112584','2024-04-29','GGGGGGGGGGG','d2049f40d801d7c020d28c3c9749cd4323aaa539.webp','2024-05-15 15:33:51'),(63,'Kitty','jin@test.comsdgSG','SGWGWG','Male','0988888888','2024-05-08','9219199wegounweuogno','bb7d69bb4d8c10d1797322336fbffc9f5f5049ec.webp','2024-05-15 18:25:28'),(64,'Min','johndodwdwde@example.cob','919111919','Female','0984848484','0191-09-19','132dfiniin 123','c135f0403d728bb7fa576be7cd2ee1fb9c748382.webp','2024-05-16 11:45:56');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nclass`
--

DROP TABLE IF EXISTS `nclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nclass` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nclass`
--

LOCK TABLES `nclass` WRITE;
/*!40000 ALTER TABLE `nclass` DISABLE KEYS */;
INSERT INTO `nclass` VALUES (1,'artist'),(2,'activity');
/*!40000 ALTER TABLE `nclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `notid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `sent_time` datetime NOT NULL,
  `noti_class` int NOT NULL,
  PRIMARY KEY (`notid`),
  KEY `noti_class` (`noti_class`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`noti_class`) REFERENCES `nclass` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'滅火器','即將參加火球祭','2024-05-20 12:00:00',1),(2,'Energy','演唱會來襲','2024-05-20 12:00:00',1),(3,'血肉果汁機','2024全新巡迴演出','2024-05-20 12:00:00',1),(4,'雨山祭','周邊搶購','2024-05-20 12:00:00',2),(5,'台秋祭','遊玩攻略','2024-05-20 12:00:00',2),(6,'浪人祭','卡司公布','2024-05-20 12:00:00',2),(7,'霓虹綠洲音樂祭','即將參加火球祭','2024-05-20 12:00:00',2),(8,'滅火器','即將參加火球祭','2024-05-20 12:00:00',1),(9,'Energy','演唱會來襲','2024-05-20 12:00:00',1),(10,'血肉果汁機','2024全新巡迴演出','2024-05-20 12:00:00',1),(11,'雨山祭','周邊搶購','2024-05-20 12:00:00',2),(12,'台秋祭','遊玩攻略','2024-05-20 12:00:00',2),(13,'浪人祭','卡司公布','2024-05-20 12:00:00',2),(14,'霓虹綠洲音樂祭','即將參加火球祭','2024-05-20 12:00:00',2);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `price` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `discount` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,2,2000,1,NULL,1),(2,4,300,2,NULL,2),(3,3,480,1,NULL,2),(4,20,1900,1,NULL,3),(5,21,700,1,NULL,3),(6,22,700,1,NULL,3),(7,31,1500,1,NULL,4),(8,5,2100,2,NULL,5),(9,25,700,1,NULL,6),(10,5,480,1,NULL,6),(11,3,2100,1,NULL,6),(12,11,3000,1,NULL,7),(13,6,3000,1,NULL,8),(14,15,2500,2,NULL,9),(15,26,3500,1,NULL,9),(16,12,2100,1,NULL,10),(17,17,3500,1,NULL,11),(18,3,200,3,NULL,12),(19,31,1100,1,NULL,12),(20,19,3500,1,NULL,13),(21,18,3500,1,NULL,13),(22,29,1100,1,NULL,13),(23,4,300,1,NULL,13),(24,1,2100,1,NULL,14),(25,2,2100,1,NULL,14),(26,14,2100,1,NULL,14),(27,28,1100,1,NULL,15),(28,32,200,1,NULL,16),(29,8,200,1,NULL,16),(30,29,200,1,NULL,16),(31,31,200,2,NULL,16);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `market_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `market_id` (`market_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `members` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`market_id`) REFERENCES `markets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'刷卡',NULL),(2,2,'超商取貨付款',25),(3,3,'超商取貨付款',30),(4,4,'超商取貨付款',4),(5,5,'超商取貨付款',22),(6,6,'超商取貨付款',11),(7,7,'刷卡',NULL),(8,7,'刷卡',NULL),(9,7,'刷卡',NULL),(10,10,'刷卡',NULL),(11,11,'刷卡',NULL),(12,12,'刷卡',NULL),(13,13,'超商取貨付款',9),(14,14,'刷卡',NULL),(15,15,'超商取貨付款',8),(16,16,'刷卡',NULL),(17,17,'刷卡',NULL),(18,18,'刷卡',NULL),(19,19,'超商取貨付款',8),(20,20,'超商取貨付款',4),(21,21,'超商取貨付款',30),(22,22,'超商取貨付款',6),(23,23,'刷卡',NULL),(24,24,'超商取貨付款',6),(25,25,'超商取貨付款',6),(26,6,'刷卡',NULL),(27,7,'刷卡',NULL),(28,2,'刷卡',NULL),(29,2,'刷卡',NULL),(30,3,'超商取貨付款',2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(150) NOT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `purchase_quantity` int DEFAULT '1',
  `activitie_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `activitie_id` (`activitie_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`activitie_id`) REFERENCES `activities` (`actid`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'寵物嘉年華 明信片組','pet_postcard.jpg',150,1000,1),(2,'寵物嘉年華 毛毛鑰匙圈','pet_keyring-dog.jpg',200,1000,1),(3,'寵物嘉年華 毛毛鑰匙圈','pet_keyring-cat.jpg',200,1000,1),(4,'寵物嘉年華 多功能野餐籃','pet_basket.jpg',600,1000,1),(5,'寵物嘉年華 野餐墊','pet_mat.jpg',200,1000,1),(6,'台灣音樂祭 T恤','tmf_t-shirt.jpg',590,1000,2),(7,'台灣音樂祭 鑰匙圈','tmf_keyring.jpg',350,1000,2),(8,'台灣音樂祭 毛巾','tmf_towel.jpg',500,1000,2),(9,'台灣音樂祭 地毯','tmf_mat.jpg',500,1000,2),(10,'台灣音樂祭 應援手燈','tmf_lightstick.jpg',250,1000,2),(11,'台灣音樂祭 T恤','tmf_curtain.jpg',500,1000,2),(12,'台灣音樂祭 托特袋-藍','tmf_bag-blue.jpg',350,1000,2),(13,'台灣音樂祭 托特袋-粉','tmf_bag-pink.jpg',350,1000,2),(14,'台灣音樂祭 托特袋-綠','tmf_bag-green.jpg',350,1000,2),(15,'春浪-T恤','sw_t-shirt.jpg',500,1000,3),(16,'春浪-野餐墊','sw_mat.jpg',500,1000,3),(17,'春浪-毛巾','sw_towel.jpg',300,1000,3),(18,'春浪-貼紙','sw_sticker.jpg',100,1000,3),(19,'春浪-購物袋','sw_bag.jpg',300,1000,3),(20,'Bubble T恤 黑','bubble_t-shirt-black.jpg',2100,1000,4),(21,'Bubble T恤 粉','bubble_t-shirt-pink.jpg',2100,1000,4),(22,'Bubble T恤 白','bubble_t-shirt-white.jpg',2100,1000,4),(23,'Bubble hoodie 黑','bubble_hoodie-black.jpg',3000,500,4),(24,'Butterfly T恤','butterfly_t-shirt.jpg',2100,1000,5),(25,'Ellesse hoodie','ellesse_hoodie.jpg',3000,550,5),(26,'Ellesse T恤','ellesse_t-shirt.jpg',2100,1000,5),(27,'lIVE T恤','live_t-shirt.jpg',2000,1000,6),(28,'LIVE sweatshirt','live_sweatshirt.jpg',3000,550,6),(29,'lOVE T恤','love_t-shirt.jpg',2000,1000,6),(30,'lOVE hoodie','love_hoodie.jpg',3000,500,6),(31,'Fundation T恤','foundation_t-shirt.jpg',2100,900,6),(32,'Foundation hoodie','foundation_hoodie.jpg',3000,500,6);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `activities_id` int NOT NULL,
  `seat_area` varchar(50) NOT NULL,
  `seat_row` varchar(50) NOT NULL,
  `seat_number` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `members_id` int DEFAULT NULL,
  `order_num` varchar(50) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tid`),
  KEY `activities_id` (`activities_id`),
  KEY `members_id` (`members_id`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`activities_id`) REFERENCES `activities` (`actid`),
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`members_id`) REFERENCES `members` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,'A','A','1',8600,NULL,NULL,'2024-06-22 08:17:59'),(2,1,'A','A','2',8600,NULL,NULL,'2024-06-22 08:17:59'),(3,1,'A','A','3',8600,NULL,NULL,'2024-06-22 08:17:59'),(4,1,'A','A','4',8600,NULL,NULL,'2024-06-22 08:17:59'),(5,1,'A','A','5',8600,NULL,NULL,'2024-06-22 08:17:59'),(6,1,'A','B','6',8600,NULL,NULL,'2024-06-22 08:17:59'),(7,1,'A','B','7',8600,NULL,NULL,'2024-06-22 08:17:59'),(8,1,'A','B','8',8600,NULL,NULL,'2024-06-22 08:17:59'),(9,1,'A','B','9',8600,NULL,NULL,'2024-06-22 08:17:59'),(10,1,'A','B','10',8600,NULL,NULL,'2024-06-22 08:17:59'),(11,1,'A','C','11',8600,NULL,NULL,'2024-06-22 08:17:59'),(12,1,'A','C','12',8600,NULL,NULL,'2024-06-22 08:17:59'),(13,1,'A','C','13',8600,NULL,NULL,'2024-06-22 08:17:59'),(14,1,'A','C','14',8600,NULL,NULL,'2024-06-22 08:17:59'),(15,1,'A','C','15',8600,NULL,NULL,'2024-06-22 08:17:59'),(16,1,'A','D','16',8600,NULL,NULL,'2024-06-22 08:17:59'),(17,1,'A','D','17',8600,NULL,NULL,'2024-06-22 08:17:59'),(18,1,'A','D','18',8600,NULL,NULL,'2024-06-22 08:17:59'),(19,1,'A','D','19',8600,NULL,NULL,'2024-06-22 08:17:59'),(20,1,'A','D','20',8600,NULL,NULL,'2024-06-22 08:17:59'),(21,1,'A','E','21',8600,NULL,NULL,'2024-06-22 08:17:59'),(22,1,'A','E','22',8600,NULL,NULL,'2024-06-22 08:17:59'),(23,1,'A','E','23',8600,NULL,NULL,'2024-06-22 08:17:59'),(24,1,'A','E','24',8600,NULL,NULL,'2024-06-22 08:17:59'),(25,1,'A','E','25',8600,NULL,NULL,'2024-06-22 08:17:59'),(26,1,'B','A','1',6300,NULL,NULL,'2024-06-22 08:17:59'),(27,1,'B','A','2',6300,NULL,NULL,'2024-06-22 08:17:59'),(28,1,'B','A','3',6300,NULL,NULL,'2024-06-22 08:17:59'),(29,1,'B','A','4',6300,NULL,NULL,'2024-06-22 08:17:59'),(30,1,'B','A','5',6300,NULL,NULL,'2024-06-22 08:17:59'),(31,1,'B','B','6',6300,NULL,NULL,'2024-06-22 08:17:59'),(32,1,'B','B','7',6300,NULL,NULL,'2024-06-22 08:17:59'),(33,1,'B','B','8',6300,NULL,NULL,'2024-06-22 08:17:59'),(34,1,'B','B','9',6300,NULL,NULL,'2024-06-22 08:17:59'),(35,1,'B','B','10',6300,NULL,NULL,'2024-06-22 08:17:59'),(36,1,'B','C','11',6300,NULL,NULL,'2024-06-22 08:17:59'),(37,1,'B','C','12',6300,NULL,NULL,'2024-06-22 08:17:59'),(38,1,'B','C','13',6300,NULL,NULL,'2024-06-22 08:17:59'),(39,1,'B','C','14',6300,NULL,NULL,'2024-06-22 08:17:59'),(40,1,'B','C','15',6300,NULL,NULL,'2024-06-22 08:17:59'),(41,1,'B','D','16',6300,NULL,NULL,'2024-06-22 08:17:59'),(42,1,'B','D','17',6300,NULL,NULL,'2024-06-22 08:17:59'),(43,1,'B','D','18',6300,NULL,NULL,'2024-06-22 08:17:59'),(44,1,'B','D','19',6300,NULL,NULL,'2024-06-22 08:17:59'),(45,1,'B','D','20',6300,NULL,NULL,'2024-06-22 08:17:59'),(46,1,'B','E','21',6300,NULL,NULL,'2024-06-22 08:17:59'),(47,1,'B','E','22',6300,NULL,NULL,'2024-06-22 08:17:59'),(48,1,'B','E','23',6300,NULL,NULL,'2024-06-22 08:17:59'),(49,1,'B','E','24',6300,NULL,NULL,'2024-06-22 08:17:59'),(50,1,'B','E','25',6300,NULL,NULL,'2024-06-22 08:17:59'),(51,1,'C','A','1',4900,NULL,NULL,'2024-06-22 08:17:59'),(52,1,'C','A','2',4900,NULL,NULL,'2024-06-22 08:17:59'),(53,1,'C','A','3',4900,NULL,NULL,'2024-06-22 08:17:59'),(54,1,'C','A','4',4900,NULL,NULL,'2024-06-22 08:17:59'),(55,1,'C','A','5',4900,NULL,NULL,'2024-06-22 08:17:59'),(56,1,'C','B','6',4900,NULL,NULL,'2024-06-22 08:17:59'),(57,1,'C','B','7',4900,NULL,NULL,'2024-06-22 08:17:59'),(58,1,'C','B','8',4900,NULL,NULL,'2024-06-22 08:17:59'),(59,1,'C','B','9',4900,NULL,NULL,'2024-06-22 08:17:59'),(60,1,'C','B','10',4900,NULL,NULL,'2024-06-22 08:17:59'),(61,1,'C','C','11',4900,NULL,NULL,'2024-06-22 08:17:59'),(62,1,'C','C','12',4900,NULL,NULL,'2024-06-22 08:17:59'),(63,1,'C','C','13',4900,NULL,NULL,'2024-06-22 08:17:59'),(64,1,'C','C','14',4900,NULL,NULL,'2024-06-22 08:17:59'),(65,1,'C','C','15',4900,NULL,NULL,'2024-06-22 08:17:59'),(66,1,'C','D','16',4900,NULL,NULL,'2024-06-22 08:17:59'),(67,1,'C','D','17',4900,NULL,NULL,'2024-06-22 08:17:59'),(68,1,'C','D','18',4900,NULL,NULL,'2024-06-22 08:17:59'),(69,1,'C','D','19',4900,NULL,NULL,'2024-06-22 08:17:59'),(70,1,'C','D','20',4900,NULL,NULL,'2024-06-22 08:17:59'),(71,1,'C','E','21',4900,NULL,NULL,'2024-06-22 08:17:59'),(72,1,'C','E','22',4900,NULL,NULL,'2024-06-22 08:17:59'),(73,1,'C','E','23',4900,NULL,NULL,'2024-06-22 08:17:59'),(74,1,'C','E','24',4900,NULL,NULL,'2024-06-22 08:17:59'),(75,1,'C','E','25',4900,NULL,NULL,'2024-06-22 08:17:59'),(76,1,'D','A','1',3500,NULL,NULL,'2024-06-22 08:17:59'),(77,1,'D','A','2',3500,NULL,NULL,'2024-06-22 08:17:59'),(78,1,'D','A','3',3500,NULL,NULL,'2024-06-22 08:17:59'),(79,1,'D','A','4',3500,NULL,NULL,'2024-06-22 08:17:59'),(80,1,'D','A','5',3500,NULL,NULL,'2024-06-22 08:17:59'),(81,1,'D','B','6',3500,NULL,NULL,'2024-06-22 08:17:59'),(82,1,'D','B','7',3500,NULL,NULL,'2024-06-22 08:17:59'),(83,1,'D','B','8',3500,NULL,NULL,'2024-06-22 08:17:59'),(84,1,'D','B','9',3500,NULL,NULL,'2024-06-22 08:17:59'),(85,1,'D','B','10',3500,NULL,NULL,'2024-06-22 08:17:59'),(86,1,'D','C','11',3500,NULL,NULL,'2024-06-22 08:17:59'),(87,1,'D','C','12',3500,NULL,NULL,'2024-06-22 08:17:59'),(88,1,'D','C','13',3500,NULL,NULL,'2024-06-22 08:17:59'),(89,1,'D','C','14',3500,NULL,NULL,'2024-06-22 08:17:59'),(90,1,'D','C','15',3500,NULL,NULL,'2024-06-22 08:17:59'),(91,1,'D','D','16',3500,NULL,NULL,'2024-06-22 08:17:59'),(92,1,'D','D','17',3500,NULL,NULL,'2024-06-22 08:17:59'),(93,1,'D','D','18',3500,NULL,NULL,'2024-06-22 08:17:59'),(94,1,'D','D','19',3500,NULL,NULL,'2024-06-22 08:17:59'),(95,1,'D','D','20',3500,NULL,NULL,'2024-06-22 08:17:59'),(96,1,'D','E','21',3500,NULL,NULL,'2024-06-22 08:17:59'),(97,1,'D','E','22',3500,NULL,NULL,'2024-06-22 08:17:59'),(98,1,'D','E','23',3500,NULL,NULL,'2024-06-22 08:17:59'),(99,1,'D','E','24',3500,NULL,NULL,'2024-06-22 08:17:59'),(100,1,'D','E','25',3500,NULL,NULL,'2024-06-22 08:17:59'),(101,1,'E','A','1',1900,NULL,NULL,'2024-06-22 08:17:59'),(102,1,'E','A','2',1900,NULL,NULL,'2024-06-22 08:17:59'),(103,1,'E','A','3',1900,NULL,NULL,'2024-06-22 08:17:59'),(104,1,'E','A','4',1900,NULL,NULL,'2024-06-22 08:17:59'),(105,1,'E','A','5',1900,NULL,NULL,'2024-06-22 08:17:59'),(106,1,'E','B','6',1900,NULL,NULL,'2024-06-22 08:17:59'),(107,1,'E','B','7',1900,NULL,NULL,'2024-06-22 08:17:59'),(108,1,'E','B','8',1900,NULL,NULL,'2024-06-22 08:17:59'),(109,1,'E','B','9',1900,NULL,NULL,'2024-06-22 08:17:59'),(110,1,'E','B','10',1900,NULL,NULL,'2024-06-22 08:17:59'),(111,1,'E','C','11',1900,NULL,NULL,'2024-06-22 08:17:59'),(112,1,'E','C','12',1900,NULL,NULL,'2024-06-22 08:17:59'),(113,1,'E','C','13',1900,NULL,NULL,'2024-06-22 08:17:59'),(114,1,'E','C','14',1900,NULL,NULL,'2024-06-22 08:17:59'),(115,1,'E','C','15',1900,NULL,NULL,'2024-06-22 08:17:59'),(116,1,'E','D','16',1900,NULL,NULL,'2024-06-22 08:17:59'),(117,1,'E','D','17',1900,NULL,NULL,'2024-06-22 08:17:59'),(118,1,'E','D','18',1900,NULL,NULL,'2024-06-22 08:17:59'),(119,1,'E','D','19',1900,NULL,NULL,'2024-06-22 08:17:59'),(120,1,'E','D','20',1900,NULL,NULL,'2024-06-22 08:17:59'),(121,1,'E','E','21',1900,NULL,NULL,'2024-06-22 08:17:59'),(122,1,'E','E','22',1900,NULL,NULL,'2024-06-22 08:17:59'),(123,1,'E','E','23',1900,NULL,NULL,'2024-06-22 08:17:59'),(124,1,'E','E','24',1900,NULL,NULL,'2024-06-22 08:17:59'),(125,1,'E','E','25',1900,NULL,NULL,'2024-06-22 08:17:59');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_notification`
--

DROP TABLE IF EXISTS `user_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `members_id` int DEFAULT NULL,
  `notification_id` int DEFAULT NULL,
  `isread` tinyint NOT NULL DEFAULT '0',
  `accept_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `members_id` (`members_id`),
  KEY `notification_id` (`notification_id`),
  CONSTRAINT `user_notification_ibfk_1` FOREIGN KEY (`members_id`) REFERENCES `members` (`id`),
  CONSTRAINT `user_notification_ibfk_2` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`notid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_notification`
--

LOCK TABLES `user_notification` WRITE;
/*!40000 ALTER TABLE `user_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_notification` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-22 16:21:07
