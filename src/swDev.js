export default function swDev() {

    function determineAppServerKey(){
        const validPublicKey = "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtV1CFuaOS8MTB5rPziBqNx1qIo";
        return urlBase64ToUnit8Array(validPublicKey);
    }

    function urlBase64ToUnit8Array(base64String){
        const padding = '=' .replace((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g,'/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for(let i=0;i< rawData.length; ++i){
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
    }
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log("response",res);

        return res.pushManager.getSubscription().then(function(subscription){
                res.pushManager.subscribe({
                    userVisibleOnly : true,
                    applicationServerKey : determineAppServerKey()
                })
        })
    }).catch((err)=>{
        console.log("error",err);
    });
}