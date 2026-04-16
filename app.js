// 极简网址导航 - 数据与逻辑

const DEFAULT_DATA = {
    sites: [
        { id: 1, name: '百度', desc: '搜索引擎', category: '搜索', url: 'https://www.baidu.com' },
        { id: 2, name: 'Google', desc: '搜索引擎', category: '搜索', url: 'https://www.google.com' },
        { id: 3, name: 'Bing', desc: '微软搜索引擎', category: '搜索', url: 'https://www.bing.com' },
        { id: 4, name: '淘宝', desc: '购物平台', category: '电商', url: 'https://www.taobao.com' },
        { id: 5, name: '京东', desc: '综合购物', category: '电商', url: 'https://www.jd.com' },
        { id: 6, name: '拼多多', desc: '社交电商', category: '电商', url: 'https://www.pinduoduo.com' },
        { id: 7, name: '微博', desc: '社交媒体', category: '社交', url: 'https://weibo.com' },
        { id: 8, name: '微信', desc: '即时通讯', category: '社交', url: 'https://weixin.qq.com' },
        { id: 9, name: '抖音', desc: '短视频', category: '视频', url: 'https://www.douyin.com' },
        { id: 10, name: 'B站', desc: '视频弹幕', category: '视频', url: 'https://www.bilibili.com' },
        { id: 11, name: 'YouTube', desc: '视频网站', category: '视频', url: 'https://www.youtube.com' },
        { id: 12, name: '知乎', desc: '问答社区', category: '社区', url: 'https://www.zhihu.com' },
        { id: 13, name: 'GitHub', desc: '代码托管', category: '开发', url: 'https://github.com' },
        { id: 14, name: 'Stack Overflow', desc: '技术问答', category: '开发', url: 'https://stackoverflow.com' },
        { id: 15, name: '网易云音乐', desc: '音乐播放', category: '音乐', url: 'https://music.163.com' },
        { id: 16, name: 'QQ音乐', desc: '音乐平台', category: '音乐', url: 'https://y.qq.com' },
        { id: 17, name: '小红书', desc: '生活方式', category: '社区', url: 'https://www.xiaohongshu.com' },
        { id: 18, name: '今日头条', desc: '资讯推荐', category: '资讯', url: 'https://www.toutiao.com' },
    ],
    categories: [
        { id: 1, name: '搜索', icon: '🔍' },
        { id: 2, name: '电商', icon: '🛒' },
        { id: 3, name: '社交', icon: '💬' },
        { id: 4, name: '视频', icon: '🎬' },
        { id: 5, name: '社区', icon: '🏠' },
        { id: 6, name: '开发', icon: '💻' },
        { id: 7, name: '音乐', icon: '🎵' },
        { id: 8, name: '资讯', icon: '📰' },
    ],
    favorites: [],
    visitCount: 0
};

// 密码管理
const DEFAULT_PASSWORD = 'admin'; // 默认密码

function getPassword() {
    return localStorage.getItem('web-navigator-password') || DEFAULT_PASSWORD;
}

function setPassword(password) {
    localStorage.setItem('web-navigator-password', password);
}

function verifyPassword(password) {
    return password === getPassword();
}

// 初始化密码（如果不存在）// 初始化
if (!localStorage.getItem('web-navigator-password')) {
    setPassword(DEFAULT_PASSWORD);
}

