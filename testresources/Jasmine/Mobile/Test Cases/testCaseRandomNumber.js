it("MathStrLogWTNtwk/testCaseRandomNumber", async function() {
	await voltmx.automation.playback.waitFor(["frmHomeMath","btnRandom"]);
	voltmx.automation.button.click(["frmHomeMath","btnRandom"]);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeGreaterThan(0);
	expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeLessThan(1);
});