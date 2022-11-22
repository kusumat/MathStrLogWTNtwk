it("MathStrLogWTNtwk/testCasemath", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnMath"]);
	voltmx.automation.button.click(["FormHome","btnMath"]);
});