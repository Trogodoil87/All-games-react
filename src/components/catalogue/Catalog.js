import { Link } from "react-router-dom";

import { CatalogItem } from "./catalog-item/CatalogItem";

export const Catalog = ({ games }) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <CatalogItem />
            {games.length > 0
                ? games.map((x, i) => <CatalogItem key={i} game={x} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}