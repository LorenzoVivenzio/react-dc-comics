import style from "./AppFooterList.module.css"

export default function AppFooterList() {
    return (
        <footer >
            <div className="cont ">
                <div className="w-10 d-flex">
                <ul className="text-gray">
                    <li className={style.startList} ><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li className={style.startList} ><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                </ul>
                <ul className="text-gray" >
                    <li className={style.startList} ><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>

                </ul>
                <ul className="text-gray">
                    <li className={style.startList} ><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                    <li><a href="">ciao</a></li>
                </ul>
                </div>
            </div>


        </footer>)
}