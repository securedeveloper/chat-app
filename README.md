## Chat-Application using Socket.IO

Built with ❤️ using `socket.io`, `react@16`, `react-bootstrap`, `react-router`, `redux`, `typescript`, `node-sass`, `enzyme`, `jest` and alot more.

*HOW TO RUN THE APPLICATION*

Use the following steps to bootup the application:

```bash
#Tab-01 (For running server side`)
cd chat-app/server
yarn install
yarn start

#Tab-02 (For running client side)
cd chat-app/client
yarn install
yarn start
# if node-sass is not built and linked run `npm rebuild node-sass --force` before `yarn start`

#Tab-03 (For running unit tests)
cd chat-app/client
yarn install #if not installed already
yarn test
```
* Note: Make sure to bootup the server application before client.

* Port `3000` should be available for client and Port `3100` for server, if you happen to change the port number, please do so by change on `server.js` file on server side, and `src/settings.ts` on client side.

* When application is fully booted up, open `http://localhost:3000` on 2 different tabs (or more), go to settings and change your username, and start chatting.

### Sample messages:
If application is up and running you may test with the following sample messages

| Type | Content |
|-|-|
| Text | This ❤️ sentence includes `:+1:` a variety of emoji types `:)` |
| Audio | `https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3` |
| Video | `https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4` |
| Video | `https://youtu.be/VbfC4lrNulE` |
| Video | `https://vimeo.com/121649600` |
| Video | `https://www.dailymotion.com/video/x7dka22` |
| Image | `https://images.freeimages.com/images/large-previews/e6b/yellow-beetle-1366999.jpg` |
| URL | `http://gt-america.com/` |
| URL | `https://www.bbc.com/` |

### Functionalities:

* UI Settings

| Type | Options |
|-|-|
| UserName | Free choose |
| Language | `English`, `German`, or  `French` |
| Time Format | `12h`, or `24h` |
| Theme | `Dark`, or `Light` |
| Message Sending Key | `Enter`, or `CTRL + Enter` |


Other Details:


| Item | Details |
|-|-|
| Pages | chat & settings page via `react-router` |
|UserName|Changeable on settings page|
|Time Format|Changeable on settings page|
|Theme|Changeable on settings page|
|GUI Language|Changeable on settings page|
|Message Sending Mode|Changeable on settings page|
|Message Types Supported| `Audio`, `Video`, `Image`, `URL`, `Text` (including emojies)|
|Message Counter|  only visible when messages are available |


### Unit Testing:
Following are covered in unit testing:
* Components

    * all the components used in project

* models
    
    * actions
    * reducers
    * store

* utils
    
    * Utilities


