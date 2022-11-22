it("MathStrLogWTNtwk/testCaseLoggingAPI", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnLog"]);
	voltmx.automation.button.click(["FormHome","btnLog"]);
	await voltmx.automation.playback.waitFor(["FormLog","btnGenerate"]);
	voltmx.automation.button.click(["FormLog","btnGenerate"]);
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["FormLog","btnBack"]);
});