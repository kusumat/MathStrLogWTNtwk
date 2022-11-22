define([], function() {
	describe("MathStrLogWTNtwk/Test Suites/testSuiteSPA", function() {
		it("MathStrLogWTNtwk/testCaseMath", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnMath"]);
			voltmx.automation.button.click(["FormHome","btnMath"]);
		});
		
		it("MathStrLogWTNtwk/testCaseSqrt", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16");
			voltmx.automation.button.click(["frmHomeMath","btnSqrt"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(4);
		});
		
		it("MathStrLogWTNtwk/testCaseSquare", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16");
			voltmx.automation.button.click(["frmHomeMath","btnSquare"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(256);
		});
		
		it("MathStrLogWTNtwk/testCaseDecimaltoInteger", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxOperations"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxOperations"],"16.5");
			voltmx.automation.button.click(["frmHomeMath","btnConvert"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(16);
		});
		
		it("MathStrLogWTNtwk/testCaseMaximum", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","tbxNumber1"]);
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
			voltmx.automation.button.click(["frmHomeMath","btnMax"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(5);
		});
		
		it("MathStrLogWTNtwk/testCaseMinimum", async function() {
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber1"],"4");
			voltmx.automation.textbox.enterText(["frmHomeMath","tbxNumber2"],"5");
			voltmx.automation.button.click(["frmHomeMath","btnMin"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual(4);
		});
		
		it("MathStrLogWTNtwk/testCaseRandomNumber", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","btnRandom"]);
			voltmx.automation.button.click(["frmHomeMath","btnRandom"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeGreaterThan(0);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toBeLessThan(1);
		});
		
		it("MathStrLogWTNtwk/testCasePI", async function() {
			await voltmx.automation.playback.waitFor(["frmHomeMath","btnValue"]);
			voltmx.automation.button.click(["frmHomeMath","btnValue"]);
			expect(voltmx.automation.widget.getWidgetProperty(["frmHomeMath","LabelOutput"], "text")).toEqual( 3.141592653589793);
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["frmHomeMath","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseString", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnStringHome"]);
			voltmx.automation.button.click(["FormHome","btnStringHome"]);
		});
		
		it("MathStrLogWTNtwk/testCaseContainsCharacters", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnContainsChars"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains the characters");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"iris");
			voltmx.automation.button.click(["Form1","btnContainsChars"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not contain the characters");
		});
		
		it("MathStrLogWTNtwk/textCaseContainsOnlyGivenCharacters", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"voltmx");
			voltmx.automation.button.click(["Form1","btnGivenChars"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains only the characters specified");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnGivenChars"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string contains other characters as well");
		});
		
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
		
		it("MathStrLogWTNtwk/testCaseEndsWith", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnEndsWith"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string ends with the string specified");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
			voltmx.automation.button.click(["Form1","btnEndsWith"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not end with the string specified");
		});
		
		it("MathStrLogWTNtwk/testCaseStartsWith", async function() {
			await voltmx.automation.playback.waitFor(["Form1","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"vo");
			voltmx.automation.button.click(["Form1","btnStartsWith"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string starts with the string specified");
			voltmx.automation.textbox.enterText(["Form1","tbxInputString"],"voltmx");
			voltmx.automation.textbox.enterText(["Form1","tbxcharacterarray"],"mx");
			voltmx.automation.button.click(["Form1","btnStartsWith"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form1","LabelOutput"], "text")).toEqual("The input string does not start with the string specified");
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["Form1","btnNext"]);
		});
		
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
		
		it("MathStrLogWTNtwk/testCaseNumericCharacters", async function() {
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"1234");
			voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string contains only numerics");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx1234");
			voltmx.automation.button.click(["Form2","CopybtnASCIIAlphanumeric0a841e363f73848"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The string is not made of numeric charaters");
		});
		
		it("MathStrLogWTNtwk/testCaseEmailID", async function() {
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx@hcl.com");
			voltmx.automation.button.click(["Form2","btnEmail"]);
			await voltmx.automation.playback.wait(2000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is valid ");
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnEmail"]);
			await voltmx.automation.playback.wait(1000);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("The Email ID is invalid");
		});
		
		it("MathStrLogWTNtwk/testCaseConcatenate", async function() {
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
		
		it("MathStrLogWTNtwk/testCasetrim", async function() {
			await voltmx.automation.playback.waitFor(["Form2","tbxInputString"]);
			voltmx.automation.textbox.enterText(["Form2","tbxInputString"],"voltmx");
			voltmx.automation.button.click(["Form2","btnTrim"]);
			expect(voltmx.automation.widget.getWidgetProperty(["Form2","LabelOutput"], "text")).toEqual("voltmx");
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["Form2","btnBack"]);
			voltmx.automation.button.click(["Form1","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseLogging", async function() {
			await voltmx.automation.playback.waitFor(["FormHome","btnLog"]);
			voltmx.automation.button.click(["FormHome","btnLog"]);
			await voltmx.automation.playback.waitFor(["FormLog","btnGenerate"]);
			voltmx.automation.button.click(["FormLog","btnGenerate"]);
			await voltmx.automation.playback.wait(1000);
			voltmx.automation.button.click(["FormLog","btnBack"]);
		});
		
		it("MathStrLogWTNtwk/testCaseWorkThread", async function() {
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
			voltmx.automation.button.click(["FormNetworkApi","btnFormData"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Values added by set method");
		});
		
		it("MathStrLogWTNtwk/testCaseNetworkAvailable", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnIsNetworkAvailable"]);
			voltmx.automation.button.click(["FormNetworkApi","btnIsNetworkAvailable"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual(true);
		});
		
		it("MathStrLogWTNtwk/testCaseHttpRequest", async function() {
			await voltmx.automation.playback.waitFor(["FormNetworkApi","btnHttpRequest"]);
			voltmx.automation.button.click(["FormNetworkApi","btnHttpRequest"]);
			expect(voltmx.automation.widget.getWidgetProperty(["FormNetworkApi","LabelOutput"], "text")).toEqual("Http Object Created Successfully");
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