// Create a listener for tab URL changes
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Check if the tab URL contains "google.ca/maps/dir" and "3e1"
    if (tab.url.includes("google.ca/maps/dir") && tab.url.includes("3e1")) {
        const queryParams = tab.url.split("?")[1];
        // const urlParams = new UrlSearchParams(queryParams);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW_ROUTE",
            routeId: "route"
        });
        console.log("Cycling route option is active!");
        // Add your code here to handle the active cycling route option
    }
});