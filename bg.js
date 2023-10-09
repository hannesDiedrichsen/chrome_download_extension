const download_folder = 'C:/Users/felix/Downloads/'
let current_filename = ''
chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    // PDFs will always be overwritten to make PDF downloads smooth
    // File conflicts will open a prompt to change filename
    if (item.filename.endsWith('.pdf')) {
        console.log("Alaarm PDF!!!")
        current_filename = item.filename
        suggest({
            filename: item.filename,
            conflictAction: 'overwrite'
        })
    } else {
        console.log(item.filename)

        suggest({
            filename: item.filename,
            conflictAction: 'prompt'
        });
    }
});


// Open downloaded PDF
// TODO: Find alternative as chrome does not allow to open file without user interaction
// chrome.tabs.create({ url: download_folder + filename }); to open the file
chrome.downloads.onChanged.addListener(function(change) {
    if (change.state && change.state.current === "complete") {
        console.log("OPEN PDF NOW")

        chrome.tabs.create({ url: download_folder + current_filename});
        //chrome.downloads.open(change.id);
    }
});





