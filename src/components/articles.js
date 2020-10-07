import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { RichText } from "prismic-reactjs";

const Articles = (props) => {
    const articles = useStaticQuery(graphql`
        {
            allPrismicArticle {
                nodes {
                    dataRaw
                }
            }
        }
    `).allPrismicArticle.nodes;

    console.log({articles});

    return (
        <>
            <div>List articles</div>
            {articles.length > 0 && 
                articles.map((article, index) => (
                    <Link key={index} to={`/${article.dataRaw.cuong_title[0].text}`}>
                        <RichText
                            render={article.dataRaw.cuong_title}
                        />
                    </Link>
                ))
            }
        </>
    )
}

export default Articles