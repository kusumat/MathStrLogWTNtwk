it("MathStrLogWTNtwk/testcaseContainsNoGivenCharacters", async function() {
	await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"iris");
	voltmx.automation.button.click(["Form1","btnNoGivenChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains none of the characters specified");
	voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
	voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
	voltmx.automation.button.click(["Form1","btnNoGivenChars"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains the character specified");
});