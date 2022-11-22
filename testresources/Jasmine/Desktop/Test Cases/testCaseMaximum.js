it("MathStrLogWTNtwk/testCaseMaximum", async function() {
	await voltmx.automation.playback.waitFor(["frmHomeMath","tbxNumber1"]);
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
	voltmx.automation.button.click(["frmHomeMath","btnMax"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("5");
});