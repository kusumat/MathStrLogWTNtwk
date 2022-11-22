it("MathStrLogWTNtwk/testCaseContaisCharacters", async function() {
	await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
	voltmx.automation.button.click(["Form1","btnContainsChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains the characters");
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"iris");
	voltmx.automation.button.click(["Form1","btnContainsChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not contain the characters");
});