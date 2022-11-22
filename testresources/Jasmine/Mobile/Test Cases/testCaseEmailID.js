it("MathStrLogWTNtwk/testCaseEmailID", async function() {
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx@hcl.com");
	voltmx.automation.button.click(["Form2","btnEmail"]);
	await voltmx.automation.playback.wait(2000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is valid ");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnEmail"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is invalid");
});