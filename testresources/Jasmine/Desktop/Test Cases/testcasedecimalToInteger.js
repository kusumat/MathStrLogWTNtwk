it("MathStrLogWTNtwk/testcasedecimalToInteger", async function() {
	await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16.5");
	voltmx.automation.button.click(["frmHomeMath","btnConvert"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("16");
});