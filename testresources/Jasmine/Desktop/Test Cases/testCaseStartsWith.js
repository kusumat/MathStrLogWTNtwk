it("MathStrLogWTNtwk/testCaseStartsWith", async function() {
	await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
	voltmx.automation.button.click(["Form1","btnStartsWith"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string starts with the string specified");
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
	voltmx.automation.button.click(["Form1","btnStartsWith"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not start with the string specified");
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["Form1","btnNext"]);
});