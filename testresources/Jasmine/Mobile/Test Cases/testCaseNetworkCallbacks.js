it("MathStrLogWTNtwk/testCaseNetworkCallbacks", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnNetCallBack"]);
	voltmx.automation.button.click(["FormNetworkApi","btnNetCallBack"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Network Callbacks successful");
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["FormNetworkApi","btnBack"]);
});