export default function Dropdown({ title, content, open }) {
    function dropdownContent() {
        if (title === "Équipements") {
            return (
                <ul className="text">
                    {content.map((content, index) => {
                        return <li key={index}>{content}</li>;
                    })}
                </ul>
            );
        } else {
            return <p className="text">{content}</p>;
        }
    }

    return (
        <details open={open}>
            <summary>
                {title}
                <span className="icon" />
            </summary>
            {dropdownContent()}
        </details>
    );
}

Dropdown.defaultProps = {
    open: true,
};
