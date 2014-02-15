# google image search script

## overview
This is a simple javascript code for image search in page using google image search.

The codes use google.com.hk server for image searching.

## usage
To use this script, you can copy the google_image_search.bookmarklet.js content to the url section of the bookmark editing dialog.

Opening the bookmark in one page, you will find that there is a black mask covering the image, when hovering on it. finally you can simple click the image for searching it.

Or simple drag [this link](javascript:(function(){function s(){var script=[{"name":"jQuery","url":"http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"},{"name":"googleImageSearch","url":"https://raw.github.com/ddelphi/google-image-search/master/google_image_search.js"}];var dataId="googleImageSearch_20140212";var fragment=document.createDocumentFragment();for(var i=0;i<script.length;i++){if(document.querySelector("script[data-id=%s]".replace("%s",dataId))){break;}if(script[i].name==="jQuery"&&typeof jQuery==="function"){continue;}var scriptNode=document.createElement("script");scriptNode.setAttribute("data-id",dataId);scriptNode.src=script[i].url;fragment.appendChild(scriptNode);}document.head.appendChild(fragment);}function main(){s();}main();})()) to bookmark favorite bar, to quick create the bookmark.