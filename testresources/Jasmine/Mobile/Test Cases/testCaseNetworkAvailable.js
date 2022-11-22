it("MathStrLogWTNtwk/testCaseNetworkAvailable", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnIsNetworkAvailable"]);
	voltmx.automation.button.click(["FormNetworkApi","btnIsNetworkAvailable"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual(true);
});