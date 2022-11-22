it("MathStrLogWTNtwk/testcaseASCIIAlphabets", async function() {
	await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnASCII"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains ASCII alphabets");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
	voltmx.automation.button.click(["Form2","btnASCII"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made up of just ASCII characters");
});