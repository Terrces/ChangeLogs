import {GifRefresh} from './script.js';
import {AutoCloseWindows} from './WindowLogics/WindowLogic.js';
window.addEventListener('keyup',function(event){
	if(event.key == " "){
		GifRefresh();
	}
})
window.addEventListener('keyup',function(event){
	if(event.key == "Escape"){
		AutoCloseWindows();
	}
})