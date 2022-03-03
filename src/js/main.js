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
}

const initializeApp = () => {
    setLanguageInUse();
    let data = getJsonDataInLocale();
    console.log("json", data);
    buildHeroContent(data);
    buildArticleHeader(data);
    buildParagraphs(data);
}

initializeApp();