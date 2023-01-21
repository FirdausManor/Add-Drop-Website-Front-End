console.log("start controller");

function init()
{
	console.log("init");

	populateDate();
}

function populateDate()
{
	console.log("populateDate");

	var year = document.getElementById("yearInput").value;
	var month = document.getElementById("monthInput").value;

	var day29Option = document.getElementById("day29Option");
	var day30Option = document.getElementById("day30Option");
	var day31Option = document.getElementById("day31Option");

	if(month == 1 || month == 3|| month == 5 || month == 7|| month == 8 || month == 10|| month == 12) {
		day29Option.style.display = "block";
		day30Option.style.display = "block";
		day31Option.style.display = "block";
	}

	if(month == 4 || month == 6 || month == 9|| month == 11) {
		day29Option.style.display = "block";
		day30Option.style.display = "block";
		day31Option.style.display = "none";
	}

	if(month == 2) {
		if((year - 543) % 4 == 0) {
			day29Option.style.display = "block";
			day30Option.style.display = "none";
			day31Option.style.display = "none";
		} else {
			day29Option.style.display = "none";
			day30Option.style.display = "none";
			day31Option.style.display = "none";
		}
	}
}

function save(event)
{
	event.preventDefault();

	if(validate()) {
		console.log("save...");

		var data = buildDataObject();
		// var addSubjectList = buildAddSubjectList()
		// var dropSubjectList = buildDropSubjectList()
		// console.log(data);
		console.log("---------------------------------------------------------------");
		console.log(JSON.stringify(data));
		// console.log(JSON.stringify(addSubjectList));
		// console.log(JSON.stringify(dropSubjectList));

	} else {
		console.log("invalid !!!");
	}
}

function validate()
{
	if(! validateDate()) {
		return false;
	}

	if(! validateMonth()) {
		return false;
	}

	if(! validateYear()) {
		return false;
	}

	if(! validateFisrtName()) {
		return false;
	}

	if(! validateLastName()) {
		return false;
	}

	if(! validateStudentID()) {
		return false;
	}

	if(! validateClass()) {
		return false;
	}

	if(! validateField()) {
		return false;
	}

	if(! validateAdvisor()) {
		return false;
	}

	if(! validateAddressNo()) {
		return false;
	}

	if(! validateMoo()) {
		return false;
	}

	if(! validateTumbol()) {
		return false;
	}

	if(! validateAmphur()) {
		return false;
	}

	if(! validateProvince()) {
		return false;
	}

	if(! validatePostalCode()) {
		return false;
	}

	if(! validateMobileNo()) {
		return false;
	}

	if(! validateTelNo()) {
		return false;
	}

	if(! validateSubjectMovement()) {
		return false;
	}

	if(! validateCause()) {
		return false;
	}

	alert("ส่งข้อมูลสำเร็จ");
	return true;
}

function validateDate()
{
	var dateInput = document.getElementById("dateInput");
	var date = dateInput.value;
	console.log("date => " + date);

	if(! date) {
		alert("กรุณาเลือกวันที่");
		return false;
	}

	return true;
}

function validateMonth() {
	var monthInput = document.getElementById("monthInput");
	var month = monthInput.value;
	console.log("month => " + month);

	if(! month) {
		alert("กรุณาเลือกเดือน");
		return false;
	}

	return true;
}

function validateYear() {
	var yearInput = document.getElementById("yearInput");
	var year = yearInput.value;
	console.log("year => " + year);

	if(! year) {
		alert("กรุณาเลือกปี(พ.ศ.)");
		return false;
	}

	return true;
}

function validateFisrtName()
{
	var firstName = document.getElementById("firstNameInput").value;
	console.log("firstName => " + firstName);

	if(! firstName) {
		alert("กรุณากรอกชื่อของท่าน");
		return false;
	}

	return true;
}

function validateLastName()
{
	var lastName = document.getElementById("lastNameInput").value;
	console.log("lastName => " + lastName);

	if(! lastName) {
		alert("กรุณากรอกนามสกุลของท่าน");
		return false;
	}

	return true;
}

function validateStudentID()
{
	var studentID = document.getElementById("studentIDInput").value;
	console.log("studentID => " + studentID);

	if(! studentID) {
		alert("กรุณากรอกเลขทะเบียนของท่าน");
		return false;
	}

	if(studentID.length != 10) {
		alert("กรุณากรอกเลขทะเบียนของท่านเป็นตัวเลข 10 ตัวเท่านั้น");
		return false;
	}

	if(isNaN(studentID)) {
		alert("กรุณากรอกเลขทะเบียนของท่านเป็นตัวเลขเท่านั้น");
		return false;
	}

	return true;
}