// 从教师网址导航.html导入数据
function importTeacherData() {
    const teacherSites = [
        // 科学资源
        { id: 101, name: '科普平台', desc: '校内科普视频点播平台', category: '科学资源', url: 'http://111.39.168.102:81/' },
        { id: 102, name: '生物3D模型', desc: '', category: '科学资源', url: 'https://sketchfab.com/ffishAsia-and-floraZia' },
        { id: 103, name: '虚拟实验', desc: '', category: '科学资源', url: 'https://vr.21cnjy.com/course/index#/' },
        { id: 104, name: '天地图', desc: '在线地图', category: '科学资源', url: 'https://map.tianditu.gov.cn/' },
        { id: 105, name: '中国数字科技馆', desc: '', category: '科学资源', url: 'https://www.cdstm.cn/' },
        { id: 106, name: '3D资源', desc: '3D资源', category: '科学资源', url: 'https://mozaweb.yuanlai.cn/zh/lexikon.php?cmd=getlist&let=3D&sid=BIO' },
        { id: 107, name: '科普教育', desc: '', category: '科学资源', url: 'https://basic.smartedu.cn/schoolService/kpjy/catalog' },
        { id: 108, name: '科教资源', desc: '', category: '科学资源', url: 'https://www.cyscc.org/#/resource/resourceList' },
        { id: 109, name: '虚拟科技馆', desc: '虚拟科技馆', category: '科学资源', url: 'https://xnmy.cdstm.cn/' },
        
        // AI写作
        { id: 201, name: 'deepseek官网', desc: 'deepseek官网', category: 'AI写作', url: 'https://www.deepseek.com/' },
        { id: 202, name: '墨得问题', desc: '论文写作', category: 'AI写作', url: 'https://xiezuomowenti.com/' },
        { id: 203, name: '教师AI应用手册2.0', desc: '深圳福田AI先锋队', category: 'AI写作', url: 'https://docs.qq.com/doc/DSG9SWFpjVXl3aHZ1' },
        { id: 204, name: 'Flowith AI', desc: 'NanoBananaPro.FREEforallusers.', category: 'AI写作', url: 'https://flowith.net/' },
        { id: 205, name: '飞象老师', desc: '动画、教案生成', category: 'AI写作', url: 'https://www.feixianglaoshi.com/' },
        { id: 206, name: '知达AI助教', desc: '教育智能体广场', category: 'AI写作', url: 'https://www.zida.school/' },
        { id: 207, name: 'AskManyAI', desc: '一个免费的AI超级生产力平台', category: 'AI写作', url: 'https://askmany.cn/' },
        { id: 208, name: '天工AI', desc: '', category: 'AI写作', url: 'https://www.tiangong.cn/' },
        { id: 209, name: '扣子商店', desc: '扣子智能体', category: 'AI写作', url: 'https://www.coze.cn/store/agent?cate_type=recommend' },
        { id: 210, name: '浦育平台', desc: '', category: 'AI写作', url: 'https://www.openinnolab.org.cn/pjedu/home' },
        { id: 211, name: 'AI教师知识库', desc: '', category: 'AI写作', url: 'https://uq77hpwvx7i.feishu.cn/wiki/XUSRwLa1HiDY6tkIkCpcusNdn6g' },
        { id: 212, name: '百度AI', desc: '免登录', category: 'AI写作', url: 'https://chat.baidu.com/' },
        { id: 213, name: '扣子空间', desc: '', category: 'AI写作', url: 'https://space.coze.cn/' },
        { id: 214, name: '问小白', desc: '', category: 'AI写作', url: 'https://www.wenxiaobai.com/' },
        { id: 215, name: '国家超算中心', desc: '', category: 'AI写作', url: 'https://www.scnet.cn/ui/chatbot/' },
        { id: 216, name: 'AI文档助手', desc: '', category: 'AI写作', url: 'https://docs.qq.com/ai' },
        { id: 217, name: '飞书', desc: '', category: 'AI写作', url: 'https://www.feishu.cn/' },
        { id: 218, name: '纳米搜索', desc: '', category: 'AI写作', url: 'https://www.n.cn/' },
        { id: 219, name: '腾讯元宝', desc: '', category: 'AI写作', url: 'https://yuanbao.tencent.com/' },
        { id: 220, name: '灵犀', desc: 'WPS官方deepseekR1', category: 'AI写作', url: 'https://lingxi.wps.cn/' },
        { id: 221, name: '睿云教学大模型', desc: '教师研修网旗下教学大模型', category: 'AI写作', url: 'https://ai.yanxiu.com/assistant-agents/class-teacher/ai' },
        { id: 222, name: 'Bloom', desc: '希沃AI课件助手', category: 'AI写作', url: 'https://bloom.seewo.com/' },
        { id: 223, name: '秘塔搜索', desc: '秘塔AI搜索', category: 'AI写作', url: 'https://metaso.cn/' },
        { id: 224, name: '通义千问', desc: '阿里云旗下AI', category: 'AI写作', url: 'https://www.tongyi.com/discover' },
        { id: 225, name: 'kimi.ai', desc: '', category: 'AI写作', url: 'https://kimi.moonshot.cn/' },
        { id: 226, name: '星火', desc: '科大讯飞旗下AI', category: 'AI写作', url: 'https://xinghuo.xfyun.cn/' },
        { id: 227, name: '文心一言', desc: '文心一言', category: 'AI写作', url: 'https://yiyan.baidu.com/' },
        { id: 228, name: '豆包', desc: '抖音旗下AI', category: 'AI写作', url: 'https://www.doubao.com/chat/' },
        { id: 229, name: '智普清言', desc: '智普清言', category: 'AI写作', url: 'https://chatglm.cn/main/alltoolsdetail?lang=zh' },
        
        // AI图像
        { id: 301, name: 'AI换脸', desc: '图片、视频换脸', category: 'AI图像', url: 'https://deepswapface.ai/zh-CN/' },
        { id: 302, name: 'Flowith AI', desc: 'NanoBananaPro.FREEforallusers.', category: 'AI图像', url: 'https://flowith.net/' },
        { id: 303, name: '腾讯混元3D', desc: '', category: 'AI图像', url: 'https://3d.hunyuan.tencent.com/' },
        { id: 304, name: 'Raphael AI', desc: '无限制免费生图', category: 'AI图像', url: 'https://raphael.app/zh' },
        
        // AI视频
        { id: 401, name: 'AI换脸', desc: '图片、视频换脸', category: 'AI视频', url: 'https://deepswapface.ai/zh-CN/' },
        { id: 402, name: 'VideoSeek', desc: '在线视频总结', category: 'AI视频', url: 'https://www.videoseek.ai/' },
        { id: 403, name: '海螺AI', desc: '视频、语音', category: 'AI视频', url: 'https://hailuoai.com/' },
        { id: 404, name: 'Noiz', desc: '声音克隆', category: 'AI视频', url: 'https://noiz.ai/landing' },
        { id: 405, name: '即梦', desc: '', category: 'AI视频', url: 'https://jimeng.jianying.com/' },
        { id: 406, name: '可灵', desc: '', category: 'AI视频', url: 'https://app.klingai.com/cn/' },
        
        // AI数字人
        { id: 501, name: '通义万相', desc: '免费数字人动作复刻', category: 'AI数字人', url: 'https://tongyi.aliyun.com/wan/explore' },
        { id: 502, name: '飞影数字人', desc: '', category: 'AI数字人', url: 'https://hifly.cc/' },
        { id: 503, name: '蝉镜', desc: '数字人创作', category: 'AI数字人', url: 'https://www.chanjing.cc/' },
        { id: 504, name: '腾讯智影', desc: '', category: 'AI数字人', url: 'https://zenvideo.qq.com/' },
        
        // 教学资源
        { id: 601, name: '国家智慧教育平台', desc: '国家智慧教育公共服务平台', category: '教学资源', url: 'https://www.smartedu.cn/' },
        { id: 602, name: '皖教云', desc: '皖教云', category: '教学资源', url: 'http://www.ahedu.cn' },
        { id: 603, name: '淮南智慧教育云', desc: '淮南智慧教育云平台', category: '教学资源', url: 'http://hnk12.net/' },
        { id: 604, name: '中华精品字库工程', desc: '', category: '教学资源', url: 'https://www.smartedu.cn/home/servicehall?name=%E7%B2%BE%E5%93%81%E5%AD%97%E5%BA%93%E6%9C%8D%E5%8A%A1' },
        { id: 605, name: '汉字信息服务', desc: '', category: '教学资源', url: 'https://www.smartedu.cn/home/servicehall?name=%E6%B1%89%E5%AD%97%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1' },
        { id: 606, name: '中小学信息科技教育', desc: '安徽信息科技资源下载', category: '教学资源', url: 'http://www.ahjks.cn/' },
        { id: 607, name: '立创开源硬件平台', desc: '创新案例', category: '教学资源', url: 'https://oshwhub.com/' },
        { id: 608, name: '鳍迹课件', desc: '收费', category: '教学资源', url: 'https://qij.pptx.cn/' },
        { id: 609, name: '优翼网', desc: '课件、教案免费下', category: '教学资源', url: 'https://yy.youyi800.com/web/home' },
        { id: 610, name: '深圳作业设计样例', desc: '', category: '教学资源', url: 'https://zy.szedu.cn/was5/web/search?page=1&channelid=219961&searchword=%E4%BD%9C%E4%B8%9A&keyword=%E4%BD%9C%E4%B8%9A&perpage=10&outlinepage=4' },
        { id: 611, name: '广东省2024年获奖微课', desc: '', category: '教学资源', url: 'https://srsc.gdedu.gov.cn/dnActivity/activityDetailPages?activityAreaId=1751859663382908965' },
        { id: 612, name: '广东省融合创新教学应用案例', desc: '2024年', category: '教学资源', url: 'https://srsc.gdedu.gov.cn/dnActivity/activityDetailPages?activityAreaId=1751861860510339074' },
        { id: 613, name: '河北实验说课案例', desc: '', category: '教学资源', url: 'https://syjx.mh.chaoxing.com/engine2/d/16778191/1716478/0?t=4532591&p=263550&pageId=263550&websiteId=155607&wfwfid=191864' },
        { id: 614, name: '安徽班主任基本功大赛', desc: '2021年', category: '教学资源', url: 'https://www.ahedu.cn/EduResource/index.php?app=acy&mod=ResList&act=index&acy_name=jiaoshijbg2021' },
        { id: 615, name: '安徽省作业设计大赛', desc: '2022年', category: '教学资源', url: 'https://www.ahedu.cn/EduResource/index.php?app=acy&mod=Index&act=index&acy_name=jobdesign2022' },
        { id: 616, name: '畅言智AI', desc: '人工智能教学平台', category: '教学资源', url: 'https://ai.changyan.com/' },
        { id: 617, name: '七彩课堂', desc: '课件、教案免费下载', category: '教学资源', url: 'https://www.timebook.cc/ziyuan' },
        { id: 618, name: '之江汇互联网学校', desc: '', category: '教学资源', url: 'https://szyx.zjer.cn/micro/web/internetSchool/' },
        { id: 619, name: '全国中小学实验在线平台', desc: '', category: '教学资源', url: 'https://www.syzx-edu.com/' },
        { id: 620, name: '安徽信息技术教学平台', desc: '', category: '教学资源', url: 'http://www.it-teaching.com/material.html' },
        { id: 621, name: '吾课网', desc: '课件下载', category: '教学资源', url: 'https://www.wookey.cn/' },
        
        // 教师提升
        { id: 701, name: '中国电子协会', desc: '', category: '教师提升', url: 'https://px.cie.org.cn/' },
        { id: 702, name: '中国青少年科技协会', desc: '', category: '教师提升', url: 'https://www.cacsi.org.cn/' },
        { id: 703, name: '科技学堂', desc: '', category: '教师提升', url: 'https://www.sciclass.cn/' },
        { id: 704, name: 'AI光影社', desc: '', category: '教师提升', url: 'https://airadiance.cn/' },
        { id: 705, name: '微信小程序教育平台', desc: '', category: '教师提升', url: 'https://edu.weixin.qq.com/' },
        
        // 教学软件
        { id: 801, name: '打字鸭', desc: '', category: '教学软件', url: 'https://daziya.com/' },
        { id: 802, name: '哪吒打字', desc: '', category: '教学软件', url: 'https://www.nezhadazi.com/' },
        { id: 803, name: 'focusky', desc: '课件、微课制作', category: '教学软件', url: 'https://www.focusky.com.cn/' },
        { id: 804, name: '希沃白板', desc: 'web版的希沃白板，应急使用', category: '教学软件', url: 'https://enweb.seewo.com/' },
        { id: 805, name: '希沃白板', desc: '希沃白板', category: '教学软件', url: 'https://easinote.seewo.com/' },
        
        // 科创类赛事
        { id: 901, name: '青少年科学调查体验活动', desc: '', category: '科创类赛事', url: 'https://www.cyscc.org/dctyhd/#/home' },
        { id: 902, name: '全国信息素养提升实践活动', desc: '', category: '科创类赛事', url: 'https://huodong.ncet.edu.cn/' },
        { id: 903, name: '全国青少年劳动技能与智能设计大赛', desc: '', category: '科创类赛事', url: 'http://aild.org.cn/' },
        { id: 904, name: '科学影像节', desc: '', category: '科创类赛事', url: 'https://yxj.cacsi.org.cn/' },
        { id: 905, name: '科普创新大赛', desc: '', category: '科创类赛事', url: 'https://kepudasai.cdstm.cn/' },
        { id: 906, name: '全国青少年信息素养大赛', desc: '', category: '科创类赛事', url: 'https://ceic.kpcb.org.cn/' },
        { id: 907, name: '全国青少年通信科技创新大赛', desc: '中国芯助力中国梦', category: '科创类赛事', url: 'https://www.ict-edu.org.cn/cms/main/cmsIndex' },
        { id: 908, name: '全国青少年无人机大赛', desc: '', category: '科创类赛事', url: 'https://www.int-ede.com/' },
        { id: 909, name: '腾讯扣叮', desc: '', category: '科创类赛事', url: 'https://coding.qq.com/' },
        { id: 910, name: 'AI创想家', desc: '', category: '科创类赛事', url: 'https://ai-arena.qq.com/intro' },
        
        // 图文处理
        { id: 1001, name: '帮小忙', desc: '腾讯旗下全能工具箱', category: '图文处理', url: 'https://tool.browser.qq.com/' },
        { id: 1002, name: 'BgSub', desc: '一键抠图', category: '图文处理', url: 'https://zh.bgsub.com/webapp/' },
        { id: 1003, name: 'imagestool', desc: '图片处理', category: '图文处理', url: 'https://imagestool.com/zh_CN/' },
        { id: 1004, name: '办公汇', desc: 'PDF处理、word、excel模板', category: '图文处理', url: 'https://www.bgbgh.com/pdf/' },
        { id: 1005, name: '百度图片', desc: '', category: '图文处理', url: 'https://image.baidu.com/' },
        { id: 1006, name: '图片压缩', desc: '', category: '图文处理', url: 'https://tinify.cn/' },
        { id: 1007, name: 'AI抠图', desc: '', category: '图文处理', url: 'https://photokit.com/editor/?lang=zh' },
        { id: 1008, name: '创客贴', desc: '', category: '图文处理', url: 'https://www.chuangkit.com/' },
        { id: 1009, name: '魔法擦除', desc: '', category: '图文处理', url: 'https://magicstudio.com/zh/magiceraser/' },
        { id: 1010, name: '稿定设计', desc: '', category: '图文处理', url: 'https://www.gaoding.com/' },
        { id: 1011, name: 'pdf24 tools', desc: '', category: '图文处理', url: 'https://tools.pdf24.org/zh/' },
        { id: 1012, name: 'pdf派', desc: '', category: '图文处理', url: 'https://www.pdfpai.com/' },
        { id: 1013, name: 'smallpdf', desc: '', category: '图文处理', url: 'https://smallpdf.com/cn/pdf-tools' },
        
        // 在线设计
        { id: 1101, name: '码上游', desc: '', category: '在线设计', url: 'https://ma3you.com/' },
        { id: 1102, name: '云朵字生成器', desc: '', category: '在线设计', url: 'https://edui123.com/ydz/' },
        { id: 1103, name: '纸由我', desc: '各种打印纸模版', category: '在线设计', url: 'https://paperme.toolooz.com/' },
        { id: 1104, name: '金山文档在线版', desc: '可以在ppt插入html代码', category: '在线设计', url: 'https://www.kdocs.cn' },
        { id: 1105, name: '手写体生成', desc: '', category: '在线设计', url: 'https://vtool.pro/handwriting/heditor.html' },
        { id: 1106, name: 'html2web', desc: 'HTML2WEB，把你的代码编程网站', category: '在线设计', url: 'https://www.html2web.com/' },
        { id: 1107, name: '字体下载', desc: '商用字体下载', category: '在线设计', url: 'https://font.icu/' },
        
        // 音视频处理
        { id: 1201, name: '音频工具', desc: '剪辑、去人声、变调', category: '音视频处理', url: 'https://vocalremover.org/zh/' },
        { id: 1202, name: '格式转换', desc: '文档、视频、图片格式转换', category: '音视频处理', url: 'https://www.aconvert.com/cn/' },
        { id: 1203, name: '短视频下载', desc: '', category: '音视频处理', url: 'https://xbeibeix.com/app/' },
        { id: 1204, name: '在线音视频处理', desc: '', category: '音视频处理', url: 'https://www.67tool.com/' },
        
        // 装机维护
        { id: 1301, name: 'puresys绿色软件系统', desc: 'puresys绿色软件系统', category: '装机维护', url: 'https://www.puresys.net/' },
        { id: 1302, name: 'UOS维护工具', desc: '国产系统改密码、解锁', category: '装机维护', url: 'http://livecd.uostools.com/' },
        { id: 1303, name: '无忧启动', desc: '', category: '装机维护', url: 'http://bbs.wuyou.net/' },
        { id: 1304, name: '吾爱破解', desc: '', category: '装机维护', url: 'https://www.52pojie.cn/' },
        { id: 1305, name: '腾讯软件中心', desc: '', category: '装机维护', url: 'https://pc.qq.com/category/c0.html' },
        { id: 1306, name: '423Down', desc: '软件下载', category: '装机维护', url: 'https://www.423down.com/' },
        { id: 1307, name: '天翼云盘解析', desc: '免客户端下载', category: '装机维护', url: 'https://189.ly93.cc/' },
        { id: 1308, name: 'HEU KMS Activator', desc: '系统激活', category: '装机维护', url: 'https://github.com/zbezj/HEU_KMS_Activator/releases' },
        { id: 1309, name: 'Microsoft-Activation-Scripts', desc: '系统激活', category: '装机维护', url: 'https://github.com/massgravel/Microsoft-Activation-Scripts' },
        { id: 1310, name: 'win10系统下载', desc: 'win10系统下载', category: '装机维护', url: 'https://iwin10.net/' },
        { id: 1311, name: 'Y-OS', desc: '', category: '装机维护', url: 'http://y-os.net/' },
        { id: 1312, name: 'hellowindows', desc: '', category: '装机维护', url: 'https://hellowindows.cn/' },
        { id: 1313, name: 'next.itellyou.cn', desc: '', category: '装机维护', url: 'https://next.itellyou.cn/' }
    ];
    
    const teacherCategories = [
        { id: 11, name: '科学资源', icon: '🔬' },
        { id: 12, name: 'AI写作', icon: '✍️' },
        { id: 13, name: 'AI图像', icon: '🖼️' },
        { id: 14, name: 'AI视频', icon: '🎬' },
        { id: 15, name: 'AI数字人', icon: '🤖' },
        { id: 16, name: '教学资源', icon: '📚' },
        { id: 17, name: '教师提升', icon: '📈' },
        { id: 18, name: '教学软件', icon: '💻' },
        { id: 19, name: '科创类赛事', icon: '🏆' },
        { id: 20, name: '图文处理', icon: '📷' },
        { id: 21, name: '在线设计', icon: '🎨' },
        { id: 22, name: '音视频处理', icon: '🎵' },
        { id: 23, name: '装机维护', icon: '🔧' }
    ];
    
    // 添加分类
    teacherCategories.forEach(cat => {
        if (!data.categories.find(c => c.name === cat.name)) {
            data.categories.push(cat);
        }
    });
    
    // 添加网站
    teacherSites.forEach(site => {
        if (!data.sites.find(s => s.url === site.url)) {
            data.sites.push(site);
        }
    });
    
    saveData();
    renderCats('all');
    filter('all');
    alert('教师网址导航数据导入成功！');
}

