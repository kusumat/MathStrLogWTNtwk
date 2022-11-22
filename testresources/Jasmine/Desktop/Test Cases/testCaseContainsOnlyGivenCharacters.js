it("MathStrLogWTNtwk/testCaseContainsOnlyGivenCharacters", async function() {
	await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"voltmx");
	voltmx.automation.button.click(["Form1","btnGivenChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains only the characters specified");
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
	voltmx.automation.button.click(["Form1","btnGivenChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains other characters as well");
});