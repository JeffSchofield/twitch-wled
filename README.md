# Twitch and WLED Integration with Node.js

This is an example of how to use [WLED Client](https://github.com/ShiftLimits/wled-client/) to control your WLED devices via Twitch Chat.

## Installation

If you're totally new to Node.js, make sure it is installed first. Head to [the Node.js website](https://nodejs.org/en/) then download and install the recommended release for your operating system. Node.js is a runtime for JavaScript code independent of the browser.

With Node.js installed, clone this repo to your computer or download the zip of this repo using the green `Code` button on the upper right side of this page and extract it somewhere on your computer.

**OS X and Linux users:** open Terminal

**Windows users:** open Command Prompt

In Terminal or Command Prompt, navigate to the folder for this repo that you cloned or extracted. You can use the `cd` (change directory) command to do this. For instance, I'm on Windows so I'd use `cd C:\repositories\twitch-wled`.

With Terminal or Command Prompt focused on this folder, you can use the Node Package Manager command, `npm install`, to install the dependencies for this project listed in `package.json`. This JSON file is what NPM and Node.js use to store important metadata about a project. When install command is finished you'll see something like:

```bash
added 11 packages, and audited 12 packages in 5s
```

Do not close the Terminal or Command Prompt window.

## Usage

To setup the connection to your WLED Device, replace `<WLED_DEVICE_IP>` with your device's IP address in `index.js`.

To setup the Twitch connection, follow [this page](https://dev.twitch.tv/docs/irc) to get the values you need for `<BOT_USERNAME>`, `<OAUTH_TOKEN>`, and `<CHANNEL_NAME>`. You'll need to authorize yourself with Twitch. Put those values in their appropriate places in `index.js`.

Finally you may run the example code back in your Terminal or Command Prompt window using the command `node index.js`, which runs Node.js and executes the file `index.js`.

The account defined earlier should connect to the Twitch channel you used for `<CHANNEL_NAME>`. Then you can send either `!toggle` or `!bri [number]` to the chat and watch your device react!

**Note**: This bot will ignore messages it has sent itself. If you're using your own account to both listen for commands and send them in chat, it will not work.

Customize the commands by editing the example code and reading up on the WLED Client docs:

```js
if(command == '!toggle') {
	wled.toggle()
} else if(command == '!bri') {
	wled.setBrightness(parseInt(args[0]))
}
```

Using the above as reference, try implementing a command like `!color [red] [green] [blue]`. The WLED Client command for setting the primary color is `wled.setColor([RED, GREEN, BLUE])`.

**Note**: As of creation WLED Client is in early stages and the package is a little bugged out so this code will change from `const { default: WLEDClient } = require('wled-client')` to `const WLEDClient = require('wled-client')` as of the next release.