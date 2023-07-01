import {getUserInfos} from "../../services/Auth";

export const goToDashboard = (navigate) => {
    const userData = getUserInfos();

    let userRole = userData?.role;

    if(userRole === 'ADMIN'){
        navigate('/admin/dashboard')
    }
    if(userRole === 'COMPANY'){
        navigate('/company/dashboard')
    }
    if(userRole === 'APPLICANT'){
        navigate('/applicant/dashboard')
    }
}