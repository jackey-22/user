// function asyncRouteHandler(handler) {
// 	return async (req, res, next) => {
// 		try {
// 			setSweetalert(req, res);
// 			await handler(req, res, next);
// 		} catch (error) {
// 			next(error);
// 		} finally {
// 			console.log(`ROUTE "${req.originalUrl}" EXECUTED IN ${Date.now() - res.locals.startTime}ms`);
// 		}
// 	};
// }

// function setSweetalert(req, res) {
// 	res.locals.sweetalert = req.session.sweetalert ?? null;
// 	req.session.sweetalert = null;
// }

// function errorHandler(err, req, res, next) {
// 	console.log(err);
// 	res.status(400).send(err.message);
// }

// function badRequest(message) {
// 	throw new Error(message ?? 'Bad Request!!');
// }

// module.exports = { asyncRouteHandler, errorHandler, badRequest };
