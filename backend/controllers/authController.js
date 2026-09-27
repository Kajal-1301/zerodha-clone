const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
    try {

        //  console.log("SIGNUP REQUEST:", req.body);

        let { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Send all details"
            })
        }

        email = email.toLowerCase().trim();

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Account created successfully"
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        console.error("Signup error:", error);

        res.status(500).json({
            message: "Something went wrong, please try again"
        });
    }
}

// login controller ------------------

module.exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Send all details"
            });
        }

        email = email.toLowerCase().trim();

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            message: "Logged in successfully"
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "Something went wrong, please try again"
        });
    }
}

// logout controller -------------------

module.exports.logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        res.status(200).json({
            message: "Logged out successfully"
        });

    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({
            message: "Something went wrong, please try again"
        });
    }
}