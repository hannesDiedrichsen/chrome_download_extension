// only works when the popup is opened
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "download_request") {
            //  To do something
            console.log("Filename: " + request.data.subject)
            console.log("URL: " + request.data.content)
        }
    }
);