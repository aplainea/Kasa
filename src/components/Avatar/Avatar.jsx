export default function Avatar({ name, picture }) {
    const fullName = name.split(" ");
    return (
        <div className="avatar">
            <div className="name">
                <span>{fullName.at(0)}</span>
                <span>{fullName.at(-1)}</span>
            </div>

            <img src={picture} alt={name}></img>
        </div>
    );
}
