// src/Data/resumeData.js
export const resumeData = {
  personal: {
    name: "Александр Ткаченко",
    title: "FullStack Developer",
    summary: "Начинающий фулстек-разработчик с полным циклом создания веб-приложений. Специализируюсь на современных технологиях React, FastAPI и развертывании проектов. Стремлюсь к созданию качественных digital-продуктов и профессиональному росту.",
    location: "Ростов-на-Дону, Россия",
    email: "sasha-tkachenko-03@mail.ru",
    phone: "+7 (988) 997-46-41",
    website: "Sensej808.github.io",
    github: "github.com/sensej808",
    portfolio: "https://github.com/Sensej808?tab=repositories" // Добавил ссылку на все проекты
  },

  achievements: [
    {
      id: 1,
      title: "Сайт транспортной компании 'Впуть'",
      period: "2025",
      description: [
        "Полный цикл разработки: от проектирования дизайна до развертывания на сервере",
        "Создание адаптивного пользовательского интерфейса с интуитивной навигацией",
        "Реализация функционала бронирования и управления перевозками",
        "Настройка серверной инфраструктуры и деплой проекта"
      ],
      technologies: ["React", "FastAPI", "Aiogram"],
      links: [
        { type: "live", url: "https://vputtransfer.ru", label: "Посмотреть сайт" },
        { type: "github", url: "https://github.com/Sensej808/vputtransfer.ru", label: "Исходный код" }
      ]
    },
    {
      id: 2,
      title: "Парсер карточек товаров маркетплейсов",
      period: "2024",
      description: [
        "Разработка системы парсинга и анализа товарных карточек с различных маркетплейсов",
        "Реализация алгоритмов сравнения характеристик и поиска похожих товаров",
        "Создание интерфейса для визуализации результатов сравнения",
        "Оптимизация процессов сбора и обработки данных"
      ],
      technologies: ["React", "FastAPI", "Beautiful Soup"],
      links: [
        { type: "github", url: "https://github.com/0Taiga0/Hack", label: "Исходный код" },
      ]
    },
    {
      id: 3,
      title: "Портирование JavaScript игры на Android",
      period: "2023",
      description: [
        "Перенос браузерной игры-платформера с чистого JavaScript на движок Unity",
        "Адаптация геймплея и управления для мобильных устройств",
        "Сборка и оптимизация приложения под платформу Android",
        "Тестирование и обеспечение стабильной работы на различных устройствах"
      ],
      technologies: ["JavaScript", "Unity"],
      links: [
        { type: "github", url: "https://github.com/Sensej808/Beshtau-game", label: "Unity версия" }
      ]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Южный Федеральный Университет",
      degree: "Бакалавр информатики",
      period: "2021 - 2025",
      details: "Специализация: Фундаментальная информатика и информационные технологии"
    }
  ],

  skills: {
    "Frontend": ["React", "HTML5", "Phaser"],
    "Backend": ["FastAPI", "Python"],
    "Languages": ["JavaScript", "TypeScript", "C++", "C#", "Python"],
    "Tools & Platforms": ["Git", "Docker", "Unity", "Figma"]
  },

  languages: [
    { name: "Русский", level: "Родной" },
    { name: "Английский", level: "B1 - Средний" }
  ]
};