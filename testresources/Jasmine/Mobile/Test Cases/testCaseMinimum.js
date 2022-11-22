it("MathStrLogWTNtwk/testCaseMinimum", async function() {
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
	voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
	voltmx.automation.button.click(["frmHomeMath","btnMin"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(4);
});