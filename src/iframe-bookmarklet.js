javascript:(function(){
/* iframe-bookmarklet - util for iframe visiting
 * Copyright 2019+ Janroel Koppen
 */
var frs = [];
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
	var iframe = iframes[i];
	if (iframe && iframe.src && !iframe.src.match(/^about:blank/i)) {
		frs.push(iframe);
	}
}
var fr = frs[0];
if (frs.length > 0) {
	var select = document.createElement('select');
	var option = document.createElement('option');
	select.onchange = function(ev){ var value = this.options[this.selectedIndex].value; window.location.href = value; };
	select.setAttribute('style', "z-index:999999");
	var option = document.createElement('option');
	option.setAttribute('value', "about:blank");
	option.textContent = "[select iframe]";
	select.appendChild(option);
	for (i = 0; i < frs.length; i++) {
		var option = document.createElement('option');
		option.setAttribute('value', frs[i].src);
		option.textContent = frs[i].src.substr(0,32);
		select.appendChild(option);
	}
	document.body.insertBefore(select, document.body.firstChild)
}
}());
