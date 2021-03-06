var resultViewer = require("./resultViewer");
var initEditor = require("./initEditor");
var refreshEditor = require("./refreshEditor");

module.exports = function () {

	[].forEach.call(document.querySelectorAll(".code-editor textarea"), initEditor);
	Reveal.addEventListener( 'slidechanged', refreshEditor);
	resultViewer.init(document.body);

};
module.exports.resultViewer = resultViewer;
