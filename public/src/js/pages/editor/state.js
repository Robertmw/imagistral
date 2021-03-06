import Baobab from 'baobab';

const tree = new Baobab({
	user: {},
	canvasTitle: 'Floating bird',
	editTitle: false,
	selectedTool: 'cursor',
	color: '#000000',
	canvas: {
		width: null,
		height: null,
		image: null,
		rotate: 0
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
	notifications: [],
	workspace: {
		zoom: 100,
		rotate: 0,
		zoomIn: true,
		zoomOut: true
	},
	uploadedImage: null,
	tools: [
		{
			name: 'cursor',
			icon: 'icon-cursor',
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
			name: 'text',
			icon: 'icon-text',
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
			name: 'shape',
			icon: 'icon-square',
			caret: '',
			subTools: []
		},
		{
			name: 'bucket',
			icon: 'icon-bucket',
			caret: '',
			subTools: []
		},
		{
			name: 'filters',
			icon: 'icon-filters',
			caret: '',
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
		},
		shape: 'Square',
		filter: 'None'
	}
});

export default tree;
