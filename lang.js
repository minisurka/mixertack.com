const translations = {
    ru: {
		deveolper: "Разработчик",
        site_author: "Сайт автора",
		archive: "Архив",
		
        main_page_title: "MixerTack - Главная",
		main_home: "Главная",
		main_main: "MixerTack - Главная",
		main_download: "Скачать",
		main_documentation: "Документация",
		main_source_code: "Исходный код",
		main_ms_content_card_1: "MixerTack — Официальный открытый сайт с проектами.",
		main_ms_content_card_2: "Мы будем открывать исходный код проектов, но не сразу и постепенно.",
		main_type: "Тип",
		main_description: "Описание",
		main_go: "Перейти",
		main_table_github_description: "хз! :D",
		main_table_projects_name: "Проекты",
		main_table_projects_description: "Открытые проекты! :D",
		main_table_projects_namefile: "Проекты.html",
        main_table_mini_projects_name: "Мини-проекты",
		main_table_mini_projects_description: "Маленькие проекты для прикола :)",
		main_table_mini_projects_namefile: "Мини-проекты.html",
    },
    en: {
        deveolper: "Developer",
		site_author: "Site author",
		archive: "Archive",
		
        main_page_title: "MixerTack - Home",
		main_home: "Home",
		main_main: "MixerTack - Home",
		main_download: "Download",
		main_documentation: "Documentation",
		main_source_code: "Source code",
		main_ms_content_card_1: "MixerTack — Official open website with projects.",
		main_ms_content_card_2: "We will open the source code of the projects, but not immediately and gradually.",
		main_type: "Type",
		main_description: "Description",
		main_go: "Go",
		main_table_github_description: "I don't know! :D",
		main_table_projects_name: "Projects",
		main_table_projects_description: "Open-source projects! :D",
		main_table_projects_namefile: "Projects.html",
		main_table_mini_projects_name: "Mini-projects",
		main_table_mini_projects_description: "Small projects for fun :)",
		main_table_mini_projects_namefile: "Mini-projects.html",
    },
    uk: {
		deveolper: "Розробник",
		site_author: "Сайт автора",
		archive: "Архiв",
		
        main_page_title: "MixerTack - Головна",
		main_home: "Головна",
		main_main: "MixerTack - Головна",
		main_download: "Скачати",
		main_documentation: "Документація",
		main_source_code: "Вихідний код",
		main_ms_content_card_1: "MixerTack — Офіційний відкритий сайт із проектами.",
		main_ms_content_card_2: "Ми відкриватимемо вихідний код проектів, але не відразу і поступово.",
		main_type: "Тип",
		main_description: "Опис",
		main_go: "Перейти",
		main_table_github_description: "хз! :D",
		main_table_projects_name: "Проекти",
		main_table_projects_description: "Відкриті проекти! :D",
		main_table_projects_namefile: "Проекти.html",
		main_table_mini_projects_name: "Міні-проекти",
		main_table_mini_projects_description: "Маленькі проекти для приколу :)",
		main_table_mini_projects_namefile: "Мiнi-проекти.html",
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyLang(lang);
}

function applyLang(lang) {
    const t = translations[lang] || translations.ru;

    if (t.page_title) {
        document.title = t.page_title;
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.innerHTML = t[key];
    });
}

const savedLang = localStorage.getItem("lang");
if (savedLang) {
    applyLang(savedLang);
} else {
    const browserLang = navigator.language.slice(0, 2);
    if (translations[browserLang]) {
        applyLang(browserLang);
    } else {
        applyLang("ru");
    }
}