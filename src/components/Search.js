import { useState } from "react";

export default function Search() {
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title", "catagory"]);
    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                        value={q}
                        /*
                        // set the value of our useState q
                        //  anytime the user types in the search box
                        */
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <span className="sr-only">Search countries here</span>
                </label>
            </div>
            <ul className="card-grid">
                {recipes.map((recipe,idx) => (
                    <li>
                        <article className="card" key={idx}>
                            <div className="card-content">
                                <h2 className="card-name">{recipe.title}</h2>
                                <ol className="card-list">
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
    

