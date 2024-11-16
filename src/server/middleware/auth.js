import jwt from 'jsonwebtoken'; // Use import instead of require

// Export the middleware function as a named export
export const auth = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.split(' ')[1];

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Add user from payload
        next(); // Continue to the protected route
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};