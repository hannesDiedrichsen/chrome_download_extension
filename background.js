chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  suggest({filename: item.filename,
           conflict_action: 'prompt',
           conflictAction: 'prompt'});
});