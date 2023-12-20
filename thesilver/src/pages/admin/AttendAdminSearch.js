import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AdminAttendHeader from "../../components/items/AttendItems/AdminAttendHeader";
import EmployeeInfo from "../../components/items/AttendItems/EmployeeInfo";
import {useEffect, useState} from "react";
import {callSearchNameAPICalls} from "../../apis/AttendAPICalls";
import PagingBar from "../../components/common/PagingBar";
import {ToastContainer} from "react-toastify";

function AttendAdminSearch(){
    const date = new Date();
    const today = String(date.getFullYear()) +'-'+ String(date.getMonth()+1);
    const[month, setMonth]=useState(today);
    const[page, setCurrentPage] = useState(1);
    const [searchParams] = useSearchParams();
    const nameValue = searchParams.get("name");
    const dispatch = useDispatch();
    const {attendAdmin} = useSelector(state=>state.attendReducer)

    useEffect(() => {
        dispatch(callSearchNameAPICalls(month,nameValue,page));
    }, [month,page,searchParams]);
    const navigate = useNavigate();
    return(
        <>
            {attendAdmin &&
                <div>
                    <div style={{cursor:"pointer"}} className="attendAdminHead" onClick={()=>{window.location.replace("attend-management")}}>직원 근태 관리</div>
                    <div className="attendBackAdmin">
                        <ToastContainer hideProgressBar={true} position="top-center" style={{zIndex:500000000000}}/>
                        <AdminAttendHeader month={month} setMonth={setMonth} name={nameValue} />
                        <EmployeeInfo attendAdmin={attendAdmin} setMonth={setMonth} month={month}/>
                        <PagingBar setCurrentPage={setCurrentPage} pageInfo={attendAdmin.pageInfo}/>
                    </div>
                </div>
            }
        </>
    )
}
export default AttendAdminSearch;