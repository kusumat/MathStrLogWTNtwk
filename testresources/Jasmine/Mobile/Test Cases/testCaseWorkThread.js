it("MathStrLogWTNtwk/testCaseWorkThread", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnWokerThread"]);
	voltmx.automation.button.click(["FormHome","btnWokerThread"]);
	await voltmx.automation.playback.waitFor(["FormWorkerThread","btnThreadBasic"]);
	voltmx.automation.button.click(["FormWorkerThread","btnThreadBasic"]);
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["FormWorkerThread","btnNestedThread"]);
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["FormWorkerThread","btnBack"]);
});