// 初始化时导入教师数据
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否已导入
    if (!localStorage.getItem('teacher-data-imported')) {
        importTeacherData();
        localStorage.setItem('teacher-data-imported', 'true');
    }
});

// 加载/保存数据
function loadData() {
    const s = localStorage.getItem('web-navigator-data');
    return s ? { ...DEFAULT_DATA, ...JSON.parse(s) } : { ...DEFAULT_DATA };
}

function saveData() {
    localStorage.setItem('web-navigator-data', JSON.stringify(data));
}

let data = loadData();

// 状态
let curCat = 'all';
let curSearch = '';
let curPage = 1;
const perPage = 12;

// 获取分类图标
function getCatIcon(cat) {
    const c = data.categories.find(x => x.name === cat);
    return c ? c.icon : '🔗';
}

// 获取网站图标 - 优先级：自定义 > favicon > 名称首字
function getSiteIcon(site) {
    // 1. 优先使用自定义图标
    if (site.icon) {
        if (site.icon.startsWith('http')) {
            // 图片URL
            return `<img src="${site.icon}" style="width:40px;height:40px;border-radius:8px;object-fit:cover;background:#fff;" loading="lazy" alt="">`;
        } else {
            // emoji
            return `<span style="width:40px;height:40px;background:#e0e7ff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;">${site.icon}</span>`;
        }
    }
    
    // 2. 尝试加载网站 favicon
    try {
        const domain = new URL(site.url).hostname;
        const prompt = encodeURIComponent(site.name + ' website icon, minimalist, flat design, colorful');
        return `<img src="https://${domain}/favicon.ico" 
                onerror="this.onerror=null;this.src='https://'+'${domain}'+'/apple-touch-icon.png';this.onerror=null;this.onerror=function(){this.src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${prompt}&image_size=square';this.onerror=null}"
                style="width:40px;height:40px;border-radius:8px;object-fit:cover;background:#fff;"
                loading="lazy" alt="">`;
    } catch {
        // 3. 加载失败使用AI生成图标
    }
    
    // 4. 生成AI图标
    const prompt = encodeURIComponent(site.name + ' website icon, minimalist, flat design, colorful');
    return `<img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${prompt}&image_size=square"
            style="width:40px;height:40px;border-radius:8px;object-fit:cover;background:#fff;"
            loading="lazy" alt="">`;
}

