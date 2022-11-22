it("MathStrLogWTNtwk/testCasePI", async function() {
	await voltmx.automation.playback.waitFor(["frmHomeMath","btnValue"]);
	voltmx.automation.button.click(["frmHomeMath","btnValue"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("3.141592653589793");
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["frmHomeMath","btnBack"]);
});