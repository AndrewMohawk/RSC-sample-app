module.exports = [
"[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ed684ea8446d545fad8403ecc86624c3d41b849a":"greetAction"},"",""] */ __turbopack_context__.s([
    "greetAction",
    ()=>greetAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/RSC-sample-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/RSC-sample-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function greetAction(input) {
    const secret = "ZGVnZW5lcmF0ZSBwYXJ0eSB0aW1l";
    // fetch from https://api.example.com/secret with the secret as the Authorization header
    try {
        const response = await fetch("https://api.example.com/" + input, {
            headers: {
                Authorization: secret
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Failed to fetch from API:", error);
    }
    return `Hello, ${input}!` + (5 + 5);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    greetAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(greetAction, "40ed684ea8446d545fad8403ecc86624c3d41b849a", null);
}),
"[project]/RSC-sample-app/.next-internal/server/app/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$app$2f5b$slug$5d2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/RSC-sample-app/.next-internal/server/app/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ed684ea8446d545fad8403ecc86624c3d41b849a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$app$2f5b$slug$5d2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["greetAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f2e$next$2d$internal$2f$server$2f$app$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$RSC$2d$sample$2d$app$2f$app$2f5b$slug$5d2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/RSC-sample-app/.next-internal/server/app/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$RSC$2d$sample$2d$app$2f$app$2f5b$slug$5d2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/RSC-sample-app/app/[slug]/input.tsx [app-rsc] (ecmascript)");
}),
"[project]/RSC-sample-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/RSC-sample-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/RSC-sample-app/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=RSC-sample-app_340788f4._.js.map