// 渲染分类
function renderCats(active) {
    if (active === undefined) {
        active = 'all';
    }
    const list = document.getElementById('cat-list');
    const allCount = data.sites.length;
    
    let html = `<div class="cat-item ${active === 'all' ? 'active' : ''}" data-cat="all">全部 (${allCount})</div>`;
    
    data.categories.forEach(cat => {
        const count = data.sites.filter(s => s.category === cat.name).length;
        html += `<div class="cat-item ${active === cat.name ? 'active' : ''}" data-cat="${cat.name}">${cat.icon} ${cat.name} (${count})</div>`;
    });
    
    list.innerHTML = html;
    
    list.querySelectorAll('.cat-item').forEach(item => {
        item.addEventListener('click', () => filter(item.dataset.cat));
    });
}

// 渲染网站
function renderSites(sites) {
    const grid = document.getElementById('tool-grid');
    const empty = document.getElementById('empty');
    
    if (!sites.length) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    
    empty.style.display = 'none';
    grid.innerHTML = sites.map(site => `
        <div class="site-card" data-id="${site.id}">
            <div class="site-icon">${getSiteIcon(site)}</div>
            <div class="site-info">
                <div class="site-name">${site.name}</div>
                <div class="site-desc">${site.desc || ''}</div>
            </div>
            <button class="site-fav ${data.favorites.includes(site.id) ? 'active' : ''}" 
                onclick="toggleFav(event, ${site.id})">
                ${data.favorites.includes(site.id) ? '★' : '☆'}
            </button>
        </div>
    `).join('');
    
    // 点击卡片打开详情
    grid.querySelectorAll('.site-card').forEach(card => {
        card.addEventListener('click', e => {
            if (!e.target.classList.contains('site-fav')) {
                showDetail(parseInt(card.dataset.id));
            }
        });
    });
}

