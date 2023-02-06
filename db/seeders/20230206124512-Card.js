"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Метод МАР возвращает новый массив?",
          answer: "да",
          deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Метод FILTER возвращает индекс?",
          answer: "нет",
          deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Метод CONCAT находит всех котов в массиве?",
          answer: "нет",
          deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Методы SLICE и SPLICE абсолютно одинаковы?",
          answer: "нет",
          deck_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Москву основал Джейснон Стэтхам?",
          answer: "нет",
          deck_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Население Уфы - 3 млн человек?",
          answer: "нет",
          deck_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Владивосток был столицей Японии до 1991 года?",
          answer: "нет",
          deck_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "В Новосибирске есть метро?",
          answer: "да",
          deck_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Первые чертежи автомобиля принадлежат ещё перу Леонардо да Винчи?",
          answer: "да",
          deck_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "До изобретения двигателя внутреннего сгорания автомобили работали на паровой тяге?",
          answer: "да",
          deck_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Самый большой автомобиль в мире — белорусский карьерный грузовик БелАЗ 75710?",
          answer: "да",
          deck_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Самый массовый автмобиль в мире — LADA GRANTA?",
          answer: "нет",
          deck_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "У Российской империи была крепость на Гавайях?",
          answer: "да",
          deck_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "На Урале первые поселения появились еще 4 тысячелетия назад?",
          answer: "да",
          deck_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Символ Ъ отменили в 1991 году?",
          answer: "нет",
          deck_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Самовар придумали в России?",
          answer: "нет",
          deck_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В России находится самый большой в мире действующий вулкан?",
          answer: "да",
          deck_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "В сцене с лошадиной головой в фильме «Крестный отец» была снята настоящая голова лошади?",
          answer: "да",
          deck_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "В Индии производят по 2 фильма в день?",
          answer: "да",
          deck_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Титаник самый кассовый фильм в мире?",
          answer: "нет",
          deck_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Мелодраму «Эммануэль» показывали в одном парижском кинотеатре 11 лет подряд?",
          answer: "да",
          deck_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Уолт Дисней получил больше всех Оскаров в мире?",
          answer: "да",
          deck_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
