const open = require("open");
const chromeProfileList = require('chrome-profile-list');
const endPoint = "http://twitch.com/dily_dali"

// can be chrome, firefox, or edge
const name = open.apps.chrome

chromeProfileList().forEach(({ profileDirName }, i) => {
    setTimeout(() => {
        console.log(`Opening ${profileDirName}`)
        open(endPoint, { app: { name, arguments: [`--profile-directory="${profileDirName}"`] } })
    }, i * 1000)
})