define([], function() {
	describe("MathStrLogWTNtwk/Test Suites/testSuiteDW", function() {
		it("MathStrLogWTNtwk/testCasemath", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnMath"]);
			voltmx.automation.button.click(["FormHome","btnMath"]);
		});
		
		it("MathStrLogWTNtwk/testCaseSqrt", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16");
			voltmx.automation.button.click(["frmHomeMath","btnSqrt"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("4");
		});
		
		it("MathStrLogWTNtwk/testCaseSquare", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16");
			voltmx.automation.button.click(["frmHomeMath","btnSquare"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("256");
		});
		
		it("MathStrLogWTNtwk/testcasedecimalToInteger", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16.5");
			voltmx.automation.button.click(["frmHomeMath","btnConvert"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("16");
		});
		
		it("MathStrLogWTNtwk/testCaseMaximum", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxNumber1"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
			voltmx.automation.button.click(["frmHomeMath","btnMax"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("5");
		});
		
		it("MathStrLogWTNtwk/testCaseMin", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxNumber1"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
			voltmx.automation.button.click(["frmHomeMath","btnMin"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("4");
		});
		
		it("MathStrLogWTNtwk/testCaseRandom", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","btnRandom"]);
			voltmx.automation.button.click(["frmHomeMath","btnRandom"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeLessThan("1");
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeGreaterThan("0");
		});
		
		it("MathStrLogWTNtwk/testCasePI", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","btnValue"]);
			voltmx.automation.button.click(["frmHomeMath","btnValue"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual("3.141592653589793");
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["frmHomeMath","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseString", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnStringHome"]);
			voltmx.automation.button.click(["FormHome","btnStringHome"]);
		});
		
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
		
		it("MathStrLogWTNtwk/testCaseNoGivenCharacters", async function() {
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
		
		it("MathStrLogWTNtwk/testCaseEndsWith", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnEndsWith"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string ends with the string specified");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
			voltmx.automation.button.click(["Form1","btnEndsWith"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not end with the string specified");
		});
		
		it("MathStrLogWTNtwk/testCaseStartsWith", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
			voltmx.automation.button.click(["Form1","btnStartsWith"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string starts with the string specified");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnStartsWith"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not start with the string specified");
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["Form1","btnNext"]);
		});
		
		it("MathStrLogWTNtwk/testcaseASCIIAlphabets", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnASCII"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains ASCII alphabets");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
			voltmx.automation.button.click(["Form2","btnASCII"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made up of just ASCII characters");
		});
		
		it("MathStrLogWTNtwk/testCaseASCIIAlphanumeric", async function() {
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
			voltmx.automation.button.click(["Form2","btnASCIIAlphanumeric"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains combination of ASCII alphabets and numerics");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"@1234");
			voltmx.automation.button.click(["Form2","btnASCIIAlphanumeric"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made up of combinations of ASCII alphabets and numerics");
		});
		
		it("MathStrLogWTNtwk/testCaseNumericCharacters", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"1234");
			voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains only numerics");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
			voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made of numeric charaters");
		});
		
		it("MathStrLogWTNtwk/testCaseEmailID", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx@hcl.com");
			voltmx.automation.button.click(["Form2","btnEmail"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is valid ");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnEmail"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is invalid");
		});
		
		it("MathStrLogWTNtwk/testCaseConatenate", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnConcatenate"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("voltmxvoltmxvoltmxvoltmxvoltmx");
		});
		
		it("MathStrLogWTNtwk/testCaseReverse", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnReverse"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("xmtlov");
		});
		
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
		
		it("MathStrLogWTNtwk/testCaseLoggingAPI", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnLog"]);
			voltmx.automation.button.click(["FormHome","btnLog"]);
			await voltmx.automation.playback.waitFor(["FormLog","btnGenerate"]);
			voltmx.automation.button.click(["FormLog","btnGenerate"]);
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["FormLog","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseWorkerThread", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnWokerThread"]);
			voltmx.automation.button.click(["FormHome","btnWokerThread"]);
			await voltmx.automation.playback.waitFor(["FormWorkerThread","btnThreadBasic"]);
			voltmx.automation.button.click(["FormWorkerThread","btnThreadBasic"]);
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["FormWorkerThread","btnNestedThread"]);
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["FormWorkerThread","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseNetworkAPI", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnNetworkApi"]);
			voltmx.automation.button.click(["FormHome","btnNetworkApi"]);
		});
		
		it("MathStrLogWTNtwk/testCaseClearCookies", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnClearCookies"]);
			voltmx.automation.button.click(["FormNetworkApi","btnClearCookies"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Cleared cookies successfully");
		});
		
		it("MathStrLogWTNtwk/testCaseFormData", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnFormData"]);
			voltmx.automation.button.click(["FormNetworkApi","btnFormData"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Values added by set method");
		});
		
		it("MathStrLogWTNtwk/testCaseNetworkAvailable", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnIsNetworkAvailable"]);
			voltmx.automation.button.click(["FormNetworkApi","btnIsNetworkAvailable"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("true");
		});
		
		it("MathStrLogWTNtwk/testCaseHttpObject", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnHttpRequest"]);
			voltmx.automation.button.click(["FormNetworkApi","btnHttpRequest"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Http object created successfully");
		});
		
		it("MathStrLogWTNtwk/testCaseNetworkType", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnNetType"]);
			voltmx.automation.button.click(["FormNetworkApi","btnNetType"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("ANY");
		});
		
		it("MathStrLogWTNtwk/testCaseNetworkCallbacks", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnNetCallBack"]);
			voltmx.automation.button.click(["FormNetworkApi","btnNetCallBack"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Network Callbacks successful");
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["FormNetworkApi","btnBack"]);
		});
	});
});