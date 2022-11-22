it("MathStrLogWTNtwk/testCaseNumericCharacters", async function() {
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"1234");
	voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains only numerics");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
	voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made of numeric charaters");
});