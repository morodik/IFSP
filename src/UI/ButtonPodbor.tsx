import React, { useState } from "react";
import './ButtonPodbor.css';

// Определение типа для состояния активных кнопок
interface ActiveButtonsState {
    [key: string]: boolean;
}

function ButtonPodbor() {
    // Используем useState с начальным типом для состояния
    const [activeButtons, setActiveButtons] = useState<ActiveButtonsState>({});

    // Явно указываем тип для параметра id в функции
    const toggleButtonActive = (id: string) => {
        setActiveButtons(prev => ({
            ...prev,
            [id]: !prev[id] // TS теперь знает, что prev это объект ActiveButtonsState
        }));
    };

    const handleSubmit = (id: string) => (event: React.FormEvent<HTMLFormElement>) => {
        // Проверяем, была ли нажата кнопка с id="sub_btn"
        const subBtnClicked = id === "sub_btn";

        // Если кнопка с id="sub_btn" была нажата, отправляем форму
        if (subBtnClicked) {
            // Здесь можно добавить логику для отправки формы
            console.log("Form submitted!");
        }

        // Предотвращаем отправку формы по умолчанию
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit("sub_btn")}>
                {[
                    { id: "ganres_button", label: "Боевики" },
                    { id: "ganres_war", label: "Военные" },
                    { id: "ganres_dram", label: "Драма" },
                    { id: "ganres_kill", label: "Кримиал" },
                    { id: "ganres_history", label: "Спорт" }
                ].map(button => (
                    <button
                        key={button.id}
                        id={button.id}
                        className={activeButtons[button.id] ? "active" : ""}
                        onClick={() => toggleButtonActive(button.id)}>
                        {button.label}
                    </button>
                ))}
                <button id="sub_btn" type="submit">Выбор сделан</button>
            </form>
        </div>
    );
}

export default ButtonPodbor;
