


document.getElementById('saveButton').addEventListener('click', function() {
    let path = document.getElementById('directoryInput').value;
    // Speichern Sie den Pfad und führen Sie weitere Aktionen durch, wie z.B. das Senden an den Hintergrundprozess.
    if (!path) {
        return
    }
    else {
    chrome.storage.local.set({ "path": path })

    console.log('Gespeicherter Pfad:', path);
    }
});


chrome.storage.local.get('path').then(function(result) {
    if (result.path !== undefined) {
        console.log(result);
        document.getElementById("path").remove();
        let heading = document.createElement("h1");
        let content = document.createElement("main");
        heading.textContent = "Überschrift";
        content.textContent = "Downloadpath: " + result["path"];
        let body = document.querySelector("body")
        body.appendChild(heading);
        body.appendChild(content);
    } else {
        console.log("Value does not exist");
    }
});

