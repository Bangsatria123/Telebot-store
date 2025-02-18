const pict = "./QR.jpg"
const logo = "./logo.jpg"
const TelegramBot = require("node-telegram-bot-api");

const token : String = "6935824994:AAHkW2N8clxr8HnUJsxDTHgxZwXbxBFYi1I"


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
    {name : "/dmglobal( MOBILE LEGEND GLOBAL SERVER )"},
    {name : "/wdp ( MOBILE LEGEND WEEKLY DIAMOND PASS )"},
    {name : "/starlight ( MOBILE LEGEND MONTHLY STARLIGHT )"},
    {name : "/genshin ( GENSHIN IMPACT )"},
    {name : "/HOK ( HONOR OF KINGS )"},
    {name : "/netflix ( NETFLIX  )"},
    {name : "/freefire ( GARENA FREEFIRE INDONESIA )"},
    {name : "/pubgm ( TENCENT PUBG MOBILE )"},
    {name : "/codm ( CALL OF DUTY MOBILE )"},
    {name : "/valo ( VALORANT )"},
    {name : "/pointblank ( POINTBLANK LIST )"}
]
export const WDP : Array<{name : string, price : number, code : string}> = [
    {name : "WDP FAST" , price: 29000, code : "WDPFAST"},
    {name : "WDP SLOW (slot terbatas tanyakan dulu)", price: 27000, code : "WDPSLOW"},
    {name : "WEP PACK (x5 slot terbatas tanyakan dulu)", price : 25000, code : "WDPPACK"}
]
export const MLindo: Array<{ name: string, price: number, diamond: string }> = [
    { name: "19 Diamonds (17 + 2 Bonus)", price: 5257.20, diamond: "DB19" },
    { name: "28 Diamonds (25 + 3 Bonus)", price: 7647.12, diamond: "DB28" },
    { name: "44 Diamonds (40 + 4 Bonus)", price: 11433.76, diamond: "DB44" },
    { name: "59 Diamonds (53 + 6 Bonus)", price: 15257.84, diamond: "DB59" },
    { name: "85 Diamonds (77 + 8 Bonus)", price: 21911.76, diamond: "DB85" },
    { name: "170 Diamonds (154 + 16 Bonus)", price: 43896.32, diamond: "DB170" },
    { name: "240 Diamonds (217 + 23 Bonus)", price: 61873.76, diamond: "DB240" },
    { name: "296 Diamonds (256 + 40 Bonus)", price: 76138.40, diamond: "DB296" },
    { name: "408 Diamonds (367 + 41 Bonus)", price: 104704.08, diamond: "DB408" },
    { name: "568 Diamonds (503 + 65 Bonus)", price: 142828.40, diamond: "DB568" },
    { name: "875 Diamonds (774 + 101 Bonus)", price: 218892.96, diamond: "DB875" },
    { name: "2010 Diamonds (1708 + 302 Bonus)", price: 475872.80, diamond: "DB2010" },
    { name: "4830 Diamonds (4003 + 827 Bonus)", price: 1142000.08, diamond: "DB4830" },
    { name: "Twilight Pass", price: 142828.40, diamond: "TPP" },
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
                {name : "Call of Duty Mobile 62 CP", price: 9137.44, code : "CODMC62C"},
                {name : "Call of Duty Mobile 128 CP", price: 17824.56, code : "CODMC128C"},
                {name : "Call of Duty Mobile 106 CP", price: 18592.08, code : "CODMC106C"},
                {name : "Call of Duty Mobile 165 CP", price: 27981.20, code : "CODMC165C"},
                {name : "Call of Duty Mobile 264 CP", price: 40302.08, code : "CODMC264C"},
                {name : "Call of Duty Mobile 320 CP", price: 45757.92, code : "CODMC320C"},
                {name : "Call of Duty Mobile 390 CP", price: 60608.08, code : "CODMC390C"},
                {name : "Call of Duty Mobile 640 CP", price: 92698.32, code : "CODMC640C"},
                {name : "Call of Duty Mobile 1024 CP", price: 150005.44, code : "CODMC1024C"},
                {name : "Call of Duty Mobile 1288 CP", price: 190038.16, code : "CODMC1288C"},
                {name : "Call of Duty Mobile 1584 CP", price: 283566.40, code : "CODMC1584C"},
                {name : "Call of Duty Mobile 2059 CP", price: 289761.68, code : "CODMC2059C"},
                {name : "Call of Duty Mobile 2750 CP", price: 338361.92, code : "CODMC2750C"},
                {name : "Call of Duty Mobile 3564 CP", price: 445233.36, code : "CODMC3564C"},
                {name : "Call of Duty Mobile 5618 CP", price: 651870.96, code : "CODMC5618C"},
                {name : "Call of Duty Mobile 4013 CP", price: 704566.72, code : "CODMC4013C"},
                {name : "Call of Duty Mobile 7656 CP", price: 890429.28, code : "CODMC7656C"},
                {name : "Call of Duty Mobile 10560 CP", price: 1819763.92, code : "CODMC10560C"}
        ]
    }
]
export const FF : Array<{title : String, list : Array<{name : string, price : number , code : string}>}>=[
    {
        title : "** Daftar Harga Garena Free Fire **",
        list : [
        {name : "Garena Free Fire (Indonesia) - 50 Diamonds", price: 6088.16, code : "GFFID50D"},
        {name : "Garena Free Fire (Indonesia) - 70 Diamonds", price: 8372.00, code : "GFFID70D"},
        {name : "Garena Free Fire (Indonesia) - Level Up Pass", price: 12937.60, code : "GFFILUPP"},
        {name : "Garena Free Fire (Indonesia) - 140 Diamonds", price: 16779.36, code : "GFFID140D"},
        {name : "Garena Free Fire (Indonesia) - Member Mingguan", price: 25404.08, code : "GFFIMMM"},
        {name : "Garena Free Fire (Indonesia) - BP card", price: 38848.16, code : "GFFIBCC"},
        {name : "Garena Free Fire (Indonesia) - 355 Diamonds", price: 41928.64, code : "GFFID355D"},
        {name : "Garena Free Fire (Indonesia) - Member Bulanan", price: 76246.56, code : "GFFIMBB"},
        {name : "Garena Free Fire (Indonesia) - 720 Diamonds", price: 83893.68, code : "GFFID720D"},
        {name : "Garena Free Fire (Indonesia) - 1450 Diamonds", price: 169272.48, code : "GFFID1450D"},
        {name : "Garena Free Fire (Indonesia) - 2180 Diamonds", price: 255520.72, code : "GFFID2180D"},
        {name : "Garena Free Fire (Indonesia) - 3640 Diamonds", price: 425480.64, code : "GFFID3640D"},
        {name : "Garena Free Fire (Indonesia) - 7290 Diamonds", price: 838782.88, code : "GFFID7290D"}
        ]
    }
]
export const Hok : Array<{title : string, list : Array<{name : string, price : number, code : string}>}> = [
    {
        title : "** DAFTAR HARGA HONOR OF KINGS **",
        list  : [
        {name : "Honor of Kings - 80 + 8 Tokens", price: 12132.64, code : "HOKT80T"},
        {name : "Honor of Kings - Weekly Card", price: 14000.64, code : "HOKWCC"},
        {name : "Honor of Kings - 240 + 17 Tokens", price: 38823.20, code : "HOKT240T"},
        {name : "Honor of Kings - Weekly Card Plus", price: 38823.20, code : "HOKWCPP"},
        {name : "Honor of Kings - 400 + 32 Tokens", price: 66064.96, code : "HOKT400T"},
        {name : "Honor of Kings - 560 + 45 Tokens", price: 90034.88, code : "HOKT560T"},
        {name : "Honor of Kings - 800 + 65 Tokens", price: 123711.12, code : "HOKT800T"},
        {name : "Honor of Kings - 1200 + 108 Tokens", price: 194077.52, code : "HOKT1200T"},
        {name : "Honor of Kings - 2400 + 216 Tokens", price: 396426.16, code : "HOKT2400T"},
        {name : "Honor of Kings - 4000 + 400 Tokens", price: 660722.40, code : "HOKT4000T"},
        {name : "Honor of Kings - 8000 + 800 Tokens", price: 1164168.72, code : "HOKT8000T"}
        ]
    }
]


const reseller = [6586066756 , 1395190885]



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
    const url = `https://id-game-checker.p.rapidapi.com/mobile-legends/${id}/${server}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': "ff160ddb02msh8a65f414190e1d7p159344jsn61e34ea0c235",
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
        const price : number = item.price
        const code : string = item.diamond
        const percent : number = price * 10 / 100
        const harga : number = Math.round(price + percent)
        return `- ${name}\n- Rp ${harga.toLocaleString()}\n- ${code}`
    }).join(`\n\n`);
    bot.sendMessage(Chatid, `MOBILE LEGEND SERVER INDO\n${listItems} \n\n untuk membeli bisa gunakan ${prefix}buy [kode] [ id ] [ server ] [ nickname ]\n\n contoh : ${prefix}buy ${MLindo[1].diamond} 64378003 2109 TOKYO \n\n KESALAHAN INPUT BUKAN KESALAHAN DARI PIHAK KAMI `)
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
