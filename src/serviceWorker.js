
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/serviceworker.js').then(function() {
    console.log("Service Worker registered!");
    });
} else {
    console.log("Browser not supported!");
}