// 分页
function renderPager(totalPages) {
    const p = document.getElementById('pagination');
    if (totalPages <= 1) { p.innerHTML = ''; return; }
    
    let html = '';
    if (curPage > 1) html += `<button class="page-btn" onclick="goPage(${curPage-1})">‹</button>`;
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= curPage - 1 && i <= curPage + 1)) {
            html += `<button class="page-btn ${i === curPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
        } else if (i === curPage - 2 || i === curPage + 2) {
            html += `<span style="color:#999">..</span>`;
        }
    }
    
    if (curPage < totalPages) html += `<button class="page-btn" onclick="goPage(${curPage+1})">›</button>`;
    
    p.innerHTML = html;
}

// 筛选
function filter(cat, search) {
    // 处理参数：支持只传一个参数
    if (cat === undefined) {
        cat = 'all';
    }
    if (search === undefined) {
        search = curSearch;
    }
    
    curCat = cat;
    curSearch = search;
    curPage = 1;
    
    let list = data.sites;
    
    if (cat !== 'all') {
        list = list.filter(s => s.category === cat);
    }
    
    if (search) {
        const q = search.toLowerCase();
        list = list.filter(s => 
            s.name.toLowerCase().includes(q) || 
            (s.desc && s.desc.toLowerCase().includes(q))
        );
    }
    
    // 不分页，直接显示全部
    renderCats(cat);
    renderSites(list);
    renderPager(1); // 清空分页
}

// 搜索
function initSearch() {
    const input = document.getElementById('search-input');
    let timer;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => filter(curCat, input.value), 200);
    });
}

// 分页跳转
function goPage(p) {
    curPage = p;
    filter(curCat, curSearch);
    document.querySelector('.main').scrollIntoView({ behavior: 'smooth' });
}

// 收藏
function toggleFav(e, id) {
    e.stopPropagation();
    const idx = data.favorites.indexOf(id);
    if (idx > -1) data.favorites.splice(idx, 1);
    else data.favorites.push(id);
    saveData();
    document.getElementById('fav-count').textContent = data.favorites.length;
    filter();
    renderFavs();
}

// 收藏侧边栏
function renderFavs() {
    const list = document.getElementById('fav-list');
    const favs = data.sites.filter(s => data.favorites.includes(s.id));
    
    if (!favs.length) {
        list.innerHTML = '<p style="color:#999;text-align:center;padding:40px 0">暂无收藏</p>';
        return;
    }
    
    list.innerHTML = favs.map(s => `
        <div class="fav-item" onclick="showDetail(${s.id})">
            ${getSiteIcon(s)}
            <div style="flex:1">
                <div style="font-size:14px;font-weight:500">${s.name}</div>
                <div style="font-size:12px;color:#666">${s.desc}</div>
            </div>
            <button class="site-fav active" onclick="event.stopPropagation();toggleFav(event,${s.id})">★</button>
        </div>
    `).join('');
}

function initFavSidebar() {
    document.getElementById('fav-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('active');
        renderFavs();
    });
    document.getElementById('close-fav').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('active');
    });
    document.getElementById('sidebar').addEventListener('click', e => {
        if (e.target.id === 'sidebar') {
            document.getElementById('sidebar').classList.remove('active');
        }
    });
}

// 详情弹窗
function showDetail(id) {
    const site = data.sites.find(s => s.id === id);
    if (!site) return;
    
    data.visitCount++;
    saveData();
    
    // 直接打开网站，不显示弹窗
    window.open(site.url, '_blank');
}

function initModal() {
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('modal').classList.remove('active');
    });
    document.getElementById('modal').addEventListener('click', e => {
        if (e.target.id === 'modal') {
            document.getElementById('modal').classList.remove('active');
        }
    });
}

// 后台管理
function initAdmin() {
    // 管理按钮点击事件 - 显示密码验证
    document.getElementById('admin-btn').addEventListener('click', () => {
        document.getElementById('password-modal').classList.add('active');
    });
    
    // 密码验证表单提交
    document.getElementById('password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password-input').value;
        if (verifyPassword(password)) {
            document.getElementById('password-modal').classList.remove('active');
            document.getElementById('admin').classList.add('active');
            renderAdmin();
        } else {
            alert('密码错误，请重新输入');
        }
        document.getElementById('password-input').value = '';
    });
    
    // 关闭密码模态框
    document.getElementById('password-close').addEventListener('click', () => {
        document.getElementById('password-modal').classList.remove('active');
        document.getElementById('password-input').value = '';
    });
    
    // 关闭管理后台
    document.getElementById('admin-close').addEventListener('click', () => {
        document.getElementById('admin').classList.remove('active');
    });
    
    // 点击遮罩关闭管理后台
    document.querySelector('.admin-overlay').addEventListener('click', () => {
        document.getElementById('admin').classList.remove('active');
    });
    
    // 添加网站
    document.getElementById('add-site').addEventListener('click', () => showSiteForm());
    
    // 添加分类
    document.getElementById('add-cat').addEventListener('click', () => showCatForm());
    
    // 导入导出
    document.getElementById('import-btn').addEventListener('click', importData);
    document.getElementById('export-btn').addEventListener('click', exportData);
    
    // 修改密码按钮点击事件
    document.getElementById('change-password-btn').addEventListener('click', () => {
        document.getElementById('change-password-modal').classList.add('active');
    });
    
    // 修改密码表单提交
    document.getElementById('change-password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (!verifyPassword(oldPassword)) {
            alert('旧密码错误');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            alert('两次输入的新密码不一致');
            return;
        }
        
        setPassword(newPassword);
        alert('密码修改成功');
        document.getElementById('change-password-modal').classList.remove('active');
        document.getElementById('change-password-form').reset();
    });
    
    // 关闭修改密码模态框
    document.getElementById('change-password-close').addEventListener('click', () => {
        document.getElementById('change-password-modal').classList.remove('active');
        document.getElementById('change-password-form').reset();
    });
    
    // 取消修改密码
    document.getElementById('change-password-cancel').addEventListener('click', () => {
        document.getElementById('change-password-modal').classList.remove('active');
        document.getElementById('change-password-form').reset();
    });
}

function renderAdmin() {
    // 左侧分类列表（包含"全部"）
    const catList = document.getElementById('admin-cat-list');
    const allCount = data.sites.length;
    
    let catHtml = `
    <div class="admin-cat-item active" data-id="all" onclick="filterAllSites()">
        <span>📋 全部</span>
        <span class="cat-count">${allCount}</span>
    </div>
    `;
    
    catHtml += data.categories.map(c => {
        const cnt = data.sites.filter(s => s.category === c.name).length;
        return `
        <div class="admin-cat-item" data-id="${c.id}">
            <span onclick="filterByCat(${c.id})" style="flex:1;cursor:pointer">${c.icon} ${c.name}</span>
            <span class="cat-count">${cnt}</span>
            <div class="cat-actions">
                <button onclick="editCat(${c.id})" title="编辑">✏️</button>
                <button onclick="delCat(${c.id})" title="删除">🗑️</button>
            </div>
        </div>
        `;
    }).join('');
    
    catList.innerHTML = catHtml;
    
    // 网站表格（带图标）
    document.getElementById('sites-tbody').innerHTML = data.sites.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.icon ? (s.icon.startsWith('http') ? '<img src="'+s.icon+'" style="width:24px;height:24px;border-radius:4px;vertical-align:middle">' : s.icon) : ''} ${s.name}</td>
            <td>${s.category}</td>
            <td>${s.desc || '-'}</td>
            <td class="table-actions">
                <button onclick="editSite(${s.id})">编辑</button>
                <button class="del" onclick="delSite(${s.id})">删除</button>
            </td>
        </tr>
    `).join('');
    
    document.getElementById('fav-count').textContent = data.favorites.length;
}

