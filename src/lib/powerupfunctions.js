export const isMobile = () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 768) {
        return true;
    }
    return false;
}