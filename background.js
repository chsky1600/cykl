chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab URL contains "google.ca/maps/dir" and "3e1"
    if (tab.url.includes("google.com/maps/dir/") && tab.url.includes("3e1")) {
        console.log(tab.url);
        const queryParams = tab.url.split("?")[1];
        // const urlParams = new UrlSearchParams(queryParams);
        
        chrome.tabs.sendMessage(tabId, {
            type: "NEW_ROUTE",
            routeId: "route"
        });
        // Add your code here to handle the active cycling route option
    }
});



