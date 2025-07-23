module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/next-sanity [external] (next-sanity, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("next-sanity");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/sanity.client.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// lib/sanity.client.ts (or src/lib/sanity.client.ts)
__turbopack_context__.s({
    "client": ()=>client
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-sanity [external] (next-sanity, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const client = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "nif14m69"),
    dataset: ("TURBOPACK compile-time value", "production"),
    apiVersion: '2024-07-23',
    useCdn: ("TURBOPACK compile-time value", "development") === 'production'
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/sanity.queries.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// lib/sanity.queries.ts (or src/lib/sanity.queries.ts)
__turbopack_context__.s({
    "postQuery": ()=>postQuery,
    "postsQuery": ()=>postsQuery
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-sanity [external] (next-sanity, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const postsQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    "authorName": author->name,
    "categories": categories[]->title
  }
`;
const postQuery = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$sanity__$5b$external$5d$__$28$next$2d$sanity$2c$__esm_import$29$__["groq"]`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body // This is your Portable Text content
  }
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@portabletext/react [external] (@portabletext/react, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@portabletext/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@sanity/image-url [external] (@sanity/image-url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@sanity/image-url", () => require("@sanity/image-url"));

module.exports = mod;
}}),
"[project]/src/lib/sanity.image.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// lib/sanity.image.ts
__turbopack_context__.s({
    "urlFor": ()=>urlFor
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sanity$2f$image$2d$url__$5b$external$5d$__$2840$sanity$2f$image$2d$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@sanity/image-url [external] (@sanity/image-url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanity.client.ts [ssr] (ecmascript)"); // Adjust path if needed
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const imageBuilder = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$sanity$2f$image$2d$url__$5b$external$5d$__$2840$sanity$2f$image$2d$url$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["client"]);
const urlFor = (source)=>{
    return imageBuilder.image(source);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/src/pages/posts/[slug].tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// pages/posts/[slug].tsx
__turbopack_context__.s({
    "default": ()=>PostPage,
    "getStaticPaths": ()=>getStaticPaths,
    "getStaticProps": ()=>getStaticProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanity.client.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanity.queries.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$portabletext$2f$react__$5b$external$5d$__$2840$portabletext$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@portabletext/react [external] (@portabletext/react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sanity.image.ts [ssr] (ecmascript)"); // You'll create this next
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)"); // For Next.js Image component
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$portabletext$2f$react__$5b$external$5d$__$2840$portabletext$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$portabletext$2f$react__$5b$external$5d$__$2840$portabletext$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
// This is optional: define custom components for Portable Text rendering
const PortableTextComponents = {
    types: {
        image: ({ value })=>{
            if (!value?.asset?._ref) {
                return null;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["urlFor"])(value).width(800).url(),
                alt: value.alt || 'Blog image',
                layout: "responsive",
                width: 800,
                height: 500,
                style: {
                    display: 'block',
                    margin: '20px auto'
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        },
        code: ({ value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pre", {
                "data-language": value.language,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                    children: value.code
                }, void 0, false, {
                    fileName: "[project]/src/pages/posts/[slug].tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    block: {
        h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-4xl my-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 34,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
        h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-3xl my-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 35,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
    },
    list: {
        bullet: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                className: "list-disc ml-8 my-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 39,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
        number: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ol", {
                className: "list-decimal ml-8 my-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 40,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0))
    },
    marks: {
        link: ({ children, value })=>{
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: value.href,
                rel: rel,
                target: rel ? '_blank' : '_self',
                children: children
            }, void 0, false, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
};
function PostPage({ post }) {
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/pages/posts/[slug].tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this); // Or a custom 404 page
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: [
                            post.title,
                            " | My Blog"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: `https://yourwebsite.com/posts/${post.slug.current}`
                    }, void 0, false, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.9em',
                            color: '#666',
                            marginBottom: '20px'
                        },
                        children: [
                            "By ",
                            post.authorName,
                            " on ",
                            new Date(post.publishedAt).toLocaleDateString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    post.mainImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$image$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["urlFor"])(post.mainImage).width(800).url(),
                        alt: post.mainImage.alt || post.title,
                        layout: "responsive",
                        width: 800,
                        height: 450,
                        priority: true,
                        style: {
                            marginBottom: '30px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "prose",
                        style: {
                            lineHeight: '1.7',
                            fontSize: '1.1em'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$portabletext$2f$react__$5b$external$5d$__$2840$portabletext$2f$react$2c$__esm_import$29$__["PortableText"], {
                            value: post.body,
                            components: PortableTextComponents
                        }, void 0, false, {
                            fileName: "[project]/src/pages/posts/[slug].tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/posts/[slug].tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/posts/[slug].tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/posts/[slug].tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
async function getStaticPaths() {
    const posts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["postsQuery"]);
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug.current
            }
        }));
    return {
        paths,
        fallback: 'blocking'
    };
}
async function getStaticProps({ params }) {
    const post = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$client$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sanity$2e$queries$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["postQuery"], {
        slug: params.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post
        },
        revalidate: 60
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__56506760._.js.map