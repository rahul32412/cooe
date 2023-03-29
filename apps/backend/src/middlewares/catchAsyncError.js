export const catchAsyncError=(passedFunction) => (req, res, next) => {

    Promise.resolve(passedFunction(req, res, next)).catch((error)=>{next(error)})
}