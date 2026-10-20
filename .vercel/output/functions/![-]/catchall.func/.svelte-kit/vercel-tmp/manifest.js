export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/newsletter/2024_25/2024_25_week10/2024_25_week10.pdf","assets/newsletter/2024_25/2024_25_week10/2024_25_week10.png","assets/newsletter/2024_25/2024_25_week11/2024_25_week11.pdf","assets/newsletter/2024_25/2024_25_week11/2024_25_week11.png","assets/newsletter/2024_25/2024_25_week12/2024_25_week12.pdf","assets/newsletter/2024_25/2024_25_week12/2024_25_week12.png","assets/newsletter/2024_25/2024_25_week13/2024_25_week13.pdf","assets/newsletter/2024_25/2024_25_week13/2024_25_week13.png","assets/newsletter/2024_25/2024_25_week14/2024_25_week14.pdf","assets/newsletter/2024_25/2024_25_week14/2024_25_week14.png","assets/newsletter/2024_25/2024_25_week15/2024_25_week15.pdf","assets/newsletter/2024_25/2024_25_week15/2024_25_week15.png","assets/newsletter/2024_25/2024_25_week16/2024_25_week16.pdf","assets/newsletter/2024_25/2024_25_week16/2024_25_week16.png","assets/newsletter/2024_25/2024_25_week17/2024_25_week17.pdf","assets/newsletter/2024_25/2024_25_week17/2024_25_week17.png","assets/newsletter/2024_25/2024_25_week18/2024_25_week18.pdf","assets/newsletter/2024_25/2024_25_week18/2024_25_week18.png","assets/newsletter/2024_25/2024_25_week19/2024_25_week19.pdf","assets/newsletter/2024_25/2024_25_week19/2024_25_week19.png","assets/newsletter/2024_25/2024_25_week20/2024_25_week20.pdf","assets/newsletter/2024_25/2024_25_week20/2024_25_week20.png","assets/newsletter/2026_27/2026_27_week1/2026_27_week1.pdf","assets/newsletter/2026_27/2026_27_week1/2026_27_week1.png","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.YsOo-GFm.js",app:"_app/immutable/entry/app.BCtI5GaE.js",imports:["_app/immutable/entry/start.YsOo-GFm.js","_app/immutable/chunks/DTtwrjPa.js","_app/immutable/chunks/D2DBIn_K.js","_app/immutable/entry/app.BCtI5GaE.js","_app/immutable/chunks/D2DBIn_K.js","_app/immutable/chunks/sYShDNXW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/competitions","/contact","/news","/projects","/resources"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
