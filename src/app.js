import './components/layer/layer.less';
import Layer from './components/layer/layer.js';
import './css/common.css';

const App = function () {
	let dom = document.getElementById('app');
	let layer = Layer();
	// layer is a function
	dom.innerHTML = layer.tpl({
		name: 'Jobs',
		arr: ['apple','xiaomi','oppo']
	});
}

new App();