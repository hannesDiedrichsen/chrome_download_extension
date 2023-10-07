
// logic to intercept a download, save the url, the filesize and get the filename
chrome.downloads.onCreated.addListener(function (downloadItem) {

    console.log('Download intercepted:', downloadItem);

    const url = downloadItem.finalUrl;
    const filename = url.split("/").slice(-1).toString().split("?")[0];
    console.log(filename);
    const filetype = filename.split(".").slice(-1).toString();
    const filesize = downloadItem.totalBytes;
    const chromefilename = downloadItem.filename
    console.log("chromefilename: ", chromefilename)
    console.log("Filename: ", filename,"URL: ", url, "Filesize: ", filesize, "Filetype: ", filetype);
    chrome.downloads.cancel(downloadItem.id, function () {
        console.log('Download canceled:', filename);
    });
    // chrome.browserAction.openPopup();
    //chrome.runtime.sendMessage(chrome.runtime.id, {
    //    msg: "download_request",
    //    data: {
    //        subject: filename,
    //        content: url
    //    }
    //});
});
