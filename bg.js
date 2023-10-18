// TODO: Store download path of user
const download_folder_path = "C:\\Users\\felix\\Downloads\\";
let absolute_path = download_folder_path
chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    // PDFs will always be overwritten to make PDF downloads smooth
    // File conflicts will open a prompt to change filename
    if (item.filename.endsWith('.pdf')) {
        console.log("Alaarm PDF!!!")
        absolute_path += item.filename;
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
// chrome.tabs.create({ url: download_folder + filename }); to open the file
chrome.downloads.onChanged.addListener(function(change) {
    if (change.state && change.state.current === "complete" && absolute_path.endsWith('.pdf')) {
        console.log("OPEN PDF NOW")

        chrome.tabs.create({ url: absolute_path});
        // reset the absolute_path to the download_folder_path
        absolute_path = download_folder_path
    }
});





