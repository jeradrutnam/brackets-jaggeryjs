define(function (require, exports, module) {
    
    var CodeMirror = brackets.getModule("thirdparty/CodeMirror/lib/codemirror"),
        LanguageManager = brackets.getModule("language/LanguageManager");
    
    CodeMirror.defineSimpleMode("jaggery", {
	    start: [
	      	{
	      		regex: /<!DOCTYPE[^>[]*(\[[^]]*\])?>/,
	      		token: "comment"
	      	},
	      	{
	      		regex: /<%.?/,
	      		mode: {
	      			spec: 'javascript',
	      			end: /%>/
	      		},
	      		token: "tag"
	      	},
			{
	      		regex: /^|<(?!%|!)/,
	      		mode: {
	      			spec: 'htmlmixed',
	      			end: /(?:[^%])(>)/
	      		},
	      		token: 'tag' 
	      	}
	    ]
  	});

    CodeMirror.defineMIME("text/x-jaggery", "jaggery");
    
    LanguageManager.defineLanguage("jaggery", {
        name: "Jaggery",
        mode: ["jaggery", "text/x-jaggery"],
        fileExtensions: ["jag"]
    });
    
});