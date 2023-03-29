
// "https://checkout.razorpay.com/v1/checkout.js"
export default function loadScript(src){
    
    return new Promise(resolve => {
        const script = document.createElement('script')
        document.body.appendChild(script)
        script.src = src
        
        script.onload = () => {
            resolve(true)
        }
    
        script.onerror = () => {
            resolve(false)
        }
    })


}