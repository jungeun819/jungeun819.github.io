/**
 * 생성자
 */
class Member {
    constructor(userId, pwd, userName, birthday, gender, phone){
        this.userId = userId;
        this.pwd = pwd;
        this.userName = userName;
        this.birthday = birthday;
        this.gender = gender;
        this.phone = phone;
    };
};

/**
 * 유효성 검사
 */
document.join.addEventListener('submit', (e) => {
    const userId = document.getElementById("userId");
    const pwd = document.getElementById("pwd");
    const confmPwd = document.getElementById("confmPwd");
    const userName = document.getElementById("userName");
    const birthday = document.getElementById("birthday");
    const gender = document.getElementById("gender");
    const tel1 = document.getElementById("tel1");
    const tel2 = document.getElementById("tel2");
    const tel3 = document.getElementById("tel3");

    // 아이디 검사
    if (!regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/, userId, "이메일 형식에 어긋납니다."))
        return false;
    
    // 비밀번호 검사
    const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[!@#&]/];

        for (let i = 0; i < regExpArr.length; i++) {
            if (!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")) 
                return false;
        };
    
    // 비밀번호 재확인
    if (!isEqualPwd()) 
        return false;
    
    // 이름 검사
    if (!regExpTest(/^[가-힣]{2,}$/, userName, "한글2글자이상 입력해주세요."))
        return false;

    // 전화번호 검사
    if (!regExpTest(/^0\d{1,2}$/, tel1, "번호 2자리 이상 입력해주세요")) 
        return false;
    if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력해주세요"))
        return false;
    if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력해주세요"))
        return false;

    alert("가입 완료!👻")
    return true;
});

/**
 * 비밀번호 재확인
 */
function isEqualPwd() {
    if (pwd.value === confmPwd.value) {
        return true;
    } 
    else {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    };
};

/**
 * 요소 비교
 */
function regExpTest(regExp, el, msg) {
    if (regExp.test(el.value)) return true;
    alert(msg);
    el.value = "";
    el.focus();
    return false;
};

/**
 * Member 객체 Local Storage에 저장
 */
const saveMember = () => {
    const phone = tel1.value + tel2.value + tel3.value;
    console.log(phone);
    
    // Member 객체 생성
    const member = new Member(userId.value, pwd.value, userName.value, birthday.value, gender.value, phone);
    console.log(member);

    // Members 배열에 추가
    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(member);
    console.log(members);

    // Local Storage에 저장
    localStorage.setItem('members', JSON.stringify(members));

    document.join.reset(); // 왜 안되는걸까..?
};

/**
 * 실패,,,
 */
// const listPopup = document.querySelector("#list");
// const listBtn = document.querySelector(".listBtn")

// function showMember() {
//     listPopup.classList.toggle("show-list");
// }

// listBtn.onclick = () => {
//     showMember();
// }

