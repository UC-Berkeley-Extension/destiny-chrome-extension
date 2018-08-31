// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// when chrome is running, add an event listener to it
chrome.runtime.onInstalled.addListener(function() {
  // store a color in the 'storage api' - this is where the state exists for chrome extensions
  // This sets the starting color for the extension
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });

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
