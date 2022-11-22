it("MathStrLogWTNtwk/testCaseEmailID", async function() {
	await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx@hcl.com");
	voltmx.automation.button.click(["Form2","btnEmail"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is valid ");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnEmail"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is invalid");
});