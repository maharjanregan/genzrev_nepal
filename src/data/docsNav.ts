export type NavItem = {
	label: string;
	href: string;
};

export type NavSection = {
	title: string;
	items: NavItem[];
};

export const NAV: NavSection[] = [
	{
		title: 'Report',
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Executive brief', href: '/executive-brief' },
			{ label: 'Method', href: '/method' },
			{ label: 'Quality & fact-checking', href: '/quality' },
			{ label: 'Timeline', href: '/timeline' },
			{ label: 'Stakeholders', href: '/stakeholders' },
			{ label: 'Claims table', href: '/claims' },
			{ label: 'Annotated bibliography', href: '/bibliography' },
		],
	},
	{
		title: 'Lenses',
		items: [
			{ label: 'Platforms & mobilization', href: '/lenses/platforms' },
			{ label: 'State technology & control', href: '/lenses/state-tech' },
			{ label: 'Narratives & info ecosystem', href: '/lenses/narratives' },
			{ label: 'Human rights & digital rights', href: '/lenses/rights' },
			{ label: 'Economic & infrastructural impact', href: '/lenses/impact' },
		],
	},
];
