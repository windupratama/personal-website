/**
 * A utility to check if the current device is a mobile device or not
 */

/**
 * A utility function to check if the current device is a mobile device or not based on the user agent detected OS
 */
export function isMobile(): boolean {
    if (typeof navigator === "undefined") return false;

    const userAgent = navigator.userAgent.toLowerCase();

    // List of user agent detected mobile OS
    const isMobiles = ["android", "iphone", "iemobile", "opera mini", "mobile"];

    return isMobiles.some((mobile) => userAgent.includes(mobile));
}
