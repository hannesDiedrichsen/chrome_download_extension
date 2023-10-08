chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    // PDFs will always be overwritten to make PDF downloads smooth
    // File conflicts will open a prompt to change filename
    if (item.filename.endsWith('.pdf')) {
        console.log("Alaarm PDF!!!")
        suggest({
            filename: item.filename,
            conflictAction: 'overwrite'
        })
    } else {
        suggest({
            filename: item.filename,
            conflictAction: 'prompt'
        });
    }
});


// Open downloaded PDF
// TODO: Find alternative as chrome is not allow to open file without user interaction
chrome.downloads.onChanged.addListener(function(change) {
    if (change.state && change.state.current === "complete") {
        console.log("OPEN PDF NOW")
        chrome.downloads.open(change.id);
    }
});