function validateClass()
{
	var classNo = document.getElementById("classNoInput").value;
	console.log("classNo => " + classNo);

	if(! classNo) {
		alert("กรุณากรอกชั้นปีของท่าน");
		return false;
	}

	if(isNaN(classNo)) {
		alert("กรุณากรอกชั้นปีของท่านเป็นตัวเลขเท่านั้น");
		return false;
	}

	if(classNo < 1 || classNo > 7) {
		alert("กรุณากรอกตัวเลขระหว่างชั้นปีที่ 1 ถึง 7 เท่านั้น");
		return false;
	}

	return true;
}

function validateField()
{
	var field = document.getElementById("fieldInput").value;
	console.log("field => " + field);

	if(! field) {
		alert("กรุณากรอกสาขาวิชาของท่าน");
		return false;
	}

	return true;
}

function validateAdvisor()
{
	var advisor = document.getElementById("advisorInput").value;
	console.log("advisor => " + advisor);

	if(! advisor) {
		alert("กรุณากรอกอาจารย์ที่ปรึกษาของท่าน");
		return false;
	}

	return true;
}

function validateAddressNo()
{
	var addressNo = document.getElementById("addressNoInput").value;
	console.log("addressNo => " + addressNo);

	if(! addressNo) {
		alert("กรุณากรอกบ้านเลขที่ของท่าน");
		return false;
	}

	return true;
}

function validateMoo()
{
	var moo = document.getElementById("mooInput").value;
	console.log("moo => " + moo);

	if(! moo) {
		alert("กรุณากรอกชื่อหมู่หรือหมู่ที่ของท่าน");
		return false;
	}

	return true;
}

function validateTumbol()
{
	var tumbol = document.getElementById("tumbolInput").value;
	console.log("tumbol => " + tumbol);

	if(! tumbol) {
		alert("กรุณากรอกชื่อตำบลของท่าน");
		return false;
	}

	return true;
}

function validateAmphur()
{
	var amphur = document.getElementById("amphurInput").value;
	console.log("amphur => " + amphur);

	if(! amphur) {
		alert("กรุณากรอกชื่ออำเภอของท่าน");
		return false;
	}

	return true;
}

function validateProvince()
{
	var province = document.getElementById("provinceInput").value;
	console.log("province => " + province);

	if(! province) {
		alert("กรุณากรอกชื่อจังหวัดของท่าน");
		return false;
	}

	return true;
}

function validatePostalCode()
{
	var postalCode = document.getElementById("postalCodeInput").value;
	console.log("postalCode => " + postalCode);

	if(! postalCode) {
		alert("กรุณากรอกรหัสไปรษณีย์ของท่าน");
		return false;
	}

	if(postalCode.length != 5) {
		alert("กรุณากรอกรหัสไปรษณีย์ของท่าน 5 ตัวเท่านั้น");
		return false;
	}

	if(isNaN(postalCode)) {
		alert("กรุณากรอกรหัสไปรษณีย์ของท่านเป็นตัวเลขเท่านั้น");
		return false;
	}

	return true;
}

function validateMobileNo()
{
	var mobileNo = document.getElementById("mobileNoInput").value;
	console.log("mobileNo => " + mobileNo);

	if(! mobileNo) {
		alert("กรุณากรอกหมายเลขโทรศัพท์มือถือของท่าน");
		return false;
	}

	if(mobileNo.length != 10) {
		alert("กรุณากรอกหมายเลขโทรศัพท์มือถือของท่านให้ครบ 10 ตัวเท่านั้น");
		return false;
	}

	if(isNaN(mobileNo)) {
		alert("กรุณากรอกหมายเลขโทรศัพท์มือถือของท่านเป็นตัวเลขเท่านั้น");
		return false;
	}

	if(! mobileNo.startsWith("0")) {
		alert("กรุณากรอกหมายเลขโทรศัพท์มือถือของท่านเริ่มต้นด้วยหมายเลข 0 เท่านั้น");
		return false;
	}

	return true;
}

