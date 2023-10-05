
// logic to intercept a download, save the url, the filesize and get the filename
chrome.downloads.onCreated.addListener(function (downloadItem) {

    console.log('Download intercepted:', downloadItem);

    const url = downloadItem.finalUrl;
    const filename = url.split("/").slice(-1);
    const filesize = downloadItem.totalBytes;
    console.log("Filename: ", filename,"URL: ", url, "Filesize: ", filesize);
    chrome.downloads.cancel(downloadItem.id, function () {
        console.log('Download canceled:', filename);
    });
});
