import Baobab from 'baobab';

const tree = new Baobab({
	user: {
		/*avatar: 'https://scontent-frt3-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p160x160/10383895_1080798488614634_3712605849066710036_n.jpg?oh=6c8c8762e3dfbcbaedf66cd61a674628&oe=56F7C1C8',
		name: 'Robert Pamfile'*/
	},
	canvasTitle: 'Floating bird',
	selectedTool: 'cursor',
	color: 'ffffff',
	popups: {
		active: '',
		login: {
			show: false
		},
		newFile: {
			show: false
		}
	},
	workspace: {
		zoom: 100,
		rotate: 0,
		zoomIn: true,
		zoomOut: true
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
			caret: '',
			subTools: []
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
			name: 'zoom',
			icon: 'fa fa-lg fa-search',
			caret: '', /*'fa fa-caret-down caret',*/
			subTools: [],
		}
	],
	toolSettings: {
		visible: false,
		text: {
			fontFamily: 'Arial',
			fontSize: 14,
			fontStyle: [],
			fontWeight: 'normal',
			textAlign: 'left'
		},
		eraser: {
			size: 10
		},
		pencil: {
			size: 10
		},
		brush: {
			size: 10,
			mode: 'pencil',
			hardness: 0
		}
	}
});

export default tree;