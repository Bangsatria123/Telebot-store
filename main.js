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
exports.FF = exports.CODM = exports.Pubgm = exports.SL = exports.Genshin = exports.MLGB = exports.MLindo = exports.WDP = exports.List = exports.Soon = void 0;
var pict = "./QR.jpg";
var TelegramBot = require("node-telegram-bot-api");
var token = "6935824994:AAHkW2N8clxr8HnUJsxDTHgxZwXbxBFYi1I";
var bot = new TelegramBot(token, { polling: true });
var prefix = "/";
var Start = new RegExp("^".concat(prefix, "start$"));
var Listharga = new RegExp("^".concat(prefix, "list$")); // list harga
var Buy = new RegExp("^".concat(prefix, "buy"));
var Process = new RegExp("^".concat(prefix, "process"));
var Check = new RegExp("^".concat(prefix, "check"));
var done = new RegExp("^".concat(prefix, "done"));
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
var codm = new RegExp("^".concat(prefix, "stalight$")); //dm stalight
var valo = new RegExp("^".concat(prefix, "valo$")); //dm valo
var pointblank = new RegExp("^".concat(prefix, "pointblank$")); //dm pointblank
// END LIST HARGA -------------------
exports.Soon = "ON PROGRESS\nWE'LL FIX IT RECENTLY PLEASE BE PATIENT";
exports.List = [
    { name: "/dmindo ( MOBILE LEGEND INDO SERVER )" },
    { name: "/dmglobal( MOBILE LEGEND GLOBAL SERVER )" },
    { name: "/wdp ( MOBILE LEGEND WEEKLY DIAMOND PASS )" },
    { name: "/starlight ( MOBILE LEGEND MONTHLY STARLIGHT )" },
    { name: "/genshin ( GENSHIN IMPACT )" },
    { name: "/HOK ( HONOR OF KINGS )" },
    { name: "/netflix ( NETFLIX  )" },
    { name: "/freefire ( GARENA FREEFIRE INDONESIA )" },
    { name: "/pubgm ( TENCENT PUBG MOBILE )" },
    { name: "/codm ( CALL OF DUTY MOBILE )" },
    { name: "/valo ( VALORANT )" },
    { name: "/pointblank ( POINTBLANK LIST )" }
];
exports.WDP = [
    { name: "WDP SERVER INDO", price: 27000, code: "WDPID" },
    { name: "WDP SERVER GLOBAL", price: 23000, code: "WDPGB" },
    { name: " ", price: 25000, code: "WDPBR" }
];
exports.MLindo = [
    { name: "Mobile Legends (Indonesia) - 5 Diamonds", price: 1449, diamond: "MLID5D" },
    { name: "Mobile Legends (Indonesia) - 12 Diamonds", price: 3370, diamond: "MLID12D" },
    { name: "Mobile Legends (Indonesia) - 17 + 2 Diamonds", price: 5290, diamond: "MLID19D" },
    { name: "Mobile Legends (Indonesia) - 25 + 3 Diamonds", price: 7682, diamond: "MLID28D" },
    { name: "Mobile Legends (Indonesia) - 40 + 4 Diamonds", price: 11524, diamond: "MLID44D" },
    { name: "Mobile Legends (Indonesia) - 53 + 6 Diamonds", price: 15364, diamond: "MLID59D" },
    { name: "Mobile Legends (Indonesia) - 77 + 8 Diamonds", price: 22069, diamond: "MLID85D" },
    { name: "Mobile Legends (Indonesia) - 154 + 16 Diamonds", price: 44138, diamond: "MLID170D" },
    { name: "Mobile Legends (Indonesia) - 217 + 23 Diamonds", price: 62222, diamond: "MLID240D" },
    { name: "Mobile Legends (Indonesia) - 256 + 40 Diamonds", price: 76573, diamond: "MLID296D" },
    { name: "Mobile Legends (Indonesia) - 367 + 41 Diamonds", price: 105310, diamond: "MLID408D" },
    { name: "Mobile Legends (Indonesia) - 503 + 65 Diamonds", price: 143651, diamond: "MLID568D" },
    { name: "Mobile Legends (Indonesia) - 774 + 101 Diamonds", price: 220186, diamond: "MLID875D" },
    { name: "Mobile Legends (Indonesia) - 1708 + 302 Diamonds", price: 478678, diamond: "MLID2010D" },
    { name: "Mobile Legends (Indonesia) - 4003 + 827 Diamonds", price: 1148697, diamond: "MLID4830D" },
    { name: "Mobile Legends (Indonesia) - Twilight Pass", price: 144085, diamond: "MLITPP" }
];
exports.MLGB = [
    {
        title: "**MOBILE LEGENDS GLOBAL SERVER**",
        list: [
            { name: "Mobile Legends - 5 Diamonds", price: 1594.736, code: "MLGB5D" },
            { name: "Mobile Legends - 10 + 1 Diamonds", price: 2591.16, code: "MLGB10D" },
            { name: "Mobile Legends - 14 Diamonds", price: 3787.784, code: "MLGB14D" },
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
            { name: "Starlight Card Promo beli lebih dari 5", price: 33000, code: "SLP" },
            { name: "Starlight Premium", price: 85000, code: "SLPREM" },
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
            { name: "Call of Duty Mobile 31 CP", price: 4480.32, code: "CODMC31C" },
            { name: "Call of Duty Mobile 26 CP", price: 4726.80, code: "CODMC26C" },
            { name: "Call of Duty Mobile 62 CP", price: 9137.44, code: "CODMC62C" },
            { name: "Call of Duty Mobile 128 CP", price: 17824.56, code: "CODMC128C" },
            { name: "Call of Duty Mobile 106 CP", price: 18592.08, code: "CODMC106C" },
            { name: "Call of Duty Mobile 165 CP", price: 27981.20, code: "CODMC165C" },
            { name: "Call of Duty Mobile 264 CP", price: 40302.08, code: "CODMC264C" },
            { name: "Call of Duty Mobile 320 CP", price: 45757.92, code: "CODMC320C" },
            { name: "Call of Duty Mobile 390 CP", price: 60608.08, code: "CODMC390C" },
            { name: "Call of Duty Mobile 640 CP", price: 92698.32, code: "CODMC640C" },
            { name: "Call of Duty Mobile 1024 CP", price: 150005.44, code: "CODMC1024C" },
            { name: "Call of Duty Mobile 1288 CP", price: 190038.16, code: "CODMC1288C" },
            { name: "Call of Duty Mobile 1584 CP", price: 283566.40, code: "CODMC1584C" },
            { name: "Call of Duty Mobile 2059 CP", price: 289761.68, code: "CODMC2059C" },
            { name: "Call of Duty Mobile 2750 CP", price: 338361.92, code: "CODMC2750C" },
            { name: "Call of Duty Mobile 3564 CP", price: 445233.36, code: "CODMC3564C" },
            { name: "Call of Duty Mobile 5618 CP", price: 651870.96, code: "CODMC5618C" },
            { name: "Call of Duty Mobile 4013 CP", price: 704566.72, code: "CODMC4013C" },
            { name: "Call of Duty Mobile 7656 CP", price: 890429.28, code: "CODMC7656C" },
            { name: "Call of Duty Mobile 10560 CP", price: 1819763.92, code: "CODMC10560C" }
        ]
    }
];
exports.FF = [
    {
        title: "** Daftar Harga Garena Free Fire **",
        list: [
            { name: "Garena Free Fire (Indonesia) - 5 Diamonds", price: 761.28, code: "GFFID5D" },
            { name: "Garena Free Fire (Indonesia) - 12 Diamonds", price: 1739.92, code: "GFFID12D" },
            { name: "Garena Free Fire (Indonesia) - 50 Diamonds", price: 6088.16, code: "GFFID50D" },
            { name: "Garena Free Fire (Indonesia) - 70 Diamonds", price: 8372.00, code: "GFFID70D" },
            { name: "Garena Free Fire (Indonesia) - Level Up Pass", price: 12937.60, code: "GFFILUPP" },
            { name: "Garena Free Fire (Indonesia) - 140 Diamonds", price: 16779.36, code: "GFFID140D" },
            { name: "Garena Free Fire (Indonesia) - Member Mingguan", price: 25404.08, code: "GFFIMMM" },
            { name: "Garena Free Fire (Indonesia) - BP card", price: 38848.16, code: "GFFIBCC" },
            { name: "Garena Free Fire (Indonesia) - 355 Diamonds", price: 41928.64, code: "GFFID355D" },
            { name: "Garena Free Fire (Indonesia) - Member Bulanan", price: 76246.56, code: "GFFIMBB" },
            { name: "Garena Free Fire (Indonesia) - 720 Diamonds", price: 83893.68, code: "GFFID720D" },
            { name: "Garena Free Fire (Indonesia) - 1450 Diamonds", price: 169272.48, code: "GFFID1450D" },
            { name: "Garena Free Fire (Indonesia) - 2180 Diamonds", price: 255520.72, code: "GFFID2180D" },
            { name: "Garena Free Fire (Indonesia) - 3640 Diamonds", price: 425480.64, code: "GFFID3640D" },
            { name: "Garena Free Fire (Indonesia) - 7290 Diamonds", price: 838782.88, code: "GFFID7290D" }
        ]
    }
];
bot.onText(Start, function (msg) {
    var Chatid = 7118777240;
    var id = msg.chat.id;
    bot.sendMessage(id, "silahkan ketik /list untuk melihat list harga\nSilahkan menggunakan \n{ /check id server } contoh : /check 64378003 2109 - tanpa tanda kurung untuk server\nuntuk melihat nickname anda agar lebih mudah untuk mengisi format pemberlian\n\n untuk check username sementara hanya untuk mobile legend, kami masih berusaha untuk melanjutkan pengembangan agar lebih berguna")
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
                url = "https://id-game-checker.p.rapidapi.com/mobile-legends/".concat(id, "/").concat(server);
                options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': "ff160ddb02msh8a65f414190e1d7p159344jsn61e34ea0c235",
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
    var text = msg.reply_to_message.text.split(" ");
    var receiver = text[8];
    var message = "\u2500\u2500 \u300C DETAIL PESANAN \u300D \u2500\u2500\n> id : ".concat(text[2], " \n> server : ").concat(text[3], "\n> nickname : ").concat(((_a = text[4].split("+")) === null || _a === void 0 ? void 0 : _a.join(" ")) || text[4], "\n> kode : ").concat(text[1], "\n> Status : sedang di proses silahkan tunggu 1 - 10 menit / 7 hari - 10 hari untuk starlight / gift\n> jika masih belum ada response setelah itu silahkan tinggalkan komentar dengan menggunakan /komen [ pesan ] \n\u2500\u2500 \u300C TERIMAKASIH TELAH BERBELANJA DI ANTASENA STORE \u300D \u2500\u2500\n\n\n");
    bot.sendMessage(receiver, "".concat(message));
    bot.sendMessage(Chatid, "".concat(text[2], " ").concat(text[3], " ").concat(text[4]));
});
bot.onText(done, function (msg) {
    var msgs = msg.reply_to_message.text.split(" ");
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
    bot.sendMessage(id, "".concat(chat, " from @").concat(username, " id ").concat(user));
    bot.sendPhoto(chatid, pict);
    bot.sendMessage(chatid, "PAYMENT\n\nAntasena Store\n__________________________\n\u2022SEABANK: - \n\u2022GOPAY: ".concat(phone, "\n\u2022SHOPEPAY: ").concat(phone, "\n\u2022OVO: ").concat(phone, "\n\u2022DANA: ").concat(phone, "\n\n\nUntuk E-Wallet / Bank Lain ke QRIS (Gratis)\n\nNote : \n\n-Kirim Bukti transfer ke @AntasenaStores\n\nPENTING\n\u2022 TF DANA-DANA biaya admin Rp.100 (jumlah tf + Rp 100)\n\u2022 TF BANK-DANA biaya admin Rp.500 (jumlah tf +Rp 500) \n\u2022 TF BANK KE OVO/GOPAY(Jumlah TF + 2.000}\n\n__________________________\nA/N : Dimas Satria"));
});
bot.onText(Listharga, function (msg) {
    var chatid = msg.chat.id;
    var userid = msg.from.id;
    var listItems = exports.List.map(function (List) {
        var name = List.name;
        return "".concat(name);
    }).join("\n");
    bot.sendMessage(chatid, "".concat(listItems))
        .then(function () {
        bot.deleteMessage(chatid, msg.message_id);
    });
});
bot.onText(indo, function (msg) {
    var Chatid = msg.chat.id;
    var listItems = exports.MLindo.map(function (item) {
        var name = item.name;
        var price = item.price;
        var code = item.diamond;
        var percent = price * 5 / 100;
        var harga = Math.round(price + percent);
        return "- ".concat(name, "\n- Rp ").concat(harga.toLocaleString(), "\n- ").concat(code);
    }).join("\n\n");
    bot.sendMessage(Chatid, "MOBILE LEGEND SERVER INDO\n".concat(listItems, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.MLindo[1].diamond, " 64378003 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(global, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listItems = exports.MLGB.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var prices = items.price;
            var code = items.code;
            var harga = Math.round(prices).toLocaleString();
            return (" > ".concat(name, "\n-Rp ").concat(harga, "\n-Code ").concat(code, " "));
        }).join("\n\n");
        return ("".concat(title, " \n\n").concat(list, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(items.list[1].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"));
    });
    bot.sendMessage(Chatid, "".concat(listItems))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(genshin, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listItems = exports.Genshin.map(function (item) {
        var items = item.title;
        var lists = item.list.map(function (lists) {
            var name = lists.name;
            var price = lists.price;
            var code = lists.code;
            return ("".concat(name, "\nRp- ").concat(price.toLocaleString(), "\n").concat(code));
        }).join("\n\n");
        return "".concat(items, "\n\n").concat(lists);
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.Genshin[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(wdp, function (msg) {
    var Chatid = msg.chat.id;
    var Wdp = exports.WDP.map(function (wdp) {
        var title = wdp.name;
        var harga = wdp.price;
        var kode = wdp.code;
        return "".concat(title, "\n").concat(harga.toLocaleString(), "\n").concat(kode);
    }).join("\n\n");
    bot.sendMessage(Chatid, "WEEKLY DIAMOND PASS\n".concat(Wdp, " \n\n untuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.WDP[0].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(starlight, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listItems = exports.SL.map(function (SL) {
        var title = SL.title;
        var Disc = SL.Disclaimer;
        var list = SL.list.map(function (SL) {
            var name = SL.name;
            var price = SL.price;
            var code = SL.code;
            return (">".concat(name, "\n-Rp ").concat(price, "\nCode ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list, "\n\n").concat(Disc));
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.SL[0].list[1].code, " 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "))
        .then(function () {
        bot.deleteMessage(Chatid, msg.message_id);
    });
});
bot.onText(pubgm, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listItems = exports.Pubgm.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (items) {
            var name = items.name;
            var price = items.price;
            var code = items.code;
            var percent = price / 10;
            var total = Math.round(price + percent);
            return ("> ".concat(name, "\n> Rp. ").concat(total, "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list));
    });
    bot.sendMessage(Chatid, "".concat(listItems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.Pubgm[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI "));
});
bot.onText(codm, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listitems = exports.CODM.map(function (items) {
        var title = items.title;
        var item = items.list.map(function (items) {
            var nama = items.name;
            var harga = items.price;
            var price = Math.round(harga);
            var untung = price * 7 / 100;
            var total = Math.round(untung + price);
            var code = items.code;
            return ("> ".concat(nama, "\n> Rp. ").concat(total, "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(item));
    });
    bot.sendMessage(Chatid, "".concat(listitems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.CODM[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"));
});
bot.onText(freefire, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    var listitems = exports.FF.map(function (items) {
        var title = items.title;
        var list = items.list.map(function (item) {
            var name = item.name;
            var price = item.price;
            var code = item.code;
            var untung = price * 7 / 100;
            var total = Math.round(price + untung);
            return ("> ".concat(name, "\n> Rp. ").concat(total, "\n> Code : ").concat(code));
        }).join("\n\n");
        return ("".concat(title, "\n\n").concat(list));
    }).join("\n\n");
    bot.sendMessage(Chatid, "".concat(listitems, "\n\nuntuk membeli bisa gunakan ").concat(prefix, "buy [kode] [ id ] [ nickname ]\n\n contoh : ").concat(prefix, "buy ").concat(exports.FF[0].list[2].code, " 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI"));
});
bot.onText(HOK, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon);
});
bot.onText(netflix, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon);
});
bot.onText(valo, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon);
});
bot.onText(pointblank, function (msg) {
    var Chatid = msg.chat.id;
    var userId = msg.from.id;
    bot.sendMessage(Chatid, exports.Soon);
});
