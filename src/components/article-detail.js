import React from "react";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";

const ArticleDetail = (props) => {
    // const articleDetail = useStaticQuery(graphql`
    //     query( $slug: String! ) {
    //         allPrismicArticle(filter: {data: {cuong_title: {text: {eq: $slug}}}}) {
    //             nodes {
    //                 dataRaw
    //             }
    //         }
    //     }
    // `);

    // console.log({props, articleDetail});

    // return (
    //     <div>Article Detail</div>
    // )

    console.log({props});

    return <div>Article Detail</div>
}

export default ArticleDetail