function validateTelNo()
{
	var telNo = document.getElementById("telNoInput").value;
	console.log("telNo => " + telNo);

	if(telNo.length != 10) {
		alert("กรุณากรอกหมายเลขโทรศัพท์บ้านของท่านให้ครบ 10 ตัวเท่านั้น");
		return false;
	}

	if(isNaN(telNo)) {
		alert("กรุณากรอกหมายเลขโทรศัพท์บ้านของท่านเป็นตัวเลขเท่านั้น");
		return false;
	}

	if(! telNo.startsWith("01")) {
		alert("กรุณากรอกหมายเลขโทรศัพท์บ้านของท่านเริ่มต้นด้วยหมายเลข 01 เท่านั้น");
		return false;
	}

	return true;
}

function validateSubjectMovement()
{
	var movement1 = document.getElementById("subjectOption1").value;
	var movement2 = document.getElementById("subjectOption2").value;
	var movement3 = document.getElementById("subjectOption3").value;
	var movement4 = document.getElementById("subjectOption4").value;
	var movement5 = document.getElementById("subjectOption5").value;
	var movement6 = document.getElementById("subjectOption6").value;
	var movement7 = document.getElementById("subjectOption7").value;
	var movement8 = document.getElementById("subjectOption8").value;
	var movement9 = document.getElementById("subjectOption9").value;
	var movement10 = document.getElementById("subjectOption10").value;

	if(movement1 == "add" || movement1 == "drop") {
		return true;
	}

	if(movement2 == "add" || movement2 == "drop") {
		return true;
	}

	if(movement3 == "add" || movement3 == "drop") {
		return true;
	}

	if(movement4 == "add" || movement4 == "drop") {
		return true;
	}

	if(movement5 == "add" || movement5 == "drop") {
		return true;
	}

	if(movement6 == "add" || movement6 == "drop") {
		return true;
	}

	if(movement7 == "add" || movement7 == "drop") {
		return true;
	}

	if(movement8 == "add" || movement8 == "drop") {
		return true;
	}

	if(movement9 == "add" || movement9 == "drop") {
		return true;
	}

	if(movement10 == "add" || movement10 == "drop") {
		return true;
	}

	alert("กรุณาเพิ่ม/ถอน อย่างน้อย 1 รายวิชา");
	return false;
}

function validateCause()
{
	var cause = document.getElementById("causeInput").value;
	console.log("cause => " + cause);

	if(! cause) {
		alert("กรุณากรอกเหตุผล");
		return false;
	}

	return true;
}

/* js to json*/

function buildDataObject()
{
	var data = {
		date: document.getElementById("dateInput").value,
		month: document.getElementById("monthInput").value,
		year: document.getElementById("yearInput").value,
		studentFirstName: document.getElementById("firstNameInput").value,
		studentLastName: document.getElementById("lastNameInput").value,
		studentId: document.getElementById("studentIDInput").value,
		studentYear: document.getElementById("classNoInput").value,
		studentField: document.getElementById("fieldInput").value,
		advisor: document.getElementById("advisorInput").value,
		addressNumber: document.getElementById("addressNoInput").value,
		moo: document.getElementById("mooInput").value,
		tumbol: document.getElementById("tumbolInput").value,
		amphur: document.getElementById("amphurInput").value,
		province: document.getElementById("provinceInput").value,
		postalCode: document.getElementById("postalCodeInput").value,
		mobilePhone: document.getElementById("mobileNoInput").value,
		phone: document.getElementById("telNoInput").value,
		cause: document.getElementById("causeInput").value,
		addSubjectList: buildAddSubjectList(),
		dropSubjectList: buildDropSubjectList()
	};

	return data;
}

