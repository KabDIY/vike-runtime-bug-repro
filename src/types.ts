export interface VikeContext<TData = undefined> {
	config: { title?: string; description?: string };
	data: TData;
	Page: () => React.JSX.Element;
	title?: string;
	description?: string;
	isClientSideNavigation: boolean;
	isHydration: boolean;
	urlPathname: string;
	url: string;
	routeParams: object;
	pageExports: object;
	exports: object;
	configEntries: object;
	exportsAll: object;
	abortReason: string | null;
	isBackwardNavigation: boolean;
	urlOriginal: string;
	urlParsed: object;
}
