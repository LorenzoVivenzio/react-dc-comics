import style from "./AppFooterList.module.css"

export default function AppFooterList() {
    return (
        <footer >
            <div className="cont d-flex justify-content-beetwen">
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
                <div>
                    <img src="public/img/dc-logo-bg.png" alt="" />
                </div>
            </div>


        </footer>)
}