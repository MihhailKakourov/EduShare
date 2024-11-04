const { Category, Comment, Material, Rating, Type, User } = require('../models');

// Category CRUD
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.update(req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Comment CRUD
exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.update(req.body);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Material CRUD
exports.createMaterial = async (req, res) => {
    try {
        const material = await Material.create(req.body);
        res.status(201).json(material);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMaterials = async (req, res) => {
    try {
        const materials = await Material.findAll();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMaterialById = async (req, res) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMaterial = async (req, res) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        await material.update(req.body);
        res.status(200).json(material);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findByPk(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        await material.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Rating CRUD
exports.createRating = async (req, res) => {
    try {
        const rating = await Rating.create(req.body);
        res.status(201).json(rating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getRatings = async (req, res) => {
    try {
        const ratings = await Rating.findAll();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRatingById = async (req, res) => {
    try {
        const rating = await Rating.findByPk(req.params.id);
        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRating = async (req, res) => {
    try {
        const rating = await Rating.findByPk(req.params.id);
        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        await rating.update(req.body);
        res.status(200).json(rating);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRating = async (req, res) => {
    try {
        const rating = await Rating.findByPk(req.params.id);
        if (!rating) {
            return res.status(404).json({ message: 'Rating not found' });
        }
        await rating.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Type CRUD
exports.createType = async (req, res) => {
    try {
        const type = await Type.create(req.body);
        res.status(201).json(type);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTypes = async (req, res) => {
    try {
        const types = await Type.findAll();
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTypeById = async (req, res) => {
    try {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateType = async (req, res) => {
    try {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        await type.update(req.body);
        res.status(200).json(type);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteType = async (req, res) => {
    try {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        await type.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// User CRUD
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
