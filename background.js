/*
 * This file loads up as soon as the chrome extension is clicked on (or activated) first.
 * 
 * In our functionality it:
 *  - changes the background color to yellow and the navigation to blue. (Cal Colors)
 *  - Adds the option of colors to storage
 *  - Makes sure the host is berkeleytestsv.destinysolutions.com
 */

'use strict';

// when chrome is running, add an event listener to it
chrome.runtime.onInstalled.addListener(function() {

  // the declarativeContent api is another api used to take actions on the page based on the content of the page
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function()
  {
    chrome.declarativeContent.onPageChanged.addRules([{
      // in this scenario, we check if the host is 'developer.chrome.com'
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'berkeleytestsv.destinysolutions.com'},
      })],
      // runs the 'action' if the above criteria is met -  im this case, putting an icon on the chrome toolbar
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});