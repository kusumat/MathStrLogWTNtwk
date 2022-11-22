it("MathStrLogWTNtwk/testCaseSquare", async function() {
	await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16");
	voltmx.automation.button.click(["frmHomeMath","btnSquare"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(256);
});