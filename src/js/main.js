const jsonData = {
    english: require("../data/english.json"),
    hindi: require("../data/hindi.json"),
}

const getJsonDataInLocale = (language) => {
    let data = jsonData[language] || jsonData.english;
    return data;
}

const buildHeroContent = (data) => {
    document.querySelector(".hero-image").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${data.hero_1_image}")`;
    document.querySelector(".hero-title").textContent = data.hero_1_title;
}

const buildArticleHeader = (data) => {
    document.querySelector(".article-info_1-byline").textContent = data?.["article-info_1_byline"];
    document.querySelector(".article-info_1-date").textContent = data?.["article-info_1_date"];
    document.querySelector(".article-info_1-category").textContent = data?.["article-info_1_category"];
    document.querySelector(".article-info_1-category").href = data?.["article-info_1_category_url"];
}

const buildParagraphs = (data) => {
    document.querySelector(".p_1_value").textContent = data.p_1_value;
    document.querySelector(".p_2_value").textContent = data.p_2_value;
    document.querySelector(".p_3_value").textContent = data.p_3_value;
    document.querySelector(".p_4_value").textContent = data.p_4_value;
    document.querySelector(".p_5_value").textContent = data.p_5_value;
    document.querySelector(".p_6_value").textContent = data.p_6_value;
    document.querySelector(".p_7_value").textContent = data.p_7_value;
    document.querySelector(".p_8_value").textContent = data.p_8_value;
    document.querySelector(".p_9_value").textContent = data.p_9_value;
    document.querySelector(".p_10_value").textContent = data.p_10_value;
}

const generateCitySelectOptions = (data) => {
    let select = document.getElementById("citySelect");

    if(select?.options?.length > 0){
        for(let index of new Array(select.options.length)) select.remove(index);
    }

    select.options[select.options.length] = new Option(data?.["compare-tabs_1_title"], null);

    const cities = Object.keys(data)?.filter(item => item?.startsWith("compare-tabs_1_city_") && item?.endsWith("name"))?.map(item => ({name: data[item], value: item}));
    
    for(let city of cities){
        select.options[select.options.length] = new Option(city.name, city.value);
    }
}

const setSelectedCityCard = (data, key) => {
    let slicedKey = key?.slice(0, -4);
    let aqi = data?.[`${slicedKey}aqi`];
    let cigg = data?.[`${slicedKey}cigg`];
    document.querySelector(".city_info").style.display = "block";
    document.querySelector(".city_name").innerHTML = `<span><strong>${data?.[key]}</strong></span>`;
    document.querySelector(".city_aqi").innerHTML = `<span><strong>AQI: </strong> ${aqi}</span>`;
    document.querySelector(".city_cigg").innerHTML = `<span><strong>CIGG: </strong> ${cigg}</span>`;
}

const addEventListenerForCitySelection = (data) => {
    document.getElementById("citySelect").addEventListener("change", (e) => {
        let value = e?.target?.value;
        if(value === "null"){
            document.querySelector(".city_info").style.display = "none";
            return;
        }
        setSelectedCityCard(data, value);
    })
}

const addEventListenerForLanguageSelection = () => {
    let englishBtn = document.getElementById("englishBtn");
    let hindiBtn = document.getElementById("hindiBtn");

    englishBtn.addEventListener("click", () => {
        englishBtn.classList.add("btn-primary");
        englishBtn.classList.remove("btn-secondary");
        hindiBtn.classList.add("btn-secondary");
        hindiBtn.classList.remove("btn-primary");

        initializeApp("english");
    })

    hindiBtn.addEventListener("click", () => {
        hindiBtn.classList.add("btn-primary");
        hindiBtn.classList.remove("btn-secondary");
        englishBtn.classList.add("btn-secondary");
        englishBtn.classList.remove("btn-primary");

        initializeApp("hindi");
    })
}

const initializeApp = (language = "english") => {
    let data = getJsonDataInLocale(language);
    buildHeroContent(data);
    buildArticleHeader(data);
    buildParagraphs(data);
    generateCitySelectOptions(data);
    addEventListenerForCitySelection(data);
}

initializeApp();
addEventListenerForLanguageSelection();