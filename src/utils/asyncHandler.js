const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}






// explaination of the below line -> const asyncHandler = (fn) => async (req, res, next) => {}
// const asyncHandler = () => {}
// const asyncHandler = (function) => () => {}
// const asyncHandler = (function) => async() => {}





// Another method
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)  
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }