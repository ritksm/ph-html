/**index>leftCol>leftWidgetA>notice 通知模块切换功能 开始！**/
var whichMenu = document.getElementById('noticeMenu').getElementsByTagName('li');
var whichContent = document.getElementById('noticeContent').getElementsByTagName('ul');
var menuLen = whichMenu.length;

for (i=0; i<menuLen;i++){
	whichMenu[i].value = i;
	whichMenu[i].onmouseover = function(){changeMenu(this.value)};
	whichContent[i].className ='dn'
	whichMenu[i].className = 'off'
	if(i != menuLen-1){
		whichMenu[i].getElementsByTagName('span')[0].className = 'withborder';
	}
}
var flag = 0;
whichMenu[flag].className ='on';
whichContent[flag].className ='db';
whichMenu[flag].getElementsByTagName('span')[0].className = 'noborder';
function changeMenu(m){
	whichMenu[flag].className ='off';
	whichContent[flag].className ='dn';
	if(flag != menuLen-1){
		whichMenu[flag].getElementsByTagName('span')[0].className = 'withborder';
	}
	if(flag-1 != -1){
		whichMenu[flag-1].getElementsByTagName('span')[0].className = 'withborder';
	}
	flag = m;
	whichMenu[m].className ='on';
	whichContent[m].className ='db';
	whichMenu[m].getElementsByTagName('span')[0].className = 'noborder';
	if(m-1 != -1){
		whichMenu[m-1].getElementsByTagName('span')[0].className = 'whiteborder';
	}
}

/**index>leftCol>leftWidgetA>notice 通知模块切换功能 结束！**/