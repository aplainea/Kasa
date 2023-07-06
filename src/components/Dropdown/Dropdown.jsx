export default function Dropdown({ title, content }) {
    function dropdownContent() {
        if (title === "Équipements") {
            return (
                <ul>
                    {content.map((content, index) => {
                        return (
                            <li key={index} className="text">
                                {content}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return <p className="text">{content}</p>;
        }
    }

    return (
        <details>
            <summary>
                {title}
                <span className="icon" />
            </summary>
            {dropdownContent()}
        </details>
    );
}
