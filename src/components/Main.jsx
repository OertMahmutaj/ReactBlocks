import '../layouts/Main.css'

const Main = (props) => {
    return (
        <div className="main">
            <div>{props.children}</div>
        </div>
    );
}
export default Main;