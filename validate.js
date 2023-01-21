function validate(form) {

  if(form.date.value == "") {
    alert("กรุณากรอกวันที่/เดือน/ปี");
    form.date.focus();
    return false;
  }

  if(form.tname.value == "เลือก...") {
    alert("กรุณากรอกคำนำหน้าชื่อ");
    form.tname.focus();
    return false;
  }

  if(form.name.value == "") {
    alert("กรุณากรอกชื่อ-สกุลให้ครบ");
    form.name.focus();
    return false;
  }

  if(isNaN(form.name.value)==false) {
    alert("กรุณากรอกข้อมูลชื่อให้ถูกต้อง");
    form.name.focus();
    return false
  }

  if(form.idstu.value == "") {
    alert("กรุณากรอกเลขทะเบียนนักศึกษา");
    form.idstu.focus();
    return false;
  }

  if(isNaN(form.idstu.value)==true) {
    alert("กรุณากรอกเลขทะเบียนนักศึกษาเป็นตัวเลขเท่านั้น");
    form.idstu.focus();
    return false
  }

  if(form.idstu.value.length != 10) {
    alert("กรุณากรอกเลขทะเบียนนักศึกษาให้ครบ 10 หลัก");
    form.idstu.focus();
    return false;
  }

  if(form.yearstu.value == "เลือก...") {
    alert("กรุณาเลือกชั้นปีที่เรียน");
    form.yearstu.focus();
    return false;
  }

  if(form.saka.value == "เลือก...") {
    alert("กรุณาเลือกสาขาวิชา");
    form.saka.focus();
    return false;
  }

  if(form.teacher.value == "") {
    alert("กรุณากรอกชื่ออาจารย์ที่ปรึกษา");
    form.teacher.focus();
    return false;
  }

  if(isNaN(form.teacher.value)==false) {
    alert("กรุณากรอกข้อมูลชื่ออาจารย์ที่ปรึกษาให้ถูกต้อง");
    form.teacher.focus();
    return false
  }

  if(form.numberhome.value == "") {
    alert("กรุณากรอกข้อมูลบ้านเลขที่");
    form.numberhome.focus();
    return false;
  }

  if(isNaN(form.numberhome.value)==true && form.numberhome.value != "-" ) {
    alert("กรุณากรอกข้อมูลบ้านเลขที่ให้ถูกต้อง");
    form.numberhome.focus();
    return false
  }

  if(form.numbermuhome.value == "") {
    alert("กรุณากรอกข้อมูลหมู่ที่");
    form.numbermuhome.focus();
    return false;
  }

  if(isNaN(form.numbermuhome.value)==true && form.numbermuhome.value != "-" ) {
    alert("กรุณากรอกข้อมูลหมู่ที่ให้ถูกต้อง");
    form.numbermuhome.focus();
    return false
  }

  if(form.inputAddress.value == "") {
    alert("กรุณากรอกข้อมูลแขวง/ตำบล");
    form.inputAddress.focus();
    return false;
  }

  if(isNaN(form.inputAddress.value)==false) {
    alert("กรุณากรอกข้อมูลแขวง/ตำบลให้ถูกต้อง");
    form.inputAddress.focus();
    return false
  }

  if(form.inputAddress2.value == "") {
    alert("กรุณากรอกข้อมูลเขต/อำเภอ");
    form.inputAddress2.focus();
    return false;
  }

  if(isNaN(form.inputAddress2.value)==false) {
    alert("กรุณากรอกข้อมูลเขต/อำเภอให้ถูกต้อง");
    form.inputAddress2.focus();
    return false
  }

  if(form.inputCity.value == "") {
    alert("กรุณากรอกข้อมูลจังหวัด");
    form.inputCity.focus();
    return false;
  }

  if(isNaN(form.inputCity.value)==false) {
    alert("กรุณากรอกข้อมูลจังหวัดให้ถูกต้อง");
    form.inputCity.focus();
    return false
  }

  if(form.inputnumState.value == "") {
    alert("กรุณากรอกรหัสไปรษณีย์");
    form.inputnumState.focus();
    return false;
  }

  if(isNaN(form.inputnumState.value)==true) {
    alert("กรุณากรอกรหัสไปรษณีย์เป็นตัวเลขเท่านั้น");
    form.inputnumState.focus();
    return false
  }

  if(form.inputnumState.value.length != 5) {
    alert("กรุณากรอกรหัสไปรษณีย์ให้ครบ 5 หลัก");
    form.inputnumState.focus();
    return false;
  }

  if(form.numbertel.value == "") {
    alert("กรุณากรอกหมายเลขโทรศัพท์มือถือ");
    form.numbertel.focus();
    return false;
  }

  if(isNaN(form.numbertel.value)==true && form.numbertel.value != "-" ) {
    alert("กรุณากรอกเลขโทรศัพท์มือถือให้ถูกต้อง");
    form.numbertel.focus();
    return false
  }

  if(isNaN(form.numbertel.value)== false && form.numbertel.value.length != 10 ) {
    alert("กรุณากรอกเลขโทรศัพท์มือถือให้ครบ 10 หลัก");
    form.numbertel.focus();
    return false
  }

  if(form.numbertelhome.value == "") {
    alert("กรุณากรอกเลขโทรศัพท์บ้าน");
    form.numbertelhome.focus();
    return false;
  }

  if(isNaN(form.numbertelhome.value)==true && form.numbertelhome.value != "-" ) {
    alert("กรุณากรอกเลขโทรศัพท์บ้านให้ถูกต้อง");
    form.numbertelhome.focus();
    return false
  }

  if(isNaN(form.numbertelhome.value)== false && form.numbertelhome.value.length != 10) {
    alert("กรุณากรอกเลขโทรศัพท์บ้านให้ครบ 10 หลัก");
    form.numbertelhome.focus();
    return false
  }

  if(form.addSub.value == "") {
    alert("กรุณากรอกจำนวนขอเพิ่มรายวิชา");
    form.addSub.focus();
    return false;
  }

  if(form.addSub.value < 0) {
    alert("กรุณากรอกจำนวนขอเพิ่มรายวิชาให้ถูกต้อง");
    form.addSub.focus();
    return false;
  }

  if(form.deSub.value == "") {
    alert("กรุณากรอกจำนวนขอถอนรายวิชา");
    form.deSub.focus();
    return false;
  }

  if(form.deSub.value < 0) {
    alert("กรุณากรอกจำนวนขอถอนรายวิชาให้ถูกต้อง");
    form.deSub.focus();
    return false;
  }

  if(form.agreeTeach1.checked == false && form.agreeTeach2.checked == false && form.agreeTeach3.checked == false && form.agreeTeach4.checked == false ) {
    alert("กรุณาเลือกเหตุผลที่ขอเพิ่ม - ถอนรายวิชา");
    return false;
  }

  if(form.agreeTeach4.checked== true && form.result.value == "" ) {
    alert("กรุณากรอกเหตุผลอื่น ๆ ");
    return false;
  }

  return true;

 }



