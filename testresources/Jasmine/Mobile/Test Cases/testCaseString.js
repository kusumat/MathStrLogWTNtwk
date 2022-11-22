it("MathStrLogWTNtwk/testCaseString", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnStringHome"]);
	voltmx.automation.button.click(["FormHome","btnStringHome"]);
});