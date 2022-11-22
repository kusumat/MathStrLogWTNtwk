it("MathStrLogWTNtwk/testCaseNetworkType", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnNetType"]);
	voltmx.automation.button.click(["FormNetworkApi","btnNetType"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("ANY");
});