export default {
    // html反转义
    HTMLDecode(text) { 
        let temp = document.createElement('div'); 
        temp.innerHTML = text; 
        let output = temp.innerText || temp.textContent || temp.innerHTML; 
        temp = null; 
        return output; 
    },
    isJingmai() {
        return /JM_IOS|JM_ANDROID/.test(navigator.userAgent)
    }
}