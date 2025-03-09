
import * as dotenv from 'dotenv';
dotenv.config();
const pict = "./QR.jpg"
const logo = "./logo.jpg"
const TelegramBot = require("node-telegram-bot-api");

const token : String = `${process.env.TELE_TOKEN}`


const bot = new TelegramBot(token, {polling : true})




const prefix : string = "/"

const Start = new RegExp(`^${prefix}start$`)
const Listharga = new RegExp(`^${prefix}list$`) // list harga
const Buy = new RegExp(`^${prefix}buy`)
const Process = new RegExp(`^${prefix}process`)
const Check = new RegExp(`^${prefix}check`)
const done = new RegExp(`^${prefix}done`)
const Ai = new RegExp(`^${prefix}ai`)
const TF = new RegExp(`^${prefix}tf`)

// LIST HARGA --------
const indo = new RegExp(`^${prefix}dmindo$`)
const genshin = new RegExp(`^${prefix}genshin$`)
const global = new RegExp(`^${prefix}dmglobal$`) //dm global
const wdp = new RegExp(`^${prefix}wdp$`) //dm wdp
const starlight = new RegExp(`^${prefix}starlight$`) //dm stalight
const HOK = new RegExp(`^${prefix}HOK$`) //dm HOK
const netflix = new RegExp(`^${prefix}netflix$`) //dm netflix
const freefire = new RegExp(`^${prefix}freefire$`) //dm freefire
const pubgm = new RegExp(`^${prefix}pubgm$`) //dm pubgm
const codm = new RegExp(`^${prefix}codm$`) //dm stalight
const valo = new RegExp(`^${prefix}valo$`) //dm valo
const pointblank = new RegExp(`^${prefix}pointblank$`) //dm pointblank
// END LIST HARGA -------------------


