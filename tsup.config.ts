import { defineConfig } from "tsup";

export default defineConfig((options) => {
	const dev = options.env?.["NODE_ENV"] === "dev";
	const buildNonStrict = options.env?.["NON_STRICT"] === "true";

	return {
		entry: ["src"],
		outDir: "lib",
		sourcemap: true,
		watch: dev,
		format: dev ? undefined : ["esm", "cjs"],
		dts: true,
		tsconfig: buildNonStrict ? "non-strict-tsconfig.json" : undefined,
	};
});
