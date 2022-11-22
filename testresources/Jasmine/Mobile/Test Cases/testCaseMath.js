it("MathStrLogWTNtwk/testCaseMath", async function() {
	await voltmx.automation.playback.waitFor(["FormHome","btnMath"]);
	voltmx.automation.button.click(["FormHome","btnMath"]);
});