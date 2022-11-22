it("MathStrLogWTNtwk/testCaseEndsWith", async function() {
	await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
	voltmx.automation.button.click(["Form1","btnEndsWith"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string ends with the string specified");
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
	voltmx.automation.button.click(["Form1","btnEndsWith"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not end with the string specified");
});