let cacheData = "appV1";

this.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(cacheData).then((cache) => {

            cache.addAll([
                'static/js/bundle.js',
                'index.html',
                '/',
                '/users'
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {

    console.log(event.request.url);
    event.waitUntil(
        this.registration.showNotification("Noti",{
            body: 'hello from noti'
        })
    )
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {

                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        )
    }

})