// import Food from "../models/Food.js";
import Food from "../models/Food.js";
import FoodServices from "./../services/FoodServices.js";

const foodServices = new FoodServices();
const food = new Food;

const getEle = (id) => document.getElementById(id);


// const renderHTML = (data) => {
//     let content = "";
//     if (data && data.length > 0) {
//         data.forEach((food) => {
//             content += `
//             <tr>
//               <td>${food.id}</td>
//               <td>${food.tenMon}</td>
//               <td>${food.loaiMon}</td>
//               <td>${food.giaMon}</td>
//               <td>${food.khuyenMai}</td>
//               <td>${food.giaKhuyenMai}</td>
//               <td>${food.tinhTrang}</td>
//             </tr>
//             `;
//         });
//         getEle("tbodyFood").innerHTML = content;
//     }
// }

const renderHTML = (data) => {
    if (data && data.length > 0) {
        const res = data.reduce((content, item) => {
            return content += `
             <tr>
                <td>${food.id}</td>
                <td>${food.tenMon}</td>
                <td>${food.loaiMon}</td>
                <td>${food.giaMon}</td>
                <td>${food.khuyenMai}</td>
                <td>${food.giaKhuyenMai}</td>
                <td>${food.tinhTrang}</td>
            </tr>
            `;
        }, "");
        getEle("tbodyFood").innerHTML = res;
    }

}

const getListFood = () => {
    foodServices.getListFoodAPI()
        .then((res) => {
            console.log(res);

        })
        .catch((error) => {
            console.log(error);
        });
};
renderHTML();
getListFood();

console.log(window);