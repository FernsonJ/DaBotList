module.exports = {
    bot: {
        token: process.env.TOKEN,
        prefix: "o",//YOUR OWN
        owners: ["OWNERID"],// OWNERS ID
        mongourl: "mongodb+srv://freepublicuse:116z9ex4cFU5Hs0u@publicforuse.shqkpkf.mongodb.net/?retryWrites=true&w=majority"//FREE MONGODB

    },

    website: {
        callback: "http://YOURWEBSITE/callback",//Your CallBack website
        secret: "BOTS_SECRET",//Your Bot Secret.
        clientID: "BOT_CLIENT_ID",//Your Bot ID
        tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","NSFW","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish" ]    
    },

    server: {
        id: "SERVER_ID",// SERVER ID
        roles: {
            yonetici: "ADMIN_ID", //ADMIN ROLE ID
            moderator: "MODERATOR_ID",// MOD ROLE ID 
            profile: {
                booster: "BOOSTER_ID",// BOOSTER ROLE ID 
                sponsor: "SPONSOR_ID",// SPONSOR ROLE ID
                supporter: "sUPPORTER_ID", //SUPORTER ROLE ID
                partnerRole: "PARTNER_ID" //partnerRole ID
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "ALTYAPILAR",
                bdfd: "BDFD",
                besdavet: "BESDAVET",
                ondavet: "ONDAVET",
                onbesdavet: "ONBESDAVET",
                yirmidavet: "YIRMIDAVET"
            },
            botlist: {
                developer: "ROLE_DEVELOPER_ID",// DEV ROLE ID 
                certified_developer: "CERTIFIED_DEVELOPER_ROLE_ID",// ROLE ID 
                bot: "BOT_IN_SERVER_ROLE_ID", //ROLE BOTS YOUR SERVER ID
                certified_bot: "CERTIFIED_BOT_IN_SERVER_ID" // ROLE ID 
            }
        },
        channels: { // PUT ID channels LOGS
            codelog: "CODE_LOG_CHANNEL",
            login: "LOGIN_STATUS_CHANNEL",
            webstatus: "WEB_STATUS_CHANNEL",
            uptimelog: "UPTIME_CHANNEL",
            botlog: "BOT_LOG_CHANNEL",
            votes: "VOTES_LOG_CHANNEL"
        }
    }


}
