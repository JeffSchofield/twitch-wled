const { WLEDClient } = require('wled-client')
const { Client } = require('tmi.js')

async function init() {
	const wled = new WLEDClient('<WLED_DEVICE_IP>')

	const twitch = new Client({
		options: { debug: true },
		identity: {
			username: '<BOT_USERNAME>',
			password: '<OAUTH_TOKEN>'
		},
		channels: [ '<CHANNEL_NAME>' ]
	})

	// Wait for Twitch and WLED to be ready
	await Promise.allSettled([
		twitch.connect(),
		wled.isReady
	])

	twitch.on('message', (channel, tags, message, self) => {
		if(self) return

		if (message[0] == '!') { // If the first character in the message is `!`, this is a command
			let [command, ...args] = message.split(' ') // Turn the message into an array of words ['!command', 'arg1'], then use array destructuring to store the first array element as `command` and the rest of the array as `args`
			console.log(`Received command: ${ command }`)

			if(command == '!toggle') {
				wled.toggle()
			} else if(command == '!bri') {
				wled.setBrightness(parseInt(args[0]))
			}
		}
	})

}

init().catch(console.error)