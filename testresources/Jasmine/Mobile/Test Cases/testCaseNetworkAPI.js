it("MathStrLogWTNtwk/testCaseNetworkAPI", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnNetworkApi"]);
	voltmx.automation.button.click(["FormHome","btnNetworkApi"]);
});