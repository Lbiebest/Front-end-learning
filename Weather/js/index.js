import { createApp, ref } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js";
const app = createApp({
    setup() {
        const items = ref([
            "北京",
            "上海",
            "广州",
            "深圳",
        ]);

        const container = ref(null);

        const searchWeather = (city) => {
            axios.get("https://api.vvhan.com/api/weather?city=" + city)
                .then((response) => {
                    // console.log(response);
                    displayWeather(response.data);
                }).catch((error) => {
                    console.log("error: " + error);
                })
        };

        function displayWeather(weather) {
            if (container.value === null) {
                container.value = document.getElementById("container")
            }
        
            // 清空容器内容
            container.value.innerHTML = "";
        
            // 创建标题
            const title = document.createElement("h2");
            title.textContent = `${weather.city}天气预报`;
        
            // 创建日期和星期
            const dateInfo = document.createElement("p");
            dateInfo.textContent = `${weather.info.date} ${weather.info.week}`;
        
            // 创建天气情况
            const weatherInfo = document.createElement("p");
            weatherInfo.textContent = `天气：${weather.info.type}`;
        
            // 创建温度范围
            const temperatureInfo = document.createElement("p");
            temperatureInfo.textContent = `温度：${weather.info.low} ~ ${weather.info.high}`;
        
            // 创建风向和风力
            const windInfo = document.createElement("p");
            windInfo.textContent = `风向：${weather.info.fengxiang}，风力：${weather.info.fengli}`;
        
            // 创建空气质量信息
            const airInfo = document.createElement("p");
            airInfo.textContent = `空气质量：AQI ${weather.info.air.aqi} (${weather.info.air.aqi_name})`;
        
            // 创建温馨提示
            const tipInfo = document.createElement("p");
            tipInfo.textContent = `温馨提示：${weather.info.tip}`;
        
            // 将创建的元素添加到容器中
            container.value.appendChild(title);
            container.value.appendChild(dateInfo);
            container.value.appendChild(weatherInfo);
            container.value.appendChild(temperatureInfo);
            container.value.appendChild(windInfo);
            container.value.appendChild(airInfo);
            container.value.appendChild(tipInfo);
        }
        

        return {
            items, container,
            searchWeather,
        };
    }
});
app.mount("#app");