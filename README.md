# Twitch and WLED Integration with Node.js

This is an example of how to use [WLED Client](https://github.com/ShiftLimits/wled-client/) to control your WLED devices via Twitch Chat. Follow [this page](https://dev.twitch.tv/docs/irc) to get the environment variables you need to authorize yourself with Twitch. Then put those variables in their appropriate places in `index.js`.

Customize the commands by following the example code:

```js
if(command == '!toggle') {
	wled.toggle()
} else if(command == '!bri') {
	wled.setBrightness(parseInt(args[0]))
}
```

**Note**: As of creation WLED Client is in early stages so this code will change from `const { default: WLEDClient } = require('wled-client')` to `const WLEDClient = require('wled-client')` as of the next release.