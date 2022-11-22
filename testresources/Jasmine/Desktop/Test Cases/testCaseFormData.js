it("MathStrLogWTNtwk/testCaseFormData", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnFormData"]);
	voltmx.automation.button.click(["FormNetworkApi","btnFormData"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Values added by set method");
});