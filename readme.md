# google image search by image script

## overview

This is a simple javascript code for google search by image in a page using google image search service.

The codes use google.com server for image searching.

## usage

To use this script, you should create a bookmark by your self, then copy the content of the file google_image_search.bookmarklet.js to the url section which is in the bookmark editing dialog. 

Then you can open the bookmark on a page to load the script. When the script loaded, a message tooltip will be shown up at the upper left conner of the page.

When the script is on, you will find that there is a black mask covering the image when hovering on it. Then you can simply click the image to search it by google image search service.

To turn off the script, you can pressed the **[shift]** key to switch the state.

~~you can simply drag [this link](javascript:(function(){function s(){var script=[{"name":"jQuery","url":"http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"},{"name":"googleImageSearch","url":"https://raw.github.com/ddelphi/google-image-search/master/google_image_search.js"}];var dataId="googleImageSearch_20140212";var fragment=document.createDocumentFragment();for(var i=0;i<script.length;i++){if(document.querySelector("script[data-id=%s]".replace("%s",dataId))){break;}if(script[i].name==="jQuery"&&typeof jQuery==="function"){continue;}var scriptNode=document.createElement("script");scriptNode.setAttribute("data-id",dataId);scriptNode.src=script[i].url;fragment.appendChild(scriptNode);}document.head.appendChild(fragment);}function main(){s();}main();})()) to bookmark favorite bar of your browser, to quickly create the bookmark.~~

## other functions

To change the google domain to suit your country, you can change the setting 'gis_options.googleDomain' which in the front of the bookmarklet content.

For example:

	window.gis_options = { googleDomain: "http://google.ca" }
