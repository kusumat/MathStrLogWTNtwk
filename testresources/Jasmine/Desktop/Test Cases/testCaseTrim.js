it("MathStrLogWTNtwk/testCaseTrim", async function() {
	await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
	voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
	voltmx.automation.button.click(["Form2","btnTrim"]);
	expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("voltmx");
	await voltmx.automation.playback.wait(1000);
	voltmx.automation.button.click(["Form2","btnBack"]);
	await voltmx.automation.playback.waitFor(["Form1","btnBack"]);
	voltmx.automation.button.click(["Form1","btnBack"]);
});