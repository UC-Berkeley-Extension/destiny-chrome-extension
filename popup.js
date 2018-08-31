// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// get element with id, 'changeColor'
let changeColor = document.getElementById('changeColor');

// get the value from chromes 'storage api'
chrome.storage.sync.get('color', function(data) {
  // set the background color to the color from the api
  changeColor.style.backgroundColor = data.color;
  // add a data attribute called 'value' that contains the color
  changeColor.setAttribute('value', data.color);
});

// when the user clicks on the changeColor icon in popup.html
changeColor.onclick = function(element) {
  // set a variable called 'color' that contains the value of the target clicked
  let color = element.target.value;
  // if the chrome tab is active and current..
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // .. execute a script that selects the first tab and adds the background color from the ref-value
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