export const Soon : string = "ON PROGRESS\nWE'LL FIX IT RECENTLY PLEASE BE PATIENT"
export const List : Array<{name : string}>= [
    {name : "/dmindo ( MOBILE LEGEND INDO SERVER )"},
    {name : "/wdp ( MOBILE LEGEND WEEKLY DIAMOND PASS )"},
    {name : "/starlight ( MOBILE LEGEND MONTHLY STARLIGHT )"},
    {name : "/HOK ( HONOR OF KINGS )"},
    {name : "/netflix ( NETFLIX  )"},
    {name : "/freefire ( GARENA FREEFIRE INDONESIA )"},
    {name : "/codm ( CALL OF DUTY MOBILE )"},
]
export const WDP : Array<{name : string, price : number, code : string}> = [
    {name : "WDP FAST" , price: 29000, code : "WDPFAST"},
    {name : "WDP SLOW (slot terbatas tanyakan dulu)", price: 27000, code : "WDPSLOW"},
    {name : "WEP PACK (x5 slot terbatas tanyakan dulu)", price : 25000, code : "WDPPACK"}
]
export const MLindo: Array<{ name: string, price: number, code : string }> = [
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
]
export const MLGB : Array<{title : string, list : Array<{name : string, price : number, code : string}>}>=[
    {
    title : "**MOBILE LEGENDS GLOBAL SERVER**",
    list : [
    {name : "Mobile Legends - 20 + 2 Diamonds", price: 5182.32, code : "MLGB20D"},
    {name : "Mobile Legends - 42 Diamonds", price: 11361.064, code : "MLGB42D"},
    {name : "Mobile Legends - 51 + 5 Diamonds", price: 12875.72, code : "MLGB51D"},
    {name : "Mobile Legends - 78 Diamonds + 8 Diamonds", price: 16942.64, code : "MLGB78B"},
    {name : "Mobile Legends - 70 Diamonds", price: 18895.448, code : "MLGB70D"},
    {name : "Mobile Legends - 102 + 10 Diamonds", price: 25671.36, code : "MLGB102D"},
    {name : "Mobile Legends - 156 Diamonds + 16 Diamonds", price: 33882.992, code : "MLGB156B"},
    {name : "Mobile Legends - 140 Diamonds", price: 37710.816, code : "MLGB140D"},
    {name : "Mobile Legends - 234 Diamonds + 23 Diamonds", price: 50466.416, code : "MLGB234B"},
    {name : "Mobile Legends - 203 + 20 Diamonds", price: 51263.784, code : "MLGB203D"},
    {name : "Mobile Legends - 303 + 33 Diamonds", price: 73787.7972, code : "MLGB303D"},
    {name : "Mobile Legends - 284 Diamonds", price: 79333.046, code : "MLGB284D"},
    {name : "Mobile Legends - 355 Diamonds", price: 90685.7744, code : "MLGB355D"},
    {name : "Mobile Legends - 429 Diamonds", price: 108770.922, code : "MLGB429D"},
    {name : "Mobile Legends - 504 + 66 Diamonds", price: 122954.4264, code : "MLGB504D"},
    {name : "Mobile Legends - 625 Diamonds + 81 Diamonds", price: 129071.3164, code : "MLGB625B"},
    {name : "Mobile Legends - 716 Diamonds", price: 198366.0796, code : "MLGB716D"},
    {name : "Mobile Legends - 1007 + 156 Diamonds", price: 245907.7556, code : "MLGB1007D"},
    {name : "Mobile Legends - 1084 Diamond", price: 269856.132, code : "MLGB1084D"},
    {name : "Mobile Legends - 1446 Diamonds", price: 359883.888, code : "MLGB1446D"},
    {name : "Mobile Legends - 1860 Diamonds + 335 Diamonds", price: 386138.844, code : "MLGB1860B"},
    {name : "Mobile Legends - 2015 + 383 Diamonds", price: 489484.632, code : "MLGB2015D"},
    {name : "Mobile Legends - 3099 Diamonds + 589 Diamonds", price: 628230.044, code : "MLGB3099B"},
    {name : "Mobile Legends - 2976 Diamonds", price: 704636.66, code : "MLGB2976D"},
    {name : "Mobile Legends - 4649 Diamonds + 883 Diamonds", price: 947377.652, code : "MLGB4649B"},
    {name : "Mobile Legends - 5035 + 1007 Diamonds", price: 1194502.036, code : "MLGB5035D"},
    {name : "Mobile Legends - 7740 Diamonds + 1548 Diamonds", price: 1578949.606, code : "MLGB7740B"},
    {name : "Mobile Legends - 7502 Diamonds", price: 1758136.744, code : "MLGB7502D"},
    {name : "Mobile Legends - Twilight Pass", price: 113000, code : "MLGBTP"},
    ]
    }
]
export const Genshin : Array<{title : string , list : Array<{name : string , price : number , code : string}>}>=[
    {
        title: "**GENSHIN IMPACT TOP UP**",
        list: [
            {name : "60 Genesis Crystals", price: 12000, code : "GIGC60C"},
            {name : "300 + 30 Genesis Crystal", price: 58000, code : "GIGC300C"},
            {name : "Blessing of the Welkin Moon", price: 59000, code : "GIBOTWM"},
            {name : "980 + 110 Genesis Crystals", price: 172000, code : "GIGC980C"},
            {name : "1980 + 260 Genesis Crystals", price: 366000, code : "GIGC1980C"},
            {name : "3280 + 600 Genesis Crystals", price: 561000, code : "GIGC3280C"},
            {name : "6480 + 1600 Genesis Crystals", price: 1120000, code : "GIGC6480C"}
        ]
    }
]
export const  SL : Array<{title : string, list : Array<{name : string, price : number, code : string}>, Disclaimer : string}>=[
    {
        title : "**STARLIGHT**",
        list : [
            {name : "Starlight card 7 days friendlist", price : 35000, code : "SL7D"},
            {name : "Starlight Card Promo beli lebih dari 5", price : 33000, code : "SLP"}
        ],
        Disclaimer : `✅ Delay 7-8H max 12hari\n⚠TIDAK MENERIMA SISTEM BERTEMAN DULU\n⚠SETIAP GIFT ITEM SL AKAN MENGURANGI KOUTA GIFT CARA AGAR TERHINDAR DARI ITU GIFT DARI AKUN ADMIN KE BUYER\n⚠NICK NAME TIDAK ADA UNSUR TOKO JADI AMAN\n⚠ CANCELDP HANGUS ATAU PEMBAYARAN LUNAS DIPOTONG 50%\n⚠ CHANGE NAME TANPA KONFIRMASI & UNFOLLOW AKUN ADMIN SEBELUM TANGGAL PENGIRIMAN DINYATAKAN HANGUS.\nMEMBELI BERARTI SETUJU`
    }
]
export const Pubgm : Array<{title : string, list : Array<{name : string , price : number , code : string}>}> = [
    {        
    title : "** Daftar Harga PUBG Mobile **",
    list : [
    {name : "PUBG Mobile (Indonesia) - 30 UC", price: 6378.32, code : "PMIUC30C"},
    {name : "PUBG Mobile (Indonesia) - 60 UC", price: 12720.24, code : "PMIUC60C"},
    {name : "PUBG Mobile (Indonesia) - 325 UC", price: 63635.52, code : "PMIUC325C"},
    {name : "PUBG Mobile (Indonesia) - 660 UC", price: 127271.04, code : "PMIUC660C"},
    {name : "PUBG Mobile (Indonesia) - 1800 UC", price: 318141.20, code : "PMIUC1800C"},
    {name : "PUBG Mobile (Indonesia) - 3850 UC", price: 636281.36, code : "PMIUC3850C"},
    {name : "PUBG Mobile (Indonesia) - 8100 UC", price: 1272561.68, code : "PMIUC8100C"},
    {name : "PUBG Mobile (Indonesia) - Paket Upgrade RP", price: 140968.88, code : "PMIPURR"},
    {name : "PUBG Mobile (Indonesia) - Paket Upgrade Elite RP", price: 359996.00, code : "PMIPUERR"}
    ]
    }
]
export const CODM : Array<{title : string, list : Array<{name : string, price : number, code : string}>}> =[
    {
        title : `DAFTAR HARGA CODM`,
        list : [
                {name : "Call of Duty Mobile 31 CP", price: 4357, code : "CODMC31C"},
                {name : "Call of Duty Mobile 63 CP", price: 8752, code : "CODMC63C"},
                {name : "Call of Duty Mobile 128 CP", price: 17505, code : "CODMC128C"},
                {name : "Call of Duty Mobile 321 CP", price: 43764, code : "CODMC321C"},
                {name : "Call of Duty Mobile 645 CP", price: 87491, code : "CODMC645C"},
                {name : "Call of Duty Mobile 800 CP", price: 104997, code : "CODMC800C"},
                {name : "Call of Duty Mobile 1373 CP", price: 175020, code : "CODMC1373C"},
                {name : "Call of Duty Mobile 2060 CP", price: 262512, code : "CODMC2060C"},
                {name : "Call of Duty Mobile 2750 CP", price: 332497, code : "CODMC2750C"},
                {name : "Call of Duty Mobile 3564 CP", price: 437495, code : "CODMC3564C"},
                {name : "Call of Duty Mobile 5618 CP", price: 689614, code : "CODMC5618C"},
                {name : "Call of Duty Mobile 7656 CP", price: 875028, code : "CODMC7656C"},
                {name : "Call of Duty Mobile 15312 CP", price: 1750054, code : "CODMC15312C"},
                {name : "Call of Duty Mobile 38280 CP", price: 4375138, code : "CODMC38280C"},
                {name : "Call of Duty Mobile 76569 CP", price: 8750277, code : "CODMC76569C"}
        ]
    }
]
export const FF : Array<{title : String, list : Array<{name : string, price : number , code : string}>}>=[
    {
        title : "** Daftar Harga Garena Free Fire **",
        list : [
        {name : "Garena Free Fire (Indonesia) - 5 Diamonds", price: 856, code : "GFFID5D"},
        {name : "Garena Free Fire (Indonesia) - 12 Diamonds", price: 1712, code : "GFFID12D"},
        {name : "Garena Free Fire (Indonesia) - 50 Diamonds", price: 6592, code : "GFFID50D"},
        {name : "Garena Free Fire (Indonesia) - 70 Diamonds", price: 8446, code : "GFFID70D"},
        {name : "Garena Free Fire (Indonesia) - 140 Diamonds", price: 17058, code : "GFFID140D"},
        {name : "Garena Free Fire (Indonesia) - 355 Diamonds", price: 42683, code : "GFFID355D"},
        {name : "Garena Free Fire (Indonesia) - 720 Diamonds", price: 84362, code : "GFFID720D"},
        {name : "Garena Free Fire (Indonesia) - 1450 Diamonds", price: 170438, code : "GFFID1450D"},
        {name : "Garena Free Fire (Indonesia) - 2180 Diamonds", price: 256477, code : "GFFID2180D"},
        {name : "Garena Free Fire (Indonesia) - 3640 Diamonds", price: 429412, code : "GFFID3640D"},
        {name : "Garena Free Fire (Indonesia) - 7290 Diamonds", price: 856218, code : "GFFID7290D"},
        {name : "Garena Free Fire (Indonesia) - Level Up Pass", price: 13817, code : "GFFILUPP"},
        {name : "Garena Free Fire (Indonesia) - Member Mingguan", price: 27525, code : "GFFIMMM"},
        {name : "Garena Free Fire (Indonesia) - BP card", price: 41380, code : "GFFIBCC"},
        {name : "Garena Free Fire (Indonesia) - Member Bulanan", price: 82649, code : "GFFIMBB"}
        ]
    }
]
export const Hok : Array<{title : string, list : Array<{name : string, price : number, code : string}>}> = [
    {
        title : "** DAFTAR HARGA HONOR OF KINGS **",
        list  : [
        {name : "17 Tokens", price: 2271, code : "HOKT17T"},
        {name : "88 Tokens", price: 12328, code : "HOKT88T"},
        {name : "257 Tokens", price: 38847, code : "HOKT257T"},
        {name : "432 Tokens", price: 65217, code : "HOKT432T"},
        {name : "605 Tokens", price: 89614, code : "HOKT605T"},
        {name : "895 Tokens", price: 122241, code : "HOKT895T"},
        {name : "1353 Tokens", price: 191558, code : "HOKT1353T"},
        {name : "2724 Tokens", price: 381141, code : "HOKT2724T"},
        {name : "4580 Tokens", price: 624173, code : "HOKT4580T"},
        {name : "9160 Tokens", price: 1222712, code : "HOKT9160T"},
        {name : "Weekly Card", price: 12068, code : "HOKWCC"},
        {name : "Weekly Card Plus", price: 38847, code : "HOKWCPP"}
        ]
    }
]


