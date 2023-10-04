import { Jwt } from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    console.log(req.cookies.token);

    if (!token) {
        return res.status(401).json({
            message: "No estás autorizado."
        });
    }

    jwt.verify(token, "xyz123", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "No estás autorizado"
            });
        }
        req.userId = decoded.id;
        next();
    });
};