it("MathStrLogWTNtwk/testCaseHttpRequest", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnHttpRequest"]);
	voltmx.automation.button.click(["FormNetworkApi","btnHttpRequest"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Http Object Created Successfully");
});