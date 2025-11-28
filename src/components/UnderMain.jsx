import comics from "./comics";
import CardMain from "./CardMain";

export default function UnderMain() {

    return (
        <>
        <section className="bg-black">
            <div className=" Content cont text-white d-flex wrap p-40px">

                {comics.map((curComics) => (
                <CardMain

                thumb = {curComics.thumb} 
                series = {curComics.series}
                />


                ))}

            </div>
            <a className="btn" href="">READ MORE</a>
        </section>
        </>
    )

}