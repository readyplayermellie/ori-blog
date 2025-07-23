module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/rss-parser [external] (rss-parser, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("rss-parser", () => require("rss-parser"));

module.exports = mod;
}}),
"[project]/src/pages/articles.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// pages/articles.js
__turbopack_context__.s({
    "default": ()=>SubstackArticles,
    "getStaticProps": ()=>getStaticProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$rss$2d$parser__$5b$external$5d$__$28$rss$2d$parser$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/rss-parser [external] (rss-parser, cjs)"); // Import the Parser class (capital P)
;
;
;
async function getStaticProps() {
    const SUBSTACK_FEED_URL = 'https://oriunderway.substack.com/feed'; // Replace with your Substack feed URL
    try {
        // 1. Create an instance of the Parser
        let parser = new __TURBOPACK__imported__module__$5b$externals$5d2f$rss$2d$parser__$5b$external$5d$__$28$rss$2d$parser$2c$__cjs$29$__["default"]();
        // 2. Call parseURL on the instance
        const feed = await parser.parseURL(SUBSTACK_FEED_URL);
        // Filter out any non-article items if your feed contains other content
        // Map the items to a cleaner format
        const articles = feed.items.map((item)=>({
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                creator: item.creator || feed.title,
                contentSnippet: item.contentSnippet,
                content: item.content
            }));
        const latestArticles = articles.slice(0, 5);
        console.log('Successfully fetched Substack articles:', latestArticles.map((a)=>a.title)); // This log will now appear in your terminal
        return {
            props: {
                articles: latestArticles
            },
            revalidate: 3600
        };
    } catch (error) {
        console.error('Error fetching Substack articles:', error); // This log will also appear in your terminal
        return {
            props: {
                articles: []
            },
            revalidate: 3600
        };
    }
}
function SubstackArticles({ articles }) {
    // ... (rest of your component code)
    console.log(articles);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "My Substack Articles"
                }, void 0, false, {
                    fileName: "[project]/src/pages/articles.js",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/articles.js",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Latest Articles from My Substack"
            }, void 0, false, {
                fileName: "[project]/src/pages/articles.js",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            articles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '30px',
                            borderBottom: '1px solid #eee',
                            paddingBottom: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: article.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/articles.js",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/articles.js",
                                lineNumber: 62,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: article.contentSnippet
                            }, void 0, false, {
                                fileName: "[project]/src/pages/articles.js",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: article.content
                            }, void 0, false, {
                                fileName: "[project]/src/pages/articles.js",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this),
                            article.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                dangerouslySetInnerHTML: {
                                    __html: article.content
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/pages/articles.js",
                                lineNumber: 73,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: article.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Read more on Substack"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/articles.js",
                                    lineNumber: 75,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/articles.js",
                                lineNumber: 75,
                                columnNumber: 29
                            }, this)
                        ]
                    }, article.link, true, {
                        fileName: "[project]/src/pages/articles.js",
                        lineNumber: 61,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/pages/articles.js",
                lineNumber: 59,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: "No Instagram posts to display or an error occurred."
            }, void 0, false, {
                fileName: "[project]/src/pages/articles.js",
                lineNumber: 80,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/articles.js",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__93756b70._.js.map