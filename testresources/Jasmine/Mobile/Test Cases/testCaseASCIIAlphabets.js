it("MathStrLogWTNtwk/testCaseASCIIAlphabets", async function() {
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnASCII"]);
	await voltmx.automation.playback.wait(2000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains ASCII alphabets");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"1234");
	voltmx.automation.button.click(["Form2","btnASCII"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made up of just ASCII characters");
});