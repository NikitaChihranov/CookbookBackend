let express = require('express');
let router = express.Router();
let RecipeController = require('../controllers/recipeController')

router.get('/', RecipeController.findAll);
router.get('/:name', RecipeController.findByName);
router.post('/', RecipeController.create);
router.post('/uploadPhoto/:id', RecipeController.uploadPhoto);
router.put('/:name', RecipeController.update);
router.put('/updatePhoto/:id', RecipeController.updatePhoto);
router.delete('/:name', RecipeController.delete);
router.delete('/deleteAll', RecipeController.deleteAll);
module.exports = router;