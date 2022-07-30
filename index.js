require("dotenv").config();
const { exec } = require("node:child_process");
const chromeProfileList = require("chrome-profile-list");
const endPoint = process.env.ENDPOINT;
const cliOpeningProcess = process.env.CLIOPENINGPROCESS;

chromeProfileList().forEach(({ profileDirName }, i) => {
  setTimeout(() => {
    const command = `${cliOpeningProcess} ${endPoint} --args --profile-directory="${profileDirName}"`;

    console.log(`Running: ${command}`);
    exec(command);
  }, i * 1000);
});
