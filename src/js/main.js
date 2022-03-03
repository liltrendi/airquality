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

const initializeApp = () => {
    setLanguageInUse();
    let data = getJsonDataInLocale();
    console.log("json", data);
    buildHeroContent(data);
}

initializeApp();