(function() {

function s() {
	window.gis_options = {
		"googleDomain": "http://www.google.com"
	};
	var script = [
		{"name": "jQuery",
			"url": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"},
		{"name": "googleImageSearch",
			"url": "https://github.com/ddelphi/google-image-search-by-image/raw/master/google_image_search.js"}
	];

	var dataId = "googleImageSearch_20140212";
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < script.length; i++) {
		if (document.querySelector("script[data-id=%s]".replace("%s", dataId))) {
			break;
		}
		if (script[i].name === "jQuery" && typeof jQuery === "function") {
			continue;
		}
		var scriptNode = document.createElement("script");
		scriptNode.setAttribute("data-id", dataId);
		scriptNode.src = script[i].url;
		fragment.appendChild(scriptNode);
	}
	document.head.appendChild(fragment);
}

function main() {
	s();
}
main();

})()