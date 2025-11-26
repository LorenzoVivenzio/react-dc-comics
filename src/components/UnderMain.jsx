import comics from "./comics"

export default function UnderMain() {

    return (
        <section className="bg-black">
            <div className=" Content cont text-white d-flex wrap p-40px">

                {comics.map((curComics) =>
                    <div className="col key={curComics.id}">
                        <img src={curComics.thumb} alt="" />
                        <p> {curComics.series} </p>
                    </div>
                )}

            </div>
            <a className="btn" href="">READ MORE</a>
        </section>
    )

}