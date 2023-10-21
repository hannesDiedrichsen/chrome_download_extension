let exp_filename = download_folder_path
chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    // PDFs will always be overwritten to make PDF downloads smooth
    // File conflicts will open a prompt to change filename
    if (item.filename.endsWith('.pdf')) {
        console.log("Alaarm PDF!!!")
        exp_filename = item.filename;
        suggest({
            filename: item.filename,
            conflictAction: 'overwrite'
        })
    } else {
        console.log(item.filename);

        suggest({
            filename: item.filename,
            conflictAction: 'prompt'
        });
    }
});


// Open downloaded PDF
// chrome.tabs.create({ url: download_folder + filename }); to open the file
chrome.downloads.onChanged.addListener(function(change) {
    if (change.state && change.state.current === "complete" && exp_filename.endsWith('.pdf')) {
        // Check if Path is set
        chrome.storage.local.get('path').then(function(result) {
            if (result.my_key !== undefined) {
                console.log("OPEN PDF NOW")

                chrome.tabs.create({ url: result["path"] + exp_filename});
            } else {
                // TODO: Open popup and let user set his download path
            }
        });
    }
});





