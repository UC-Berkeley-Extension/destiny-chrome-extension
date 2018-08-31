// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// get element with id, 'changeColor'
let colorOptionDiv = document.getElementById('colorOptions');


// get the value from chromes 'storage api'
chrome.storage.sync.get('colors', function(data) {
  console.log(data);
  let allColors = data.colors;

  for(let i=0; i<allColors.length; i++){
    console.log("entered for loop");
    let elem = document.createElement("BUTTON");
    elem.style.backgroundColor = allColors[i];
    elem.setAttribute('value', allColors[i]);
    colorOptionDiv.appendChild(elem);
  }

});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  let js = 'document.getElementById("navigation01").style.backgroundColor = "#003262";' + 'document.body.style.backgroundColor = "#FDB515";';

  chrome.tabs.executeScript(
    tabs[0].id,
    {code : js }
  );
})

colorOptionDiv.onclick = function(element) {
  let color = element.target.value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   
    let jsCode = 'document.body.style.backgroundColor = "' + color + '";';
    
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: jsCode});
  });
};
