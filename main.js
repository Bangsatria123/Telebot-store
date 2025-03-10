"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hok = exports.FF = exports.CODM = exports.Pubgm = exports.SL = exports.Genshin = exports.MLGB = exports.MLindo = exports.WDP = exports.List = exports.Soon = void 0;
var dotenv = require("dotenv");
dotenv.config();
var pict = "./QR.jpg";
var logo = "./logo.jpg";
var TelegramBot = require("node-telegram-bot-api");
var token = "".concat(process.env.TELE_TOKEN);
var bot = new TelegramBot(token, { polling: true });
var prefix = "/";
var Start = new RegExp("^".concat(prefix, "start$"));
var Listharga = new RegExp("^".concat(prefix, "list$")); // list harga
var Buy = new RegExp("^".concat(prefix, "buy"));
var Process = new RegExp("^".concat(prefix, "process"));
var Check = new RegExp("^".concat(prefix, "check"));
var done = new RegExp("^".concat(prefix, "done"));
var Ai = new RegExp("^".concat(prefix, "ai"));
var TF = new RegExp("^".concat(prefix, "tf"));
// LIST HARGA --------
var indo = new RegExp("^".concat(prefix, "dmindo$"));
var genshin = new RegExp("^".concat(prefix, "genshin$"));
var global = new RegExp("^".concat(prefix, "dmglobal$")); //dm global
var wdp = new RegExp("^".concat(prefix, "wdp$")); //dm wdp
var starlight = new RegExp("^".concat(prefix, "starlight$")); //dm stalight
var HOK = new RegExp("^".concat(prefix, "HOK$")); //dm HOK
var netflix = new RegExp("^".concat(prefix, "netflix$")); //dm netflix
var freefire = new RegExp("^".concat(prefix, "freefire$")); //dm freefire
var pubgm = new RegExp("^".concat(prefix, "pubgm$")); //dm pubgm
var codm = new RegExp("^".concat(prefix, "codm$")); //dm stalight
var valo = new RegExp("^".concat(prefix, "valo$")); //dm valo
var pointblank = new RegExp("^".concat(prefix, "pointblank$")); //dm pointblank
// END LIST HARGA -------------------
exports.Soon = "ON PROGRESS\nWE'LL FIX IT RECENTLY PLEASE BE PATIENT";
exports.List = [
    { name: "/dmindo ( MOBILE LEGEND INDO SERVER )" },
    { name: "/wdp ( MOBILE LEGEND WEEKLY DIAMOND PASS )" },
    { name: "/starlight ( MOBILE LEGEND MONTHLY STARLIGHT )" },
    { name: "/HOK ( HONOR OF KINGS )" },
    { name: "/netflix ( NETFLIX  )" },
    { name: "/freefire ( GARENA FREEFIRE INDONESIA )" },
    { name: "/codm ( CALL OF DUTY MOBILE )" },
];
exports.WDP = [
    { name: "WDP FAST", price: 29000, code: "WDPFAST" },
    { name: "WDP SLOW (slot terbatas tanyakan dulu)", price: 27000, code: "WDPSLOW" },
    { name: "WEP PACK (x5 slot terbatas tanyakan dulu)", price: 25000, code: "WDPPACK" }
];
exports.MLindo = [
    { name: "20 (18+2) Diamonds", price: 6474, code: "DB20" },
    { name: "30 (28+2) Diamonds", price: 9118, code: "DB30" },
    { name: "44 (40+4) Diamonds", price: 12769, code: "DB44" },
    { name: "50 (46+4) Diamonds", price: 15102, code: "DB50" },
    { name: "60 (55+5) Diamonds", price: 18340, code: "DB60" },
    { name: "71 (64+7) Diamonds", price: 20748, code: "DB71" },
    { name: "70 (64+6) Diamonds", price: 21472, code: "DB70" },
    { name: "80 (73+7) Diamonds", price: 23557, code: "DB80" },
    { name: "85 (77+8) Diamonds", price: 24472, code: "DB85" },
    { name: "83 (75+8) Diamonds", price: 24577, code: "DB83" },
    { name: "84 (76+8) Diamonds", price: 24810, code: "DB84" },
    { name: "88 (80+8) Diamonds", price: 25889, code: "DB88" },
    { name: "89 (81+8) Diamonds", price: 26142, code: "DB89" },
    { name: "92 (84+8) Diamonds", price: 26967, code: "DB92" },
    { name: "98 (89+9) Diamonds", price: 27701, code: "DB98" },
    { name: "100 (91+9) Diamonds", price: 27972, code: "DB100" },
    { name: "110 (100+10) Diamonds", price: 30889, code: "DB110" },
    { name: "113 (102+11) Diamonds", price: 31485, code: "DB113" },
    { name: "112 (101+11) Diamonds", price: 31807, code: "DB112" },
    { name: "116 (105+11) Diamonds", price: 32837, code: "DB116" },
    { name: "129 (117+12) Diamonds", price: 35548, code: "DB129" },
    { name: "128 (116+12) Diamonds", price: 35871, code: "DB128" },
    { name: "148 (134+14) Diamonds", price: 41185, code: "DB148" },
    { name: "170 (154+16) Diamonds", price: 46718, code: "DB170" },
    { name: "176 (160+16) Diamonds", price: 49423, code: "DB176" },
    { name: "222 (200+22) Diamonds", price: 60304, code: "DB222" },
    { name: "240 (217+23) Diamonds", price: 64308, code: "DB240" },
    { name: "241 (218+23) Diamonds", price: 65813, code: "DB241" },
    { name: "277 (250+27) Diamonds", price: 75381, code: "DB277" },
    { name: "284 (257+27) Diamonds", price: 76206, code: "DB284" },
    { name: "296 (256+40) Diamonds", price: 79134, code: "DB296" },
    { name: "305 (276+29) Diamonds", price: 83422, code: "DB305" },
    { name: "370 (333+37) Diamonds", price: 100506, code: "DB370" },
    { name: "384 (346+38) Diamonds", price: 102997, code: "DB384" },
    { name: "408 (367+41) Diamonds", price: 107237, code: "DB408" },
    { name: "406 (366+40) Diamonds", price: 108939, code: "DB406" },
    { name: "518 (467+51) Diamonds", price: 138650, code: "DB518" },
    { name: "568 (503+65) Diamonds", price: 146268, code: "DB568" },
    { name: "554 (500+54) Diamonds", price: 148554, code: "DB554" },
    { name: "716 (637+79) Diamonds", price: 185883, code: "DB716" },
    { name: "750 (668+82) Diamonds", price: 194623, code: "DB750" },
    { name: "790 (703+87) Diamonds", price: 205689, code: "DB790" },
    { name: "875 (774+101) Diamonds", price: 224196, code: "DB875" },
    { name: "874 (779+95) Diamonds", price: 228468, code: "DB874" },
    { name: "966 (836+130) Diamonds", price: 247588, code: "DB966" },
    { name: "1048 (936+112) Diamonds", price: 275013, code: "DB1048" },
    { name: "1067 (953+114) Diamonds", price: 279965, code: "DB1067" },
    { name: "1136 (1006+130) Diamonds", price: 292535, code: "DB1136" },
    { name: "1358 (1206+152) Diamonds", price: 351956, code: "DB1358" },
    { name: "1506 (1339+167) Diamonds", price: 391569, code: "DB1506" },
    { name: "1704 (1509+195) Diamonds", price: 438802, code: "DB1704" },
    { name: "2010 (1708+302) Diamonds", price: 487379, code: "DB2010" },
    { name: "2380 (2041+339) Diamonds", price: 586414, code: "DB2380" },
    { name: "2578 (2211+367) Diamonds", price: 633646, code: "DB2578" },
    { name: "2855 (2461+394) Diamonds", price: 707923, code: "DB2855" },
    { name: "3146 (2714+432) Diamonds", price: 779913, code: "DB3146" },
    { name: "3423 (2964+459) Diamonds", price: 854190, code: "DB3423" },
    { name: "3738 (3247+491) Diamonds", price: 938368, code: "DB3738" },
    { name: "4020 (3416+604) Diamonds", price: 974758, code: "DB4020" },
    { name: "4830 (4003+827) Diamonds", price: 1169603, code: "DB4830" },
    { name: "4856 (4027+829) Diamonds", price: 1176983, code: "DB4856" },
    { name: "4958 (4252+706) Diamonds", price: 1220059, code: "DB4958" },
    { name: "5052 (4203+849) Diamonds", price: 1229024, code: "DB5052" },
    { name: "5398 (4506+892) Diamonds", price: 1315870, code: "DB5398" },
    { name: "6030 (5124+906) Diamonds", price: 1462136, code: "DB6030" },
    { name: "6840 (5711+1129) Diamonds", price: 1656981, code: "DB6840" },
    { name: "7685 (6464+1221) Diamonds", price: 1877525, code: "DB7685" },
    { name: "8040 (6832+1208) Diamonds", price: 1949514, code: "DB8040" },
    { name: "8850 (7419+1431) Diamonds", price: 2144360, code: "DB8850" },
    { name: "9660 (8006+1654) Diamonds", price: 2339205, code: "DB9660" },
    { name: "10050 (8540+1510) Diamonds", price: 2436892, code: "DB10050" },
    { name: "14490 (12009+2481) Diamonds", price: 3508806, code: "DB14490" },
    { name: "16080 (13664+2416) Diamonds", price: 3899027, code: "DB16080" },
    { name: "20100 (17080+3020) Diamonds", price: 4873784, code: "DB20100" },
    { name: "Twilight Pass", price: 146268, code: "TPP" },
];
exports.MLGB = [
    {
        title: "**MOBILE LEGENDS GLOBAL SERVER**",
        list: [
            { name: "Mobile Legends - 20 + 2 Diamonds", price: 5182.32, code: "MLGB20D" },
            { name: "Mobile Legends - 42 Diamonds", price: 11361.064, code: "MLGB42D" },
            { name: "Mobile Legends - 51 + 5 Diamonds", price: 12875.72, code: "MLGB51D" },
            { name: "Mobile Legends - 78 Diamonds + 8 Diamonds", price: 16942.64, code: "MLGB78B" },
            { name: "Mobile Legends - 70 Diamonds", price: 18895.448, code: "MLGB70D" },
            { name: "Mobile Legends - 102 + 10 Diamonds", price: 25671.36, code: "MLGB102D" },
            { name: "Mobile Legends - 156 Diamonds + 16 Diamonds", price: 33882.992, code: "MLGB156B" },
            { name: "Mobile Legends - 140 Diamonds", price: 37710.816, code: "MLGB140D" },
            { name: "Mobile Legends - 234 Diamonds + 23 Diamonds", price: 50466.416, code: "MLGB234B" },
            { name: "Mobile Legends - 203 + 20 Diamonds", price: 51263.784, code: "MLGB203D" },
            { name: "Mobile Legends - 303 + 33 Diamonds", price: 73787.7972, code: "MLGB303D" },
            { name: "Mobile Legends - 284 Diamonds", price: 79333.046, code: "MLGB284D" },
            { name: "Mobile Legends - 355 Diamonds", price: 90685.7744, code: "MLGB355D" },
            { name: "Mobile Legends - 429 Diamonds", price: 108770.922, code: "MLGB429D" },
            { name: "Mobile Legends - 504 + 66 Diamonds", price: 122954.4264, code: "MLGB504D" },
            { name: "Mobile Legends - 625 Diamonds + 81 Diamonds", price: 129071.3164, code: "MLGB625B" },
            { name: "Mobile Legends - 716 Diamonds", price: 198366.0796, code: "MLGB716D" },
            { name: "Mobile Legends - 1007 + 156 Diamonds", price: 245907.7556, code: "MLGB1007D" },
            { name: "Mobile Legends - 1084 Diamond", price: 269856.132, code: "MLGB1084D" },
            { name: "Mobile Legends - 1446 Diamonds", price: 359883.888, code: "MLGB1446D" },
            { name: "Mobile Legends - 1860 Diamonds + 335 Diamonds", price: 386138.844, code: "MLGB1860B" },
            { name: "Mobile Legends - 2015 + 383 Diamonds", price: 489484.632, code: "MLGB2015D" },
            { name: "Mobile Legends - 3099 Diamonds + 589 Diamonds", price: 628230.044, code: "MLGB3099B" },
            { name: "Mobile Legends - 2976 Diamonds", price: 704636.66, code: "MLGB2976D" },
            { name: "Mobile Legends - 4649 Diamonds + 883 Diamonds", price: 947377.652, code: "MLGB4649B" },
            { name: "Mobile Legends - 5035 + 1007 Diamonds", price: 1194502.036, code: "MLGB5035D" },
            { name: "Mobile Legends - 7740 Diamonds + 1548 Diamonds", price: 1578949.606, code: "MLGB7740B" },
            { name: "Mobile Legends - 7502 Diamonds", price: 1758136.744, code: "MLGB7502D" },
            { name: "Mobile Legends - Twilight Pass", price: 113000, code: "MLGBTP" },
        ]
    }
];
exports.Genshin = [
    {
        title: "**GENSHIN IMPACT TOP UP**",
        list: [
            { name: "60 Genesis Crystals", price: 12000, code: "GIGC60C" },
            { name: "300 + 30 Genesis Crystal", price: 58000, code: "GIGC300C" },
            { name: "Blessing of the Welkin Moon", price: 59000, code: "GIBOTWM" },
            { name: "980 + 110 Genesis Crystals", price: 172000, code: "GIGC980C" },
            { name: "1980 + 260 Genesis Crystals", price: 366000, code: "GIGC1980C" },
            { name: "3280 + 600 Genesis Crystals", price: 561000, code: "GIGC3280C" },
            { name: "6480 + 1600 Genesis Crystals", price: 1120000, code: "GIGC6480C" }
        ]
    }
];
exports.SL = [
    {
        title: "**STARLIGHT**",
        list: [
            { name: "Starlight card 7 days friendlist", price: 35000, code: "SL7D" },
            { name: "Starlight Card Promo beli lebih dari 5", price: 33000, code: "SLP" }
        ],
        Disclaimer: "\u2705 Delay 7-8H max 12hari\n\u26A0TIDAK MENERIMA SISTEM BERTEMAN DULU\n\u26A0SETIAP GIFT ITEM SL AKAN MENGURANGI KOUTA GIFT CARA AGAR TERHINDAR DARI ITU GIFT DARI AKUN ADMIN KE BUYER\n\u26A0NICK NAME TIDAK ADA UNSUR TOKO JADI AMAN\n\u26A0 CANCELDP HANGUS ATAU PEMBAYARAN LUNAS DIPOTONG 50%\n\u26A0 CHANGE NAME TANPA KONFIRMASI & UNFOLLOW AKUN ADMIN SEBELUM TANGGAL PENGIRIMAN DINYATAKAN HANGUS.\nMEMBELI BERARTI SETUJU"
    }
];
exports.Pubgm = [
    {
        title: "** Daftar Harga PUBG Mobile **",
        list: [
            { name: "PUBG Mobile (Indonesia) - 30 UC", price: 6378.32, code: "PMIUC30C" },
            { name: "PUBG Mobile (Indonesia) - 60 UC", price: 12720.24, code: "PMIUC60C" },
            { name: "PUBG Mobile (Indonesia) - 325 UC", price: 63635.52, code: "PMIUC325C" },
            { name: "PUBG Mobile (Indonesia) - 660 UC", price: 127271.04, code: "PMIUC660C" },
            { name: "PUBG Mobile (Indonesia) - 1800 UC", price: 318141.20, code: "PMIUC1800C" },
            { name: "PUBG Mobile (Indonesia) - 3850 UC", price: 636281.36, code: "PMIUC3850C" },
            { name: "PUBG Mobile (Indonesia) - 8100 UC", price: 1272561.68, code: "PMIUC8100C" },
            { name: "PUBG Mobile (Indonesia) - Paket Upgrade RP", price: 140968.88, code: "PMIPURR" },
            { name: "PUBG Mobile (Indonesia) - Paket Upgrade Elite RP", price: 359996.00, code: "PMIPUERR" }
        ]
    }
];
exports.CODM = [
    {
        title: "DAFTAR HARGA CODM",
        list: [
            { name: "Call of Duty Mobile 31 CP", price: 4357, code: "CODMC31C" },
            { name: "Call of Duty Mobile 63 CP", price: 8752, code: "CODMC63C" },
            { name: "Call of Duty Mobile 128 CP", price: 17505, code: "CODMC128C" },
            { name: "Call of Duty Mobile 321 CP", price: 43764, code: "CODMC321C" },
            { name: "Call of Duty Mobile 645 CP", price: 87491, code: "CODMC645C" },
            { name: "Call of Duty Mobile 800 CP", price: 104997, code: "CODMC800C" },
            { name: "Call of Duty Mobile 1373 CP", price: 175020, code: "CODMC1373C" },
            { name: "Call of Duty Mobile 2060 CP", price: 262512, code: "CODMC2060C" },
            { name: "Call of Duty Mobile 2750 CP", price: 332497, code: "CODMC2750C" },
            { name: "Call of Duty Mobile 3564 CP", price: 437495, code: "CODMC3564C" },
            { name: "Call of Duty Mobile 5618 CP", price: 689614, code: "CODMC5618C" },
            { name: "Call of Duty Mobile 7656 CP", price: 875028, code: "CODMC7656C" },
            { name: "Call of Duty Mobile 15312 CP", price: 1750054, code: "CODMC15312C" },
            { name: "Call of Duty Mobile 38280 CP", price: 4375138, code: "CODMC38280C" },
            { name: "Call of Duty Mobile 76569 CP", price: 8750277, code: "CODMC76569C" }
        ]
    }
];
exports.FF = [
    {
        title: "** Daftar Harga Garena Free Fire **",
        list: [
            { name: "Garena Free Fire (Indonesia) - 5 Diamonds", price: 856, code: "GFFID5D" },
            { name: "Garena Free Fire (Indonesia) - 12 Diamonds", price: 1712, code: "GFFID12D" },
            { name: "Garena Free Fire (Indonesia) - 50 Diamonds", price: 6592, code: "GFFID50D" },
            { name: "Garena Free Fire (Indonesia) - 70 Diamonds", price: 8446, code: "GFFID70D" },
            { name: "Garena Free Fire (Indonesia) - 140 Diamonds", price: 17058, code: "GFFID140D" },
            { name: "Garena Free Fire (Indonesia) - 355 Diamonds", price: 42683, code: "GFFID355D" },
            { name: "Garena Free Fire (Indonesia) - 720 Diamonds", price: 84362, code: "GFFID720D" },
            { name: "Garena Free Fire (Indonesia) - 1450 Diamonds", price: 170438, code: "GFFID1450D" },
            { name: "Garena Free Fire (Indonesia) - 2180 Diamonds", price: 256477, code: "GFFID2180D" },
            { name: "Garena Free Fire (Indonesia) - 3640 Diamonds", price: 429412, code: "GFFID3640D" },
            { name: "Garena Free Fire (Indonesia) - 7290 Diamonds", price: 856218, code: "GFFID7290D" },
            { name: "Garena Free Fire (Indonesia) - Level Up Pass", price: 13817, code: "GFFILUPP" },
            { name: "Garena Free Fire (Indonesia) - Member Mingguan", price: 27525, code: "GFFIMMM" },
            { name: "Garena Free Fire (Indonesia) - BP card", price: 41380, code: "GFFIBCC" },
            { name: "Garena Free Fire (Indonesia) - Member Bulanan", price: 82649, code: "GFFIMBB" }
        ]
    }
];
exports.Hok = [
    {
        title: "** DAFTAR HARGA HONOR OF KINGS **",
        list: [
            { name: "17 Tokens", price: 2271, code: "HOKT17T" },
            { name: "88 Tokens", price: 12328, code: "HOKT88T" },
            { name: "257 Tokens", price: 38847, code: "HOKT257T" },
            { name: "432 Tokens", price: 65217, code: "HOKT432T" },
            { name: "605 Tokens", price: 89614, code: "HOKT605T" },
            { name: "895 Tokens", price: 122241, code: "HOKT895T" },
            { name: "1353 Tokens", price: 191558, code: "HOKT1353T" },
            { name: "2724 Tokens", price: 381141, code: "HOKT2724T" },
            { name: "4580 Tokens", price: 624173, code: "HOKT4580T" },
            { name: "9160 Tokens", price: 1222712, code: "HOKT9160T" },
            { name: "Weekly Card", price: 12068, code: "HOKWCC" },
            { name: "Weekly Card Plus", price: 38847, code: "HOKWCPP" }
        ]
    }
];
var reseller = [6586066756, 1395190885, 8048254429];
bot.onText(Start, function (msg) {
    var Chatid = 7118777240;
    var id = msg.chat.id;
    var caption = "Silahkan Gunakan\n> /list untuk melihat daftar harga\nSilahkan gunakan \n{ /check id server } contoh : /check 64378003 2109 - tanpa tanda kurung untuk server\nUntuk melihat nickname anda agar lebih mudah untuk mengisi format pemberlian\n\n Untuk check username sementara hanya untuk mobile legend, kami masih berusaha untuk melanjutkan pengembangan agar lebih berguna";
    bot.sendPhoto(id, logo, { caption: caption })
        .then(function () {
        bot.deleteMessage(id, msg.message_id);
    });
});
bot.onText(Check, function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var chatid, id, server, url, options, response, result, nickname, username, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chatid = msg.chat.id;
                id = msg.text.split(" ")[1];
                server = msg.text.split(" ")[2];
                url = "".concat(process.env.ID_ENDPOINT, "/").concat(id, "/").concat(server);
                options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': "".concat(process.env.RAPID_APIKEY),
                        'x-rapidapi-host': 'id-game-checker.p.rapidapi.com',
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url, options)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                nickname = result.data;
                username = nickname.username.split(" ").join("+");
                bot.sendMessage(chatid, ">Nickname : ".concat(username, "\n>id : ").concat(id, "\n>server : ").concat(server));
                bot.sendMessage(chatid, "".concat(id, " ").concat(server, " ").concat(username))
                    .then(function () {
                    bot.deleteMessage(chatid, msg.message_id);
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
bot.onText(Process, function (msg) {
    var _a;
    var Chatid = msg.chat.id;
    var text = msg.text.split(" ");
    var receiver = text[8];
    console.log(text);
    var message = "\u2500\u2500 \u300C DETAIL PESANAN \u300D \u2500\u2500\n> id : ".concat(text[2], " \n> server : ").concat(text[3], "\n> nickname : ").concat(((_a = text[4].split("+")) === null || _a === void 0 ? void 0 : _a.join(" ")) || text[4], "\n> kode : ").concat(text[1], "\n> Status : sedang di proses silahkan tunggu 1 - 10 menit / 7 hari - 10 hari untuk starlight / gift\n> jika masih belum ada response setelah itu silahkan tinggalkan komentar dengan menggunakan /komen [ pesan ] \n\u2500\u2500 \u300C TERIMAKASIH TELAH BERBELANJA DI ANTASENA STORE \u300D \u2500\u2500\n\n\n");
    bot.sendMessage(receiver, "".concat(message));
    bot.sendMessage(Chatid, "".concat(text[2], " ").concat(text[3], " ").concat(text[4]));
});
bot.onText(done, function (msg) {
    var msgs = msg.text.split(" ");
    var receiver = msgs[8];
    var message = "\u2500\u2500 \u300C DETAIL PESANAN \u300D \u2500\u2500\n> id : ".concat(msgs[2], " \n> server : ").concat(msgs[3], "\n> nickname : ").concat(msgs[4].split("+").join(" "), "\n> kode : ").concat(msgs[1], "\n> Status : Pesanan Telah Terkirim Silahkan Cek Melalui In Game\n\n\u2500\u2500 \u300C TERIMAKASIH TELAH BERBELANJA DI ANTASENA STORE \u300D \u2500\u2500\n\n\n");
    bot.sendMessage(receiver, "".concat(message));
});
bot.onText(Buy, function (msg) {
    var chatid = msg.chat.id;
    var chat = msg === null || msg === void 0 ? void 0 : msg.text;
    var user = msg.from.id;
    var username = msg.from.username;
    var id = 7118777240;
    var phone = "081231511565";
    var captions = "=------------PAYMENT----------=\n\nAntasena Store\n__________________________\n\u2022SEABANK: - \n\u2022GOPAY: ".concat(phone, "\n\u2022SHOPEPAY: ").concat(phone, "\n\u2022OVO: ").concat(phone, "\n\u2022DANA: ").concat(phone, "\n\n\nUntuk E-Wallet / Bank Lain ke QRIS (Gratis)\n\nNote : \n\n-Kirim Bukti transfer ke @AntasenaStores\n\nPENTING\n\u2022 TF DANA-DANA biaya admin Rp.100 (jumlah tf + Rp 100)\n\u2022 TF BANK-DANA biaya admin Rp.500 (jumlah tf +Rp 500) \n\u2022 TF BANK KE OVO/GOPAY(Jumlah TF + 2.000}\n\n__________________________\nA/N : Dimas Satria");
    bot.sendMessage(id, "".concat(chat, " from @").concat(username, " id ").concat(user));
    bot.sendPhoto(chatid, pict, { caption: captions, });
});
bot.onText(Listharga, function (msg) {
    var chatid = msg.chat.id;
    var userid = msg.from.id;
    var listItems = exports.List.map(function (List) {
        var name = List.name;
        return "".concat(name);
    }).join("\n");
    bot.sendMessage(chatid, "".concat(listItems, " "))
        .then(function () {
        bot.deleteMessage(chatid, msg.message_id);
    });
});
bot.onText(indo, function (msg) {
    var Chatid = msg.chat.id;
    var listItems = exports.MLindo.map(function (item) {
        var name = item.name;
        var qris = Math.round(item.price * 0.75 / 100);
        var price = item.price + qris;
        var code = item.code;
        var percent = price * 10 / 100;
        var discount = price * 5 / 100;
        var harga = reseller.includes(Chatid) ? Math.round(price + discount) : Math.round(price + percent);
        return "- ".concat(name, "\n- Rp ").concat(harga.toLocaleString(), "\n- ").concat(code);
    }).join("\n\n");
    bot.sendMessage(Chatid, "MOBILE LEGEND SERVER INDO\n".concat(listItems, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.MLindo[1].code, " 64378003 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
//global done // 
bot.onText(global, function (msg) {
    var Chatid = msg.chat.id;
    var listItems = exports.MLGB.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var prices = items.price;
            var code = items.code;
            var harga = Math.round(prices).toLocaleString();
            var discount = Math.round(prices - Math.round(prices * 1.5 / 100));
            return (" > ".concat(name, "\n-Rp ").concat(reseller.includes(Chatid) ? discount.toLocaleString() : harga, "\n-Code ").concat(code, " "));
        }).join("\n\n");
        return ("".concat(title, " \n\n").concat(list, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(items.list[1].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"));
    });
    bot.sendMessage(Chatid, "".concat(listItems))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
// gesnhin done //
bot.onText(genshin, function (msg) {
    var Chatid = msg.chat.id;
    var listItems = exports.Genshin.map(function (item) {
        var items = item.title;
        var lists = item.list.map(function (lists) {
            var name = lists.name;
            var price = lists.price;
            var code = lists.code;
            var discount = Math.round(price - Math.round(price * 1.5 / 100));
            return ("".concat(name, "\nRp- ").concat(reseller.includes(Chatid) ? discount.toLocaleString() : price.toLocaleString(), "\n").concat(code));
        }).join("\n\n");
        return "".concat(items, "\n\n").concat(lists);
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.Genshin[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
// wdp done //
bot.onText(wdp, function (msg) {
    var Chatid = msg.chat.id;
    var Wdp = exports.WDP.map(function (wdp) {
        var title = wdp.name;
        var harga = wdp.price;
        var kode = wdp.code;
        var discount = Math.round(harga - 1000);
        return "".concat(title, "\n").concat(reseller.includes(Chatid) ? discount.toLocaleString() : harga.toLocaleString(), "\n").concat(kode);
    }).join("\n\n");
    bot.sendMessage(Chatid, "WEEKLY DIAMOND PASS\n".concat(Wdp, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.WDP[0].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
// starlight done //
bot.onText(starlight, function (msg) {
    var Chatid = msg.chat.id;
    var listItems = exports.SL.map(function (SL) {
        var title = SL.title;
        var Disc = SL.Disclaimer;
        var list = SL.list.map(function (SL) {
            var name = SL.name;
            var price = SL.price;
            var code = SL.code;
            var discount = Math.round(price - 1000);
            return (">".concat(name, "\n-Rp ").concat(reseller.includes(Chatid) ? discount.toLocaleString() : price.toLocaleString(), "\nCode ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list, "\n\n").concat(Disc));
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.SL[0].list[1].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
//pubgm done //
bot.onText(pubgm, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listItems = exports.Pubgm.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var price = items.price;
            var code = items.code;
            var harga = price / 10;
            var discount = price * 7 / 100;
            return ("> ".concat(name, "\n> Rp. ").concat(reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString() : Math.round(price + harga).toLocaleString(), "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list));
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.Pubgm[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
//codm done // 
bot.onText(codm, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listitems = exports.CODM.map(function (items) {
        var title = items.title;
        var item = items.list.map(function (items) {
            var name = items.name;
            var price = items.price;
            var code = items.code;
            var harga = price / 10;
            var discount = price * 7 / 100;
            return ("> ".concat(name, "\n> Rp. ").concat(reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString() : Math.round(price + harga).toLocaleString(), "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(item));
    });
    bot.sendMessage(Chatid, "".concat(listitems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.CODM[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
// ff donee //
bot.onText(freefire, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listitems = exports.FF.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var price = items.price;
            var code = items.code;
            var harga = price / 10;
            var discount = price * 7 / 100;
            return ("> ".concat(name, "\n> Rp. ").concat(reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString() : Math.round(price + harga).toLocaleString(), "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list));
    }).join("\n\n");
    bot.sendMessage(Chatid, "".concat(listitems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.FF[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
//hok done //
bot.onText(HOK, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listitems = exports.Hok.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var price = items.price;
            var code = items.code;
            var harga = price * 10 / 100;
            var discount = price * 7 / 100;
            return ("> ".concat(name, "\n> Rp. ").concat(reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString() : Math.round(price + harga).toLocaleString(), "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n\n ").concat(list));
    });
    bot.sendMessage(Chatid, "".concat(listitems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.Hok[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(netflix, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon).then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(valo, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon).then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(pointblank, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon).then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.on('photo', function (msg) {
    var Chatid = 7118777240;
    var id = msg.chat.id;
    var userid = msg.from.id;
    var msgId = msg.message_id;
    console.log(msg);
    if (msg.caption == "/tf") {
        bot.forwardMessage(Chatid, userid, msgId);
        bot.sendMessage(Chatid, "> ".concat(msg.from.username, " > ").concat(msg.from.id));
    }
    else
        [
            bot.sendMessage(id, " gunakan /tf pada caption untuk mengirim bukti transfer")
        ];
});
