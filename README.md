# Recipesme App     

## Build log:       

02/05/23:       

Basic setup on backend: local copy reverted to original, cloned version. Dependencies installed, `.env` file checked, test route checked ok, terminal reading ok.     

Frontend directory set up, `create-react-app` run, unneccessary default files/code deleted. **MaterialUI** installed and basic Header, Body and Footer components templated out. `body` margin set to `0px` in `index.css` to remove white border around app.       

Footer icons and positioning updated. Header updated and stripped back.     

**React Router** installed and implemented. Components added for Home, Index and Add. Navigation user footer tabs added: n.b. - if user manually navigates to a route, the tabs do not update accordingly at present.      

DB seeded with dummy data in prep for implementing index and detail components and functionality. Axios installed. First GET `/recipes` request working in FE - again I have had issues with the image url append functionality within the BE `recipeController.js`.      

Footer now fixed position: added vh-linked padding to bottom of `Body.js` to ensure data is not obscured by nav footer.     

Updated Recipe Index / Overview components: now displaying in flex-box with hidden div to ensure bottom row remains left-aligned.       

03/05/23:       

Now working on providing recipe detail. After some thinking (and advice getting) I have used a combination of `useNavigate()` and `useParams()` to pass recipe object id into an Axios request via the URL params.      

`RecipeDetail.js` component now successfuly recieving Axios requests. Next step is formatting details component(s).     

`RecipeIngredients.js` component added - props being passed from parent (RecipeDetail) by mapping over `res.data.ingredients` and storing this in a state to be passed as a prop. Similar approach used for `RecipeSteps.js`.

I found that props were often initially being passed as undefined, and when a `.map()` was called in these two child components I was predictably getting an error. I understand that an alternative approach might be to check if props are or are not undefined and then either render a loading spinner or map out elements from the prop. I am not at this stage sure which is the better approach, although I like how using multiple states in the parent groups similar actions together and makes the child components less cluttered.      

## To add / to-do:      
- MUI theming: need to look at the documentation in more detail and/or find a decent tutorial for this.     
- Footer nav icons do not update correctly if user manually navigates to a path.        