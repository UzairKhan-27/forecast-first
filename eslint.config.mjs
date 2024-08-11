import pluginJs from "@eslint/js";

export default [
	pluginJs.configs.recommended,

	{
		languageOptions: {
			globals: {
				console: "readonly",
				document: "readonly",
				window: "readonly",
				fetch: "readonly",
			},
		},
		rules: {
			semi: "error",
			// Add more rules as needed
		},
	},
];
