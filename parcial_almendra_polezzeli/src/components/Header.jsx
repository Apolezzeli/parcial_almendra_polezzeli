import style from "./Header.module.css";

function Header(props) {
    const header = `${style.header}`;
    return <header className={header}>{props.title}</header>;
}

export default Header;