// 显示全部网站
function filterAllSites() {
    // 高亮选中"全部"
    document.querySelectorAll('.admin-cat-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.id === 'all') {
            item.classList.add('active');
        }
    });
    
    // 显示所有网站
    document.getElementById('sites-tbody').innerHTML = data.sites.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.icon ? (s.icon.startsWith('http') ? '<img src="'+s.icon+'" style="width:24px;height:24px;border-radius:4px;vertical-align:middle">' : s.icon) : ''} ${s.name}</td>
            <td>${s.category}</td>
            <td>${s.desc || '-'}</td>
            <td class="table-actions">
                <button onclick="editSite(${s.id})">编辑</button>
                <button class="del" onclick="delSite(${s.id})">删除</button>
            </td>
        </tr>
    `).join('');
}

// 左侧分类筛选
function filterByCat(catId) {
    const cat = data.categories.find(c => c.id === catId);
    if (!cat) return;
    
    // 高亮选中
    document.querySelectorAll('.admin-cat-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === catId) {
            item.classList.add('active');
        }
    });
    
    // 筛选网站
    const filtered = data.sites.filter(s => s.category === cat.name);
    document.getElementById('sites-tbody').innerHTML = filtered.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.icon ? (s.icon.startsWith('http') ? '<img src="'+s.icon+'" style="width:24px;height:24px;border-radius:4px;vertical-align:middle">' : s.icon) : ''} ${s.name}</td>
            <td>${s.category}</td>
            <td>${s.desc || '-'}</td>
            <td class="table-actions">
                <button onclick="editSite(${s.id})">编辑</button>
                <button class="del" onclick="delSite(${s.id})">删除</button>
            </td>
        </tr>
    `).join('');
}

