import type { PageServerLoad } from './$types';

const urls: string[] = [
    "https://baitbuy.com",
    "https://drunkdude.co",
    "https://api.bonk.money"
];

// We don't have param since we have static site
export const load: PageServerLoad = async () => {
    let bonkSiteCheck: boolean = false;
    let bbSiteCheck: boolean = false;
    let ddSiteCheck: boolean = false;
    

    try {
        await fetch(urls[0], { method: "HEAD"});
        bbSiteCheck = true;
    } catch (err) {
        console.log("Error check bb: ", err);
        bbSiteCheck = false;
    }

    try {
        await fetch(urls[1], {method: "HEAD"});
        ddSiteCheck = true;
    } catch (err) {
        console.log("Error check dd: ", err);
        ddSiteCheck = false;
    }

    try {
        await fetch(urls[2], { method: "HEAD"});
        bonkSiteCheck = true;
    } catch (err) {
        console.log("Error check bb: ", err);
        bonkSiteCheck = false;
    }

    return {
        bonk: bonkSiteCheck,
        bb: bbSiteCheck,
        dd: ddSiteCheck
    }
};