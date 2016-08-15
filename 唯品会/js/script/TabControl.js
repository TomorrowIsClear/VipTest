
var skinColor = '#f10180'; 
var baseFontSize = '15px'; 
var baseWidth = '1000px';
var normalTextColor = '#666666';

function TabControl(){
	this.locTabView = new LocationTabView()
	this.control()
}
TabControl.prototype.control = function(){
	$('.header-location').hover(function(){
		this.locTabView.load(0)
	}.bind(this))
}