function showSiteForm(site = null) {
    const inlineForm = document.getElementById('inline-form');
    const title = document.getElementById('form-title');
    const catSel = document.getElementById('site-cat');
    
    catSel.innerHTML = data.categories.map(c => `<option value="${c.name}">${c.icon} ${c.name}</option>`).join('');
    
    if (site) {
        title.textContent = '编辑网站';
        document.getElementById('site-id').value = site.id;
        document.getElementById('site-name').value = site.name;
        document.getElementById('site-desc').value = site.desc || '';
        document.getElementById('site-cat').value = site.category;
        document.getElementById('site-url').value = site.url;
        document.getElementById('site-icon').value = site.icon || '';
    } else {
        title.textContent = '添加网站';
        document.getElementById('site-form').reset();
        document.getElementById('site-id').value = '';
    }
    
    inlineForm.classList.add('active');
}

function saveSite(e) {
    e.preventDefault();
    const id = document.getElementById('site-id').value;
    const iconInput = document.getElementById('site-icon').value.trim();
    const d = {
        name: document.getElementById('site-name').value,
        desc: document.getElementById('site-desc').value,
        category: document.getElementById('site-cat').value,
        url: document.getElementById('site-url').value,
        icon: iconInput || null  // 保存自定义图标，空则使用默认
    };
    
    if (id) {
        const i = data.sites.findIndex(s => s.id === parseInt(id));
        if (i > -1) data.sites[i] = { ...data.sites[i], ...d };
    } else {
        const newId = Math.max(0, ...data.sites.map(s => s.id)) + 1;
        data.sites.push({ id: newId, ...d });
    }
    
    saveData();
    document.getElementById('inline-form').classList.remove('active');
    renderAdmin();
    // 重置筛选为"全部"，刷新首页
    filter('all');
}