function buildAddSubjectList()
{
	var subjectList = [];

	var command1 = document.getElementById("commandSelect1").value;
	var command2 = document.getElementById("commandSelect2").value;
	var command3 = document.getElementById("commandSelect3").value;
	var command4 = document.getElementById("commandSelect4").value;
	var command5 = document.getElementById("commandSelect5").value;
	var command6 = document.getElementById("commandSelect6").value;
	var command7 = document.getElementById("commandSelect7").value;
	var command8 = document.getElementById("commandSelect8").value;
	var command9 = document.getElementById("commandSelect9").value;
	var command10 = document.getElementById("commandSelect10").value;

	if(command1 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode1").value,
			subjectName: document.getElementById("subjectName1").value,
			subjectSection: document.getElementById("subjectSection1").value,
			subjectDate: document.getElementById("subjectDate1").value,
			subjectCredit: document.getElementById("subjectCredit1").value,
			subjectTeacher:  document.getElementById("subjectTeacher1").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck1").value
		};

		subjectList.push(subject);
	}

	if(command2 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode2").value,
			subjectName: document.getElementById("subjectName2").value,
			subjectSection: document.getElementById("subjectSection2").value,
			subjectDate: document.getElementById("subjectDate2").value,
			subjectCredit: document.getElementById("subjectCredit2").value,
			subjectTeacher:  document.getElementById("subjectTeacher2").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck2").value
		};
		
		subjectList.push(subject);
	}

	if(command3 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode3").value,
			subjectName: document.getElementById("subjectName3").value,
			subjectSection: document.getElementById("subjectSection3").value,
			subjectDate: document.getElementById("subjectDate3").value,
			subjectCredit: document.getElementById("subjectCredit3").value,
			subjectTeacher:  document.getElementById("subjectTeacher3").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck3").value
		};
		
		subjectList.push(subject);
	}

	if(command4 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode4").value,
			subjectName: document.getElementById("subjectName4").value,
			subjectSection: document.getElementById("subjectSection4").value,
			subjectDate: document.getElementById("subjectDate4").value,
			subjectCredit: document.getElementById("subjectCredit4").value,
			subjectTeacher:  document.getElementById("subjectTeacher4").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck4").value
		};
		
		subjectList.push(subject);
	}

	if(command5 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode5").value,
			subjectName: document.getElementById("subjectName5").value,
			subjectSection: document.getElementById("subjectSection5").value,
			subjectDate: document.getElementById("subjectDate5").value,
			subjectCredit: document.getElementById("subjectCredit5").value,
			subjectTeacher:  document.getElementById("subjectTeacher5").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck5").value
		};
		
		subjectList.push(subject);
	}

	if(command6 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode6").value,
			subjectName: document.getElementById("subjectName6").value,
			subjectSection: document.getElementById("subjectSection6").value,
			subjectDate: document.getElementById("subjectDate6").value,
			subjectCredit: document.getElementById("subjectCredit6").value,
			subjectTeacher:  document.getElementById("subjectTeacher6").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck6").value
		};
		
		subjectList.push(subject);
	}

	if(command7 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode7").value,
			subjectName: document.getElementById("subjectName7").value,
			subjectSection: document.getElementById("subjectSection7").value,
			subjectDate: document.getElementById("subjectDate7").value,
			subjectCredit: document.getElementById("subjectCredit7").value,
			subjectTeacher:  document.getElementById("subjectTeacher7").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck7").value
		};
		
		subjectList.push(subject);
	}

	if(command8 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode8").value,
			subjectName: document.getElementById("subjectName8").value,
			subjectSection: document.getElementById("subjectSection8").value,
			subjectDate: document.getElementById("subjectDate8").value,
			subjectCredit: document.getElementById("subjectCredit8").value,
			subjectTeacher:  document.getElementById("subjectTeacher8").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck8").value
		};
		
		subjectList.push(subject);
	}

	if(command9 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode9").value,
			subjectName: document.getElementById("subjectName9").value,
			subjectSection: document.getElementById("subjectSection9").value,
			subjectDate: document.getElementById("subjectDate9").value,
			subjectCredit: document.getElementById("subjectCredit9").value,
			subjectTeacher:  document.getElementById("subjectTeacher9").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck9").value
		};
		
		subjectList.push(subject);
	}

	if(command10 == "add") {
		var subject = {
			subjectCode: document.getElementById("subjectCode10").value,
			subjectName: document.getElementById("subjectName10").value,
			subjectSection: document.getElementById("subjectSection10").value,
			subjectDate: document.getElementById("subjectDate10").value,
			subjectCredit: document.getElementById("subjectCredit10").value,
			subjectTeacher:  document.getElementById("subjectTeacher10").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck10").value
		};
		
		subjectList.push(subject);
	}

	return subjectList;
}

