import Baobab from 'baobab';

const tree = new Baobab({
	user: {
		avatar: 'https://scontent-frt3-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p160x160/10383895_1080798488614634_3712605849066710036_n.jpg?oh=6c8c8762e3dfbcbaedf66cd61a674628&oe=56F7C1C8',
		name: 'Robert Pamfile'
	},
	headerButtons: {
		canvasTitle: {
			icon: 'fa fa-header',
			title: 'Floating bird'
		},
		history: [
			{
				handleClick: null,
				icon: 'fa fa-lg fa-reply unavailable',
				name: 'undo',
				tooltip: 'Undo previous action'
			},
			{ 
				handleClick: null,
				icon: 'fa fa-lg fa-share',
				name: 'uphold',
				tooltip: 'Uphold next action'
			}
		]
	},
	tools: [
		{
			name: 'cursor',
			icon: 'fa fa-lg fa-mouse-pointer',
			caret: '',
			subTools: [],
		},
		{
			name: 'brush',
			icon: 'fa fa-lg fa-paint-brush',
			caret: '',
			subTools: [],
		},
		{
			name: 'pencil',
			icon: 'fa fa-lg fa-pencil',
			caret: '',
			subTools: [],
		},
		{
			name: 'eraser',
			icon: 'fa fa-lg fa-eraser',
			caret: '',
			subTools: [],
		},
		{
			name: 'square',
			icon: 'fa fa-lg fa-square',
			caret: 'fa fa-caret-down caret',
			subTools: [
				{
					icon: 'fa fa-lg fa-square-o',
					label: 'Square shape'
				},
				{
					icon: 'fa fa-lg fa-circle-o',
					label: 'Circle shape'
				}
			]
		},
		{
			name: 'text',
			icon: 'fa fa-lg fa-font',
			caret: '',
			subTools: []
		},
		{
			name: 'bucket',
			icon: 'fa fa-lg fa-bitbucket',
			caret: '',
			subTools: [],
		},
		{
			name: 'picker',
			icon: 'fa fa-lg fa-eyedropper',
			caret: '',
			subTools: [],
		},
		{
			name: 'zoom',
			icon: 'fa fa-lg fa-search',
			caret: 'fa fa-caret-down caret',
			subTools: [],
		}
	]
});

export default tree;