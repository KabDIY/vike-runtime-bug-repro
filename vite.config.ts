import react from "@vitejs/plugin-react";
import path from "path";
import vike from "vike/plugin";
import tailwindcss from "@tailwindcss/vite";

export default {
	plugins: [vike(), react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
};