function buildDropSubjectList()
{
	var subjectList = [];

	var command1 = document.getElementById("commandSelect1").value;
	var command2 = document.getElementById("commandSelect2").value;
	var command3 = document.getElementById("commandSelect3").value;
	var command4 = document.getElementById("commandSelect4").value;
	var command5 = document.getElementById("commandSelect5").value;
	var command6 = document.getElementById("commandSelect6").value;
	var command7 = document.getElementById("commandSelect7").value;
	var command8 = document.getElementById("commandSelect8").value;
	var command9 = document.getElementById("commandSelect9").value;
	var command10 = document.getElementById("commandSelect10").value;

	if(command1 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode1").value,
			subjectName: document.getElementById("subjectName1").value,
			subjectSection: document.getElementById("subjectSection1").value,
			subjectDate: document.getElementById("subjectDate1").value,
			subjectCredit: document.getElementById("subjectCredit1").value,
			subjectTeacher:  document.getElementById("subjectTeacher1").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck1").value
		};

		subjectList.push(subject);
	}

	if(command2 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode2").value,
			subjectName: document.getElementById("subjectName2").value,
			subjectSection: document.getElementById("subjectSection2").value,
			subjectDate: document.getElementById("subjectDate2").value,
			subjectCredit: document.getElementById("subjectCredit2").value,
			subjectTeacher:  document.getElementById("subjectTeacher2").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck2").value
		};
		
		subjectList.push(subject);
	}

	if(command3 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode3").value,
			subjectName: document.getElementById("subjectName3").value,
			subjectSection: document.getElementById("subjectSection3").value,
			subjectDate: document.getElementById("subjectDate3").value,
			subjectCredit: document.getElementById("subjectCredit3").value,
			subjectTeacher:  document.getElementById("subjectTeacher3").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck3").value
		};
		
		subjectList.push(subject);
	}

	if(command4 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode4").value,
			subjectName: document.getElementById("subjectName4").value,
			subjectSection: document.getElementById("subjectSection4").value,
			subjectDate: document.getElementById("subjectDate4").value,
			subjectCredit: document.getElementById("subjectCredit4").value,
			subjectTeacher:  document.getElementById("subjectTeacher4").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck4").value
		};
		
		subjectList.push(subject);
	}

	if(command5 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode5").value,
			subjectName: document.getElementById("subjectName5").value,
			subjectSection: document.getElementById("subjectSection5").value,
			subjectDate: document.getElementById("subjectDate5").value,
			subjectCredit: document.getElementById("subjectCredit5").value,
			subjectTeacher:  document.getElementById("subjectTeacher5").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck5").value
		};
		
		subjectList.push(subject);
	}

	if(command6 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode6").value,
			subjectName: document.getElementById("subjectName6").value,
			subjectSection: document.getElementById("subjectSection6").value,
			subjectDate: document.getElementById("subjectDate6").value,
			subjectCredit: document.getElementById("subjectCredit6").value,
			subjectTeacher:  document.getElementById("subjectTeacher6").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck6").value
		};
		
		subjectList.push(subject);
	}

	if(command7 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode7").value,
			subjectName: document.getElementById("subjectName7").value,
			subjectSection: document.getElementById("subjectSection7").value,
			subjectDate: document.getElementById("subjectDate7").value,
			subjectCredit: document.getElementById("subjectCredit7").value,
			subjectTeacher:  document.getElementById("subjectTeacher7").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck7").value
		};
		
		subjectList.push(subject);
	}

	if(command8 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode8").value,
			subjectName: document.getElementById("subjectName8").value,
			subjectSection: document.getElementById("subjectSection8").value,
			subjectDate: document.getElementById("subjectDate8").value,
			subjectCredit: document.getElementById("subjectCredit8").value,
			subjectTeacher:  document.getElementById("subjectTeacher8").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck8").value
		};
		
		subjectList.push(subject);
	}

	if(command9 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode9").value,
			subjectName: document.getElementById("subjectName9").value,
			subjectSection: document.getElementById("subjectSection9").value,
			subjectDate: document.getElementById("subjectDate9").value,
			subjectCredit: document.getElementById("subjectCredit9").value,
			subjectTeacher:  document.getElementById("subjectTeacher9").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck9").value
		};
		
		subjectList.push(subject);
	}

	if(command10 == "drop") {
		var subject = {
			subjectCode: document.getElementById("subjectCode10").value,
			subjectName: document.getElementById("subjectName10").value,
			subjectSection: document.getElementById("subjectSection10").value,
			subjectDate: document.getElementById("subjectDate10").value,
			subjectCredit: document.getElementById("subjectCredit10").value,
			subjectTeacher:  document.getElementById("subjectTeacher10").value,
			subjectTeacherCheck: document.getElementById("subjectTeacherCheck10").value
		};
		
		subjectList.push(subject);
	}

	return subjectList;
}