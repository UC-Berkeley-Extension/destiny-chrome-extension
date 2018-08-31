## Understanding Chrome Extensions

### It all starts in manifest.json
The Manifest.json starts as the root of the project. This is the file that bring everything together (background scripts, UI peices, CSS, etc)

### Background Scripts
You can read more about `background.js` in the file, however there are some things that are important to note:
- `Background.js` uses a 'storage api' - This needs to be registered in manifest.json under the `permissions` option.
- It also uses the 'declarativeContent api', which needs to be registered in the manifest.json file as well in the `permissions` array.  

### Popup UI
`Popup.html`
The pop up is the user interface of the extension.

### Layer Logic
`Popup.js`
The javascript that is applied to the page on clicking the user interface in the pop-up. 
Here, we can execute a programatically injected content script that allows us to transform elements on the DOM based on the data that exists in the storage.
- It also requires us to register the `activeTab` api in the manifest.json

### Options
`Options.html`
UI for the user to have options/set-configurations
`Options.js`
Logic for the extension functionality. Changes the storage api based on the user interactions.

[Learn more](https://developer.chrome.com/extensions/overview) about the architecture. 