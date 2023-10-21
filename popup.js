


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

function changeBg() {
    const bilder = ["images/successpictures/3horse.jpeg", "images/successpictures/anotherHorse.jpeg", "images/successpictures/crazyDog.jpeg", "images/successpictures/dancinghorse.jpeg"];
    const zufallsIndex = Math.floor(Math.random() * bilder.length);
    document.body.style.backgroundImage = "url('" + bilder[zufallsIndex] + "')";
}

chrome.storage.local.get('path').then(function(result) {
    if (result.path !== undefined) {
        console.log(result);
        changeBg();
        document.getElementById("directoryInput").placeholder=result["path"];
        document.getElementById("title").innerText = "Ready to Go!";
        document.getElementById("saveButton").innerText = "Edit Path";
        document.getElementById("pathHint").innerText = "Current Path:";
    } else {
        console.log("Value does not exist");
    }
});

