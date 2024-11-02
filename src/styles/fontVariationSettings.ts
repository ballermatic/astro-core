import type { PluginAPI } from 'tailwindcss/types/config';

// chosen font mona sans font-feature-settings
// tnum – tabular numbers
// ss03 - Lowercase l with tail
// ss05 - Double-storey a

// adjust based on chosen font and design
export const stretchValues = {
	narrow: 75,
	condensed: 87.5,
	base: 100,
	expanded: 112.5,
	wide: 125,
} as const;

// adjust based on chosen font and design
export default function fontVariationSettings({ addUtilities }: PluginAPI) {
	const weights = {
		ultralight: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	};

	// Custom weights with italic, stretch, italic and stretch.
	Object.entries(weights).forEach((i) => {
		const [key, value] = i;
		const select = `.font-${key}`;
		const baseData: Record<string, any> = {};
		baseData[select] = {
			fontWeight: value,
			fontVariationSettings: `'wght' ${value}`,
		};
		Object.entries(stretchValues).forEach((i) => {
			const [sKey, sValue] = i;
			const sSelect = `&.font-${sKey}`;
			const sSelectItalic = `&.italic.font-${sKey}`;

			baseData[select][sSelectItalic] = {
				fontVariationSettings: `'slnt' 1, 'wdth' ${sValue}, 'wght' ${value}`,
			};
			baseData[select][sSelect] = {
				fontVariationSettings: `'wdth' ${sValue}, 'wght' ${value}`,
			};
		});
		baseData['&.italic'] = {
			fontVariationSettings: `'slnt' 1, 'wght' ${value}`,
		};
		addUtilities(baseData);
	});

	// Custom stretch alone and with italic.
	Object.entries(stretchValues).forEach((i) => {
		const [key, value] = i;
		const select = `.font-${key}`;
		const stretchData: Record<string, any> = {};
		stretchData[select] = {
			fontStretch: `${value}%`,
			fontVariationSettings: `'wdth' ${value}`,
			'&.italic': {
				fontVariationSettings: `'slnt' 1, 'wdth' ${value}`,
			},
		};
		addUtilities(stretchData);
	});

	// Plain italic.
	addUtilities({
		'.italic': {
			fontStyle: 'italic',
			fontVariationSettings: "'slnt' 1",
		},
	});
}
