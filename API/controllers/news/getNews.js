const selectNewsQuery = require("../../db/queries/news/selectNewsQuery")


const getNews = async (req, res , next) => {
    try {
        const allNews = await selectNewsQuery()

        res.send({
            status: "ok",
            data:{
                allNews
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = getNews;