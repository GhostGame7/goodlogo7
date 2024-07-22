var PlatformConfig = /** @class */ (function () {
    function PlatformConfig() {
    }

    PlatformConfig.PlatUrl = "//manager-k3qctest-k3.q-dazzle.com/";
    PlatformConfig.ErrorUrl = "//manager-k3wxtest-k3.q-dazzle.com/api/game_error.php";
    PlatformConfig.GameName = "龙吟大陆",
    PlatformConfig.DitchName = "k3qctest";
    PlatformConfig.LoginDitchName = "k3qctest";       
    PlatformConfig.LoginMode= "1",              //登陆模式
    PlatformConfig.LoadingMode = "1",
    PlatformConfig.PayMode = "0",               //0为本地生成订单号，1为走以前支付逻辑(针对特殊平台)
    
    PlatformConfig.public_info = "文网游备字〔2018〕M-RPG 0393 号",      // 版号
    PlatformConfig.public_link = "//www.q-dazzle.com/",           // 版号链接
    PlatformConfig.has_mask = 0,           // 是否有独立的屏蔽字
    PlatformConfig.ShowQuickPoint = 0,     // 是否显示悬浮点  0否 1是
    
    PlatformConfig.ticket_url_root = "api/create_ticket/",
    PlatformConfig.sdk_version = "h5game",

    PlatformConfig.skip_update = 0,             //-跳过更新

    PlatformConfig.ShowStatPanel = 0;           //是否显示统计面板 0否1是
    PlatformConfig.ShowDebugPanel = 0;          //是否显示Debug面板 0否1是
    PlatformConfig.ShowTestTool = 1;            //是否显示TestTool面板 0否1是
    PlatformConfig.ShowErrorPanel = 0;          //是否显示报错面板 0否1是
    PlatformConfig.LocalJson = 0;               //默认0使用打包好的bin文件配置，1为使用本地的json文件配置
    PlatformConfig.DebugMode = 0;               //默认0连接155，1为私服
    PlatformConfig.DefaultServerInfo = {
        "server_host_name" : "192.168.12.32",  //默认登录服务器
        "server_port": "9106",                 //默认端口9106
    };
    PlatformConfig.UsingWss = 0;                //是否使用WSS加密连接服务器 0否1是

    PlatformConfig.LanguagePathMap =            //多语言版本配置映射表 "获取的游戏语言":"语言版本路径"
    {
        "zh_CN" :"zh",
        "vi_VN" :"vi",
    }

    PlatformConfig.DefaultLanguageInfo =        //默认语言版本
    {
        "language_str" : "zh_CN",
        "language_path" : "zh",
    }

    PlatformConfig.plat_url_device_static = "//manager-k3qctest-k3.q-dazzle.com/api/client_lost_rate.php"

    //初始化PlatformConfig
    PlatformConfig.InitPlatformConfig = function(callback, caller)
    {
        if(window.LoginInfo && window.LoginInfo.app_id)
		{
            var json_path = "platform/platform_" + window.LoginInfo.app_id + ".json";
            var load_cb = function()
            {
                var json = Laya.loader.getRes(json_path);
                if(json)
                {
                    for(var key in json)
                    {
                        PlatformConfig[key] = json[key];
                    }

                    if(!json["DebugMode"])
                    {
                        PlatformConfig["DebugMode"] = 0;
                    }
    
                    if(!json["ShowStatPanel"])
                    {
                        PlatformConfig["ShowStatPanel"] = 0;
                    }
    
                    if(!json["ShowErrorPanel"])
                    {
                        PlatformConfig["ShowErrorPanel"] = 0;
                    }

                    if(!json["LoginDitchName"])
                    {
                        PlatformConfig["LoginDitchName"] = PlatformConfig["DitchName"];
                    }
                }

                var loginmode = window.LoginInfo.loginmode;
                if(loginmode)
                {
                    PlatformConfig["LoginMode"] = loginmode;
                }

                callback.call(caller, json);
            }
            Laya.loader.load(json_path, Laya.Handler.create(null, load_cb), null, Laya.Loader.JSON);
        }
        else
        {
            callback.call(caller);
        }
    }
    return PlatformConfig;
}());
window.PlatformConfig = PlatformConfig;