/**
 * fortnite-api-io
 * Module to make API calls to fortniteapi.io
 *
 * @author Ben Hawley
 * @license MIT
 */

"use strict";

/**
 * endpoints.js
 * Exports and builds fortniteapi.io API endpoints
 */

const endpoint = "https://fortniteapi.io";
module.exports = {
    listChallenges: (season, lang) => `${endpoint}/challenges?${season}=current&lang=${lang}`,
    listItems: lang => `${endpoint}/items/list?${lang}`,
    listUpcomingItems: lang => `${endpoint}/items/upcoming?lang=${lang}`,
    getItemDetails: (id, lang) => `${endpoint}/items/get?id=${id}&lang=${lang}`,
    getDailyShop: lang => `${endpoint}/shop?lang=${lang}`,
    getShopVotingOptions: _ => `${endpoint}/shop/voting`,
    searchAccountId: (username, platform, strict = true) => {
        let uri = `${endpoint}/lookup?username=${username}`;
        if (platform) {
            uri += `&platform=${platform}`;
        }
        if (strict === false) {
            uri += `&strict=false`;
        }
        return uri;
    },
    getGlobalPlayerStats: account => `${endpoint}/stats?account=${account}`,
    getPlayerRecentMatches: account => `${endpoint}/matches?account=${account}`,
    getNews: (mode, lang) => `${endpoint}/news?lang=${lang}&type=${mode}`,
    getBattlePassRewards: (season, lang) => `${endpoint}/battlepass?lang=${lang}&season=${season}`,
    getAchievements: lang => `${endpoint}/achievements?lang=${lang}`,
    listWeapons: _ => `${endpoint}/weapons/list`
};