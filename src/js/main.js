const jsonData = {
    english: require("../data/english.json"),
    hindi: require("../data/hindi.json"),
}

const getJsonDataInLocale = () => {
    let language = localStorage.getItem("language");
    if(!language) return jsonData.english;
    return jsonData[language] || jsonData.english;
}

const setLanguageInUse = (language = "english") => {
    localStorage.setItem("language", language);
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

const setCitySelectionTitle = (data) => {
    document.querySelector("#defaultSelectOption").textContent = data?.["compare-tabs_1_title"];
}

const generateCitySelectOptions = (data) => {
    const cities = Object.keys(data)?.filter(item => item?.startsWith("compare-tabs_1_city_") && item?.endsWith("name"))?.map(item => ({name: data[item], value: item}));
    let select = document.getElementById("citySelect");
    for(let city of cities){
        select.options[select.options.length] = new Option(city.name, city.value);
    }
}

const initializeApp = () => {
    setLanguageInUse();
    let data = getJsonDataInLocale();
    buildHeroContent(data);
    buildArticleHeader(data);
    buildParagraphs(data);
    setCitySelectionTitle(data);
    generateCitySelectOptions(data);
}

initializeApp();