function editSite(id) {
    const s = data.sites.find(x => x.id === id);
    if (s) showSiteForm(s);
}

function delSite(id) {
    if (!confirm('确定删除？')) return;
    data.sites = data.sites.filter(s => s.id !== id);
    data.favorites = data.favorites.filter(f => f !== id);
    saveData();
    renderAdmin();
    filter('all');
}

function delCat(id) {
    if (!confirm('删除分类？')) return;
    data.categories = data.categories.filter(c => c.id !== id);
    saveData();
    renderAdmin();
    renderCats('all');
    filter('all');
}

// 添加/编辑分类
function showCatForm(cat = null) {
    const name = prompt(cat ? '编辑分类名称:' : '新分类名称:');
    if (!name) return;
    
    const icon = prompt('分类图标 (emoji):', cat ? cat.icon : '📁') || '📁';
    
    if (cat) {
        const idx = data.categories.findIndex(c => c.id === cat.id);
        if (idx > -1) {
            const oldName = data.categories[idx].name;
            // 更新分类
            data.categories[idx] = { ...data.categories[idx], name, icon };
            // 同步更新该分类下所有网站的 category 字段
            if (oldName !== name) {
                data.sites.forEach(s => {
                    if (s.category === oldName) {
                        s.category = name;
                    }
                });
            }
        }
    } else {
        const newId = Math.max(0, ...data.categories.map(c => c.id)) + 1;
        data.categories.push({ id: newId, name, icon });
    }
    
    saveData();
    renderAdmin();
    renderCats('all');
    filter('all');
}

function editCat(id) {
    const cat = data.categories.find(c => c.id === id);
    if (cat) showCatForm(cat);
}

function importData() {
    const i = document.createElement('input');
    i.type = 'file';
    i.accept = '.json';
    i.onchange = e => {
        const r = new FileReader();
        r.onload = ev => {
            try {
                const imp = JSON.parse(ev.target.result);
                if (imp.sites) { data.sites = [...data.sites, ...imp.sites]; }
                if (imp.categories) { data.categories = [...data.categories, ...imp.categories]; }
                saveData();
                renderAdmin();
                filter('all');
                alert('导入成功');
            } catch { alert('格式错误'); }
        };
        r.readAsText(e.target.files[0]);
    };
    i.click();
}

function exportData() {
    const json = JSON.stringify(data, null, 2);
    const b = new Blob([json], { type: 'application/json' });
    const u = URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href = u;
    a.download = 'navigator-data.json';
    a.click();
    URL.revokeObjectURL(u);
}

function initForm() {
    document.getElementById('site-form').addEventListener('submit', saveSite);
    document.getElementById('form-cancel').addEventListener('click', () => {
        document.getElementById('inline-form').classList.remove('active');
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initFavSidebar();
    initModal();
    initAdmin();
    initForm();
    filter('all');
    document.getElementById('fav-count').textContent = data.favorites.length;
});