

var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

exports.index = function(req, res){

    execute("ls -al", function (ss)
        {
            var s = ss.split("\n");

            var ar = []

            s.forEach(function (c){
                ar.push({v: c, l:10 });
            });

            res.render('index', { title: '마이피플 봇 예제', shell: ar});
        }
    )
};



exports.test = function(req, res){
 	res.render('test', { 
 		title: '마이피플 봇 API 테스트 폼',
 		apikey: 'fe174310b72d52f4ed3406859e7e783d8228d4b4',
 		groupId: 'GROUPID',
 		buddyId: 'BUDDYID' 		
 	 });
};
