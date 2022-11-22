it("MathStrLogWTNtwk/testCaseConatenate", async function() {
	await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnConcatenate"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("voltmxvoltmxvoltmxvoltmxvoltmx");
});