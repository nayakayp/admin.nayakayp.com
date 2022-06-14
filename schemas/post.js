export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 180,
			},
		},
		{
			name: "date",
			title: "Publish Date",
			type: "datetime",
			options: {
				dateFormat: "MMM Do",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "author",
			title: "Author",
			type: "string",
			inititialValue: "Nayaka Yoga Pradipta",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative text",
							description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		},
		{
			name: "tags",
			title: "Tags",
			type: "reference",
			to: [{ type: "tag" }],
		},
	],
};
