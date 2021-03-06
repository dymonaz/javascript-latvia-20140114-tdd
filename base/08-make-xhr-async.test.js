var resultViewer = require("clientApp").resultViewer;

buster.testCase("08 resultViewer", {

	"setUp": function () {
		/*:DOC elParent = <div>
		 <textarea id="contents">
		 some text
		 </textarea>
		 </div>
		 */
		resultViewer.init(this.elParent);
	},

	"loadResults()": {
		"should XHR, then onReceived (async)": function () {

			var onReceivedStub = this.stub(resultViewer, "onReceived");
			var server = this.useFakeServer();
			server.respondWith("GET", "/results", [200, {"content-type": "text/html"}, "RESULTS"]);

			resultViewer.loadResults();

			server.respond();
			expect(onReceivedStub).toHaveBeenCalledOnceWith(null, "RESULTS");

		}
	}

});