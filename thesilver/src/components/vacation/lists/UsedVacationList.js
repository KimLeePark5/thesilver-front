import React, {useEffect, useState} from "react";
import UsedVacationItem from "../items/UsedVacationItem";
import {useDispatch, useSelector} from "react-redux";
import { callUsedVacationAPI} from "../../../apis/VacationAPICalls";
import DatePicker from "../items/DatePicker";



function UsedVacationList({usedVacation}) {





    // 날짜로 조회 하기
    // 시작 날짜와 종료 날짜의 상태
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // 날짜가 선택됐을 때 실행되는 콜백 함수
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };



    console.log("usedVacation 데이터가 있나요? : ", usedVacation)

    return (
        <>
            <div className="used-vacation-content">
                <h3>사용 내역</h3>
                <div className="select-days">
                    <span>기간 :&nbsp;&nbsp;</span>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="시작 날짜"
                        dateFormat="yyyy년 MM월 dd일"
                    />
                    <span>&nbsp; ~ &nbsp;</span>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="종료 날짜"
                        dateFormat="yyyy년 MM월 dd일"
                    />
                </div>
            </div>
            <div className="used-vacation">
                <div className="used-vacation-head">
                    <div>종류</div>
                    <div>사용 기간</div>
                    <div>사용 일자</div>
                    <div>내용</div>
                    <div>상태</div>
                </div>
                {usedVacation?.data.map(data => <UsedVacationItem key={data.employeeCode} data={data}/>)}
            </div>

        </>


    )
}

export default UsedVacationList;