exports.index = function(req, res){
 	res.render('index', { title: '마이피플 봇 예제' });
};

exports.test = function(req, res){
 	res.render('test', { 
 		title: '마이피플 봇 API 테스트 폼',
 		apikey: 'fe174310b72d52f4ed3406859e7e783d8228d4b4',
 		groupId: 'GROUPID',
 		buddyId: 'BUDDYID' 		
 	 });
};
