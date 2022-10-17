//게시판 테이블명 잠시 전역
var v_tblName = "gesiTB"


// var v_queryString = location.href.split("?")[1];
// alert(v_queryString.split("&")[1].split("=")[1]); //글쓴이 확인 가능


var request = {}; //name-space용 빈 객체
// 사용자 요청(request)을 담은 객체

// 개발자는 귀차니즘이 반복될 거 같은 예감에 일을 시작합니다.. 풉
request.getParameter = function (p_name) { // name을 넘기면 value를 리턴해주는 
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            return decodeURIComponent(nv[1].replaceAll("+"," "));
        }
    }
    return null; // 못찾았다면 null, 꼭 null일 필요는 없다 하하 

}

/*
function getParameter(p_name){ // name을 넘기면 value를 리턴해주는 
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            return decodeURIComponent(nv[1]);
        }
    }
    return null; // 못찾았다면 null, 꼭 null일 필요는 없다 하하 

}
*/

request.getParameterValues = function (p_name) { // name을 넘기면 value를 리턴해주는 
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_values = []; //값을 담을 배열 
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            v_values.push(nv[1].replaceAll("+"," ")); //찾았다면 배열에 담기
        }
    }
    if (!v_values.length) return null; // 배열의 length가 0이면 
    return v_values; //배열의 length가 0이 아니라면 

}

/*
// 같은 name으로 값이 여러개 넘어오는 것 처리 할 함수
function getParameterValues(p_name){ // name을 넘기면 value를 리턴해주는
    var v_queryString = location.href.split("?")[1];
    var v_values = []; //값을 담을 배열
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            v_values.push(nv[1]); //찾았다면 배열에 담기
        }
    }
    if(!v_values.length) return null; // 배열의 length가 0이면
    return v_values; //배열의 length가 0이 아니라면

}
*/

/* 인코딩 함수           디코딩 함수
escape                  unescape            -- 오래됨
encodeURI               decodeURI           -- 조금 오래됨
encodeURIComponent      decodeURIComponent  -- 최근 거!!
짝 맟춰 사용하는 것이 중요 (일부 글자 인코딩이 서로 따름)
*/

    // alert(decodeURIComponent(getParameter("nm_title")));
    // alert(decodeURIComponent(getParameter("nm_writer")));
    // alert(decodeURIComponent(getParameter("nm_content"))); -- 함수로 디코딩 해줬으니까!

    // alert(getParameter("nm_title"));
    // alert(getParameter("nm_writer"));
    // alert(getParameter("nm_content"));

    // alert(getParameter("nm_cat"))

    // alert(getParameterValues("nm_cat")); //여러개 담는 함수