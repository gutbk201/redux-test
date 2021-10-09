import styles from "./MovieDetail.module.css";
import dummy from "../../dummyJson/detail-550988.json";
import produce from "immer";
const imageBaseUrl = `https://image.tmdb.org/t/p`;
function Popular(props) {
    const dbResults = dummy;
    const item = produce(dbResults, (draft) => {
        draft.poster_path = imageBaseUrl + "/w300" + draft.poster_path;
        draft.runtime = `${Math.floor(draft.runtime / 60)}h
        ${draft.runtime % 60}m`;
        draft.production_companies = draft.production_companies.map((com) => ({
            ...com,
            logo_path: com.logo_path && imageBaseUrl + "/w154" + com.logo_path,
        }));
    });
    return (
        <main className={styles.root}>
            <div className={styles.sections}>
                <section
                    className={
                        "col-xs-11 col-sm-4 d-flex justify-content-center"
                    }
                >
                    <img
                        src={item.poster_path}
                        alt={"poster"}
                        className={styles.img}
                    />{" "}
                </section>
                <section className={"col-xs-11 col-sm-6 mt-3"}>
                    <div className={styles.p}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <div>{item.tagline}</div>
                    </div>
                    <div className={styles.p}>
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
                    </div>
                    <div className={styles.p}>{item.overview}</div>
                    <div className={styles.p}>
                        <h3>Production Companies</h3>
                        {item.production_companies.map((com) => (
                            <div key={com.name}>{com.name}</div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Popular;
