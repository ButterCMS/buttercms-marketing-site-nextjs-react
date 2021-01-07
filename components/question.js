import React from "react";

export default function Question({ question, answer }) {
    const [collapsed, setCollapsed] = React.useState(true);

    function toggleQuestion() {
        setCollapsed(!collapsed);
    }
    return (
        <div className={!collapsed ? "is-open" : ""}>
            <div className="accordion-title">
                <span>{question}</span>
                <div className="accordion-icon" onClick={toggleQuestion} />
            </div>

            <div className="accordion-body">
                <p>{answer}</p>
            </div>
        </div>
    );
}
