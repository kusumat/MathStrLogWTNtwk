it("MathStrLogWTNtwk/testCaseHttpObject", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnHttpRequest"]);
	voltmx.automation.button.click(["FormNetworkApi","btnHttpRequest"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Http object created successfully");
});