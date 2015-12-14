import Baobab from 'baobab';

const tree = new Baobab({
	user: {
		/*avatar: 'https://scontent-frt3-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p160x160/10383895_1080798488614634_3712605849066710036_n.jpg?oh=6c8c8762e3dfbcbaedf66cd61a674628&oe=56F7C1C8',
		name: 'Robert Pamfile'*/
	},
	canvasTitle: 'Floating bird',
	editTitle: false,
	selectedTool: 'cursor',
	color: 'ffffff',
	canvas: {
		width: null,
		height: null
	},
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
			icon: 'icon-cursor',
			caret: '',
			subTools: []
		},
		{
			name: 'crop',
			icon: 'icon-crop',
			caret: '',
			subTools: []
		},
		{
			name: 'brush',
			icon: 'icon-brush',
			caret: '',
			subTools: []
		},
		{
			name: 'pencil',
			icon: 'icon-pen',
			caret: '',
			subTools: []
		},
		{
			name: 'eraser',
			icon: 'icon-eraser',
			caret: '',
			subTools: []
		},
		{
			name: 'square',
			icon: 'icon-square',
			caret: '',
			subTools: []
		},
		{
			name: 'text',
			icon: 'icon-text',
			caret: '',
			subTools: []
		},
		{
			name: 'bucket',
			icon: 'icon-paint_swatch',
			caret: '',
			subTools: []
		},
		{
			name: 'filters',
			icon: 'icon-filters',
			caret: '',
			subTools: []
		},
		{
			name: 'zoom',
			icon: 'icon-magnifier',
			caret: '', /*'fa fa-caret-down caret',*/
			subTools: []
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