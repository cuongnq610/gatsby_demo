/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const articleDetail = path.resolve(`./src/components/article-detail.js`)
    return new Promise((resolve, reject) => {
      graphql(`
        {
            allPrismicArticle {
                nodes {
                    dataRaw
                }
            }
        }
      `).then(result => {
            result.data.allPrismicArticle.nodes.forEach((node) => {
                console.log({node: node.dataRaw.cuong_title[0].text});
                createPage({
                    path: `${node.dataRaw.cuong_title[0].text}`,
                    component: articleDetail,
                    context: {
                        dataRaw: node.dataRaw
                    },
                })
            })
            resolve()
      })
    })
};

