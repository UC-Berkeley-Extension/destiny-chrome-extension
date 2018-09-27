// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  let js = 'document.getElementById("navigation01").style.backgroundColor = "#003262";' + 'document.body.style.backgroundColor = "#FDB515";';

  chrome.tabs.executeScript(
    tabs[0].id,
    {code : js }
  );
})

// document.body.onload = alert('the extension loaded');

// when chrome is running, add an event listener to it
chrome.runtime.onInstalled.addListener(function() {
  // store a color in the 'storage api' - this is where the state exists for chrome extensions
  // This sets the starting color for the extension
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', "#000000", "#222222", "white"];
  chrome.storage.sync.set({colors: kButtonColors}, function() {
    console.log("color added to storage");
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
