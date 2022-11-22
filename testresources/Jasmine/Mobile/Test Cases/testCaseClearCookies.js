it("MathStrLogWTNtwk/testCaseClearCookies", async function() {
	await voltmx.automation.playback.waitFor(["FormNetworkApi","btnClearCookies"]);
	voltmx.automation.button.click(["FormNetworkApi","btnClearCookies"]);
	expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Cleared cookies successfully");
});