const reseller = [6586066756 , 1395190885, 8048254429]



bot.onText(Start,       (msg : any)=>{
    const Chatid : number =  7118777240
    const id : number = msg.chat.id
    const caption : string  = `Silahkan Gunakan\n> /list untuk melihat daftar harga\nSilahkan gunakan \n{ /check id server } contoh : /check 64378003 2109 - tanpa tanda kurung untuk server\nUntuk melihat nickname anda agar lebih mudah untuk mengisi format pemberlian\n\n Untuk check username sementara hanya untuk mobile legend, kami masih berusaha untuk melanjutkan pengembangan agar lebih berguna`
    bot.sendPhoto(id, logo, {caption : caption})
    .then(()=>{
        bot.deleteMessage(id, msg.message_id)
    })
})
bot.onText(Check,  async(msg : any)=>{
    const chatid : number = msg.chat.id
    const id : number = msg.text.split(" ")[1]
    const server : number = msg.text.split(" ")[2]
    const url = `${process.env.ID_ENDPOINT}/${id}/${server}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': `${process.env.RAPID_APIKEY}`,
            'x-rapidapi-host':'id-game-checker.p.rapidapi.com',
        }
    };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const nickname = result.data
            const username = nickname.username.split(" ").join("+")
            bot.sendMessage(chatid, `>Nickname : ${username}\n>id : ${id}\n>server : ${server}`)
            bot.sendMessage(chatid, `${id} ${server} ${username}`)
            .then(()=>{
                bot.deleteMessage(chatid, msg.message_id)
            })
        } catch (error) {
            console.error(error);
        }
})
bot.onText(Process,     (msg : any)=>{
    const Chatid : number = msg.chat.id
    const text : string = msg.text.split(` `)
    const receiver = text[8]
    console.log(text)
    const message : string = `── 「 DETAIL PESANAN 」 ──\n> id : ${text[2]} \n> server : ${text[3]}\n> nickname : ${text[4].split("+")?.join(" ") || text[4]}\n> kode : ${text[1]}\n> Status : sedang di proses silahkan tunggu 1 - 10 menit / 7 hari - 10 hari untuk starlight / gift\n> jika masih belum ada response setelah itu silahkan tinggalkan komentar dengan menggunakan /komen [ pesan ] \n── 「 TERIMAKASIH TELAH BERBELANJA DI ANTASENA STORE 」 ──\n\n\n`
        bot.sendMessage(receiver, `${message}`)
        bot.sendMessage(Chatid, `${text[2]} ${text[3]} ${text[4]}`)

})
bot.onText(done,        (msg : any)=>{
    const msgs = msg.text.split(" ")
    const receiver = msgs[8]
    const message : string = `── 「 DETAIL PESANAN 」 ──\n> id : ${msgs[2]} \n> server : ${msgs[3]}\n> nickname : ${msgs[4].split("+").join(" ")}\n> kode : ${msgs[1]}\n> Status : Pesanan Telah Terkirim Silahkan Cek Melalui In Game\n\n── 「 TERIMAKASIH TELAH BERBELANJA DI ANTASENA STORE 」 ──\n\n\n`
        bot.sendMessage(receiver, `${message}`)
})
bot.onText(Buy,         (msg : any)=>{
    const chatid : number = msg.chat.id
    const chat : any = msg?.text
    const user : number = msg.from.id
    const username : string = msg.from.username
    const id : number = 7118777240
    const phone : string = "081231511565"
    const captions : string = `=------------PAYMENT----------=\n\nAntasena Store\n__________________________\n•SEABANK: - \n•GOPAY: ${phone}\n•SHOPEPAY: ${phone}\n•OVO: ${phone}\n•DANA: ${phone}\n\n\nUntuk E-Wallet / Bank Lain ke QRIS (Gratis)\n\nNote : \n\n-Kirim Bukti transfer ke @AntasenaStores\n\nPENTING\n• TF DANA-DANA biaya admin Rp.100 (jumlah tf + Rp 100)\n• TF BANK-DANA biaya admin Rp.500 (jumlah tf +Rp 500) \n• TF BANK KE OVO/GOPAY(Jumlah TF + 2.000}\n\n__________________________\nA/N : Dimas Satria`
    bot.sendMessage(id, `${chat} from @${username} id ${user}`)
    bot.sendPhoto(chatid, pict, {caption : captions,})
})
bot.onText(Listharga,   (msg : any)=>{
    const chatid : number = msg.chat.id
    const userid : number = msg.from.id
    const listItems = List.map(List => {
        const name : string = List.name
        return `${name}`
    }).join(`\n`)
    bot.sendMessage(chatid, `${listItems} `)
    .then(()=>{
        bot.deleteMessage(chatid, msg.message_id)
    })
})
bot.onText(indo,        (msg : any)=>{  
    const Chatid : number = msg.chat.id
    const listItems = MLindo.map(item => {
        const name : string = item.name
        const qris : number = Math.round(item.price * 0.75 / 100)
        const price : number = item.price + qris
        const code : string = item.code
        const percent : number = price * 10 / 100
        const discount : number = price * 5 / 100
        const harga : number =  reseller.includes(Chatid) ? Math.round(price + discount) : Math.round(price + percent)
        return `- ${name}\n- Rp ${harga.toLocaleString()}\n- ${code}`
    }).join(`\n\n`);
    bot.sendMessage(Chatid, `MOBILE LEGEND SERVER INDO\n${listItems} \n\n untuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ${prefix}buy ${MLindo[1].code} 64378003 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
//global done // 
bot.onText(global,      (msg : any)=>{
    const Chatid : number = msg.chat.id

    const listItems = MLGB.map(items => {
        const title : string = items.title
        const list = items.list.map(items=>{
            const name : string = items.name
            const prices : number = items.price
            const code : string = items.code
            const harga : string = Math.round(prices).toLocaleString()
            const discount : number = Math.round(prices - Math.round(prices * 1.5 /100))
            return (` > ${name}\n-Rp ${reseller.includes(Chatid) ? discount.toLocaleString() : harga}\n-Code ${code} `)
        }).join(`\n\n`)
        return (`${title} \n\n${list} \n\n untuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ${prefix}buy ${items.list[1].code} 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI`)
    })
    bot.sendMessage(Chatid, `${listItems}`)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
// gesnhin done //
bot.onText(genshin,     (msg : any)=>{
    const Chatid : number = msg.chat.id
    const listItems = Genshin.map(item => {
        const items = item.title
        const lists = item.list.map(lists => {
            const name : string = lists.name
            const price : number = lists.price
            const code : string = lists.code
            const discount : number = Math.round(price - Math.round(price * 1.5 / 100))
            return (`${name}\nRp- ${reseller.includes(Chatid) ? discount.toLocaleString() : price.toLocaleString()}\n${code}`)
        }).join(`\n\n`)
        return `${items}\n\n${lists}`
    })
    bot.sendMessage(Chatid, `${listItems}\n\n untuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ nickname ]\n\n contoh : ${prefix}buy ${Genshin[0].list[2].code} 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
    .then(()=> {
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
 // wdp done //
bot.onText(wdp,         (msg : any)=>{
    const Chatid : number = msg.chat.id

    const Wdp = WDP.map(wdp => {
        const title = wdp.name
        const harga = wdp.price
        const kode  = wdp.code
        const discount : number = Math.round(harga - 1000)
        return `${title}\n${reseller.includes(Chatid) ? discount.toLocaleString() : harga.toLocaleString()}\n${kode}`
    }).join(`\n\n`)
    bot.sendMessage(Chatid, `WEEKLY DIAMOND PASS\n${Wdp} \n\n untuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ${prefix}buy ${WDP[0].code} 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
// starlight done //
bot.onText(starlight,   (msg : any)=>{
    const Chatid : number = msg.chat.id
    const listItems = SL.map(SL => {
        const title : string = SL.title
        const Disc : string = SL.Disclaimer
        const list = SL.list.map(SL => {
            const name : string = SL.name
            const price : number = SL.price
            const code : string = SL.code
            const discount : number = Math.round(price - 1000)
            return (`>${name}\n-Rp ${reseller.includes(Chatid) ? discount.toLocaleString() : price.toLocaleString()}\nCode ${code}`)
        }).join(`\n\n`)
        return (`${title}\n\n${list}\n\n${Disc}`)
    })
    bot.sendMessage(Chatid, `${listItems}\nuntuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ${prefix}buy ${SL[0].list[1].code} 64378004 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
//pubgm done //
bot.onText(pubgm,       (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id
    const listItems = Pubgm.map(items => {
        const title : string = items.title
        const list = items.list.map(items => {
            const name : string = items.name
            const price : number = items.price
            const code : string = items.code 
            const harga : number = price / 10
            const discount : number = price * 7 / 100
            return (`> ${name}\n> Rp. ${reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString():Math.round(price + harga).toLocaleString()}\n> Code : ${code}`)
        }).join(`\n\n`)
        return(`${title}\n\n${list}`)
        
    })

    bot.sendMessage(Chatid, `${listItems}\n\nuntuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ nickname ]\n\n contoh : ${prefix}buy ${Pubgm[0].list[2].code} 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
//codm done // 
bot.onText(codm,        (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id
    const listitems = CODM.map(items => {
        const title : string = items.title
        const item = items.list.map(items => {
            const name : string = items.name
            const price : number = items.price
            const code : string = items.code
            const harga : number = price / 10
            const discount : number = price * 7 / 100
            return (`> ${name}\n> Rp. ${reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString():Math.round(price + harga).toLocaleString()}\n> Code : ${code}`)
        }).join(`\n\n`)
        return(`${title}\n\n${item}`)
    })
    bot.sendMessage(Chatid, `${listitems}\n\nuntuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ nickname ]\n\n contoh : ${prefix}buy ${CODM[0].list[2].code} 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI`)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
// ff donee //
bot.onText(freefire,    (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id
    const listitems = FF.map(items => {
        const title : String = items.title
        const list = items.list.map(items => {
            const name : string = items.name
            const price : number = items.price
            const code : string = items.code
            const harga : number = price / 10
            const discount : number = price * 7 / 100
            return (`> ${name}\n> Rp. ${reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString():Math.round(price + harga).toLocaleString()}\n> Code : ${code}`)
        }).join(`\n\n`)
        return(`${title}\n\n${list}`)
    }).join(`\n\n`)

    bot.sendMessage(Chatid, `${listitems}\n\nuntuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ nickname ]\n\n contoh : ${prefix}buy ${FF[0].list[2].code} 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI`)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
//hok done //
bot.onText(HOK,         (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id

    const listitems = Hok.map(items => {
        const title = items.title
        const list = items.list.map(items => {
            const name : string = items.name
            const price : number = items.price
            const code : string = items.code
            const harga : number = price * 10 /100
            const discount : number = price * 7 / 100
            return (`> ${name}\n> Rp. ${reseller.includes(Chatid) ? Math.round(price + discount).toLocaleString():Math.round(price + harga).toLocaleString()}\n> Code : ${code}`)
        }).join(`\n\n`)
        return(`${title}\n\n\n ${list}`)
    })
    bot.sendMessage(Chatid, `${listitems}\n\nuntuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ nickname ]\n\n contoh : ${prefix}buy ${Hok[0].list[2].code} 64378003 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI`)
    .then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
bot.onText(netflix,     (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id

    bot.sendMessage(Chatid, Soon).then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
bot.onText(valo,        (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id

    bot.sendMessage(Chatid, Soon).then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
bot.onText(pointblank,  (msg : any)=>{
    const Chatid : number = msg.chat.id
    const userId : number = msg.from.id

    bot.sendMessage(Chatid, Soon).then(()=>{
        bot.deleteMessage(Chatid, msg.message_id)
    })
})
bot.on('photo', (msg : any)=>{
    const Chatid = 7118777240
    const id = msg.chat.id
    const userid = msg.from.id
    const msgId = msg.message_id
    console.log(msg)
    if(msg.caption == "/tf"){
        bot.forwardMessage(Chatid, userid, msgId)
        bot.sendMessage(Chatid, `> ${msg.from.username} > ${msg.from.id}`)
    }
    else [
        bot.sendMessage(id, " gunakan /tf pada caption untuk mengirim bukti transfer")
    ]
})
