it("MathStrLogWTNtwk/testCaseASCIIAlphanumeric", async function() {
	await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
	voltmx.automation.button.click(["Form2","btnASCIIAlphanumeric"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains combination of ASCII alphabets and numerics");
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"@1234");
	voltmx.automation.button.click(["Form2","btnASCIIAlphanumeric"]);
	await voltmx.automation.playback.wait(1000);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made up of combinations of ASCII alphabets and numerics");
});