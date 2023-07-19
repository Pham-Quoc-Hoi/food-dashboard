class FoodServices {
    getListFoodAPI() {
        return axios({
            URL: "https://637b69c310a6f23f7fa80f9d.mockapi.io/api/Food",
            method: "GET",
        })
    }
}

export default FoodServices;