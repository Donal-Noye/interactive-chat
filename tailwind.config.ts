import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			colors: {
				gray: "rgba(255, 255, 255, 0.60)",
				dark1: "#1D1E22",
				dark2: "#26272D",
				dark3: "#141416",
				"light-green": "#BDD2B6",
				hover: "#36373F",
				gold: "#F1E0AC",
				pink: "C65D7B",
				gradient:
					"linear-gradient(90deg, rgba(241, 224, 172, 0.20) 0%, rgba(241, 224, 172, 0.00) 100%)",
			},
		}
  },
  plugins: [
		require("@tailwindcss/forms")({
			strategy: 'class'
		})
  ],
};
export default config;
