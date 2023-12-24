import api from "../../../utils/api";

const getDashboardData = async () => {
    const response = await api().get('blogs');
    return response.data;
};

const dashboardService = {
    getDashboardData
};

export default dashboardService;
