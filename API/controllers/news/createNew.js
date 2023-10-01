const insertNewQuery = require("../../db/queries/news/insertNewQuery")

const createNew = async (req, res, next) => {

    try {
        const { userId, title, introduction, text } = req.body

        await insertNewQuery(userId, title, introduction, text)


        res.send({
            status: "ok",
            data: {
                title,
                introduction,
                text
            }
        })
    } catch (error) {
        next(error)
    }

}

module.exports = createNew