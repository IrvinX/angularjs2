export class Player {
	league_id: number;      	//联赛ID
 	season_id: number;      	//赛季ID
 	team_id: number;	        //球队ID
 	captain: number;	        //是否队长(1-是，2-否)
 	injury:	number;	            //是否受伤(1-受伤，2-未受伤)
 	team_name: String;	        //球队名称
 	player_id: number;	        //球员ID
 	name: String;	            //中文全称(当字段值为null时是指这个球员的英文名还没有被翻译,建议用英文名暂时代替)
 	known_name:	String;	        //中文短名
 	position: number;	        //位置	 0 => '未知',1 => '守门员',2 => '后卫',3 => '中场',4 => '前锋',5 => '替补',6 => '中锋',7 => '边后卫',8 => '中后卫',9 => '后腰',10 => '前腰',11 => '中前卫',12 => '影子前锋',13 => '边锋',14 => '翼卫',
 	name_en: String;	        //英文全称
 	known_name_en: String;  	//英文短名
 	birth_date:	String; 	    //出生日期
 	age: number;	            //年龄
 	first_nationality: String;	//第一个国籍
 	weight:	number;	            //体重
 	height:	number;	            //身高
 	jersey_num: number;	        //球衣号码
 	real_position: number;	    //真正的位置	 0 => '未知',1 => '守门员',2 => '后卫',3 => '中场',4 => '前锋',5 => '替补',6 => '中锋',7 => '边后卫',8 => '中后卫',9 => '后腰',10 => '前腰',11 => '中前卫',12 => '影子前锋',13 => '边锋',14 => '翼卫',
 	real_position_side: number;	//real position side	(未知=>0,左=>1,右=>2,中/右=>3,中=>4,左/中/右=>5,左/中=>6,左/右=>7)
 	join_date: String;	        //加入日期
 	country: String;	        //国家
 	preferred_foot: number;	    //惯用脚	未知=0， 左脚=1， 右脚=2， 双脚=3
 	worth: number;	            //身价(单位:万欧,此身价是运营商手动更新,请以market_value为准)
 	description: String;	    //简介
 	image_86x120_url: String;	//图片地址
 	image_130x180_url: String;	//图片地址
 	market_value: number;	    //球员身价（货币：英镑;单位：千）
 	contract_until: String;	    //合同到期时间
 	detailed_position: String	//球员位置	"{"main_position":{"type":9},"side_position":[{"type":11},{"type":13}]}"main_position代表经常踢的位置 side_position代表不常踢的位置  
}	