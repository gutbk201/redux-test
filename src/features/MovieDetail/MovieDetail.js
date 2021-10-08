import styles from "./MovieDetail.module.css";
import dummy from "../../dummyJson/detail-550988.json";
function Popular(props) {
    const dbResults = dummy;
    const item = Object.assign({}, dbResults, {
        poster_path: "https://image.tmdb.org/t/p/w300" + dbResults.poster_path,
        runtime: `${Math.floor(dbResults.runtime / 60)}h${
            dbResults.runtime % 60
        }m`,
    });
    return (
        <main className={styles.root}>
            <div className={styles.sections}>
                <section
                    className={
                        "col-xs-11 col-sm-4 d-flex justify-content-center"
                    }
                >
                    <img src={item.poster_path} className={styles.img} />{" "}
                </section>
                <section className={"col-xs-11 col-sm-6 mt-3"}>
                    <p className={styles.p}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <div>{item.tagline}</div>
                    </p>
                    <p className={styles.p}>
                        <div className={styles.sectionsB}>
                            <section>
                                <div>{item.release_date}</div>
                                <div>{item.runtime}</div>
                            </section>
                            <section>
                                <div>{item.vote_average}/10</div>
                                <div>{item.vote_count} votes</div>
                            </section>
                        </div>
                    </p>
                    <p className={styles.p}>{item.overview}</p>
                </section>
            </div>
        </main>
    );
}

export default Popular;
